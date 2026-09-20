import React from "react";
import ContactForm from "@/components/ContactForm";

const ContactPage = () => {
  return (
    <div className="max-w-6xl mx-auto px-6 py-12 grid md:grid-cols-2 gap-8">
      <div>
        <h1 className="text-3xl font-semibold">Contact Me</h1>
        <p className="mt-2 text-[var(--muted)]">I'm open to discussing critical business problems and consulting opportunities. Share your challenge and I will get back to you.</p>

        <div className="mt-6 p-6 section-card max-w-xl">
          <ContactForm />
        </div>
      </div>

      <aside className="p-6 section-card">
        <p className="font-medium">Email</p>
        <a className="text-[var(--primary)]" href="mailto:snkmr13@gmail.com">snkmr13@gmail.com</a>

        <div className="mt-4">
          <p className="font-medium">Phone</p>
          <p className="text-[var(--muted)]">+91 96611 54476</p>
        </div>

        <div className="mt-4">
          <p className="font-medium">Links</p>
          <ul className="mt-2 space-y-2">
            <li>
              <a href="https://github.com/signaturecoder" target="_blank" rel="noreferrer" className="text-[var(--primary)]">GitHub</a>
            </li>
            <li>
              <a href="https://linkedin.com/in/signaturecoder" target="_blank" rel="noreferrer" className="text-[var(--primary)]">LinkedIn</a>
            </li>
          </ul>
        </div>
      </aside>
    </div>
  );
};

export default ContactPage;