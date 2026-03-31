import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getAllPosts, getPostBySlug, formatDate } from "@/lib/blog";
import { markdownToHtml } from "@/lib/mdx";

type Props = {
  params: Promise<{ slug: string }>;
};

export const dynamicParams = false;

export async function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return {};
  return {
    title: `${post.title} - Tramline Blog`,
    description: post.description,
  };
}

export default async function BlogPost({ params }: Props) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  const contentHtml = await markdownToHtml(post.content);

  return (
    <>
      {/* Splash image — wider than content */}
      {post.heroImage && (
        <section className="pt-16">
          <div className="max-w-[1400px] mx-auto px-6">
            <img
              src={post.heroImage}
              alt={post.title}
              className="w-full max-h-[500px] object-cover rounded-lg"
            />
          </div>
        </section>
      )}

      {/* Article content — narrower */}
      <section className={`${post.heroImage ? "pt-10" : "pt-16"} pb-20`}>
        <div className="max-w-[780px] mx-auto px-6">
          <div className="flex items-center gap-3 mb-4">
            {post.category && (
              <span className="text-xs text-muted-foreground border rounded-full px-3 py-1">
                {post.category}
              </span>
            )}
            <span className="text-sm text-muted-foreground">{formatDate(post.date)}</span>
            {post.author && (
              <span className="text-sm text-muted-foreground">
                · {post.author}
              </span>
            )}
          </div>
          <h1 className="mb-8">{post.title}</h1>
          <div
            className="prose prose-lg max-w-none text-justify"
            dangerouslySetInnerHTML={{ __html: contentHtml }}
          />
        </div>
      </section>
    </>
  );
}
