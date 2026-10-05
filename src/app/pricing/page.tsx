import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tramline",
  alternates: { canonical: "/" },
  robots: { index: false },
};

export default function PricingRedirect() {
  return (
    <>
      <meta httpEquiv="refresh" content="0; url=/" />
      <p className="mx-auto max-w-xl px-6 py-24 text-center text-muted-foreground">
        Pricing is no longer available. <a href="/" className="underline">Go to the home page</a>.
      </p>
    </>
  );
}
