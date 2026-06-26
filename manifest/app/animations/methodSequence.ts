import type { gsap } from "gsap";

export function animateMethodSequence(gsapInstance: typeof gsap, scope: Element) {
  const methodCards = scope.querySelectorAll("[data-method-card]");
  const offerCards = scope.querySelectorAll("[data-offer-card]");

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

  gsapInstance.from(offerCards, {
    y: 28,
    scale: 0.98,
    stagger: 0.1,
    duration: 0.75,
    ease: "power3.out",
    scrollTrigger: {
      trigger: scope.querySelector("[data-offers-section]"),
      start: "top 72%",
    },
  });
}
