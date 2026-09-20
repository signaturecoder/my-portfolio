"use client";

import Link from "next/link";
import { useState } from "react";

export const Navbar = () => {
  const [open, setOpen] = useState(false);

  const links = [
    { href: "/#about", label: "About" },
    { href: "/#experience", label: "Experience" },
    { href: "/#skills", label: "Skills" },
    { href: "/#projects", label: "Projects" },
    { href: "/#education", label: "Education" },
    { href: "/#contact", label: "Contact" },
  ];

  return (
    <nav className="relative">
      <button
        onClick={() => setOpen((v) => !v)}
        className="md:hidden px-3 py-2 rounded-lg border border-white/15 text-xs uppercase tracking-[0.14em]"
        aria-label="Toggle navigation"
      >
        Menu
      </button>

      <ul className="hidden md:flex gap-6 items-center text-sm text-[var(--muted)]">
        {links.map((item) => (
          <li key={item.href}>
            <Link href={item.href} className="hover:text-[var(--text)] tracking-[0.14em] uppercase text-xs">
              {item.label}
            </Link>
          </li>
        ))}
        <li>
          <a href="https://github.com/signaturecoder" target="_blank" rel="noreferrer" className="ml-2 px-5 py-2 rounded-full border border-white/15 hover:bg-white/10 tracking-[0.14em] uppercase text-xs text-[var(--text)]">
            GitHub
          </a>
        </li>
      </ul>

      {open && (
        <div className="absolute right-0 mt-3 w-[260px] section-card p-3 md:hidden z-30">
          <div className="grid gap-1">
            {links.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="px-3 py-2 rounded-lg hover:bg-white/10 tracking-[0.12em] uppercase text-xs text-[var(--muted)]"
              >
                {item.label}
              </Link>
            ))}
            <a
              href="https://github.com/signaturecoder"
              target="_blank"
              rel="noreferrer"
              className="mt-1 px-3 py-2 rounded-lg bg-white text-black text-xs tracking-[0.12em] uppercase"
              onClick={() => setOpen(false)}
            >
              GitHub
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};
