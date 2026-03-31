import type { Metadata } from "next";
import Link from "next/link";
import { getAllPosts } from "@/lib/blog";

export const metadata: Metadata = {
  title: "Blog - Tramline",
  description:
    "Articles about mobile DevOps, release engineering, and app development.",
};

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <>
      {/* Hero */}
      <section className="pt-16 pb-12 text-center">
        <div className="max-w-[900px] mx-auto px-6">
          <h1 className="mb-4">Blog</h1>
          <p className="text-muted-foreground">
            Communiqué from the team
          </p>
        </div>
      </section>

      <section className="pb-20">
        <div className="max-w-[900px] mx-auto px-6">
          {posts.length === 0 ? (
            <div className="text-center py-20">
              <p className="text-muted-foreground mb-4">
                No posts yet. Check back soon!
              </p>
            </div>
          ) : (
            <div className="space-y-24">
              {posts.map((post) => (
                <Link
                  key={post.slug}
                  href={`/blog/${post.slug}`}
                  className="group block"
                >
                  {post.heroImage && (
                    <img
                      src={post.heroImage}
                      alt={post.title}
                      className="w-full h-[280px] object-cover rounded-lg mb-4"
                    />
                  )}
                  <div className="flex items-center gap-3 mb-2">
                    {post.category && (
                      <span className="text-xs text-muted-foreground border rounded-full px-3 py-1">
                        {post.category}
                      </span>
                    )}
                    <span className="text-xs text-muted-foreground">
                      {post.date}
                    </span>
                    {post.author && (
                      <span className="text-xs text-muted-foreground">
                        {post.author}
                      </span>
                    )}
                  </div>
                  <h3 className="mb-2 group-hover:text-primary transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {post.description}
                  </p>
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  );
}
