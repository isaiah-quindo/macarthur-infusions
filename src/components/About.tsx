import Image from "next/image";
import Reveal from "./Reveal";

export default function About() {
  return (
    <section id="about" className="relative bg-brand-sand py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <div className="grid items-stretch gap-14 lg:grid-cols-12 lg:gap-20">
          <Reveal className="flex flex-col lg:col-span-5">
            <SectionEyebrow>About the Clinic</SectionEyebrow>
            <h2 className="mt-4 font-display text-3xl font-semibold leading-tight text-brand-blue-dark md:text-4xl lg:text-5xl">
              Meet the founder.
              <br />
              <span className="italic text-brand-green text-2xl md:text-3xl lg:text-4xl">Vanessa Mordeno, RN</span>
            </h2>
            <p className="mt-3 text-sm font-medium uppercase tracking-[0.14em] text-brand-muted">
              Founder & Clinical Director
            </p>

            <div className="relative mt-8 aspect-[4/5] flex-1 overflow-hidden rounded-2xl border border-brand-border bg-white shadow-sm lg:aspect-auto">
              <Image
                src="/vanessa.jpeg"
                alt="Vanessa Mordeno, RN, Founder & Clinical Director of Macarthur Infusions"
                fill
                sizes="(min-width: 1024px) 40vw, 100vw"
                className="object-cover object-top"
              />
            </div>

          </Reveal>

          <Reveal className="lg:col-span-7" delay={0.1}>
            <div className="space-y-6 text-base leading-relaxed text-brand-ink/85 md:text-lg">
              <p>
                Vanessa Mordeno is a Registered Nurse with{" "}
                <strong className="text-brand-blue-dark">
                  almost 20 years of clinical experience
                </strong>{" "}
                and an extensive background in infusion therapy. Throughout her
                nursing career, she has been dedicated to delivering safe,
                evidence-based, and patient-centred care across a variety of
                healthcare settings.
              </p>
              <p>
                Driven by a passion for helping people achieve optimal health
                and wellbeing, Vanessa established Macarthur Infusions with a
                clear vision: to provide professional, accessible, and
                high-quality infusion therapy services within the local
                community. Her approach combines clinical excellence with
                genuine compassion, ensuring every client feels supported,
                informed, and cared for throughout their treatment journey.
              </p>
              <p>
                At the heart of Macarthur Infusions is Vanessa's commitment to
                patient safety, comfort, and positive health outcomes. She
                believes successful infusion therapy goes beyond treatment
                alone. It is about creating a safe healing environment where
                patients feel empowered, respected, and confident in their
                care.
              </p>
            </div>

            <div className="mt-10 rounded-2xl border border-brand-border bg-white p-7 shadow-sm">
              <svg
                className="h-7 w-7 text-brand-orange"
                viewBox="0 0 24 24"
                fill="currentColor"
                aria-hidden
              >
                <path d="M9.4 6C5.9 6 3 8.9 3 12.4V18h6v-6H6.1c.4-1.6 1.8-2.8 3.4-2.8V6zm9 0c-3.5 0-6.4 2.9-6.4 6.4V18h6v-6h-2.9c.4-1.6 1.8-2.8 3.4-2.8V6z" />
              </svg>
              <p className="mt-4 font-display text-xl leading-snug text-brand-blue-dark md:text-2xl">
                My goal is to ensure every patient receives safe, professional,
                and compassionate care while supporting them on their journey
                toward better health and wellbeing.
              </p>
              <p className="mt-5 text-sm font-medium text-brand-muted">
                Vanessa Mordeno, RN
              </p>
            </div>

            <div className="mt-10 grid gap-4 sm:grid-cols-2">
              <Pillar
                title="Clinical Standards"
                body="Evidence-based protocols, rigorous safety checks, and personalised treatment plans."
              />
              <Pillar
                title="Compassionate Care"
                body="A welcoming, professional environment where every patient feels heard and respected."
              />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function SectionEyebrow({ children }: { children: React.ReactNode }) {
  return (
    <div className="inline-flex items-center gap-2 self-start rounded-full border border-brand-green/30 bg-brand-green/5 px-3.5 py-1.5 text-xs font-semibold uppercase tracking-[0.16em] text-brand-green">
      <span className="h-1.5 w-1.5 rounded-full bg-brand-green" />
      {children}
    </div>
  );
}

function Pillar({ title, body }: { title: string; body: string }) {
  return (
    <div className="rounded-xl border border-brand-border bg-white/70 p-5">
      <h3 className="font-display text-lg font-semibold text-brand-blue-dark">
        {title}
      </h3>
      <p className="mt-2 text-sm leading-relaxed text-brand-muted">{body}</p>
    </div>
  );
}
