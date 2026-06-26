"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
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

      animateHeroReveal(gsap, root);
      animateNarrativeReveal(gsap, ScrollTrigger, root);
      animateGapMeter(gsap, ScrollTrigger, root);
      animateFinalStamp(gsap, root);
    },
    { scope: rootRef },
  );

  return <div ref={rootRef}>{children}</div>;
}
