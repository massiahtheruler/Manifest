"use client";

import { useRef } from "react";
import gsap from "gsap";
import Lenis from "lenis";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { animateBrandWatermark } from "../animations/brandWatermark";
import { animateFinalStamp } from "../animations/finalStamp";
import { animateGapMeter } from "../animations/gapMeter";
import { animateHeroReveal } from "../animations/heroReveal";
import { animateNarrativeReveal } from "../animations/narrativeReveal";

gsap.registerPlugin(ScrollTrigger, useGSAP);

export function ManifestMotion({ children }: { children: React.ReactNode }) {
  const rootRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const root = rootRef.current;

      if (!root || window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
        return;
      }

      const lenis = new Lenis({
        anchors: true,
        lerp: 0.075,
        smoothWheel: true,
        wheelMultiplier: 0.78,
        touchMultiplier: 1.08,
      });
      const raf = (time: number) => {
        lenis.raf(time * 1000);
      };

      lenis.on("scroll", ScrollTrigger.update);
      gsap.ticker.add(raf);
      gsap.ticker.lagSmoothing(0);

      animateHeroReveal(gsap, root);
      const cleanupBrandWatermark = animateBrandWatermark(gsap, ScrollTrigger, root);
      animateNarrativeReveal(gsap, ScrollTrigger, root);
      animateGapMeter(gsap, ScrollTrigger, root);
      animateFinalStamp(gsap, root);

      return () => {
        cleanupBrandWatermark?.();
        gsap.ticker.remove(raf);
        lenis.destroy();
      };
    },
    { scope: rootRef },
  );

  return <div ref={rootRef}>{children}</div>;
}
