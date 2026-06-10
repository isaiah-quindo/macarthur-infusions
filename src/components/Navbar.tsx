"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const links = [
  { href: "#services", label: "Services" },
  { href: "#about", label: "About" },
  { href: "#why", label: "Why Us" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        open
          ? "bg-white shadow-[0_1px_0_0_rgba(12,31,44,0.06)]"
          : scrolled
          ? "bg-white/90 backdrop-blur-md shadow-[0_1px_0_0_rgba(12,31,44,0.06)]"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3 md:px-10">
        <a href="#top" className="flex items-center gap-3">
          <Image
            src="/logo.png"
            alt="Macarthur Infusions"
            width={48}
            height={48}
            priority
          />
          <span
            className={`font-display text-base font-semibold tracking-tight md:text-lg ${
              scrolled || open ? "text-brand-blue-dark" : "text-white"
            }`}
          >
            Macarthur <span className="text-brand-orange">Infusions</span>
          </span>
        </a>

        <nav className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className={`text-sm font-medium transition-colors ${
                scrolled
                  ? "text-brand-ink hover:text-brand-green"
                  : "text-white/90 hover:text-white"
              }`}
            >
              {l.label}
            </a>
          ))}
          <a
            href="#contact"
            className="rounded-full bg-brand-orange px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-brand-orange-soft hover:shadow-md"
          >
            Book an Appointment
          </a>
        </nav>

        <button
          aria-label="Toggle menu"
          onClick={() => setOpen((v) => !v)}
          className={`md:hidden inline-flex h-10 w-10 items-center justify-center rounded-full transition-colors ${
            scrolled || open ? "text-brand-ink" : "text-white"
          }`}
        >
          <svg
            width="22"
            height="22"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            className={`transition-transform duration-300 ease-out ${open ? "rotate-90" : "rotate-0"}`}
          >
            <path
              d="M4 7h16"
              className="origin-center transition-transform duration-300 ease-out"
              style={{ transform: open ? "translateY(5px) rotate(45deg)" : "none" }}
            />
            <path
              d="M4 12h16"
              className="transition-opacity duration-200 ease-out"
              style={{ opacity: open ? 0 : 1 }}
            />
            <path
              d="M4 17h16"
              className="origin-center transition-transform duration-300 ease-out"
              style={{ transform: open ? "translateY(-5px) rotate(-45deg)" : "none" }}
            />
          </svg>
        </button>
      </div>

      <div
        className={`md:hidden overflow-hidden bg-white border-brand-border transition-[max-height,opacity,border-top-width] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${
          open ? "max-h-96 opacity-100 border-t" : "max-h-0 opacity-0 border-t-0"
        }`}
      >
        <nav className="flex flex-col px-6 py-4 gap-1">
          {links.map((l, i) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              style={{ transitionDelay: open ? `${80 + i * 60}ms` : "0ms" }}
              className={`rounded-lg px-3 py-3 text-base font-medium text-brand-ink hover:bg-brand-mist transform transition-all duration-400 ease-out ${
                open ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-2"
              }`}
            >
              {l.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setOpen(false)}
            style={{ transitionDelay: open ? `${80 + links.length * 60}ms` : "0ms" }}
            className={`mt-2 rounded-full bg-brand-orange px-5 py-3 text-center text-sm font-semibold text-white transform transition-all duration-400 ease-out ${
              open ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-2"
            }`}
          >
            Book an Appointment
          </a>
        </nav>
      </div>
    </header>
  );
}
