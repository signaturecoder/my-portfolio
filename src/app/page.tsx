import Button from "@/components/Button";
import ContactForm from "@/components/ContactForm";
import Link from "next/link";

const stack = [
  "Next.js",
  "React",
  "React Native",
  "TypeScript",
  "Node.js",
  "Micro-frontends",
  "Accessibility",
  "Core-Web Vitals",
];

const outcomes = [
  {
    title: "Global unsubscription journey",
    detail:
      "Designed and shipped a consistent opt-out experience across 50+ countries with localization and compliance built in.",
    metric: "50+ countries",
  },
  {
    title: "Micro-frontend migration",
    detail:
      "Moved newsletter flows to Next.js micro-frontends, improving ownership boundaries and independent releases.",
    metric: "Faster releases",
  },
  {
    title: "Performance engineering",
    detail:
      "Applied SSR tuning, caching strategy, and code splitting to improve user-perceived speed and core web vitals.",
    metric: "35% faster frontend",
  },
];

const projects = [
  {
    name: "H&M Newsletter",
    desc: "H&M newsletter platform modernization with improved user experience and scalable architecture.",
    tech: ["Micro-frontends", "Next.js", "Testing"],
    link: "https://www2.hm.com/en_in/newsletter.html",
  },
  {
    name: "BunaiApp",
    desc: "SaaS modernization for textile design workflows with distributed access and scalable architecture.",
    tech: ["Next.js", "Supabase", "Go", "AI Agents"],
    link: "https://bunaiapp.com",
  },
  {
    name: "Vivance App",
    desc: "Cross-platform flight booking app with performance-first mobile UX and stable integration patterns.",
    tech: ["Next.js", "TypeScript", "GraphQL"],
    link: "https://vivancetravels.com",
  },
];

const timeline = [
  {
    period: "Sep 2024 - Present",
    company: "H&M - Bengaluru",
    role: "Software Engineer",
    desc: "Led newsletter migration to Next.js micro-frontend architecture and delivered global unsubscription flows across 50+ countries.",
    chips: ["Next.js", "TypeScript", "Micro-frontends", "Accessibility"],
  },
  {
    period: "Nov 2021 - Sep 2024",
    company: "Publicis Sapient - Bengaluru",
    role: "Experience Engineer L2",
    desc: "Migrated legacy stack to Next.js, built reusable design-system components, and reduced costs with monorepo practices.",
    chips: ["React", "Monorepo", "Bazel", "Codemods"],
  },
  {
    period: "Jul 2019 - Nov 2021",
    company: "LTIMindtree - Bengaluru",
    role: "Software Engineer",
    desc: "Built onboarding platform from scratch and reduced onboarding time by 40% through workflow automation and role-based access.",
    chips: ["Angular", "Node.js", "Express", "AWS"],
  },
];

const skillGroups = [
  {
    title: "Frontend",
    items: [
      "Next.js",
      "React",
      "TypeScript",
      "Redux Toolkit",
      "Tailwind CSS",
      "React Native",
    ],
  },
  {
    title: "Backend & Data",
    items: [
      "Node.js",
      "Express.js",
      "MongoDB",
      "PostgreSQL",
      "MySQL",
      "API Integration",
    ],
  },
  {
    title: "Engineering",
    items: [
      "Micro-frontends",
      "Monorepos",
      "Bazel",
      "WCAG 2.1",
      "CI/CD",
      "Performance",
    ],
  },
];

