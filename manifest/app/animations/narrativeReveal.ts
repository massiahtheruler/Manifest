import type { gsap } from "gsap";
import type { ScrollTrigger } from "gsap/ScrollTrigger";

function revealVars(offset = 54) {
  return {
    autoAlpha: 0,
    y: offset,
    filter: "blur(16px)",
  };
}

function clearVars() {
  return {
    autoAlpha: 1,
    y: 0,
    filter: "blur(0px)",
  };
}

export function animateNarrativeReveal(
  gsapInstance: typeof gsap,
  ScrollTriggerPlugin: typeof ScrollTrigger,
  scope: Element,
) {
  const prelude = scope.querySelector("[data-prelude-section]");
  const preludeStage = scope.querySelector("[data-prelude-stage]");
  const preludeBeats = scope.querySelectorAll("[data-prelude-beat]");
  const preludeRule = scope.querySelector("[data-prelude-rule]");
  const preludeEye = scope.querySelector("[data-prelude-eye]");

  if (prelude && preludeStage && preludeBeats.length) {
    const preludeTimeline = gsapInstance.timeline({
      scrollTrigger: {
        trigger: prelude,
        start: "top top",
        end: "bottom bottom",
        scrub: 0.75,
        pin: preludeStage,
        anticipatePin: 1,
      } satisfies ScrollTrigger.Vars,
    });

    gsapInstance.set(preludeBeats, { autoAlpha: 0, y: 60, filter: "blur(18px)" });
    gsapInstance.set(preludeRule, { scaleY: 0, transformOrigin: "top center" });
    gsapInstance.set(preludeEye, { scale: 0.72, rotate: -14, autoAlpha: 0.25 });

    preludeTimeline
      .to(preludeRule, { scaleY: 1, duration: 0.35, ease: "none" }, 0)
      .to(preludeEye, { scale: 1, rotate: 0, autoAlpha: 0.86, duration: 0.45 }, 0.05);

    preludeBeats.forEach((beat, index) => {
      const start = index * 0.65;
      preludeTimeline
        .to(
          beat,
          {
            autoAlpha: 1,
            y: 0,
            filter: "blur(0px)",
            duration: 0.34,
            ease: "power2.out",
          },
          start,
        )
        .to(
          beat,
          {
            autoAlpha: index === preludeBeats.length - 1 ? 1 : 0,
            y: index === preludeBeats.length - 1 ? 0 : -38,
            filter:
              index === preludeBeats.length - 1 ? "blur(0px)" : "blur(12px)",
            duration: 0.32,
            ease: "power2.in",
          },
          start + 0.42,
        );
    });
  }

  const assembly = scope.querySelector("[data-assembly-section]");
  const assemblyStage = scope.querySelector("[data-assembly-stage]");
  const assemblyIdea = scope.querySelector("[data-assembly-idea]");
  const assemblyIdeaLetters = scope.querySelectorAll("[data-assembly-idea-letter]");
  const assemblyFragments = scope.querySelectorAll("[data-assembly-fragment]");
  const assemblyIdentity = scope.querySelector("[data-assembly-identity]");
  const assemblySystem = scope.querySelector("[data-assembly-system]");
  const assemblyCopy = scope.querySelector("[data-assembly-copy]");
  const assemblyLogo = scope.querySelector("[data-assembly-logo]");

  if (assembly && assemblyStage && assemblyFragments.length && assemblySystem) {
    const fragmentTargets = [
      { x: -390, y: -245, rotate: -46 },
      { x: 370, y: -228, rotate: 38 },
      { x: -335, y: 230, rotate: 28 },
      { x: 415, y: 205, rotate: -34 },
      { x: -92, y: -325, rotate: 58 },
      { x: 118, y: 315, rotate: -52 },
      { x: 0, y: 0, rotate: -12 },
    ];
    const ideaBreak = [
      { x: -360, y: -120, rotate: -42 },
      { x: -118, y: 180, rotate: 28 },
      { x: 118, y: -170, rotate: -24 },
      { x: 342, y: 136, rotate: 46 },
    ];

    const assemblyTimeline = gsapInstance.timeline({
      scrollTrigger: {
        trigger: assembly,
        start: "top top",
        end: "bottom bottom",
        scrub: 0.8,
        pin: assemblyStage,
        anticipatePin: 1,
      } satisfies ScrollTrigger.Vars,
    });

    gsapInstance.set(assemblyIdea, {
      autoAlpha: 1,
      scale: 1,
      filter: "blur(0px)",
    });
    gsapInstance.set(assemblyIdeaLetters, {
      display: "inline-block",
      x: 0,
      y: 0,
      rotate: 0,
      filter: "blur(0px)",
    });
    gsapInstance.set(assemblyFragments, {
      autoAlpha: 0,
      x: (index) => (fragmentTargets[index]?.x ?? 0) * 1.35,
      y: (index) => (fragmentTargets[index]?.y ?? 0) * 1.35,
      rotate: (index) =>
        (fragmentTargets[index]?.rotate ?? 0) + (index % 2 === 0 ? -80 : 80),
      filter: "blur(18px)",
      scale: 0.82,
    });
    gsapInstance.set(assemblyIdentity, {
      autoAlpha: 0,
      scale: 0.84,
      letterSpacing: "0.42em",
      filter: "blur(22px)",
    });
    gsapInstance.set(assemblySystem, {
      autoAlpha: 0,
      scale: 0.78,
      rotate: -8,
      filter: "blur(18px)",
    });
    gsapInstance.set(assemblyCopy, {
      autoAlpha: 0,
      y: 48,
      filter: "blur(14px)",
    });

    assemblyTimeline
      .to(assemblyIdeaLetters, {
        x: (index) => ideaBreak[index]?.x ?? 0,
        y: (index) => ideaBreak[index]?.y ?? 0,
        rotate: (index) => ideaBreak[index]?.rotate ?? 0,
        autoAlpha: 0,
        filter: "blur(20px)",
        stagger: 0.035,
        duration: 0.44,
        ease: "power3.inOut",
      })
      .to(
        assemblyIdea,
        {
          autoAlpha: 0,
          scale: 1.16,
          filter: "blur(18px)",
          duration: 0.25,
          ease: "power2.in",
        },
        "<+0.18",
      )
      .to(assemblyFragments, {
        autoAlpha: 0.82,
        x: (index) => (fragmentTargets[index]?.x ?? 0) * 1.72,
        y: (index) => (fragmentTargets[index]?.y ?? 0) * 1.72,
        rotate: (index) =>
          (fragmentTargets[index]?.rotate ?? 0) + (index % 2 === 0 ? -118 : 118),
        filter: "blur(8px)",
        scale: 0.95,
        stagger: 0.045,
        duration: 0.42,
        ease: "power2.out",
      }, "<+0.12")
      .to(assemblyFragments, {
        autoAlpha: 1,
        x: (index) => fragmentTargets[index]?.x ?? 0,
        y: (index) => fragmentTargets[index]?.y ?? 0,
        rotate: (index) => fragmentTargets[index]?.rotate ?? 0,
        filter: "blur(1px)",
        scale: 1,
        stagger: 0.035,
        duration: 0.46,
        ease: "power3.out",
      })
      .to(assemblyFragments, {
        x: 0,
        y: 0,
        rotate: 0,
        scale: (index) => (index === 6 ? 1.18 : 0.72),
        autoAlpha: (index) => (index === 6 ? 0.22 : 0.1),
        filter: "blur(7px)",
        duration: 0.56,
        ease: "back.out(1.7)",
      })
      .to(
        assemblyIdentity,
        {
          autoAlpha: 1,
          scale: 1,
          letterSpacing: "0.08em",
          filter: "blur(0px)",
          duration: 0.5,
          ease: "power3.out",
        },
        ">-0.34",
      )
      .to(
        assemblyFragments,
        {
          autoAlpha: 0,
          scale: 0.64,
          filter: "blur(18px)",
          duration: 0.34,
          ease: "power2.inOut",
        },
        "<+0.16",
      )
      .to(
        assemblySystem,
        {
          autoAlpha: 1,
          scale: 1,
          rotate: 0,
          filter: "blur(0px)",
          duration: 0.42,
          ease: "power3.out",
        },
        ">-0.18",
      )
      .to(
        assemblyIdentity,
        {
          autoAlpha: 0.16,
          x: -118,
          scale: 1.12,
          filter: "blur(10px)",
          duration: 0.34,
          ease: "power2.out",
        },
        "<+0.04",
      )
      .to(
        assemblyCopy,
        {
          autoAlpha: 1,
          y: 0,
          filter: "blur(0px)",
          duration: 0.42,
          ease: "power2.out",
        },
        ">-0.08",
      )
      .to(
        [assemblySystem, assemblyLogo, assemblyIdentity].filter(Boolean),
        {
          autoAlpha: 0.34,
          x: -80,
          filter: "blur(8px)",
          duration: 0.32,
          ease: "power2.out",
        },
        "<+0.06",
      );
  }

  scope.querySelectorAll("[data-story-section]").forEach((section) => {
    const orderedReveals = [
      section.querySelector('[data-reveal="index"]'),
      section.querySelector('[data-reveal="headline"]'),
      section.querySelector('[data-reveal="copy"]'),
      section.querySelector('[data-reveal="visual"]'),
      section.querySelector('[data-reveal="items"]'),
      section.querySelector('[data-reveal="cta"]'),
    ].filter(Boolean);

    if (!orderedReveals.length) {
      return;
    }

    const timeline = gsapInstance.timeline({
      scrollTrigger: {
        trigger: section,
        start: "top 78%",
        end: "top 22%",
        scrub: 0.7,
      } satisfies ScrollTrigger.Vars,
    });

    gsapInstance.set(orderedReveals, revealVars());
    timeline.to(orderedReveals, {
      ...clearVars(),
      stagger: 0.16,
      duration: 0.5,
      ease: "power2.out",
    });
  });

  const methodSection = scope.querySelector("[data-method-section]");
  const methodTrack = scope.querySelector("[data-method-track]");
  const methodInner = scope.querySelector("[data-method-inner]");
  const desktopMotion = window.matchMedia("(min-width: 981px)").matches;

  if (methodSection && methodTrack && methodInner && desktopMotion) {
    const cards = methodInner.querySelectorAll("[data-method-card]");
    gsapInstance.set(cards, {
      autoAlpha: 0.28,
      y: 44,
      scale: 0.94,
      filter: "blur(10px)",
    });

    const horizontalMethodTween = gsapInstance.to(methodInner, {
      x: () =>
        -Math.max(
          0,
          (methodInner as HTMLElement).scrollWidth -
            (methodTrack as HTMLElement).clientWidth,
        ),
      ease: "none",
      scrollTrigger: {
        trigger: methodSection,
        start: "top top",
        end: () => `+=${(methodInner as HTMLElement).scrollWidth}`,
        scrub: 0.8,
        pin: true,
        invalidateOnRefresh: true,
        anticipatePin: 1,
      } satisfies ScrollTrigger.Vars,
    });

    cards.forEach((card, index) => {
      gsapInstance.to(card, {
        autoAlpha: 1,
        y: 0,
        scale: 1,
        filter: "blur(0px)",
        "--method-step-glow": index === 0 ? 0.42 : 0.28,
        ease: "power2.out",
        scrollTrigger: {
          trigger: card,
          containerAnimation: horizontalMethodTween,
          start: "left 72%",
          end: "center 45%",
          scrub: true,
        } satisfies ScrollTrigger.Vars,
      });
    });
  } else {
    scope.querySelectorAll("[data-method-card]").forEach((card, index) => {
      gsapInstance.fromTo(
        card,
        {
          autoAlpha: 0,
          y: 92,
          scale: 0.96,
          filter: "blur(18px)",
          clipPath: "inset(18% 0% 18% 0%)",
        },
        {
          autoAlpha: 1,
          y: 0,
          scale: 1,
          filter: "blur(0px)",
          clipPath: "inset(0% 0% 0% 0%)",
          ease: "power3.out",
          scrollTrigger: {
            trigger: card,
            start: "top 82%",
            end: "top 48%",
            scrub: 0.55,
          } satisfies ScrollTrigger.Vars,
        },
      );

      gsapInstance.to(card, {
        "--method-step-glow": index === 0 ? 0.42 : 0.26,
        scrollTrigger: {
          trigger: card,
          start: "top 62%",
          end: "bottom 42%",
          scrub: true,
        } satisfies ScrollTrigger.Vars,
      });
    });
  }

  const methodRail = scope.querySelector("[data-method-rail]");
  if (methodRail) {
    gsapInstance.fromTo(
      methodRail,
      { scaleY: 0 },
      {
        scaleY: 1,
        transformOrigin: "top center",
        ease: "none",
        scrollTrigger: {
          trigger: scope.querySelector("[data-method-section]"),
          start: "top 68%",
          end: "bottom 55%",
          scrub: true,
        } satisfies ScrollTrigger.Vars,
      },
    );
  }

  scope.querySelectorAll("[data-offer-card], [data-proof-card], .audience-list li").forEach(
    (item) => {
      gsapInstance.fromTo(
        item,
        {
          autoAlpha: 0,
          y: 46,
          filter: "blur(12px)",
          clipPath: "inset(12% 0% 12% 0%)",
        },
        {
          autoAlpha: 1,
          y: 0,
          filter: "blur(0px)",
          clipPath: "inset(0% 0% 0% 0%)",
          ease: "power2.out",
          scrollTrigger: {
            trigger: item,
            start: "top 84%",
            end: "top 58%",
            scrub: 0.5,
          } satisfies ScrollTrigger.Vars,
        },
      );
    },
  );

  ScrollTriggerPlugin.refresh();
}
