"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

type RevealProps = {
  children: React.ReactNode;
  as?: keyof React.JSX.IntrinsicElements;
  className?: string;
  /** Stagger child element animations by this many seconds. Children matched via [data-reveal-child]. */
  stagger?: number;
  /** Animation delay in seconds. */
  delay?: number;
  /** Pixels to translate up from. */
  y?: number;
  /** Animation duration in seconds. */
  duration?: number;
  /** Start trigger position, GSAP syntax. */
  start?: string;
};

export default function Reveal({
  children,
  as: Tag = "div",
  className,
  stagger,
  delay = 0,
  y = 28,
  duration = 0.9,
  start = "top 85%",
}: RevealProps) {
  const ref = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    if (prefersReducedMotion) {
      gsap.set(el, { opacity: 1, y: 0 });
      const kids = el.querySelectorAll<HTMLElement>("[data-reveal-child]");
      gsap.set(kids, { opacity: 1, y: 0 });
      return;
    }

    const ctx = gsap.context(() => {
      const targets = stagger
        ? el.querySelectorAll<HTMLElement>("[data-reveal-child]")
        : [el];

      gsap.set(targets, { opacity: 0, y });

      gsap.to(targets, {
        opacity: 1,
        y: 0,
        duration,
        delay,
        ease: "power3.out",
        stagger: stagger ?? 0,
        scrollTrigger: {
          trigger: el,
          start,
          once: true,
        },
      });
    }, el);

    return () => ctx.revert();
  }, [stagger, delay, y, duration, start]);

  const Component = Tag as React.ElementType;
  return (
    <Component
      ref={ref as React.RefObject<HTMLElement>}
      className={className}
    >
      {children}
    </Component>
  );
}
