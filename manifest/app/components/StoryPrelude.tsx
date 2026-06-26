const storyBeats = [
  {
    label: "01 / first impression",
    line: "They meet the business before they meet you.",
    detail:
      "Before the conversation, before the quote, before the handshake, your public presence is already making the introduction.",
  },
  {
    label: "02 / the cost",
    line: "If the signal feels unclear, trust slows down.",
    detail:
      "Good work can still look unfinished when the website, socials, offer, and proof all tell slightly different stories.",
  },
  {
    label: "03 / the turn",
    line: "Clarity changes what people believe is possible.",
    detail:
      "When the identity holds together, people understand faster, trust sooner, and move with more confidence.",
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
            <article
              className="story-prelude__beat"
              key={beat.line}
              data-prelude-beat
            >
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
