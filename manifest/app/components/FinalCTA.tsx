import { finalCta } from "../content/home";
import { intakeContent } from "../content/contact";
import { IdentityGapForm } from "./IdentityGapForm";

export function FinalCTA() {
  return (
    <section
      className="section section--contact story-section"
      id="contact"
      aria-labelledby="contact-title"
      data-final-section
      data-story-section
    >
      <div className="contact-copy">
        <span className="section__index" data-reveal="index">07</span>
        <h2 id="contact-title" data-reveal="headline">{finalCta.title}</h2>
        <p data-reveal="copy">{finalCta.body}</p>
        <strong data-final-stamp>{finalCta.stamp}</strong>
      </div>

      <div className="contact-form-shell" data-reveal="visual">
        <div className="contact-form-shell__header">
          <h3>{intakeContent.title}</h3>
          <p>{intakeContent.intro}</p>
        </div>
        <IdentityGapForm />
      </div>
    </section>
  );
}
