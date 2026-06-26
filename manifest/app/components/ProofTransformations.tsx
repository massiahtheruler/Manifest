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
          <span className="section__index" data-reveal="index">05</span>
          <h2 id="proof-title" data-reveal="headline">Proof in the thinking.</h2>
        </div>
        <p data-reveal="copy">
          The work is not random screenshots. The useful proof is what was
          unclear, what changed, and what the new presence communicates.
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
