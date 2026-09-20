import { Navbar } from "@/components/Navbar";
import "./globals.css";
import Logo from "@/components/Logo";

export const metadata = {
  title: "Personal Portfolio",
  description: "This is my portfolio for presenting all my projects and showcase my skills at one places.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col">
        <header className="sticky top-0 z-20 glass">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 sm:py-4 flex items-center justify-between">
            <Logo />
            <Navbar />
          </div>
        </header>
        <main className="grow">{children}</main>
        <footer className="border-t border-[var(--border)] py-5 text-center text-sm text-[var(--muted)] bg-black/30">
          <p>Built by Sanu Kumar • Signaturecoder</p>
        </footer>
      </body>
    </html>
  );
}
