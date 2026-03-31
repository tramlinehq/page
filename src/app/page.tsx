import { TestimonialCarousel } from "@/components/TestimonialCarousel";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const CUSTOMER_LOGOS = [
  {
    src: "https://cdn.prod.website-files.com/6644e5e860f656524d6f243e/6881216f34b894fff6cc1598_id0ZkzZCg__logos.svg",
    alt: "Speak",
  },
  {
    src: "https://cdn.prod.website-files.com/6644e5e860f656524d6f243e/6881219b9dabf2db1f773304_Groww_Logo_light%20Mode.svg",
    alt: "Groww",
  },
  {
    src: "https://cdn.prod.website-files.com/6644e5e860f656524d6f243e/68812175e25a3aedabe3bae5_b8dac83b0ad415502ff28cbd2dc2cfcf_ide-FBfRzw_1749423135951.png",
    alt: "Redivo",
  },
  {
    src: "https://cdn.prod.website-files.com/6644e5e860f656524d6f243e/6882091f22e57fa20b0c02a2_92e4cede301350f00ff88631b7d3bd94_Stage%20Logo%20Black.png",
    alt: "Stage",
  },
  {
    src: "https://cdn.prod.website-files.com/6644e5e860f656524d6f243e/6884ba0449247233db4f12b8_fd22dbab02173383a99173934784860f_twine%20logo%20small.png",
    alt: "Twine",
  },
  {
    src: "https://cdn.prod.website-files.com/6644e5e860f656524d6f243e/68823643550ad2a96ddd31c4_SCR-20250724-qntw.avif",
    alt: "Metacast",
  },
  {
    src: "https://cdn.prod.website-files.com/6644e5e860f656524d6f243e/688121874bcb77eadf5c5af1_idP6aGW8Ke_logos.png",
    alt: "Turtlemint",
  },
  {
    src: "https://cdn.prod.website-files.com/6644e5e860f656524d6f243e/68812165805aba1143288b85_svgexport-1.svg",
    alt: "Resolve to Save Lives",
  },
];

