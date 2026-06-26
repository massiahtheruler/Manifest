import type { gsap } from "gsap";

export function animateProofFiles(gsapInstance: typeof gsap, scope: Element) {
  gsapInstance.from(scope.querySelectorAll("[data-proof-card]"), {
    y: 36,
    rotateX: -6,
    transformOrigin: "top center",
    stagger: 0.11,
    duration: 0.8,
    ease: "power3.out",
    scrollTrigger: {
      trigger: scope.querySelector("[data-proof-section]"),
      start: "top 70%",
    },
  });
}
