import Image from "next/image";
import { brandAssets } from "../content/site";
import { heroContent } from "../content/home";

const fragments = [
  {
    label: "unclear offer",
    title: "Good work. Weak signal.",
    meta: "offer",
    className: "hero-fragment hero-fragment--top-left",
    shiftX: -34,
    rotate: -4,
  },
  {
    label: "broken presence",
    title: "Reputation exists offline.",
    meta: "presence",
    className: "hero-fragment hero-fragment--top-right",
    shiftX: 38,
    rotate: 5,
  },
  {
    label: "missing trust",
    title: "Customers hesitate before the call.",
    meta: "trust",
    className: "hero-fragment hero-fragment--bottom-left",
    shiftX: -26,
    rotate: 3,
  },
  {
    label: "recognition",
    title: "Identity becomes visible.",
    meta: "clarity",
    className: "hero-fragment hero-fragment--bottom-right",
    shiftX: 30,
    rotate: -3,
  },
];

const scatteredMarks = [
  { text: "M", className: "hero-mark hero-mark--m", x: -120, y: -80, rotate: -18 },
  { text: "A", className: "hero-mark hero-mark--a", x: 96, y: -110, rotate: 14 },
  { text: "N", className: "hero-mark hero-mark--n", x: -72, y: 120, rotate: 10 },
  { text: "I", className: "hero-mark hero-mark--i", x: 148, y: 70, rotate: -12 },
  { text: "see", className: "hero-mark hero-mark--see", x: 180, y: -40, rotate: 8 },
  { text: "signal", className: "hero-mark hero-mark--signal", x: -160, y: 54, rotate: -8 },
  { text: "trust", className: "hero-mark hero-mark--trust", x: 80, y: 145, rotate: 16 },
  { text: "?", className: "hero-mark hero-mark--question", x: -110, y: 150, rotate: -22 },
];

export function HeroReveal() {
  return (
    <section id="top" className="hero-section" aria-labelledby="hero-title">
      <div className="hero-section__veil" data-hero-veil aria-hidden="true" />
      <div className="hero-section__ambient" aria-hidden="true" />
      <div className="hero-section__mark-field" aria-hidden="true">
        {scatteredMarks.map((mark) => (
          <span
            key={mark.className}
            className={mark.className}
            data-hero-mark
            data-x={mark.x}
            data-y={mark.y}
            data-rotate={mark.rotate}
          >
            {mark.text}
          </span>
        ))}
      </div>
      <div className="hero-section__fragments" aria-hidden="true">
        {fragments.map((fragment) => (
          <div
            key={fragment.label}
            className={fragment.className}
            data-hero-fragment
            data-shift-x={fragment.shiftX}
            data-rotate={fragment.rotate}
          >
            <span>{fragment.label}</span>
            <strong>{fragment.title}</strong>
            <small>{fragment.meta}</small>
          </div>
        ))}
      </div>

      <div className="hero-section__grid">
        <div className="hero-section__copy">
          <p className="hero-section__signature">{heroContent.signature}</p>
          <h1 id="hero-title" className="hero-section__statement" data-hero-headline>
            <span data-hero-line>You see it.</span>
            <span data-hero-line>They don&apos;t.</span>
            <span data-hero-line>I close that gap.</span>
          </h1>
          <p className="hero-section__subhead">{heroContent.subhead}</p>

          <div className="hero-section__actions" data-hero-actions>
            <a className="button button--primary" href="#contact">
              {heroContent.primaryCta}
            </a>
            <a className="button button--secondary" href="#method">
              {heroContent.secondaryCta}
            </a>
          </div>
        </div>

        <div className="hero-section__brand-system" data-hero-logo>
          <div className="perception-symbol" data-hero-symbol aria-hidden="true">
            <span className="perception-symbol__eye" />
            <span className="perception-symbol__slash" />
            <span className="perception-symbol__focus" />
          </div>
          <div className="hero-section__logo-shell">
            <Image
              src={brandAssets.logo}
              alt="Manifest logo"
              width={847}
              height={503}
              priority
              className="hero-section__logo"
            />
          </div>
          <div className="hero-section__equation" aria-label="Manifest brand symbol logic">
            <span>direction</span>
            <b>+</b>
            <span>potential</span>
            <b>+</b>
            <span>final piece</span>
            <b>=</b>
            <strong>recognition</strong>
          </div>
        </div>
      </div>

      <div className="hero-section__next" aria-hidden="true">
        <span>Scroll to reveal the gap</span>
        <i />
        <b />
      </div>
    </section>
  );
}