const MINI_FEATURES = [
  {
    label: "Mobile DevOps Reports",
    icon: "/icons/mobile-devops-reports.svg",
    description:
      "Your mobile team has special DevOps metrics that Tramline tracks automatically. Release frequency, release duration, number of contributors (including breakdown by team), hotfixes done, and many more are measured and charted to show trends across releases.",
  },
  {
    label: "Build Queue",
    icon: "/icons/build-queue.svg",
    description:
      "When developers rapidly create fixes on the release branch, testers can get swamped with builds. The Build Queue can be configured to wait before triggering a new build, saving expensive CI minutes.",
  },
  {
    label: "Scheduled Releases",
    icon: "/icons/scheduled-releases.svg",
    description:
      "Tramline can automatically kick-off production releases, and nightly releases can run all the way without any manual intervention. Haven't added new code? Tramline will not release the same commit twice!",
  },
  {
    label: "Cross-Platform Releases",
    icon: "/icons/cross-platform-releases.svg",
    description:
      "Take the cross-platform advantage to releases! Tramline can run App Store and Play Store releases together in a synchronized manner, giving teams a single view to manage both releases.",
  },
  {
    label: "Automatic Backmerges",
    icon: "/icons/automatic-backmerges.svg",
    description:
      "Any fixes that land on the release branch are automatically cherry-picked onto the working branch, in real time. It saves hours of time during release week, and lets developers focus on work.",
  },
];

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-16 text-center">
        <div className="max-w-[900px] mx-auto px-6 space-y-8">
          <h1>
            The release dashboard for
            <br />
            mobile app teams.
          </h1>
          <p className="text-muted-foreground">
            Stop wrangling with CI pipelines. Quit tracking releases on spreadsheets.
            <br />
            Tramline transforms your app releases into well-defined workflows on autopilot.
            <br />
            Free your engineers. More output, less busywork.
          </p>

          {/* Customer logos */}
          <div className="flex flex-wrap items-center justify-center gap-6">
            {CUSTOMER_LOGOS.map((logo) => (
              <img
                key={logo.alt}
                src={logo.src}
                alt={logo.alt}
                className="h-8 opacity-80"
              />
            ))}
          </div>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button render={<a href="https://go.tramline.app/preview" />} className="rounded-[7px]">
              Preview the dashboard →
            </Button>
            <a
              href="https://go.tramline.app/demo"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-muted-foreground hover:text-foreground underline transition-colors"
            >
              Or book a demo
            </a>
          </div>
        </div>
      </section>

      {/* Dashboard Screenshot */}
      <section className="pb-16">
        <div className="max-w-[1400px] mx-auto px-6">
          <img
            src="https://cdn.prod.website-files.com/6644e5e860f656524d6f243e/6658f88f656bb5fba6c41dd3_Website%202024%20changeset%20tracking.webp"
            alt="Tramline Dashboard"
            className="w-full"
            style={{ transform: "perspective(1200px) rotateX(15deg) rotateY(0deg) rotate(0deg)" }}
          />
        </div>
      </section>

      {/* CI/CD doesn't cut it */}
      <section className="py-20 text-center">
        <div className="max-w-[900px] mx-auto px-6">
          <h2 className="mb-6">CI/CD doesn&apos;t cut it</h2>
          <p className="text-muted-foreground mb-4">
            CI pipelines are great for running tests and creating builds. But
            app releases involve different types of builds (staging, RC), lots of
            tools (build distribution, app stores, observability), and multiple
            stakeholders (developers, product, marketing).
          </p>
          <p className="text-muted-foreground">
            Tramline coordinates all those parts so your team can focus on the
            real work.
          </p>
        </div>
      </section>

      {/* Feature cards: One Team + Everything In Its Right Place */}
      <section className="pb-20">
        <div className="max-w-[1400px] mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardContent className="pt-6">
                <img
                  src="https://cdn.prod.website-files.com/6644e5e860f656524d6f243e/6650deeb0703b8136bf47bc7_Control%20Release.svg"
                  alt="One Team, One Process"
                  className="w-full mb-6"
                />
                <CardTitle className="mb-3">One Team, One Process</CardTitle>
                <p className="text-muted-foreground">
                  By combining data from the tools that you already use, Tramline
                  lets anyone run a successful release. It uses official APIs to
                  get the work done, so no more worrying about individual access
                  control either.
                </p>
                <p className="text-muted-foreground mt-3">
                  Say goodbye to switching through documents and checklists.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <img
                  src="https://cdn.prod.website-files.com/6644e5e860f656524d6f243e/6650deeb7b9332de9877acbf_Audit%20Release.svg"
                  alt="Everything In Its Right Place"
                  className="w-full mb-6"
                />
                <CardTitle className="mb-3">
                  Everything In Its Right Place
                </CardTitle>
                <p className="text-muted-foreground">
                  Tramline sends context-specific notifications as your release
                  makes its way to completion, so stakeholders only get alerts
                  for the things they care about.
                </p>
                <p className="text-muted-foreground mt-3">
                  Every action gets recorded automatically, whether it&apos;s
                  done by the system or a user, giving you a precise audit trail
                  of every release.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <TestimonialCarousel />

      {/* Intelligent Store Rollouts */}
      <section className="py-20 text-center">
        <div className="max-w-[900px] mx-auto px-6">
          <h2 className="mb-6">Intelligent Store Rollouts</h2>
          <p className="text-muted-foreground mb-4">
            All mobile teams have felt the stress that comes with releasing a bad
            update to users. App stores do not allow pulling a broken build that
            has been installed on a user&apos;s device. Tramline reduces this
            stress by giving superpowers to the phased release (or staged
            rollout) process.
          </p>
          <p className="text-muted-foreground">
            Get data from monitoring and analytics systems, stitch it together
            the way you want, and send out alerts that you really need.
          </p>
        </div>
      </section>

      {/* Bring Data In / Send Alerts Out */}
      <section className="pb-20">
        <div className="max-w-[1400px] mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <img
                  src="https://cdn.prod.website-files.com/6644e5e860f656524d6f243e/665ae3a8cf74c9c6f3b909de_Bring%20data%20in.svg"
                  alt="Bring Data In"
                  className="w-full mb-4"
                />
                <CardTitle>Bring Data In</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Determining the stability of a release is based on looking at
                  multiple sources of data: crashes, business analytics, product
                  metrics. Tramline connects to the platforms you use every day,
                  and gives you a release-specific window into all that data.
                </p>
                <p className="text-muted-foreground">
                  For e.g. in this release, how does user adoption correlate with
                  phased release stage and checkout success rate?
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <img
                  src="https://cdn.prod.website-files.com/6644e5e860f656524d6f243e/665ae3a853a788531a18812a_Send%20alert%20out.svg"
                  alt="Send Alerts Out"
                  className="w-full mb-4"
                />
                <CardTitle>Send Alerts Out</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Equipped with multi-dimensional data, Tramline can be
                  configured to send alerts when something starts to look amiss,
                  or even halt the rollout immediately. For e.g. in this release,
                  when adoption is more than 50%, checkout success is more than
                  99% but refund rate is more than 25%, send an alert on Slack.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* For mobile developers, by mobile developers */}
      <section className="py-20">
        <div className="max-w-[1400px] mx-auto px-6">
          <h2 className="text-center mb-12">For mobile developers, by mobile developers</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <img src="/icons/engineers-set-free.svg" alt="" className="h-16 mb-2" />
                <CardTitle>Engineers Set Free</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Automate the busywork that developers do during releases so
                  they can focus on building. Creating release branches and
                  tagging builds is easy, but Tramline also guarantees that work
                  from the previous release has been merged before starting a new
                  one. And that&apos;s not all.
                </p>
                <p className="text-muted-foreground">
                  No more merge hells. Or remembering to increment versions. Or
                  clicking around in store consoles to submit a new build. You
                  write the code, Tramline does the grunt work.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <img src="/icons/hotfixes-made-easy.svg" alt="" className="h-16 mb-2" />
                <CardTitle>Hotfixes Made Easy</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  When things start breaking on user devices, panic sets in. The
                  release must be patched and updated on the store quickly, but
                  which commit created it? On which branch?
                </p>
                <p className="text-muted-foreground">
                  Tramline makes it easy: you start a hotfix for a release, copy
                  the hotfix branch name, and land the fix(es). Tramline will
                  then create a new release, generate a build with the correct
                  version, close the live release, and start the new
                  rollout... without you having to lift a finger.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* And much, much more */}
      <section className="py-20">
        <div className="max-w-[1400px] mx-auto px-6">
          <h2 className="text-center mb-12">And much, much more</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {MINI_FEATURES.map((feature) => (
              <Card key={feature.label}>
                <CardContent className="pt-6">
                  <img src={feature.icon} alt="" className="h-7 mb-4" />
                  <p className="text-xs font-semibold tracking-widest uppercase text-muted-foreground mb-3">
                    {feature.label}
                  </p>
                  <p className="text-muted-foreground">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Open Source */}
      <section className="py-20">
        <div className="max-w-[1400px] mx-auto px-6">
          <div className="bg-dark-green rounded-2xl px-8 md:px-16 py-16 text-white relative overflow-hidden">
            {/* OSI logo watermark */}
            <img
              src="/osi-keyhole.svg"
              alt=""
              aria-hidden="true"
              className="absolute right-16 top-1/2 -translate-y-1/2 h-[300px] w-[300px] opacity-[0.15] pointer-events-none select-none"
            />
            <div className="relative z-10">
            <h2 className="text-white mb-6">Pure open source, no caveats</h2>
            <p className="text-gray-300 mb-4 max-w-[900px]">
              No SSPL, no BSL, no exceptions. Tramline is open source, through
              and through, under the universally accepted{" "}
              <a
                href="https://www.apache.org/licenses/LICENSE-2.0"
                target="_blank"
                rel="noopener noreferrer"
                className="underline text-white hover:text-gray-200"
              >
                Apache 2.0 License
              </a>
              . Check out our{" "}
              <a
                href="https://github.com/tramlinehq/tramline"
                target="_blank"
                rel="noopener noreferrer"
                className="underline text-white hover:text-gray-200"
              >
                source code
              </a>
              ,{" "}
              <a
                href="https://github.com/tramlinehq/tramline/issues"
                target="_blank"
                rel="noopener noreferrer"
                className="underline text-white hover:text-gray-200"
              >
                issue queue
              </a>
              , or just run the system yourself, no strings attached.
            </p>
            <p className="text-gray-300 max-w-[900px]">
              Why? We believe critical software should be open to public review
              and scrutiny. Modern release engineering practices are built on a
              backbone of open source software and we benefit from that too.
              Being open source guarantees the longevity of our product, and
              inspires confidence in our enterprise customers.
            </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
