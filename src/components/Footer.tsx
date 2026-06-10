import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-brand-blue-dark text-white">
      <div className="mx-auto max-w-7xl px-6 py-14 md:px-10">
        <div className="grid gap-10 md:grid-cols-12">
          <div className="md:col-span-5">
            <div className="flex items-center gap-3">
              <Image
                src="/logo.png"
                alt="Macarthur Infusions"
                width={56}
                height={56}
              />
              <div>
                <div className="font-display text-lg font-semibold">
                  Macarthur <span className="text-brand-orange">Infusions</span>
                </div>
                <div className="text-xs uppercase tracking-[0.16em] text-white/60">
                  IV Therapy & Wellness
                </div>
              </div>
            </div>
            <p className="mt-5 max-w-md text-sm leading-relaxed text-white/70">
              Nurse-led infusion therapy and wellness services for the
              Macarthur community, delivered with clinical excellence and
              genuine compassion.
            </p>
          </div>

          <div className="md:col-span-3">
            <div className="text-xs font-semibold uppercase tracking-[0.16em] text-white/60">
              Explore
            </div>
            <ul className="mt-4 space-y-2 text-sm">
              <li><a className="text-white/85 hover:text-brand-orange" href="#about">About</a></li>
              <li><a className="text-white/85 hover:text-brand-orange" href="#services">Services</a></li>
              <li><a className="text-white/85 hover:text-brand-orange" href="#why">Why Us</a></li>
              <li><a className="text-white/85 hover:text-brand-orange" href="#contact">Contact</a></li>
            </ul>
          </div>

          <div className="md:col-span-4">
            <div className="text-xs font-semibold uppercase tracking-[0.16em] text-white/60">
              Visit & Contact
            </div>
            <ul className="mt-4 space-y-2 text-sm text-white/85">
              <li>Suite 1, 67 Jacaranda Ave, Bradbury NSW 2560</li>
              <li>
                <a className="hover:text-brand-orange" href="tel:1300205970">
                  1300 205 970
                </a>
              </li>
              <li>
                <a
                  className="hover:text-brand-orange"
                  href="mailto:macarthurinfusions@outlook.com.au"
                >
                  macarthurinfusions@outlook.com.au
                </a>
              </li>
            </ul>
            <div className="mt-5 flex items-center gap-3">
              <a
                href="https://www.facebook.com/profile.php?id=61555645624579"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Macarthur Infusions on Facebook"
                className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/15 text-white/85 transition hover:border-brand-orange hover:text-brand-orange"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                  <path d="M13.5 21v-7h2.4l.4-3h-2.8V9.1c0-.9.3-1.5 1.6-1.5h1.3V4.9c-.3 0-1.1-.1-2-.1-2 0-3.4 1.2-3.4 3.5V11H8.5v3H11v7h2.5z" />
                </svg>
              </a>
              <a
                href="https://www.instagram.com/macarthur.infusions/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Macarthur Infusions on Instagram"
                className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/15 text-white/85 transition hover:border-brand-orange hover:text-brand-orange"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden>
                  <rect x="3" y="3" width="18" height="18" rx="5" />
                  <circle cx="12" cy="12" r="4" />
                  <circle cx="17.2" cy="6.8" r="1.1" fill="currentColor" stroke="none" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-start justify-between gap-3 border-t border-white/10 pt-6 text-xs text-white/55 md:flex-row md:items-center">
          <div>
            © {new Date().getFullYear()} Macarthur Infusions. All rights
            reserved.
          </div>
          <div>
            Designed by{" "}
            <a
              href="https://luciddesigns.com.au/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-white/80 underline-offset-2 transition hover:text-brand-orange hover:underline"
            >
              Lucid Designs
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
