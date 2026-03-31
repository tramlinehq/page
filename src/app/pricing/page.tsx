import type { Metadata } from "next";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export const metadata: Metadata = {
  title: "Pricing - Tramline",
  description:
    "Simple, transparent pricing for teams of all sizes. 30-day trial included in all plans.",
};

const PLANS = [
  {
    name: "Hobby",
    price: "$0",
    period: "/month",
    tagline: "free forever!",
    features: [
      "Community support via Discord",
      "2 apps maximum",
      "15 releases per app annually",
      "Self-service setup",
    ],
    cta: "Get started",
    highlight: false,
  },
  {
    name: "Team",
    price: "$50",
    period: "/month per app",
    tagline: "Pro support 72 hour SLA",
    features: [
      "Unlimited apps and releases",
      "Assisted onboarding",
      "Slack Connect support",
      "Perfect for smaller teams",
    ],
    cta: "Get started",
    highlight: true,
  },
  {
    name: "Enterprise",
    price: "$600",
    period: "/month starting",
    tagline: "Enterprise-grade features",
    features: [
      "Unlimited apps and releases",
      "White-glove setup, 24-hour SLA",
      "2 hours/week dedicated consulting",
      "Ideal for 6+ app engineers",
    ],
    cta: "Get started",
    highlight: false,
  },
];

const FEATURE_ROWS = [
  {
    category: "Core",
    features: [
      { name: "Number of apps", hobby: "2", team: "Unlimited", enterprise: "Unlimited" },
      { name: "Number of releases", hobby: "15 per app, per year", team: "Unlimited", enterprise: "Unlimited" },
      { name: "Setup & onboarding", hobby: "Self", team: "Assisted", enterprise: "White-glove" },
      { name: "Support", hobby: "Discord", team: "Slack Connect", enterprise: "Slack Connect, Phone" },
      { name: "SLA commitment", hobby: "\u2014", team: "72 hour SLA", enterprise: "24 hour SLA" },
      { name: "Release consulting", hobby: "\u2014", team: "Paid", enterprise: "2 hours per week included" },
    ],
  },
  {
    category: "Users & Teams",
    features: [
      { name: "Roles", hobby: "\u2713", team: "\u2713", enterprise: "\u2713" },
      { name: "SAML / SSO", hobby: "", team: "Paid add-on\n$50 per month", enterprise: "\u2713" },
      { name: "Release pilot management", hobby: "", team: "", enterprise: "\u2713" },
      { name: "Approvals", hobby: "", team: "", enterprise: "\u2713" },
    ],
  },
  {
    category: "Release Management",
    features: [
      { name: "Branching strategies", hobby: "Almost trunk", team: "Almost trunk", enterprise: "Any" },
      { name: "Scheduled releases", hobby: "", team: "\u2713", enterprise: "\u2713" },
      { name: "Synchronized cross-platform releases", hobby: "", team: "\u2713", enterprise: "\u2713" },
      { name: "Build queue", hobby: "", team: "", enterprise: "\u2713" },
      { name: "Continuous backmerges", hobby: "", team: "", enterprise: "\u2713" },
      { name: "App variants", hobby: "", team: "", enterprise: "\u2713" },
      { name: "Automatic rollouts", hobby: "", team: "", enterprise: "\u2713" },
    ],
  },
  {
    category: "Monitoring & Observability",
    features: [
      { name: "Notifications system", hobby: "\u2713", team: "\u2713", enterprise: "\u2713" },
      { name: "Per-channel notifications", hobby: "", team: "", enterprise: "\u2713" },
      { name: "Release health monitoring", hobby: "", team: "", enterprise: "\u2713" },
      { name: "Automatic triggers to halt rollout", hobby: "", team: "", enterprise: "\u2713" },
    ],
  },
  {
    category: "Mobile DevOps",
    features: [
      { name: "Reldex", hobby: "", team: "\u2713", enterprise: "\u2713" },
      { name: "Release metrics charts", hobby: "", team: "\u2713", enterprise: "\u2713" },
      { name: "Team performance analysis", hobby: "", team: "", enterprise: "\u2713" },
    ],
  },
  {
    category: "Extensibility",
    features: [
      { name: "Outgoing webhooks", hobby: "", team: "", enterprise: "\u2713" },
      { name: "API access", hobby: "", team: "", enterprise: "\u2713" },
      { name: "Custom build-level metadata", hobby: "", team: "", enterprise: "\u2713" },
    ],
  },
];

