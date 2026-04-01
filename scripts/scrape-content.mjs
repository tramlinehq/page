#!/usr/bin/env node

/**
 * Scrape blog posts and customer stories from the live tramline.app site.
 *
 * Usage:
 *   node scripts/scrape-content.mjs              # scrape everything
 *   node scripts/scrape-content.mjs --blog       # blog posts only
 *   node scripts/scrape-content.mjs --customers  # customer stories only
 *   node scripts/scrape-content.mjs --dry-run    # print without writing files
 */

import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import * as cheerio from "cheerio";
import TurndownService from "turndown";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, "..");
const BLOG_DIR = path.join(ROOT, "src/content/blog");
const CUSTOMERS_DIR = path.join(ROOT, "src/content/customers");

const BASE = "https://tramline.app";

const turndown = new TurndownService({
  headingStyle: "atx",
  codeBlockStyle: "fenced",
  bulletListMarker: "-",
});

// Preserve images with full URLs
turndown.addRule("images", {
  filter: "img",
  replacement(_content, node) {
    const src = node.getAttribute("src") || "";
    const alt = node.getAttribute("alt") || "";
    return `![${alt}](${src})`;
  },
});

// ─── Helpers ───────────────────────────────────────────────

async function fetchHtml(url) {
  console.log(`  Fetching ${url} ...`);
  const res = await fetch(url, {
    headers: {
      "User-Agent":
        "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36",
    },
  });
  if (!res.ok) throw new Error(`HTTP ${res.status} for ${url}`);
  return res.text();
}

function slugFromUrl(url) {
  return url.split("/").filter(Boolean).pop();
}

function formatDate(dateStr) {
  // Parse various date formats from the site
  const d = new Date(dateStr);
  if (isNaN(d.getTime())) return dateStr;
  const yyyy = d.getFullYear();
  const mm = String(d.getMonth() + 1).padStart(2, "0");
  const dd = String(d.getDate()).padStart(2, "0");
  return `${yyyy}-${mm}-${dd}`;
}

function writeMdx(dir, filename, frontmatter, body) {
  const fm = Object.entries(frontmatter)
    .filter(([, v]) => v !== undefined && v !== "")
    .map(([k, v]) => `${k}: "${v.replace(/"/g, '\\"')}"`)
    .join("\n");
  const content = `---\n${fm}\n---\n\n${body.trim()}\n`;
  const dest = path.join(dir, filename);
  fs.writeFileSync(dest, content, "utf-8");
  console.log(`  ✓ Wrote ${dest} (${content.length} bytes)`);
}

// ─── Blog scraping ─────────────────────────────────────────

async function scrapeBlogIndex() {
  const html = await fetchHtml(`${BASE}/blog`);
  const $ = cheerio.load(html);
  const urls = [];

  // Find all blog post links
  $('a[href^="/blog/"]').each((_i, el) => {
    const href = $(el).attr("href");
    if (href && href !== "/blog" && href !== "/blog/") {
      const full = href.startsWith("http") ? href : `${BASE}${href}`;
      if (!urls.includes(full)) urls.push(full);
    }
  });

  console.log(`Found ${urls.length} blog posts`);
  return urls;
}

