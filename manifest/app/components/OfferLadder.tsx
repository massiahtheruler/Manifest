import { offers } from "../content/offers";

export function OfferLadder() {
  return (
    <section
      className="section section--offers story-section"
      id="offers"
      aria-labelledby="offers-title"
      data-offers-section
      data-story-section
    >
      <div className="section__intro">
        <span className="section__index" data-reveal="index">03</span>
        <h2 id="offers-title" data-reveal="headline">Clear offers. No mystery tax.</h2>
        <p data-reveal="copy">
          Each offer starts from the same belief: the business already has value.
          The work is making that value easier to see and act on.
        </p>
      </div>

      <div className="offer-ladder" data-reveal="items">
        {offers.map((offer) => (
          <article className="offer-card" key={offer.title} data-offer-card>
            <div>
              <h3>{offer.title}</h3>
              <p className="offer-card__best">{offer.bestFor}</p>
              <p>{offer.body}</p>
            </div>
            <strong>{offer.outcome}</strong>
          </article>
        ))}
      </div>
    </section>
  );
}
