import { identityGap } from "../content/home";

export function IdentityGap() {
  return (
    <section
      className="section section--gap story-section"
      id="gap"
      aria-labelledby="gap-title"
      data-story-section
      data-gap-section
    >
      <div className="section__intro">
        <span className="section__index" data-reveal="index">01</span>
        <h2 id="gap-title" data-reveal="headline">{identityGap.title}</h2>
        <p data-reveal="copy">{identityGap.intro}</p>
      </div>

      <div className="gap-layout" data-reveal="visual">
        <div className="gap-meter" aria-hidden="true">
          <div className="gap-meter__label">
            <span>unclear</span>
            <span>recognized</span>
          </div>
          <div className="gap-meter__track">
            <div className="gap-meter__fill" data-gap-meter />
          </div>
        </div>

        <div className="gap-story">
          <div className="gap-pivot" data-gap-pivot>
            <article className="gap-pivot__card">
              <span>what you are</span>
              <strong>Capable. Valuable. Already trusted by people who know you.</strong>
            </article>
            <article className="gap-pivot__card">
              <span>what they see first</span>
              <strong>A scattered signal asking them to connect the dots themselves.</strong>
            </article>
          </div>

          <div className="gap-choice" data-reveal="cta">
            <a className="button button--primary" href="#contact">
              Get Your Identity Gap Score
            </a>
            <a className="story-link" href="#method">
              Keep scrolling to see the method
            </a>
          </div>

          <div className="gap-points" data-reveal="items">
            {identityGap.points.map((point) => (
              <article className="gap-point" key={point.title} data-gap-point>
                <span />
                <h3>{point.title}</h3>
                <p>{point.body}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