export default function HomePage() {
  return (
    <div className="mesh-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8 md:py-16">
        <section className="grid lg:grid-cols-[1.1fr_0.9fr] gap-8 lg:gap-10 items-center">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-emerald-400/20 bg-emerald-400/10 px-3 py-1">
              <span className="w-2 h-2 rounded-full bg-emerald-300" />
              <span className="text-xs tracking-[0.14em] text-emerald-200 uppercase">
                Available for strategic frontend roles
              </span>
            </div>

            <h1 className="mt-5 text-4xl sm:text-5xl md:text-7xl font-bold tracking-[-0.03em] leading-[0.95]">
              I build web products
              <span className="block headline-accent">
                that move business metrics
              </span>
            </h1>

            <p className="mt-5 text-base sm:text-lg text-[var(--muted)] max-w-2xl">
              I am Sanu Kumar, a frontend and mobile engineer focused on
              conversion-critical flows, scalable architecture, and speed
              improvements that stakeholders can actually measure.
            </p>

            <div className="mt-7 flex flex-wrap gap-2">
              {stack.map((item) => (
                <span key={item} className="chip">
                  {item}
                </span>
              ))}
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              <Button href="mailto:snkmr13@gmail.com?subject=Opportunity%20with%20Signaturecoder">
                Let us work together
              </Button>
              <Link
                href="/resume"
                className="inline-flex items-center px-4 py-2 rounded-full border border-white/15 hover:bg-white/10"
              >
                View Resume
              </Link>
              <Link
                href="/#contact"
                className="inline-flex items-center px-4 py-2 rounded-full border border-white/15 hover:bg-white/10"
              >
                Contact
              </Link>
            </div>

            <div className="mt-9 grid grid-cols-2 md:grid-cols-4 gap-3 max-w-3xl">
              <div className="section-card p-3">
                <p className="text-2xl font-semibold">7+</p>
                <p className="text-xs text-[var(--muted)] mt-1">
                  Years Experience
                </p>
              </div>
              <div className="section-card p-3">
                <p className="text-2xl font-semibold">35%</p>
                <p className="text-xs text-[var(--muted)] mt-1">
                  Perf Improvement
                </p>
              </div>
              <div className="section-card p-3">
                <p className="text-2xl font-semibold">20%</p>
                <p className="text-xs text-[var(--muted)] mt-1">
                  Load Time Drop
                </p>
              </div>
              <div className="section-card p-3">
                <p className="text-2xl font-semibold">50+</p>
                <p className="text-xs text-[var(--muted)] mt-1">
                  Countries Supported
                </p>
              </div>
            </div>
          </div>

          <aside className="section-card p-1 float-slow lg:max-w-[520px]">
            <div className="rounded-[18px] overflow-hidden bg-[#0b0f16]">
              <div className="h-11 border-b border-white/10 flex items-center justify-between px-4">
                <div className="flex gap-2">
                  <span className="w-3 h-3 rounded-full bg-[#ff5f57]" />
                  <span className="w-3 h-3 rounded-full bg-[#febc2e]" />
                  <span className="w-3 h-3 rounded-full bg-[#28c840]" />
                </div>
                <span className="text-xs sm:text-sm text-white/40">
                  profile.ts
                </span>
                <span className="text-xs text-white/30">LIVE</span>
              </div>

              <div className="p-6 text-sm leading-7 text-white/90">
                <p className="text-white/35">
                  // business-facing frontend engineer
                </p>
                <p className="mt-2">const sanu = {"{"}</p>
                <p className="pl-4">role: "Software Engineer",</p>
                <p className="pl-4">focus: "Frontend and Mobile Engineering",</p>
                <p className="pl-4">location: "Bengaluru, India",</p>
                <p className="pl-4">email: "snkmr13@gmail.com",</p>
                <p className="pl-4">phone: "+91-9661154476"</p>
                <p>{"}"}</p>
              </div>

              <div className="border-t border-white/10 p-4 flex items-center justify-between text-xs text-white/40">
                <a
                  href="https://github.com/signaturecoder"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-white/80"
                >
                  github.com/signaturecoder
                </a>
                <a
                  href="https://linkedin.com/in/signaturecoder"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-white/80"
                >
                  LinkedIn
                </a>
              </div>
            </div>
          </aside>
        </section>

        <section id="about" className="mt-16 md:mt-20">
          <div className="flex items-center gap-3 mb-5">
            <div className="w-8 h-[1px] bg-white/30" />
            <p className="text-xs tracking-[0.2em] uppercase text-white/45">
              01 - About
            </p>
          </div>
          <div className="section-card p-7 md:p-9 grid md:grid-cols-[1.1fr_0.9fr] gap-8 items-start">
            <div>
              <h2 className="text-2xl sm:text-3xl md:text-5xl font-semibold tracking-[-0.02em] leading-[1.05]">
                Frontend systems that are designed for scale and outcomes.
              </h2>
              <p className="mt-4 text-[var(--muted)] leading-7 max-w-2xl">
                I work at the intersection of product engineering and business
                impact: architecture that teams can evolve, interfaces people
                can trust, and performance that improves actual conversion
                journeys.
              </p>
            </div>
            <div className="grid gap-3">
              <div className="section-card p-4">
                <p className="text-sm text-white/70">
                  Enterprise product focus
                </p>
                <p className="text-xs text-[var(--muted)] mt-1">
                  Cross-country products, high-traffic pages, measurable KPIs.
                </p>
              </div>
              <div className="section-card p-4">
                <p className="text-sm text-white/70">Engineering quality</p>
                <p className="text-xs text-[var(--muted)] mt-1">
                  Testing discipline, accessibility standards, and maintainable
                  code paths.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="experience" className="mt-16 md:mt-20">
          <div className="flex items-center gap-3 mb-5">
            <div className="w-8 h-[1px] bg-white/30" />
            <p className="text-xs tracking-[0.2em] uppercase text-white/45">
              02 - Experience
            </p>
          </div>
          <div className="relative">
            <div className="hidden md:block absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-[1px] bg-white/15" />
            <div className="space-y-7">
              {timeline.map((item, idx) => (
                <div
                  key={idx}
                  className="relative md:grid md:grid-cols-2 md:gap-24 items-center"
                >
                  <span className="hidden md:block absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 rounded-full border border-white/20 bg-[#58a6ff] shadow-[0_0_0_8px_rgba(88,166,255,0.08)]" />
                  <article
                    className={`section-card p-6 ${idx % 2 === 0 ? "md:col-start-1" : "md:col-start-2"}`}
                  >
                    <div className="flex items-center justify-between gap-3">
                      <span className="px-3 py-1 rounded-full border border-white/15 text-xs tracking-[0.12em] text-white/70">
                        {item.period}
                      </span>
                      <span className="text-xs text-white/35">
                        {item.company}
                      </span>
                    </div>
                    <h3 className="mt-3 text-2xl md:text-3xl font-semibold tracking-[-0.02em]">
                      {item.role}
                    </h3>
                    <p className="mt-3 text-[var(--muted)] leading-7">
                      {item.desc}
                    </p>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {item.chips.map((chip) => (
                        <span key={chip} className="chip">
                          {chip}
                        </span>
                      ))}
                    </div>
                  </article>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="skills" className="mt-16 md:mt-20">
          <div className="flex items-center gap-3 mb-5">
            <div className="w-8 h-[1px] bg-white/30" />
            <p className="text-xs tracking-[0.2em] uppercase text-white/45">
              03 - Skills
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-4">
            {skillGroups.map((group) => (
              <article key={group.title} className="section-card p-6">
                <h3 className="text-xl font-semibold">{group.title}</h3>
                <div className="mt-4 flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <span key={item} className="chip">
                      {item}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="projects" className="mt-16 md:mt-20">
          <div className="flex items-center gap-3 mb-5">
            <div className="w-8 h-[1px] bg-white/30" />
            <p className="text-xs tracking-[0.2em] uppercase text-white/45">
              04 - Projects
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-4">
            {projects.map((project) => (
              <article
                key={project.name}
                className="section-card overflow-hidden"
              >
                <div className="h-28 bg-gradient-to-br from-[#58a6ff]/20 via-[#bc5cff]/10 to-transparent border-b border-white/10" />
                <Link href={project.link} target="_blank" className="block">
                  <div className="p-5">
                    <h3 className="text-xl font-semibold">{project.name}</h3>
                    <p className="mt-2 text-sm text-[var(--muted)] leading-6">
                      {project.desc}
                    </p>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {project.tech.map((tech) => (
                        <span className="chip" key={tech}>
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </Link>
              </article>
            ))}
          </div>
        </section>

        <section id="education" className="mt-16 md:mt-20">
          <div className="flex items-center gap-3 mb-5">
            <div className="w-8 h-[1px] bg-white/30" />
            <p className="text-xs tracking-[0.2em] uppercase text-white/45">
              05 - Education
            </p>
          </div>
          <div className="section-card p-7 md:p-8">
            <h3 className="text-2xl font-semibold">
              Bachelor of Technology in Information Technology
            </h3>
            <p className="mt-2 text-[var(--muted)]">
              Techno Main Salt Lake, Kolkata · Aug 2015 - Jun 2019
            </p>
            <p className="mt-2 text-[var(--muted)]">CGPA: 7.8 / 10</p>
          </div>
        </section>

        <section id="contact" className="mt-16 md:mt-20">
          <div className="flex items-center gap-3 mb-5">
            <div className="w-8 h-[1px] bg-white/30" />
            <p className="text-xs tracking-[0.2em] uppercase text-white/45">
              06 - Contact
            </p>
          </div>
          <div className="grid lg:grid-cols-[1.05fr_0.95fr] gap-8">
            <div>
              <h2 className="text-4xl sm:text-5xl md:text-6xl leading-[0.95] font-semibold tracking-[-0.02em]">
                Have an idea?
                <span className="block text-white/30">Let's talk.</span>
              </h2>
              <p className="mt-5 text-[var(--muted)] max-w-xl text-base sm:text-lg md:text-xl leading-7 md:leading-8">
                I am available for freelance, full-time roles and interesting
                side projects. Draft your message and I will get back to you.
              </p>

              <div className="mt-8 grid sm:grid-cols-2 gap-4">
                <a
                  href="https://github.com/signaturecoder"
                  target="_blank"
                  rel="noreferrer"
                  className="section-card p-5 hover:bg-white/5 transition-colors"
                >
                  <p className="text-xs tracking-[0.14em] uppercase text-white/40">
                    GitHub
                  </p>
                  <p className="mt-2 text-white/80">
                    github.com/signaturecoder
                  </p>
                </a>
                <a
                  href="https://linkedin.com/in/signaturecoder"
                  target="_blank"
                  rel="noreferrer"
                  className="section-card p-5 hover:bg-white/5 transition-colors"
                >
                  <p className="text-xs tracking-[0.14em] uppercase text-white/40">
                    LinkedIn
                  </p>
                  <p className="mt-2 text-white/80">
                    linkedin.com/in/signaturecoder
                  </p>
                </a>
              </div>

              <div className="mt-4 section-card p-5">
                <p className="text-xs tracking-[0.14em] uppercase text-white/40">
                  Email
                </p>
                <a
                  className="mt-2 block text-lg sm:text-2xl break-all text-white/85"
                  href="mailto:snkmr13@gmail.com"
                >
                  snkmr13@gmail.com
                </a>
              </div>
            </div>

            <aside className="section-card p-6 md:p-7">
              <div className="flex items-center justify-between mb-6">
                <p className="text-xs tracking-[0.16em] uppercase text-white/45">
                  Draft Message - Local Preview
                </p>
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-300" />
              </div>
              <ContactForm />
            </aside>
          </div>
        </section>
      </div>
    </div>
  );
}
