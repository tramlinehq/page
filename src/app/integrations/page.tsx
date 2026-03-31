import type { Metadata } from "next";
import { Card, CardContent } from "@/components/ui/card";

export const metadata: Metadata = {
  title: "Integrations - Tramline",
  description:
    "Create, grow, control, and monitor your mobile app release cycle using our growing breadth of tools.",
};

type Integration = {
  name: string;
  description: string;
  logo?: string;
  comingSoon?: boolean;
};

type Category = {
  title: string;
  integrations: Integration[];
};

const CATEGORIES: Category[] = [
  {
    title: "Build Distribution",
    integrations: [
      {
        name: "App Store",
        logo: "https://cdn.prod.website-files.com/6644e5e860f656524d6f243e/693d808c83a54888f7014008_app-store-og-cropped.png",
        description:
          "Push production builds to Apple's App Store, versioned and managed by Tramline.",
      },
      {
        name: "Play Store",
        logo: "https://cdn.prod.website-files.com/6644e5e860f656524d6f243e/693b28ff262f15e43a6f67b1_Google-Play-Logo.png",
        description:
          "Let Tramline manage your releases to the largest number of mobile users on the planet through the Google Play Store.",
      },
      {
        name: "TestFlight",
        logo: "https://cdn.prod.website-files.com/6644e5e860f656524d6f243e/693b3aaca4a7fa8bff676233_testflight-iOS-400x400_1x_40.png",
        description:
          "Tramline manages beta versions of your apps using TestFlight directly on real iOS devices.",
      },
      {
        name: "Firebase",
        logo: "https://cdn.prod.website-files.com/6644e5e860f656524d6f243e/693b29dda5ee7f6026cf344e_firebase-logo-logomark.png",
        description:
          "Treat your Firebase App Distribution releases for testers exactly as you treat your App Store and Play Store releases.",
      },
    ],
  },
  {
    title: "Version Control",
    integrations: [
      {
        name: "GitHub",
        logo: "https://cdn.prod.website-files.com/6644e5e860f656524d6f243e/693b2be110f4ef2df233c508_GitHub-Mark.png",
        description:
          "Tramline has deep integration with the GitHub API to support your workflow.",
      },
      {
        name: "GitLab",
        logo: "https://cdn.prod.website-files.com/6644e5e860f656524d6f243e/693b2df5a7c74f36d6aaede6_gitlab.jpg",
        description:
          "Tramline works with the new Version 4 GitLab API for seamless releases.",
      },
      {
        name: "Bitbucket",
        logo: "https://cdn.prod.website-files.com/6644e5e860f656524d6f243e/693b2f4124baae495a4dca99_bitbucket-green.png",
        description: "Tramline integrates the new Bitbucket API 2.0.",
      },
    ],
  },
  {
    title: "Build Servers / CI-CD",
    integrations: [
      {
        name: "GitHub Actions",
        logo: "https://cdn.prod.website-files.com/6644e5e860f656524d6f243e/693b36c0f7ee7803638356b8_GitHub-actions-wide.png",
        description:
          "Trigger and monitor your GitHub Actions workflows directly from Tramline.",
      },
      {
        name: "GitLab CI/CD",
        logo: "https://cdn.prod.website-files.com/6644e5e860f656524d6f243e/69403fda505fa7a6327c5c69_gitlab-ci-cd-logo_2x.png",
        description:
          "Connect your GitLab CI/CD pipelines for automated builds.",
      },
      {
        name: "Bitbucket Pipelines",
        logo: "https://cdn.prod.website-files.com/6644e5e860f656524d6f243e/6940405bacec390bdebee383_bitbucket-pipelines.png",
        description: "Integrate with Bitbucket Pipelines for your build process.",
      },
      {
        name: "Bitrise",
        logo: "https://cdn.prod.website-files.com/6644e5e860f656524d6f243e/693b391c3ff3a67de20f84d9_Bitrise%20Logo%20-%20White%20Bg.png",
        description:
          "Connect Bitrise to Tramline for mobile-first CI/CD workflows.",
      },
      {
        name: "Codemagic",
        logo: "https://cdn.prod.website-files.com/6644e5e860f656524d6f243e/693dac55486c6c009f91692b_codemagic-blue.png",
        description: "Codemagic integration for Flutter and mobile builds.",
        comingSoon: true,
      },
    ],
  },
  {
    title: "Notifications",
    integrations: [
      {
        name: "Slack",
        logo: "https://cdn.prod.website-files.com/6644e5e860f656524d6f243e/693b81fd1bfb196305f54c7d_slack-icon.png",
        description:
          "Get updates on every stage of your app rollout right in your company's Slack.",
      },
      {
        name: "Teams",
        logo: "https://cdn.prod.website-files.com/6644e5e860f656524d6f243e/693b84a875c030039d013b01_teams-updated-icon.png",
        description: "Receive release notifications in Microsoft Teams.",
        comingSoon: true,
      },
    ],
  },
  {
    title: "Project Management",
    integrations: [
      {
        name: "Jira",
        logo: "https://cdn.prod.website-files.com/6644e5e860f656524d6f243e/693db2029db805a91eecdcf0_jira.png",
        description:
          "Connect Jira to automatically track release-related issues and tickets.",
      },
      {
        name: "Linear",
        logo: "https://cdn.prod.website-files.com/6644e5e860f656524d6f243e/693db3f4b3858a452b31d65a_linear-app-icon.png",
        description:
          "Integrate Linear for streamlined project tracking alongside your releases.",
      },
    ],
  },
  {
    title: "Monitoring & Analytics",
    integrations: [
      {
        name: "Bugsnag",
        logo: "https://cdn.prod.website-files.com/6644e5e860f656524d6f243e/693b3e145f3b30d7b93fce5a_bugsnag-logo.png",
        description:
          "Monitor crash rates and stability metrics from Bugsnag during rollouts.",
      },
      {
        name: "Crashlytics",
        logo: "https://cdn.prod.website-files.com/6644e5e860f656524d6f243e/693b29dda5ee7f6026cf344e_firebase-logo-logomark.png",
        description:
          "Pull Firebase Crashlytics data into your release dashboard.",
      },
      {
        name: "Sentry",
        logo: "https://cdn.prod.website-files.com/6644e5e860f656524d6f243e/693b85b04786ba3d0da5f0f1_sentry-centered.png",
        description: "Monitor errors and performance with Sentry integration.",
        comingSoon: true,
      },
    ],
  },
];

