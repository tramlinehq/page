import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About - Tramline",
  description: "Empowering teams that build great mobile products.",
};

const TEAM = [
  {
    name: "Akshay",
    role: "Product & Engineering",
    linkedin: "https://www.linkedin.com/in/kitallis/",
  },
  {
    name: "Nivedita",
    role: "Product & Engineering",
    linkedin: "https://www.linkedin.com/in/nid90",
  },
  {
    name: "Pratul",
    role: "Product & Sales",
    linkedin: "https://www.linkedin.com/in/pratulkalia",
  },
];

const ADVISORS = [
  "Abhinav Sarkar",
  "Animesh Bansriyar",
  "Ankit Sobti",
  "Aravind Putrevu",
  "Bharat Founders Fund",
  "Daniel Burka",
  "Dwipal Desai",
  "Harsh Shah",
  "Jiten Vaidya",
  "Mekin Maheshwari",
  "Mohammad Ali",
  "Neehar Venugopal",
  "Nikhil Kalro",
  "On Deck",
  "Parul Soi",
  "Prakhar Agarwal",
  "Rain Paharia",
  "Rishav Kumar",
  "Satyajeet Salgar",
  "Sathya Gunasekaran",
  "Shreyas Srinivasan",
  "Untitled Ventures",
  "Vijay Sharma",
  "Vikalp Gupta",
  "Vishal Biyani",
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-16 pb-8 text-center">
        <div className="max-w-[800px] mx-auto px-6">
          <h1>Empowering teams ⚡️ that build 🛠️ great mobile products 📱</h1>
        </div>
      </section>

      {/* Photo */}
      <section className="pb-8">
        <div className="max-w-[700px] mx-auto px-6 flex justify-center">
          <img
            src="https://uploads-ssl.webflow.com/6644e5e860f656524d6f243e/665bf582090829ad1ff61884_76A130DC-CF82-42ED-B70E-98C4C5C37A46.JPG"
            alt="Tramline team"
            className="max-w-[320px] rounded-lg"
            width={320}
            height={213}
          />
        </div>
      </section>

      {/* Intro */}
      <section className="pb-12">
        <div className="max-w-[700px] mx-auto px-6">
          <p className="text-muted-foreground text-lg">
            What do you get when you take a bunch of friends who are experienced
            engineers, passionate about mobile apps? And release engineering?
            Also systems thinking?
          </p>
        </div>
      </section>

      {/* Team */}
      <section className="pb-16">
        <div className="max-w-[700px] mx-auto px-6">
          <div className="space-y-4 text-muted-foreground">
            {TEAM.map((member) => (
              <p key={member.name}>
                <a
                  href={member.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-foreground font-medium underline hover:text-primary transition-colors"
                >
                  {member.name}
                </a>{" "}
                does {member.role.toLowerCase()}.
              </p>
            ))}
          </div>
        </div>
      </section>

      {/* Advisors & Investors */}
      <section className="py-16">
        <div className="max-w-[700px] mx-auto px-6">
          <h3 className="text-xl font-medium mb-4">Advisors &amp; Investors</h3>
          <p className="text-muted-foreground">
            {ADVISORS.join(", ")}
          </p>
        </div>
      </section>
    </>
  );
}
