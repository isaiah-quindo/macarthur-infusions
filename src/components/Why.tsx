const points = [
  {
    title: "Nurse-led care",
    body: "Almost 20 years of frontline clinical experience guiding every consultation and treatment.",
  },
  {
    title: "Evidence-based therapies",
    body: "Protocols grounded in current clinical research, not trends or guesswork.",
  },
  {
    title: "Personalised treatment plans",
    body: "Every infusion is tailored to your goals, your history, and your unique physiology.",
  },
  {
    title: "Patient safety & comfort",
    body: "Rigorous safety standards in a calm, professional, and welcoming clinic environment.",
  },
  {
    title: "Collaborative & holistic",
    body: "We work alongside your GP and specialists to support your overall wellness journey.",
  },
  {
    title: "Ongoing wellness support",
    body: "Membership packages and ongoing programs designed for long-term, sustainable health.",
  },
];

import Reveal from "./Reveal";

export default function Why() {
  return (
    <section
      id="why"
      className="relative overflow-hidden bg-brand-blue-dark py-24 md:py-32"
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.18]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 20% 10%, rgba(31,138,74,0.45), transparent 50%), radial-gradient(circle at 85% 80%, rgba(239,122,42,0.35), transparent 45%)",
        }}
      />

      <div className="relative mx-auto max-w-7xl px-6 md:px-10">
        <div className="grid items-start gap-14 lg:grid-cols-12 lg:gap-16">
          <Reveal className="lg:col-span-5">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-3.5 py-1.5 text-xs font-semibold uppercase tracking-[0.16em] text-white/90">
              <span className="h-1.5 w-1.5 rounded-full bg-brand-orange" />
              Why Choose Us
            </div>
            <h2 className="mt-5 font-display text-3xl font-semibold leading-tight text-white md:text-4xl lg:text-5xl">
              Clinical excellence meets{" "}
              <span className="italic text-brand-orange-soft">
                genuine care.
              </span>
            </h2>
            <p className="mt-5 text-base leading-relaxed text-white/75 md:text-lg">
              Macarthur Infusions exists to help our community feel better,
              recover faster, and thrive, through safe, professional infusion
              therapy delivered with the rigour and warmth you deserve.
            </p>

            <div className="mt-10 rounded-2xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur">
              <p className="font-display text-xl italic leading-snug text-white md:text-2xl">
                Helping our community feel better, recover faster, and thrive
                through safe, professional infusion therapy.
              </p>
            </div>
          </Reveal>

          <Reveal className="lg:col-span-7" delay={0.1} stagger={0.08}>
            <div className="grid gap-4 sm:grid-cols-2">
              {points.map((p, i) => (
                <div
                  key={p.title}
                  data-reveal-child
                  className="group relative rounded-2xl border border-white/10 bg-white/[0.04] p-6 transition hover:border-brand-orange/40 hover:bg-white/[0.07]"
                >
                  <div className="flex items-center gap-3">
                    <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-brand-orange/15 font-display text-sm font-semibold text-brand-orange-soft">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <h3 className="font-display text-lg font-semibold text-white">
                      {p.title}
                    </h3>
                  </div>
                  <p className="mt-3 text-sm leading-relaxed text-white/75">
                    {p.body}
                  </p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
