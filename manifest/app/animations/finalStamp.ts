import type { gsap } from "gsap";

export function animateFinalStamp(gsapInstance: typeof gsap, scope: Element) {
  gsapInstance.from(scope.querySelector("[data-final-stamp]"), {
    scale: 1.35,
    rotate: -4,
    duration: 0.7,
    ease: "back.out(1.4)",
    scrollTrigger: {
      trigger: scope.querySelector("[data-final-section]"),
      start: "top 62%",
    },
  });
}