async function scrapeBlogPost(url) {
  const html = await fetchHtml(url);
  const $ = cheerio.load(html);
  const slug = slugFromUrl(url);

  // --- Metadata ---
  // Title: try og:title, then h1
  let title =
    $('meta[property="og:title"]').attr("content") ||
    $("h1").first().text().trim();
  // Clean "| Tramline" or "- Blog - Tramline" suffix
  title = title
    .replace(/\s*[-|]\s*Blog\s*[-|]\s*Tramline.*$/i, "")
    .replace(/\s*[-|]\s*Tramline.*$/i, "")
    .trim();

  // Description
  const description =
    $('meta[property="og:description"]').attr("content") ||
    $('meta[name="description"]').attr("content") ||
    "";

  // Hero image: og:image or the first large image in the article
  let heroImage =
    $('meta[property="og:image"]').attr("content") || "";

  // Date: look for time element or common date patterns
  let date = "";
  $("time").each((_i, el) => {
    const dt = $(el).attr("datetime") || $(el).text().trim();
    if (dt && !date) date = dt;
  });
  // Fallback: search for date-like text in the page
  if (!date) {
    const datePattern =
      /(?:January|February|March|April|May|June|July|August|September|October|November|December)\s+\d{1,2},?\s+\d{4}/;
    const bodyText = $("body").text();
    const match = bodyText.match(datePattern);
    if (match) date = match[0];
  }
  date = formatDate(date);

  // Author — Webflow uses .blog-post-author-name links
  let author = "";
  const authorNames = [];
  $(".blog-post-author-name").each((_i, el) => {
    const text = $(el).text().trim();
    if (text) authorNames.push(text);
  });
  author = authorNames.join(", ");

  // Date — Webflow uses .blog-post-date
  if (!date) {
    const dateEl = $(".blog-post-date").first().text().trim();
    if (dateEl) date = dateEl;
  }
  date = formatDate(date);

  // Category — Webflow uses .badge .small-text inside .article-title
  let category = "";
  $(".article-title .badge .small-text").each((_i, el) => {
    const text = $(el).text().trim();
    if (text && !category) category = text;
  });
  // Fallback: any .badge before the title
  if (!category) {
    $(".badge .small-text").first().each((_i, el) => {
      const text = $(el).text().trim();
      if (text) category = text;
    });
  }

  // --- Body content ---
  // Webflow blog posts use .article .w-richtext
  let $body = $(".article.w-richtext").first();
  if (!$body.length) {
    $body = $(".article-wrapper .w-richtext").first();
  }
  if (!$body.length) {
    $body = $(".w-richtext").first();
  }
  if (!$body.length) {
    // Last resort: find the largest rich text block
    let maxLen = 0;
    $(".w-richtext, [class*='rich-text']").each((_i, el) => {
      const len = $(el).text().length;
      if (len > maxLen) {
        maxLen = len;
        $body = $(el);
      }
    });
  }

  // Convert body HTML to markdown
  let bodyMd = "";
  if ($body.length) {
    // Remove any scripts, styles, nav elements from body
    $body.find("script, style, nav, footer").remove();
    bodyMd = turndown.turndown($body.html() || "");
  }

  // Clean up markdown
  bodyMd = bodyMd
    .replace(/\n{3,}/g, "\n\n") // collapse multiple blank lines
    .replace(/\[([^\]]*)\]\(\/(?!\/)/g, `[$1](${BASE}/`) // make relative URLs absolute
    .trim();

  return {
    slug,
    frontmatter: {
      title,
      date,
      description: description.trim(),
      heroImage,
      author,
      category,
    },
    body: bodyMd,
  };
}

// ─── Customer scraping ─────────────────────────────────────

async function scrapeCustomerIndex() {
  const html = await fetchHtml(`${BASE}/customers`);
  const $ = cheerio.load(html);
  const urls = [];

  $('a[href^="/customers/"]').each((_i, el) => {
    const href = $(el).attr("href");
    if (href && href !== "/customers" && href !== "/customers/") {
      const full = href.startsWith("http") ? href : `${BASE}${href}`;
      if (!urls.includes(full)) urls.push(full);
    }
  });

  console.log(`Found ${urls.length} customer stories`);
  return urls;
}

async function scrapeCustomerPage(url) {
  const html = await fetchHtml(url);
  const $ = cheerio.load(html);
  const slug = slugFromUrl(url);

  // --- Metadata ---
  let name = "";
  let headline = "";
  let description = "";
  let heroImage = "";
  let logo = "";
  let teamSize = "";
  let location = "";
  let platforms = "";
  let industry = "";
  let integrations = "";

  // Title / headline
  headline =
    $("h1").first().text().trim() ||
    $('meta[property="og:title"]').attr("content") || "";
  headline = headline.replace(/\s*\|\s*Tramline.*$/, "").trim();

  description =
    $('meta[property="og:description"]').attr("content") ||
    $('meta[name="description"]').attr("content") ||
    "";

  heroImage = $('meta[property="og:image"]').attr("content") || "";

  // Look for metadata fields (common patterns in Webflow customer pages)
  $("div, p, span").each((_i, el) => {
    const text = $(el).text().trim();
    const $el = $(el);

    // Check labels
    if (text === "Name" || text === "Company") {
      const val = $el.next().text().trim() || $el.parent().next().text().trim();
      if (val && !name) name = val;
    }
    if (text === "App Team" || text === "Team Size" || text === "Team") {
      const val = $el.next().text().trim() || $el.parent().next().text().trim();
      if (val && !teamSize) teamSize = val;
    }
    if (text === "Location" || text === "HQ") {
      const val = $el.next().text().trim() || $el.parent().next().text().trim();
      if (val && !location) location = val;
    }
    if (text === "Platforms" || text === "Platform") {
      const val = $el.next().text().trim() || $el.parent().next().text().trim();
      if (val && !platforms) platforms = val;
    }
    if (text === "Industry") {
      const val = $el.next().text().trim() || $el.parent().next().text().trim();
      if (val && !industry) industry = val;
    }
    if (text === "Integrations" || text === "Stack") {
      const val = $el.next().text().trim() || $el.parent().next().text().trim();
      if (val && !integrations) integrations = val;
    }
  });

  // Logo: look for small image near the company name
  $("img").each((_i, el) => {
    const src = $(el).attr("src") || "";
    const cls = $(el).attr("class") || "";
    const alt = ($(el).attr("alt") || "").toLowerCase();
    if (
      (alt.includes("logo") || cls.includes("logo")) &&
      src &&
      !logo
    ) {
      logo = src;
    }
  });

  // Hero image: first large image if not found via og:image
  if (!heroImage) {
    $("img").each((_i, el) => {
      const src = $(el).attr("src") || "";
      if (src && !src.includes("logo") && !heroImage) {
        heroImage = src;
      }
    });
  }

  if (!name) name = slug.charAt(0).toUpperCase() + slug.slice(1);

  // --- Body content ---
  let $body = $(".w-richtext").first();
  if (!$body.length) {
    $body = $(".customer-content, .case-study-content, article").first();
  }
  if (!$body.length) {
    let maxLen = 0;
    $(".w-richtext, [class*='rich-text']").each((_i, el) => {
      const len = $(el).text().length;
      if (len > maxLen) {
        maxLen = len;
        $body = $(el);
      }
    });
  }

  let bodyMd = "";
  if ($body.length) {
    $body.find("script, style, nav, footer").remove();
    bodyMd = turndown.turndown($body.html() || "");
  }

  bodyMd = bodyMd
    .replace(/\n{3,}/g, "\n\n")
    .replace(/\[([^\]]*)\]\(\/(?!\/)/g, `[$1](${BASE}/`)
    .trim();

  return {
    slug,
    frontmatter: {
      name,
      headline,
      description: description.trim(),
      heroImage,
      logo,
      teamSize,
      location,
      platforms,
      industry,
      integrations,
    },
    body: bodyMd,
  };
}

