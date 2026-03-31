import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy - Tramline",
  description: "Tramline Inc. privacy policy.",
};

export default function PrivacyPage() {
  return (
    <section className="pt-16 pb-20">
      <div className="max-w-[700px] mx-auto px-6">
        <h1 className="mb-2">Privacy Policy</h1>
        <p className="text-sm text-muted-foreground mb-12">Updated 31st May 2024</p>

        <div className="space-y-8 text-muted-foreground">
          <p>
            This Privacy Policy describes how Tramline Inc. (&ldquo;Company&rdquo;,
            &ldquo;we&rdquo;, &ldquo;us&rdquo;, or &ldquo;our&rdquo;) collects, uses, and
            discloses your information when you use our Service, and tells you
            about your privacy rights and how the law protects you.
          </p>

          <div>
            <h3 className="text-xl font-medium mb-3">
              Information We Collect
            </h3>
            <p className="mb-3">
              <strong>Personal Data:</strong> While using our Service, we may
              ask you to provide certain personally identifiable information,
              including:
            </p>
            <ul className="list-disc list-inside space-y-1 ml-4">
              <li>Email address</li>
              <li>First name and last name</li>
              <li>Usage Data</li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-medium mb-3">Usage Data</h3>
            <p>
              Usage Data is collected automatically when using the Service. This
              may include your Device&apos;s Internet Protocol address (IP
              address), browser type, browser version, pages of our Service that
              you visit, the time and date of your visit, the time spent on those
              pages, and other diagnostic data.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-medium mb-3">
              Tracking Technologies
            </h3>
            <p>
              We use Session and Persistent Cookies for authentication and
              preferences, and Web Beacons for analytics purposes.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-medium mb-3">
              How We Use Your Data
            </h3>
            <ul className="list-disc list-inside space-y-1 ml-4">
              <li>To provide and maintain our Service</li>
              <li>To manage your account</li>
              <li>For the performance of a contract</li>
              <li>To contact you with updates and communications</li>
              <li>To manage business transfers</li>
              <li>For service improvement and analysis</li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-medium mb-3">Data Sharing</h3>
            <p>
              We may share your information with Service Providers, during
              business transfers, with Affiliates, business partners, and with
              your consent.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-medium mb-3">Your Rights</h3>
            <ul className="list-disc list-inside space-y-1 ml-4">
              <li>Data retention is limited to necessity</li>
              <li>Right to delete or request deletion of your data</li>
              <li>
                Right to update or amend information via account settings
              </li>
              <li>Contact support for data access requests</li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-medium mb-3">Security</h3>
            <p>
              The security of your Personal Data is important to us, but no
              method of transmission over the Internet or electronic storage is
              100% secure. We strive to use commercially acceptable means to
              protect your Personal Data.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-medium mb-3">
              Children&apos;s Privacy
            </h3>
            <p>
              Our Service does not address anyone under the age of 13. We do not
              knowingly collect personally identifiable information from anyone
              under the age of 13.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-medium mb-3">Contact Us</h3>
            <p>
              If you have any questions about this Privacy Policy, you can
              contact us at{" "}
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
