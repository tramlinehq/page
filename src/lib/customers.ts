import fs from "fs";
import path from "path";
import matter from "gray-matter";

const CUSTOMERS_DIR = path.join(process.cwd(), "src/content/customers");

const CUSTOMER_ORDER = ["speak", "twine", "metacast"];

export type CustomerMeta = {
  slug: string;
  name: string;
  location: string;
  teamSize: string;
  headline: string;
  description: string;
  platforms: string;
  industry: string;
  integrations: string;
  heroImage: string;
  logo: string;
};

export type CustomerPost = CustomerMeta & {
  content: string;
};

export function getAllCustomers(): CustomerMeta[] {
  if (!fs.existsSync(CUSTOMERS_DIR)) return [];

  const files = fs
    .readdirSync(CUSTOMERS_DIR)
    .filter((f) => f.endsWith(".mdx") || f.endsWith(".md"));

  const sorted = files.sort((a, b) => {
    const slugA = a.replace(/\.(mdx|md)$/, "");
    const slugB = b.replace(/\.(mdx|md)$/, "");
    const idxA = CUSTOMER_ORDER.indexOf(slugA);
    const idxB = CUSTOMER_ORDER.indexOf(slugB);
    return (idxA === -1 ? Infinity : idxA) - (idxB === -1 ? Infinity : idxB);
  });

  return sorted.map((filename) => {
    const slug = filename.replace(/\.(mdx|md)$/, "");
    const filePath = path.join(CUSTOMERS_DIR, filename);
    const fileContents = fs.readFileSync(filePath, "utf8");
    const { data } = matter(fileContents);

    return {
      slug,
      name: data.name || slug,
      location: data.location || "",
      teamSize: data.teamSize || "",
      headline: data.headline || "",
      description: data.description || "",
      platforms: data.platforms || "",
      industry: data.industry || "",
      integrations: data.integrations || "",
      heroImage: data.heroImage || "",
      logo: data.logo || "",
    };
  });
}

export function getCustomerBySlug(slug: string): CustomerPost | null {
  const mdxPath = path.join(CUSTOMERS_DIR, `${slug}.mdx`);
  const mdPath = path.join(CUSTOMERS_DIR, `${slug}.md`);

  const filePath = fs.existsSync(mdxPath)
    ? mdxPath
    : fs.existsSync(mdPath)
      ? mdPath
      : null;

  if (!filePath) return null;

  const fileContents = fs.readFileSync(filePath, "utf8");
  const { data, content } = matter(fileContents);

  return {
    slug,
    name: data.name || slug,
    location: data.location || "",
    teamSize: data.teamSize || "",
    headline: data.headline || "",
    description: data.description || "",
    platforms: data.platforms || "",
    industry: data.industry || "",
    integrations: data.integrations || "",
    heroImage: data.heroImage || "",
    logo: data.logo || "",
    content,
  };
}
