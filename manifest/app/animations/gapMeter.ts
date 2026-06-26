import type { gsap } from "gsap";
import type { ScrollTrigger } from "gsap/ScrollTrigger";

export function animateGapMeter(
  gsapInstance: typeof gsap,
  ScrollTriggerPlugin: typeof ScrollTrigger,
  scope: Element,
) {
  const meters = scope.querySelectorAll("[data-gap-meter]");

  meters.forEach((meter) => {
    gsapInstance.fromTo(
      meter,
      { scaleX: 0.08 },
      {
        scaleX: 1,
        transformOrigin: "left center",
        ease: "none",
        scrollTrigger: {
          trigger: meter,
          start: "top 82%",
          end: "bottom 45%",
          scrub: true,
        } satisfies ScrollTrigger.Vars,
      },
    );
  });

  ScrollTriggerPlugin.refresh();
}