// ─── Main ──────────────────────────────────────────────────

async function main() {
  const args = process.argv.slice(2);
  const dryRun = args.includes("--dry-run");
  const blogOnly = args.includes("--blog");
  const customersOnly = args.includes("--customers");
  const doAll = !blogOnly && !customersOnly;

  // Ensure output dirs exist
  fs.mkdirSync(BLOG_DIR, { recursive: true });
  fs.mkdirSync(CUSTOMERS_DIR, { recursive: true });

  // --- Blog ---
  if (doAll || blogOnly) {
    console.log("\n═══ Scraping Blog Posts ═══\n");
    const blogUrls = await scrapeBlogIndex();

    for (const url of blogUrls) {
      try {
        const post = await scrapeBlogPost(url);
        const filename = `${post.slug}.mdx`;

        if (dryRun) {
          console.log(`\n--- ${post.slug} ---`);
          console.log(`Title: ${post.frontmatter.title}`);
          console.log(`Date: ${post.frontmatter.date}`);
          console.log(`Author: ${post.frontmatter.author}`);
          console.log(`Category: ${post.frontmatter.category}`);
          console.log(`Hero: ${post.frontmatter.heroImage}`);
          console.log(`Body length: ${post.body.length} chars`);
          console.log(`First 200 chars: ${post.body.slice(0, 200)}...`);
        } else {
          writeMdx(BLOG_DIR, filename, post.frontmatter, post.body);
        }
      } catch (err) {
        console.error(`  ✗ Failed to scrape ${url}: ${err.message}`);
      }
    }
  }

  // --- Customers ---
  if (doAll || customersOnly) {
    console.log("\n═══ Scraping Customer Stories ═══\n");
    const customerUrls = await scrapeCustomerIndex();

    for (const url of customerUrls) {
      try {
        const customer = await scrapeCustomerPage(url);
        const filename = `${customer.slug}.mdx`;

        if (dryRun) {
          console.log(`\n--- ${customer.slug} ---`);
          console.log(`Name: ${customer.frontmatter.title}`);
          console.log(`Headline: ${customer.frontmatter.headline}`);
          console.log(`Team: ${customer.frontmatter.teamSize}`);
          console.log(`Location: ${customer.frontmatter.location}`);
          console.log(`Body length: ${customer.body.length} chars`);
          console.log(`First 200 chars: ${customer.body.slice(0, 200)}...`);
        } else {
          writeMdx(CUSTOMERS_DIR, filename, customer.frontmatter, customer.body);
        }
      } catch (err) {
        console.error(`  ✗ Failed to scrape ${url}: ${err.message}`);
      }
    }
  }

  console.log("\n✅ Done!\n");
}

main().catch((err) => {
  console.error("Fatal error:", err);
  process.exit(1);
});
