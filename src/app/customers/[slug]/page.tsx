import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Card, CardContent } from "@/components/ui/card";
import { getAllCustomers, getCustomerBySlug } from "@/lib/customers";
import { markdownToHtml } from "@/lib/mdx";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  const customers = getAllCustomers();
  return customers.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const customer = getCustomerBySlug(slug);
  if (!customer) return {};
  return {
    title: `${customer.name} - Customer - Tramline`,
    description: customer.description,
  };
}

export default async function CustomerCaseStudy({ params }: Props) {
  const { slug } = await params;
  const customer = getCustomerBySlug(slug);
  if (!customer) notFound();

  const contentHtml = await markdownToHtml(customer.content);

  return (
    <section className="pt-16 pb-20">
      <div className="max-w-[1400px] mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-x-44 gap-y-8">
          {/* Left column: image + metadata */}
          <div>
            {customer.heroImage && (
              <img
                src={customer.heroImage}
                alt={customer.name}
                className="w-full rounded-lg mb-8"
              />
            )}

            <div className="flex items-center gap-3 mb-6">
              {customer.logo && (
                <img
                  src={customer.logo}
                  alt={`${customer.name} logo`}
                  className="h-8 w-8 rounded"
                />
              )}
              <div>
                <p className="text-xs uppercase tracking-wider text-muted-foreground">Name</p>
                <p className="font-medium text-primary">{customer.name}</p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-x-6 gap-y-4 text-sm">
              <div>
                <p className="text-xs uppercase tracking-wider text-muted-foreground mb-1">
                  App Team
                </p>
                <p className="font-medium text-primary">{customer.teamSize}</p>
              </div>
              <div>
                <p className="text-xs uppercase tracking-wider text-muted-foreground mb-1">
                  Location
                </p>
                <p className="font-medium text-primary">{customer.location}</p>
              </div>
              <div>
                <p className="text-xs uppercase tracking-wider text-muted-foreground mb-1">
                  Platforms
                </p>
                <p className="font-medium text-primary">{customer.platforms}</p>
              </div>
              <div>
                <p className="text-xs uppercase tracking-wider text-muted-foreground mb-1">
                  Industry
                </p>
                <p className="font-medium text-primary">{customer.industry}</p>
              </div>
              <div className="col-span-2">
                <p className="text-xs uppercase tracking-wider text-muted-foreground mb-1">
                  Integrations
                </p>
                <p className="font-medium text-primary">
                  {customer.integrations}
                </p>
              </div>
            </div>
          </div>

          {/* Right column: title + description + separator + article */}
          <div>
            <h1 className="mb-4">{customer.headline}</h1>
            <p className="text-muted-foreground mb-8">
              {customer.description}
            </p>

            <hr className="border-border mb-8" />

            <div
              className="prose prose-lg max-w-none text-justify"
              dangerouslySetInnerHTML={{ __html: contentHtml }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
