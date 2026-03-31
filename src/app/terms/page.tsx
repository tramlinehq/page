import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms & Conditions - Tramline",
  description: "Tramline Inc. terms and conditions of service.",
};

export default function TermsPage() {
  return (
    <section className="pt-16 pb-20">
      <div className="max-w-[700px] mx-auto px-6">
        <h1 className="mb-12">Terms &amp; Conditions</h1>

        <div className="space-y-8 text-muted-foreground">
          <div>
            <h3 className="text-xl font-medium mb-3">Acknowledgment</h3>
            <p>
              These Terms and Conditions govern the use of the Service provided
              by Tramline Inc., a company incorporated in Delaware. By accessing
              or using the Service, you agree to be bound by these Terms. You
              must be at least 18 years old to use the Service.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-medium mb-3">Subscriptions</h3>
            <p className="mb-3">
              The Service offers Subscription plans billed on a recurring basis
              (daily, weekly, monthly, or annual). Subscriptions automatically
              renew unless cancelled before the end of the current period.
            </p>
            <p className="mb-3">
              Paid Subscription fees are non-refundable, except at the
              Company&apos;s sole discretion on a case-by-case basis.
            </p>
            <p>
              Free Trial terms automatically convert to a paid Subscription
              unless cancelled. The Company reserves the right to modify fees
              with 30 days&apos; notice.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-medium mb-3">User Accounts</h3>
            <p>
              You are responsible for maintaining the accuracy of your account
              information and the security of your password. Usernames must not
              impersonate others or contain offensive content.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-medium mb-3">Feedback</h3>
            <p>
              By providing feedback to the Company, you grant the Company all
              rights to use that feedback without restriction.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-medium mb-3">Third-Party Links</h3>
            <p>
              The Service may contain links to third-party websites or services.
              The Company disclaims responsibility for the content, privacy
              policies, or practices of any third-party sites.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-medium mb-3">Termination</h3>
            <p>
              The Company may terminate or suspend your account immediately,
              without prior notice, for any reason, including breach of these
              Terms.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-medium mb-3">
              Limitation of Liability
            </h3>
            <p>
              The Company&apos;s maximum liability is capped at the amount you
              have paid, or $100 USD, whichever is greater. The Company excludes
              consequential and indirect damages to the fullest extent permitted
              by law.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-medium mb-3">
              &ldquo;AS IS&rdquo; Disclaimer
            </h3>
            <p>
              The Service is provided &ldquo;as is&rdquo; and &ldquo;as
              available&rdquo; without warranties of any kind, either express or
              implied.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-medium mb-3">Governing Law</h3>
            <p>
              These Terms shall be governed by and construed in accordance with
              the laws of the State of Delaware, United States. Informal dispute
              resolution is encouraged before formal proceedings.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-medium mb-3">Contact Us</h3>
            <p>
              If you have any questions about these Terms, you can contact us at{" "}
              <a
                href="mailto:support@tramline.app"
                className="underline hover:text-primary"
              >
                support@tramline.app
              </a>
              .
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
