import type { Metadata } from "next";
import Link from "next/link";
import { Card } from "@/components/ui/card";
import { getAllCustomers } from "@/lib/customers";

export const metadata: Metadata = {
  title: "Customers - Tramline",
  description: "See how teams use Tramline to streamline their app releases.",
};

export default function CustomersPage() {
  const customers = getAllCustomers();

  return (
    <>
      {/* Hero */}
      <section className="pt-16 pb-12 text-center">
        <div className="max-w-[900px] mx-auto px-6">
          <h1 className="mb-4">Customers</h1>
          <p className="text-muted-foreground">
            See how teams use Tramline to streamline their app releases
          </p>
        </div>
      </section>

      {/* Customer cards */}
      <section className="pb-20">
        <div className="max-w-[900px] mx-auto px-6">
          <div className="grid grid-cols-1 gap-8">
            {customers.map((customer) => (
              <Card
                key={customer.slug}
                className="hover:border-foreground/20 hover:shadow-sm transition-all group"
              >
                <Link href={`/customers/${customer.slug}`} className="flex flex-col md:flex-row p-4">
                  {customer.heroImage && (
                    <div className="md:w-[280px] shrink-0">
                      <img
                        src={customer.heroImage}
                        alt={customer.name}
                        className="w-full h-full object-cover rounded-lg"
                      />
                    </div>
                  )}
                  <div className="p-6 flex flex-col justify-center">
                    <h3 className="text-xl mb-3 group-hover:text-primary transition-colors">
                      {customer.headline}
                    </h3>
                    <div className="flex items-center gap-3 mb-3">
                      {customer.logo && (
                        <img
                          src={customer.logo}
                          alt={`${customer.name} logo`}
                          className="h-6 w-6 rounded"
                        />
                      )}
                      <span className="text-xs text-muted-foreground border rounded-full px-3 py-1">
                        {customer.teamSize}
                      </span>
                      <span className="text-xs text-muted-foreground border rounded-full px-3 py-1">
                        {customer.location}
                      </span>
                    </div>
                    <span className="text-sm text-muted-foreground group-hover:text-primary transition-colors">
                      Read case study →
                    </span>
                  </div>
                </Link>
              </Card>
            ))}
          </div>
        </div>
      </section>

    </>
  );
}
