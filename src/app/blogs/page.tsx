const blogs = [
  {
    title: "Improving Next.js Performance in Enterprise Apps",
    summary: "A practical breakdown of bundle optimization, caching, and SSR strategies that moved real-world metrics.",
    status: "Coming Soon",
  },
  {
    title: "Designing Accessible React Components at Scale",
    summary: "Patterns to make component libraries WCAG-compliant without compromising development speed.",
    status: "Coming Soon",
  },
  {
    title: "Micro-frontends with Shared Design Systems",
    summary: "What worked, what failed, and how to align release velocity across teams.",
    status: "Coming Soon",
  },
];

export default function BlogsPage() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-12">
      <h1 className="text-3xl font-semibold">Blogs</h1>
      <p className="mt-2 text-[var(--muted)]">Thoughts on frontend architecture, performance, and accessibility from production experience.</p>

      <section className="mt-6 grid md:grid-cols-3 gap-5">
        {blogs.map((blog) => (
          <article key={blog.title} className="section-card p-5">
            <p className="text-xs uppercase tracking-[0.12em] text-[var(--primary)]">{blog.status}</p>
            <h2 className="mt-2 font-semibold">{blog.title}</h2>
            <p className="mt-2 text-sm text-[var(--muted)]">{blog.summary}</p>
          </article>
        ))}
      </section>
    </div>
  );
}
