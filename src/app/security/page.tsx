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
              We consider security risks and tradeoffs from the beginning of the
              requirements definition and design process, through to
              implementation, deployment, and operations. We review for security
              concerns during our code review and pull request process, and we
              use a combination of automated scanners like brakeman, dependabot,
              and bundler-audit on every commit in the repository to catch
              vulnerabilities as early as possible in the release process.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-medium mb-3">
              Service Hosted by Render
            </h3>
            <p>
              The Tramline service is hosted at Render, an advanced SOC
              2-compliant cloud application platform provider, which in turn is
              underpinned and complemented by Amazon Web Services, the
              world&apos;s largest cloud computing provider. Tramline is designed
              to take full advantage of the scaling capabilities of the Render
              platform.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-medium mb-3">
              Data Security at Rest
            </h3>
            <p className="mb-4">
              Our databases are encrypted with AES256 encryption at rest and
              managed by Render.
            </p>
            <p className="mb-4">
              Our Storage Buckets are encrypted with AES256 encryption at rest
              using Galois/Counter Mode by Google Cloud Storage using Google
              Managed Keys in line with the industry&apos;s best practices. We
              automatically and permanently purge all objects stored in our GCS
              storage buckets after 10 months.
            </p>
            <p>
              All private keys and the integration-specific information collected
              from users are further encrypted on the application level using
              AES-GCM, with the initialization vector generated as an
              HMAC-SHA-256 digest of the key and the contents.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-medium mb-3">
              Data Security During Transit
            </h3>
            <p>
              We use TLS 1.2+ to secure all HTTP requests. Since this is
              encrypted, all the information is secure during transport, and no
              one can eavesdrop or forge messages.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-medium mb-3">Audit Logging</h3>
            <p>
              All accesses to the database are audit-logged using console1984. We
              also maintain audit logs for our infrastructure and for key actions
              within the Tramline product. Customers can ask for product audit
              logs for their organization by emailing{" "}
              <a
                href="mailto:support@tramline.app"
                className="underline hover:text-primary"
              >
                support@tramline.app
              </a>
              . Our application logs are structured and are retained for at least
              30 days.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-medium mb-3">Authentication</h3>
            <p>
              We use bcrypt for password hashing for logins which are securely
              stored on our database encrypted at rest over requests encrypted
              during transit. Our bcrypt hashes are salted and stretched which
              prevents brute-forcing and rainbow table attacks.
            </p>
            <p className="mt-4">
              All user forms are prevented against XSS &amp; CSRF and we only
              make use of Secure cookies.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-medium mb-3">
              System Monitoring, Alerting, and Uptime
            </h3>
            <p>
              Tramline is monitored 24/7 by a third-party service to measure
              performance and uptime, and to provide immediate notification in
              the event of an outage. We also use industry-standard services like
              Datadog and Sentry for application monitoring to measure
              performance on a request-by-request basis and to identify any new
              or recurring issues. No Personally Identifiable Information (PII)
              is sent to the external monitoring systems from Tramline.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-medium mb-3">Data Retention</h3>
            <p>
              Customers can ask Tramline to delete their data by reaching out to{" "}
              <a
                href="mailto:support@tramline.app"
                className="underline hover:text-primary"
              >
                support@tramline.app
              </a>
              . We purge all the data including users and app builds, if any, on
              request from the customer.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-medium mb-3">
              Responsible Disclosure Policy
            </h3>
            <p>
              Please refer to the{" "}
              <a
                href="https://github.com/tramlinehq/tramline/security/policy"
                target="_blank"
                rel="noopener noreferrer"
                className="underline hover:text-primary"
              >
                security policy
              </a>{" "}
              in the Tramline GitHub repository.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
