type Category = {
  title: string;
  blurb: string;
  items: string[];
  accent: "green" | "teal" | "blue" | "orange";
  icon: React.ReactNode;
};

const categories: Category[] = [
  {
    title: "IV Infusion Therapies",
    blurb:
      "Targeted intravenous drips formulated to restore hydration, energy, immunity, and overall vitality.",
    accent: "green",
    icon: <DropletIcon />,
    items: [
      "Iron Infusions",
      "Vitamin C Infusions",
      "Glutathione Infusions",
      "NAD+ Therapy",
      "Myers' Cocktail",
      "Recovery Drip",
      "Hydration Therapy",
      "Immunity Support Drip",
      "Energy & Vitality Drip",
      "Mental Boost Drip",
      "Performance & Recovery Drip",
      "Stress Recovery Drip",
      "Menopause Support Drip",
      "Beauty & Radiance Drip",
      "Metabolise (Weight Management) Drip",
    ],
  },
  {
    title: "Wellness & Nutrient Injections",
    blurb:
      "Convenient nutrient injections to top up essential vitamins and minerals between infusions.",
    accent: "teal",
    icon: <SyringeIcon />,
    items: [
      "Vitamin B12 Injection",
      "Biotin Injection",
      "Vitamin C Injection",
      "Glutathione Injection",
      "CoQ10 Injection",
      "MIC Injection (Methionine, Inositol & Choline)",
      "Magnesium Injection (where clinically appropriate)",
    ],
  },
  {
    title: "Women's Health & Healthy Ageing",
    blurb:
      "Tailored programs supporting hormonal balance, energy, and long-term vitality.",
    accent: "orange",
    icon: <BloomIcon />,
    items: [
      "Perimenopause & Menopause Support Infusions",
      "Energy and Fatigue Management",
      "Nutritional Wellness Programs",
      "Healthy Ageing Support",
    ],
  },
  {
    title: "Recovery & Performance",
    blurb:
      "Helping active bodies rebuild faster, for athletes, professionals, and busy lives alike.",
    accent: "blue",
    icon: <PulseIcon />,
    items: [
      "Athletic Recovery Infusions",
      "Muscle Recovery Support",
      "Hydration & Electrolyte Replacement",
      "Fatigue Management",
      "Immune System Support",
    ],
  },
  {
    title: "Beauty & Skin Health",
    blurb:
      "Inner-health treatments that show on the outside: radiance, clarity, and confidence.",
    accent: "green",
    icon: <SparkleIcon />,
    items: [
      "Glutathione Therapy",
      "Vitamin C Therapy",
      "Hair, Skin & Nails Support (Biotin-Based)",
      "Beauty and Radiance Infusions",
    ],
  },
  {
    title: "Clinical Services",
    blurb:
      "Comprehensive nurse-led assessments and personalised plans coordinated with your existing care team.",
    accent: "teal",
    icon: <StethoscopeIcon />,
    items: [
      "Nurse-Led Consultations",
      "Comprehensive Health Assessment",
      "Personalised Treatment Plans",
      "GP and Specialist Collaboration",
      "Ongoing Wellness Programs",
      "Membership Packages",
    ],
  },
];

const accentStyles: Record<
  Category["accent"],
  { ring: string; chip: string; iconBg: string; iconText: string; bullet: string }
> = {
  green: {
    ring: "hover:border-brand-green/40",
    chip: "bg-brand-green/10 text-brand-green",
    iconBg: "bg-brand-green/10",
    iconText: "text-brand-green",
    bullet: "bg-brand-green",
  },
  teal: {
    ring: "hover:border-brand-teal/40",
    chip: "bg-brand-teal/10 text-brand-teal",
    iconBg: "bg-brand-teal/10",
    iconText: "text-brand-teal",
    bullet: "bg-brand-teal",
  },
  blue: {
    ring: "hover:border-brand-blue/40",
    chip: "bg-brand-blue/10 text-brand-blue",
    iconBg: "bg-brand-blue/10",
    iconText: "text-brand-blue",
    bullet: "bg-brand-blue",
  },
  orange: {
    ring: "hover:border-brand-orange/40",
    chip: "bg-brand-orange/10 text-brand-orange",
    iconBg: "bg-brand-orange/10",
    iconText: "text-brand-orange",
    bullet: "bg-brand-orange",
  },
};

