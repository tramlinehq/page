import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About - Tramline",
  description: "Empowering teams that build great mobile products.",
};

const TEAM = [
  {
    name: "Akshay",
    role: "Product & Engineering",
  },
  {
    name: "Nivedita",
    role: "Product & Engineering",
  },
  {
    name: "Pratul",
    role: "Product & Sales",
  },
];

const ADVISORS = [
  "Bharat Founders Fund",
  "Untitled Ventures",
  "Anand Sharma",
  "Arnab Kumar",
  "Ashish Gupta",
  "Avi Aryan",
  "Avlesh Singh",
  "Girish Mathrubootham",
  "Kailash Nadh",
  "Kunal Shah",
  "Lalit Keshre",
  "Madhu Shalini",
  "Manish Gupta",
  "Nikhil Kamath",
  "Nishant Rao",
  "Pankaj Jain",
  "Raj Kunkolienkar",
  "Rajesh Sawhney",
  "Rajan Anandan",
  "Ramakant Sharma",
  "Sanjay Swamy",
  "Sanjeev Bikhchandani",
  "Sharad Sharma",
  "Varun Alagh",
  "Vishal Gondal",
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-16 pb-12 text-center">
        <div className="max-w-[800px] mx-auto px-6">
          <h1>Empowering teams ⚡️ that build 🛠️ great mobile products 📱</h1>
        </div>
      </section>

      {/* Team */}
      <section className="pb-16">
        <div className="max-w-[900px] mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {TEAM.map((member) => (
              <div key={member.name} className="text-center">
                <div className="w-32 h-32 bg-muted rounded-full mx-auto mb-4" />
                <h3 className="text-xl font-normal mb-1">{member.name}</h3>
                <p className="text-sm text-muted-foreground">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Advisors & Investors */}
      <section className="py-16 bg-muted">
        <div className="max-w-[900px] mx-auto px-6">
          <h2 className="text-2xl font-normal mb-8 text-center">
            Advisors & Investors
          </h2>
          <div className="flex flex-wrap justify-center gap-3">
            {ADVISORS.map((name) => (
              <span
                key={name}
                className="text-sm text-muted-foreground bg-white border border-border px-3 py-1.5 rounded-full"
              >
                {name}
              </span>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
