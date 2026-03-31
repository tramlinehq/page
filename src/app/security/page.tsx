import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Security - Tramline",
  description: "How Tramline protects your data and ensures security.",
};

export default function SecurityPage() {
  return (
    <section className="pt-16 pb-20">
      <div className="max-w-[700px] mx-auto px-6">
        <h1 className="mb-2">Security</h1>
        <p className="text-sm text-muted-foreground mb-12">Updated 17th May 2024</p>

        <div className="space-y-10 text-muted-foreground">
          <div>
            <h3 className="text-xl font-medium mb-3">
              Audits &amp; Secure SDLC
            </h3>
            <p>
              Security is integrated into every phase of our development
              lifecycle — from requirements through operations. We run automated
              vulnerability scanning tools like Brakeman, Dependabot, and
              Bundler-audit on every commit.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-medium mb-3">Service Hosting</h3>
            <p>
              The Tramline service is hosted at Render, an advanced SOC
              2-compliant cloud application platform provider, backed by AWS
              infrastructure.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-medium mb-3">
              Data Security at Rest
            </h3>
            <ul className="list-disc list-inside space-y-2">
              <li>Databases are encrypted with AES256</li>
              <li>
                Storage buckets use AES256 with Galois/Counter Mode via Google
                Cloud Storage
              </li>
              <li>
                Private keys and integration data have additional AES-GCM
                encryption at the application level
              </li>
              <li>Data is automatically purged after 10 months</li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-medium mb-3">
              Data Security in Transit
            </h3>
            <p>
              All HTTP requests are encrypted with TLS 1.2 or higher.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-medium mb-3">Audit Logging</h3>
            <p>
              Database access is logged via Console1984. Infrastructure and
              product action logs are retained for a minimum of 30 days.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-medium mb-3">Authentication</h3>
            <p>
              Passwords are hashed using bcrypt with salting and stretching. We
              implement XSS and CSRF protection, and use secure cookies only.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-medium mb-3">
              Monitoring &amp; Uptime
            </h3>
            <p>
              We use 24/7 third-party monitoring, Datadog and Sentry for
              application performance. No PII is sent to external monitoring
              services.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-medium mb-3">
              Data Retention &amp; Deletion
            </h3>
            <p>
              Customers can request data deletion at any time by contacting{" "}
              <a
                href="mailto:support@tramline.app"
                className="underline hover:text-primary"
              >
                support@tramline.app
              </a>
              .
            </p>
          </div>

          <div>
            <h3 className="text-xl font-medium mb-3">
              Responsible Disclosure
            </h3>
            <p>
              Please refer to our{" "}
              <a
                href="https://github.com/tramlinehq/tramline/security/policy"
                target="_blank"
                rel="noopener noreferrer"
                className="underline hover:text-primary"
              >
                GitHub security policy
              </a>{" "}
              for responsible disclosure guidelines.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
