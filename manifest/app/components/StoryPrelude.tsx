const storyBeats = [
  {
    label: "01 / before the name",
    line: "The work is already real.",
    detail:
      "The value exists before the website explains it, before the logo earns trust, before the first click decides who looks serious.",
  },
  {
    label: "02 / the leak",
    line: "But the signal is scattered.",
    detail:
      "A good business can look smaller, quieter, or less ready than it actually is when the public presence does not hold together.",
  },
  {
    label: "03 / the decision",
    line: "Perception makes the first move.",
    detail:
      "People decide whether to trust, call, buy, or keep scrolling before they understand the whole story.",
  },
];

export function StoryPrelude() {
  return (
    <section
      className="story-prelude"
      aria-label="Perception reveal story"
      data-prelude-section
    >
      <div className="story-prelude__stage" data-prelude-stage>
        <div className="story-prelude__rule" aria-hidden="true">
          <span data-prelude-rule />
        </div>

        <div className="story-prelude__beats">
          {storyBeats.map((beat) => (
            <article className="story-prelude__beat" key={beat.line} data-prelude-beat>
              <span>{beat.label}</span>
              <h2>{beat.line}</h2>
              <p>{beat.detail}</p>
            </article>
          ))}
        </div>

        <div className="story-prelude__signal" aria-hidden="true">
          <span className="story-prelude__signal-word story-prelude__signal-word--left">
            value
          </span>
          <span className="story-prelude__signal-word story-prelude__signal-word--right">
            visible
          </span>
          <span className="story-prelude__signal-eye" data-prelude-eye />
        </div>

        <div className="scroll-cue scroll-cue--prelude" aria-hidden="true">
          <span>Keep scrolling</span>
          <i />
        </div>
      </div>
    </section>
  );
}
