import type { gsap } from "gsap";
import type { ScrollTrigger } from "gsap/ScrollTrigger";

export function animateBrandWatermark(
  gsapInstance: typeof gsap,
  ScrollTriggerPlugin: typeof ScrollTrigger,
  scope: Element,
) {
  const watermark = scope.querySelector("[data-brand-watermark]");
  const storyStart = scope.querySelector("[data-prelude-section]");
  const finalSection = scope.querySelector("[data-final-section]");

  if (!watermark || !storyStart || !finalSection) {
    return;
  }

  const isMobile = window.matchMedia("(max-width: 760px)").matches;

  gsapInstance.set(watermark, {
    autoAlpha: 0,
    y: isMobile ? 72 : 96,
    rotate: -8,
    scale: 0.96,
    filter: "blur(0.2px)",
  });

  const targetOpacity = isMobile ? 0.035 : 0.048;
  const startY = isMobile ? 72 : 96;
  const endY = isMobile ? -168 : -238;
  const clamp01 = (value: number) => Math.max(0, Math.min(1, value));

  const getAbsoluteTop = (element: Element) =>
    window.scrollY + element.getBoundingClientRect().top;

  const updateWatermark = () => {
    const viewportHeight = window.innerHeight;
    const scrollY = window.scrollY;
    const storyTop = getAbsoluteTop(storyStart);
    const finalTop = getAbsoluteTop(finalSection);
    const fadeInStart = storyTop - viewportHeight * 0.86;
    const fadeInEnd = storyTop - viewportHeight * 0.48;
    const fadeOutStart = finalTop - viewportHeight * 0.52;
    const fadeOutEnd = finalTop - viewportHeight * 0.28;
    const driftStart = storyTop - viewportHeight;
    const driftEnd = fadeOutEnd;

    const fadeInProgress = clamp01((scrollY - fadeInStart) / (fadeInEnd - fadeInStart));
    const fadeOutProgress = clamp01(
      (scrollY - fadeOutStart) / (fadeOutEnd - fadeOutStart),
    );
    const driftProgress = clamp01((scrollY - driftStart) / (driftEnd - driftStart));
    const opacity = targetOpacity * fadeInProgress * (1 - fadeOutProgress);
    const y = startY + (endY - startY) * driftProgress;

    gsapInstance.set(watermark, {
      autoAlpha: opacity,
      y,
    });
  };

  ScrollTriggerPlugin.create({
    trigger: storyStart,
    start: "top bottom",
    endTrigger: finalSection,
    end: "top 28%",
    scrub: true,
    onUpdate: updateWatermark,
    onRefresh: updateWatermark,
    onEnter: updateWatermark,
    onEnterBack: updateWatermark,
    onLeaveBack: () => gsapInstance.set(watermark, { autoAlpha: 0, y: startY }),
    onLeave: () => gsapInstance.set(watermark, { autoAlpha: 0, y: endY }),
  } satisfies ScrollTrigger.Vars);

  window.addEventListener("scroll", updateWatermark, { passive: true });
  window.addEventListener("resize", updateWatermark);
  updateWatermark();

  return () => {
    window.removeEventListener("scroll", updateWatermark);
    window.removeEventListener("resize", updateWatermark);
  };
}
