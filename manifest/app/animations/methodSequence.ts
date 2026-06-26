import type { gsap } from "gsap";

export function animateMethodSequence(gsapInstance: typeof gsap, scope: Element) {
  const methodCards = scope.querySelectorAll("[data-method-card]");

  gsapInstance.from(methodCards, {
    y: 34,
    stagger: 0.12,
    duration: 0.8,
    ease: "power3.out",
    scrollTrigger: {
      trigger: scope.querySelector("[data-method-section]"),
      start: "top 72%",
    },
  });
}