const FAQ = [
  {
    question: "Can I deploy Tramline on-premise?",
    answer:
      "Yes! Our Enterprise plan includes an on-premise deployment option. Tramline is open source under the Apache 2.0 License, so you can also self-host the community edition at any time.",
  },
  {
    question: "Is Tramline really open source?",
    answer:
      "Yes. Tramline is licensed under the Apache 2.0 License \u2014 no SSPL, no BSL, no exceptions. You can view the full source code on GitHub, contribute to it, or run your own instance.",
  },
];

export default function PricingPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-16 pb-12 text-center">
        <div className="max-w-[800px] mx-auto px-6">
          <h1 className="mb-4">Pricing</h1>
          <p className="text-muted-foreground">
            30 day trial included in all plans — No credit card needed
          </p>
        </div>
      </section>

      {/* Pricing cards */}
      <section className="pb-20">
        <div className="max-w-[1400px] mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {PLANS.map((plan) => (
              <Card
                key={plan.name}
                className={
                  plan.highlight ? "border-primary shadow-lg" : undefined
                }
              >
                <CardHeader>
                  <CardTitle className="text-2xl font-normal">
                    {plan.name}
                  </CardTitle>
                  <div className="flex items-baseline gap-1">
                    <span className="text-4xl font-light text-foreground">
                      {plan.price}
                    </span>
                    <span className="text-sm text-muted-foreground">
                      {plan.period}
                    </span>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    {plan.tagline}
                  </p>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature) => (
                      <li
                        key={feature}
                        className="flex items-start gap-2 text-sm text-muted-foreground"
                      >
                        <span className="text-green-500 mt-0.5">{"\u2713"}</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button
                    render={<a href="https://tramline.dev/email/sign_up" />}
                    variant={plan.highlight ? "default" : "outline"}
                    className="w-full rounded-[7px]"
                  >
                    {plan.cta}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          <p className="text-center text-sm text-muted-foreground mt-8">
            Enterprise tier is available free to open source applications.
            <br />
            On-premise deployment available for Enterprise.
          </p>
        </div>
      </section>

      {/* Feature comparison table */}
      <section className="pb-20">
        <div className="max-w-[1400px] mx-auto px-6 overflow-x-auto">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-1/3">Feature</TableHead>
                <TableHead className="text-center">Hobby</TableHead>
                <TableHead className="text-center">Team</TableHead>
                <TableHead className="text-center">Enterprise</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {FEATURE_ROWS.map((category) => (
                <>
                  <TableRow key={category.category}>
                    <TableCell
                      colSpan={4}
                      className="pt-8 pb-2 font-semibold text-foreground text-xs uppercase tracking-wider"
                    >
                      {category.category}
                    </TableCell>
                  </TableRow>
                  {category.features.map((feature) => (
                    <TableRow key={feature.name}>
                      <TableCell className="text-muted-foreground">
                        {feature.name}
                      </TableCell>
                      <TableCell className="text-center text-muted-foreground">
                        {feature.hobby}
                      </TableCell>
                      <TableCell className="text-center text-muted-foreground">
                        {feature.team}
                      </TableCell>
                      <TableCell className="text-center text-muted-foreground">
                        {feature.enterprise}
                      </TableCell>
                    </TableRow>
                  ))}
                </>
              ))}
            </TableBody>
          </Table>
        </div>
      </section>

      {/* FAQ */}
      <section className="pb-20">
        <div className="max-w-[700px] mx-auto px-6">
          <h2 className="text-2xl font-normal mb-8 text-center">FAQ</h2>
          <Accordion className="w-full">
            {FAQ.map((item, i) => (
              <AccordionItem key={i} value={`item-${i}`}>
                <AccordionTrigger className="font-medium">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>
    </>
  );
}
