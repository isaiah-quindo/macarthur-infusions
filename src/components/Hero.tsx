"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function Hero() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const overlayRef = useRef<HTMLDivElement | null>(null);
  const contentRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const video = videoRef.current;
    const overlay = overlayRef.current;
    const content = contentRef.current;
    if (!section || !video || !overlay || !content) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const ctx = gsap.context(() => {
      gsap.to(video, {
        yPercent: 18,
        ease: "none",
        scrollTrigger: {
          trigger: section,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });

      gsap.to(overlay, {
        yPercent: 10,
        ease: "none",
        scrollTrigger: {
          trigger: section,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });

      gsap.to(content, {
        yPercent: -8,
        ease: "none",
        scrollTrigger: {
          trigger: section,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="top"
      className="relative isolate flex min-h-[100svh] w-full items-center overflow-hidden bg-brand-blue-dark"
    >
      <video
        ref={videoRef}
        className="absolute inset-0 -z-20 h-full w-full object-cover will-change-transform"
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        poster="/bg-poster.jpg"
      >
        <source src="/bg-video.mp4" type="video/mp4" />
      </video>

      <div
        ref={overlayRef}
        className="hero-overlay absolute inset-0 -z-10 will-change-transform"
      />

      <div
        ref={contentRef}
        className="mx-auto w-full max-w-7xl px-6 pt-32 pb-20 md:px-10 md:pt-40 md:pb-28 will-change-transform"
      >
        <div className="max-w-3xl">
          <p className="fade-up inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-4 py-1.5 text-xs font-medium uppercase tracking-[0.16em] text-white backdrop-blur">
            <span className="h-1.5 w-1.5 rounded-full bg-brand-orange" />
            Nurse-Led IV Therapy & Wellness Clinic
          </p>

          <h1 className="fade-up-delay-1 mt-6 font-display text-4xl font-semibold leading-[1.05] text-white sm:text-5xl md:text-6xl lg:text-7xl">
            Restore, replenish, and{" "}
            <span className="italic text-brand-orange-soft">thrive</span> from the
            inside out.
          </h1>

          <p className="fade-up-delay-2 mt-6 max-w-2xl text-base leading-relaxed text-white/85 md:text-lg">
            Professional infusion therapy delivered with clinical excellence and
            genuine care. Our nurse-led clinic in Bradbury combines almost 20
            years of experience with evidence-based treatments, designed around
            your health, your goals, and your wellbeing.
          </p>

          <div className="fade-up-delay-3 mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-brand-orange px-7 py-3.5 text-sm font-semibold text-white shadow-lg shadow-brand-orange/20 transition hover:bg-brand-orange-soft"
            >
              Book a Consultation
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4">
                <path d="M5 12h14M13 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
            <a
              href="#services"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-white/40 bg-white/10 px-7 py-3.5 text-sm font-semibold text-white backdrop-blur transition hover:bg-white/20"
            >
              Explore Our Services
            </a>
          </div>

          <div className="fade-up-delay-3 mt-14 grid max-w-2xl grid-cols-2 gap-x-8 gap-y-5 border-t border-white/15 pt-8 md:grid-cols-3">
            <Stat value="20yrs" label="Clinical Experience" />
            <Stat value="100%" label="Nurse-Led Care" />
            <Stat value="15+" label="Infusion Therapies" />
          </div>
        </div>
      </div>

      <a
        href="#about"
        aria-label="Scroll to next section"
        className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 text-white/70 transition hover:text-white md:block"
      >
        <span className="flex h-10 w-6 items-start justify-center rounded-full border border-white/40 pt-1.5">
          <span className="h-1.5 w-1 rounded-full bg-white/70 animate-bounce" />
        </span>
      </a>
    </section>
  );
}

function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div>
      <div className="font-display text-2xl font-semibold text-white md:text-3xl">
        {value}
      </div>
      <div className="mt-1 text-xs uppercase tracking-[0.14em] text-white/70">
        {label}
      </div>
    </div>
  );
}