export default function IntegrationsPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-16 pb-12 text-center">
        <div className="max-w-[700px] mx-auto px-6">
          <h1 className="mb-4">Integrations</h1>
          <p className="text-muted-foreground">
            Create, grow, control, and monitor your mobile app release cycle
            using our growing breadth of tools.
          </p>
        </div>
      </section>

      {/* Integration categories */}
      <section className="pb-20">
        <div className="max-w-[1400px] mx-auto px-6">
          {CATEGORIES.map((category) => (
            <div key={category.title} className="mb-16">
              <h2 className="text-2xl font-normal mb-6">{category.title}</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {category.integrations.map((integration) => (
                  <Card
                    key={integration.name}
                    className="hover:border-foreground/20 transition-colors"
                  >
                    <CardContent className="pt-6 text-center">
                      {integration.logo && (
                        <img
                          src={integration.logo}
                          alt={integration.name}
                          className="h-10 mx-auto mb-3 object-contain"
                        />
                      )}
                      <div className="flex items-center justify-center gap-2 mb-3">
                        <h4 className="font-medium">
                          {integration.name}
                        </h4>
                        {integration.comingSoon && (
                          <span className="text-xs bg-muted text-muted-foreground px-2 py-0.5 rounded-full">
                            Coming Soon!
                          </span>
                        )}
                      </div>
                      <p className="text-sm text-muted-foreground text-center">
                        {integration.description}
                      </p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
