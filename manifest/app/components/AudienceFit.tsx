import { audienceFit } from "../content/home";

export function AudienceFit() {
  return (
    <section
      className="section section--audience story-section"
      id="audience"
      aria-labelledby="audience-title"
      data-story-section
    >
      <div className="audience-panel" data-reveal="visual">
        <div className="section__intro">
          <span className="section__index" data-reveal="index">04</span>
          <h2 id="audience-title" data-reveal="headline">{audienceFit.title}</h2>
          <p data-reveal="copy">{audienceFit.body}</p>
        </div>

        <ul className="audience-list" aria-label="Best fit business types" data-reveal="items">
          {audienceFit.groups.map((group) => (
            <li key={group}>{group}</li>
          ))}
        </ul>
      </div>
    </section>
  );
}
