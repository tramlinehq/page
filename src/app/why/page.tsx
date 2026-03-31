import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Why Tramline? - Tramline",
  description:
    "Why are you still handholding your app releases? The broader context for why we're building Tramline.",
};

export default function WhyPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-16 pb-12 text-center">
        <div className="max-w-[900px] mx-auto px-6">
          <h1>Why are you still handholding your app releases?</h1>
        </div>
      </section>

      {/* Broader context */}
      <section className="pb-16">
        <div className="max-w-[900px] mx-auto px-6">
          <h3 className="mb-6 text-center">
            The broader context for why we&apos;re building Tramline
          </h3>

          <div className="space-y-6 text-muted-foreground">
            <p>
              After the iPhone launched in 2007 and Android followed in 2008,
              mobile app development exploded. By the early 2010s, companies
              like Uber, Instagram, Snapchat, and WhatsApp had proven that
              mobile-first could be a dominant strategy.
            </p>
            <p>
              Today, the mobile app ecosystem is massive. There are millions of
              apps serving billions of users. Companies of all sizes — from
              startups to enterprises — depend on their mobile apps to drive
              revenue, engage users, and differentiate from competitors.
            </p>
            <p>
              But the developer tooling for mobile teams hasn&apos;t kept pace.
              Web development has CI/CD pipelines, deployment platforms, feature
              flags, and sophisticated observability. Mobile teams are still
              cobbling together scripts, spreadsheets, and manual processes to
              ship their apps.
            </p>
            <p>
              The business impact of app releases is enormous. A bad release can
              tank ratings, drive user churn, and damage brand trust. Unlike web
              apps, you can&apos;t just roll back a bad deployment — once a
              build is on a user&apos;s device, it stays there until they update.
            </p>
          </div>
        </div>
      </section>

      {/* Release Challenges */}
      <section className="py-16 bg-muted">
        <div className="max-w-[900px] mx-auto px-6">
          <h2 className="mb-8 text-center">
            App stores change everything
          </h2>

          <div className="space-y-6 text-muted-foreground">
            <p>
              The App Store and Play Store impose constraints that make mobile
              releases fundamentally different from web deployments. There&apos;s
              no continuous delivery — you submit a build and wait for review.
              There&apos;s no instant rollback — once a build is approved and
              distributed, it&apos;s out there.
            </p>
            <p>
              This is closer to the old world of on-premise software than the
              modern web. And as teams grow, the complexity compounds.
            </p>

            <blockquote className="border-l-4 border-primary pl-6 py-2 my-8 italic text-primary">
              &ldquo;It was the most terrifying thing to take 10,000 diffs,
              package it…once it leaves the barrel, it&apos;s gone.&rdquo;
              <footer className="mt-2 text-sm not-italic text-muted-foreground">
                — Chuck Rossi, Facebook Mobile Release Engineering
              </footer>
            </blockquote>
          </div>
        </div>
      </section>

      {/* Release cycle complexity */}
      <section className="py-16">
        <div className="max-w-[900px] mx-auto px-6">
          <h2 className="mb-8 text-center">What a release cycle looks like</h2>

          <ol className="space-y-4 text-muted-foreground list-decimal list-inside">
            <li>Decide which features and fixes go into the release</li>
            <li>
              Create a release branch and bump the version number
            </li>
            <li>
              Kick off staging/RC builds for internal testing
            </li>
            <li>
              Distribute builds to QA and stakeholders via TestFlight, Firebase,
              or other tools
            </li>
            <li>
              Collect approvals from QA, product, and other stakeholders
            </li>
            <li>Submit the final build to the App Store and Play Store</li>
            <li>
              Monitor the phased rollout, watching crash rates and user feedback
            </li>
            <li>
              Handle hotfixes if something goes wrong mid-rollout
            </li>
            <li>
              Backmerge release fixes to the main branch so nothing is lost
            </li>
          </ol>

          <div className="mt-8 space-y-6 text-muted-foreground">
            <p>
              Each step involves different tools, different people, and different
              sources of truth. The &ldquo;Release Pilot&rdquo; — the engineer
              responsible for the release that week — has to juggle all of this,
              often while also writing code.
            </p>
            <p>
              When that person goes on vacation or leaves the team, the
              institutional knowledge goes with them. New team members face a
              steep learning curve.
            </p>
          </div>
        </div>
      </section>

      {/* Solution */}
      <section className="py-16 bg-muted">
        <div className="max-w-[900px] mx-auto px-6 text-center">
          <h2 className="mb-6">The Mobile DevOps Platform</h2>
          <p className="text-muted-foreground">
            Tramline exists so your team can focus on building great products
            instead of managing the mechanics of getting those products to
            users. We automate the entire release cycle — from branch creation
            to store submission to phased rollout — so releases are predictable,
            transparent, and stress-free.
          </p>
        </div>
      </section>
    </>
  );
}