import Reveal from "./Reveal";

export default function Services() {
  return (
    <section id="services" className="relative bg-white py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <Reveal className="mx-auto max-w-3xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-brand-teal/30 bg-brand-teal/5 px-3.5 py-1.5 text-xs font-semibold uppercase tracking-[0.16em] text-brand-teal">
            <span className="h-1.5 w-1.5 rounded-full bg-brand-teal" />
            Our Services
          </div>
          <h2 className="mt-5 font-display text-3xl font-semibold leading-tight text-brand-blue-dark md:text-4xl lg:text-5xl">
            Comprehensive infusion therapy,
            <br className="hidden md:block" />{" "}
            <span className="italic text-brand-green">tailored to you.</span>
          </h2>
          <p className="mt-5 text-base leading-relaxed text-brand-muted md:text-lg">
            From foundational hydration and immune support to advanced wellness
            and recovery programs. Every treatment at Macarthur Infusions is
            prescribed, administered, and monitored by experienced clinical
            staff.
          </p>
        </Reveal>

        <Reveal
          className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3"
          stagger={0.1}
        >
          {categories.map((c) => {
            const a = accentStyles[c.accent];
            return (
              <article
                key={c.title}
                data-reveal-child
                className={`group relative flex flex-col rounded-2xl border border-brand-border bg-white p-7 shadow-[0_1px_0_0_rgba(12,31,44,0.04)] transition duration-300 hover:shadow-xl ${a.ring}`}
              >
                <div
                  className={`mb-5 inline-flex h-12 w-12 items-center justify-center rounded-xl ${a.iconBg} ${a.iconText}`}
                >
                  {c.icon}
                </div>
                <h3 className="font-display text-xl font-semibold text-brand-blue-dark">
                  {c.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-brand-muted">
                  {c.blurb}
                </p>

                <ul className="mt-5 space-y-2">
                  {c.items.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-2.5 text-sm text-brand-ink/85"
                    >
                      <span
                        className={`mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full ${a.bullet}`}
                      />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </article>
            );
          })}
        </Reveal>

        <Reveal className="mt-14 text-center" delay={0.05}>
          <p className="text-sm text-brand-muted">
            Ready to start? Our nurse-led team will guide you to the right
            treatment.
          </p>
          <a
            href="#contact"
            className="mt-3 inline-flex items-center gap-2 rounded-full bg-brand-blue-dark px-6 py-3 text-sm font-semibold text-white transition hover:bg-brand-blue"
          >
            Book an appointment
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4">
              <path d="M5 12h14M13 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
        </Reveal>
      </div>
    </section>
  );
}

function DropletIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 3s-6 7-6 11a6 6 0 0 0 12 0c0-4-6-11-6-11z" />
    </svg>
  );
}
function SyringeIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M18 2l4 4" />
      <path d="M15 5l4 4" />
      <path d="M19 9 9 19" />
      <path d="M14 4l6 6-9 9H5v-6l9-9z" />
      <path d="M4 20l-2 2" />
    </svg>
  );
}
function BloomIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="2.5" />
      <path d="M12 2v4M12 18v4M2 12h4M18 12h4M5 5l2.8 2.8M16.2 16.2L19 19M5 19l2.8-2.8M16.2 7.8L19 5" />
    </svg>
  );
}
function PulseIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 12h4l3-7 4 14 3-7h4" />
    </svg>
  );
}
function SparkleIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 3l1.7 4.8L18.5 9.5 13.7 11.2 12 16l-1.7-4.8L5.5 9.5l4.8-1.7L12 3z" />
      <path d="M19 16l.8 2L22 19l-2.2.8L19 22l-.8-2.2L16 19l2.2-.8L19 16z" />
    </svg>
  );
}
function StethoscopeIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M6 3v6a5 5 0 0 0 10 0V3" />
      <path d="M4 3h4M14 3h4" />
      <path d="M11 14v3a4 4 0 0 0 8 0v-1" />
      <circle cx="19" cy="14" r="2" />
    </svg>
  );
}
