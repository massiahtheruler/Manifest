import { methodSteps } from "../content/offers";

export function ManifestMethod() {
  return (
    <section
      className="section section--method story-section"
      id="method"
      aria-labelledby="method-title"
      data-method-section
      data-story-section
    >
      <div className="section__intro section__intro--split">
        <div>
          <span className="section__index" data-reveal="index">
            02
          </span>
          <h2 id="method-title" data-reveal="headline">
            The Manifest Method
          </h2>
        </div>
        <p data-reveal="copy">
          You already know what the business is supposed to feel like.<br></br>{" "}
          Manifest makes them see it too.<br></br>
          <br></br>
          <strong> Ideas to Identity & Attention into Action.</strong>
        </p>
      </div>

      <div className="method-sequence" data-reveal="items" data-method-track>
        <div className="method-sequence__rail" aria-hidden="true">
          <span data-method-rail />
        </div>
        <div className="method-sequence__inner" data-method-inner>
          {methodSteps.map((step) => (
            <article className="method-card" key={step.title} data-method-card>
              <span>{step.step}</span>
              <h3>{step.title}</h3>
              <p>{step.body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
