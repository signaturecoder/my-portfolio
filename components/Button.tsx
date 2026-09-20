import React from "react";
import Link from "next/link";

const Button = ({ children, href, className = "" }) => {
  const base = `inline-flex items-center justify-center px-4 py-2 rounded-full font-medium transition-colors ${className}`;
  const tones = " bg-[var(--primary)] text-white hover:bg-[var(--primary-strong)]";

  if (href) {
    const isExternal = href.startsWith("http") || href.startsWith("mailto:");
    if (isExternal) {
      return (
        <a href={href} className={base + tones}>
          {children}
        </a>
      );
    }

    return (
      <Link href={href} className={base + tones}>
        {children}
      </Link>
    );
  }

  return <button className={base + tones}>{children}</button>;
};

export default Button;
