import type { gsap } from "gsap";

export function animateHeroReveal(gsapInstance: typeof gsap, scope: Element) {
  const marks = scope.querySelectorAll("[data-hero-mark]");
  const fragments = scope.querySelectorAll("[data-hero-fragment]");
  const logo = scope.querySelector("[data-hero-logo]");
  const lines = scope.querySelectorAll("[data-hero-line]");
  const symbol = scope.querySelector("[data-hero-symbol]");
  const ctas = scope.querySelector("[data-hero-actions]");
  const veil = scope.querySelector("[data-hero-veil]");
  const cue = scope.querySelector(".hero-section__next");

  const timeline = gsapInstance.timeline({ defaults: { ease: "power3.out" } });

  timeline
    .to(veil, {
      autoAlpha: 0,
      duration: 0.9,
      ease: "power2.inOut",
    })
    .from(marks, {
      autoAlpha: 0,
      x: (_index, target) => Number((target as HTMLElement).dataset.x ?? 0),
      y: (_index, target) => Number((target as HTMLElement).dataset.y ?? 0),
      rotate: (_index, target) =>
        Number((target as HTMLElement).dataset.rotate ?? 0),
      filter: "blur(18px)",
      stagger: 0.045,
      duration: 0.9,
    }, 0.12)
    .from(
      lines,
      {
        autoAlpha: 0,
        y: (_index) => (_index % 2 === 0 ? 42 : -34),
        x: (_index) => (_index === 1 ? 58 : -34),
        filter: "blur(14px)",
        stagger: 0.12,
        duration: 0.72,
      },
      0.22,
    )
    .to(
      marks,
      {
        autoAlpha: 0.38,
        x: 0,
        y: 0,
        rotate: 0,
        filter: "blur(0px)",
        stagger: 0.025,
        duration: 0.65,
      },
      0.42,
    )
    .from(
      symbol,
      {
        autoAlpha: 0,
        scale: 0.82,
        rotate: -8,
        filter: "blur(16px)",
        duration: 0.7,
      },
      0.46,
    )
    .from(fragments, {
      autoAlpha: 0,
      y: 24,
      x: (_index, target) => Number((target as HTMLElement).dataset.shiftX ?? 0),
      rotate: (_index, target) =>
        Number((target as HTMLElement).dataset.rotate ?? 0),
      filter: "blur(14px)",
      stagger: 0.08,
      duration: 0.8,
    }, 0.58)
    .from(
      logo,
      {
        autoAlpha: 0,
        scale: 0.94,
        y: 18,
        filter: "blur(10px)",
        duration: 0.7,
      },
      0.72,
    )
    .from(
      ctas,
      {
        autoAlpha: 0,
        y: 18,
        duration: 0.55,
      },
      0.95,
    )
    .from(
      cue,
      {
        autoAlpha: 0,
        y: 14,
        duration: 0.55,
      },
      1.15,
    );
}
