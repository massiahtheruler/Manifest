"use client";

import { offers } from "../content/offers";

export function OfferLadder() {
  function handleOfferClick(
    event: React.MouseEvent<HTMLAnchorElement>,
    offerTitle: string,
  ) {
    event.preventDefault();

    const encodedOffer = encodeURIComponent(offerTitle);
    const nextUrl = `/?service=${encodedOffer}#identity-gap-form`;

    window.history.pushState(null, "", nextUrl);
    window.dispatchEvent(
      new CustomEvent("manifest:service-select", { detail: offerTitle }),
    );

    document.getElementById("identity-gap-form")?.scrollIntoView({
      behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches
        ? "auto"
        : "smooth",
      block: "start",
    });

    window.setTimeout(() => {
      document.getElementById("service")?.focus({ preventScroll: true });
    }, 520);
  }

  return (
    <section
      className="section section--offers story-section"
      id="offers"
      aria-labelledby="offers-title"
      data-offers-section
      data-story-section
    >
      <div className="section__intro">
        <span className="section__index" data-reveal="index">
          06
        </span>
        <h2 id="offers-title" data-reveal="headline">
          Clear offers. No mystery tax.
        </h2>
        <p data-reveal="copy">
          Every engagement solves the same problem at a different depth. Whether
          you need a fresh perspective or a complete identity system, the goal
          is the same: close the gap between what your business is and what
          people believe it is.
        </p>
      </div>

      <div className="offer-ladder" data-reveal="items">
        {offers.map((offer) => (
          <article className="offer-card" key={offer.title} data-offer-card>
            <a
              className="offer-card__link"
              href={`/?service=${encodeURIComponent(offer.title)}#identity-gap-form`}
              aria-label={`Start inquiry for ${offer.title}`}
              onClick={(event) => handleOfferClick(event, offer.title)}
            >
              <div>
                <h3>{offer.title}</h3>
                <p className="offer-card__best">{offer.bestFor}</p>
                <p>{offer.body}</p>
              </div>
              <div className="offer-card__meta">
                <strong>{offer.outcome}</strong>
                <span className="offer-card__cta">Start with this</span>
              </div>
            </a>
          </article>
        ))}
      </div>
    </section>
  );
}
