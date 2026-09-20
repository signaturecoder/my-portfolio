import Link from "next/link";

export default function ResumePage() {
  return (
    <div className="min-h-screen bg-[var(--bg)] text-[var(--text)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 sm:py-5">
        <div className="section-card p-4 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
          <div>
            <p className="text-sm font-semibold">Resume Viewer</p>
            <p className="text-xs text-[var(--muted)]">You are still inside the portfolio.</p>
          </div>
          <div className="flex flex-wrap items-center gap-2">
            <Link href="/" className="px-4 py-2 rounded-full border border-white/15 hover:bg-white/10 text-xs sm:text-sm">
              Back to Portfolio
            </Link>
            <a
              href="/Sanu_Resume_7yrs.pdf"
              download
              className="px-4 py-2 rounded-full bg-[var(--primary)] text-white hover:bg-[var(--primary-strong)] text-xs sm:text-sm"
            >
              Download PDF
            </a>
          </div>
        </div>

        <div className="mt-4 section-card overflow-hidden">
          <iframe
            src="/Sanu_Resume_7yrs.pdf"
            className="w-full h-[calc(100vh-170px)] border-0"
            title="Resume PDF viewer"
          />
        </div>
      </div>
    </div>
  );
}
