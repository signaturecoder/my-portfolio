import React from "react";

export const metadata = {
  title: "About Sanu Kumar",
};
const AboutPage = () => {
  return (
    <div className="max-w-6xl mx-auto px-6 py-12">
      <h1 className="text-3xl font-semibold">About Me</h1>
      <p className="mt-4 text-[var(--muted)] max-w-3xl">
        I am a frontend engineer based in Bengaluru with hands-on experience in building scalable products for enterprise teams.
        My core focus is solving high-impact business challenges with Next.js, React, and TypeScript through architecture, performance, and accessibility improvements.
      </p>

      <section className="mt-7 grid md:grid-cols-3 gap-5">
        <div className="section-card p-5">
          <h2 className="font-semibold">Architecture</h2>
          <p className="mt-2 text-sm text-[var(--muted)]">Next.js, micro-frontends, monorepos, and scalable design systems for long-term product evolution.</p>
        </div>
        <div className="section-card p-5">
          <h2 className="font-semibold">Engineering Quality</h2>
          <p className="mt-2 text-sm text-[var(--muted)]">Testing strategy, codemods, WCAG compliance, and robust frontend foundations that reduce technical debt.</p>
        </div>
        <div className="section-card p-5">
          <h2 className="font-semibold">Business Outcomes</h2>
          <p className="mt-2 text-sm text-[var(--muted)]">Cost reduction, faster onboarding, improved conversion journeys, and measurable performance gains.</p>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
