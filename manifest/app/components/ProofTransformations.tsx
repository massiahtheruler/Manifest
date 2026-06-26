import { proofItems } from "../content/proof";

export function ProofTransformations() {
  return (
    <section
      className="section section--proof story-section"
      id="proof"
      aria-labelledby="proof-title"
      data-proof-section
      data-story-section
    >
      <div className="section__intro section__intro--split">
        <div>
          <span className="section__index" data-reveal="index">
            05
          </span>
          <h2 id="proof-title" data-reveal="headline">
            Proof the gap can be closed.
          </h2>
        </div>
        <p data-reveal="copy">
          A better website isn&#39;t the outcome. A clearer business is. Every
          project below shows the same process: identify what created doubt,
          remove the friction, and build an identity people understand faster.
        </p>
      </div>

      <div className="proof-stack" data-reveal="items">
        {proofItems.map((item) => (
          <article className="proof-card" key={item.name} data-proof-card>
            <div className="proof-card__header">
              <span>{item.type}</span>
              <h3>{item.name}</h3>
            </div>
            <dl>
              <div>
                <dt>What was unclear</dt>
                <dd>{item.unclear}</dd>
              </div>
              <div>
                <dt>What changed</dt>
                <dd>{item.changed}</dd>
              </div>
              <div>
                <dt>What it now communicates</dt>
                <dd>{item.communicates}</dd>
              </div>
            </dl>
          </article>
        ))}
      </div>
    </section>
  );
}
