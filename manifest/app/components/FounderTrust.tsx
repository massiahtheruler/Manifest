import Image from "next/image";
import { aboutManifest } from "../content/home";
import { brandAssets, siteContent } from "../content/site";

export function FounderTrust() {
  return (
    <section
      className="section section--about story-section"
      id="about"
      aria-labelledby="about-title"
      data-story-section
    >
      <div className="about-copy">
        <span className="section__index" data-reveal="index">06</span>
        <h2 id="about-title" data-reveal="headline">{aboutManifest.title}</h2>
        <p data-reveal="copy">{aboutManifest.body}</p>
        <p data-reveal="copy">{aboutManifest.proof}</p>
      </div>

      <aside className="trust-panel" aria-label="Manifest trust details" data-reveal="visual">
        <Image
          src={brandAssets.founderPhoto}
          alt="Justin Henry"
          width={160}
          height={160}
          className="trust-panel__photo"
        />
        <div>
          <span>Founder</span>
          <strong>{siteContent.founder}</strong>
          <p>{siteContent.market}</p>
        </div>
        <ul>
          <li>
            <a href={`mailto:${siteContent.email}`}>{siteContent.email}</a>
          </li>
          <li>
            <a href={siteContent.phoneHref}>{siteContent.phoneDisplay}</a>
          </li>
          {siteContent.socialLinks.map((link) => (
            <li key={link.href}>
              <a href={link.href} target="_blank" rel="noreferrer">
                {link.label}
              </a>
            </li>
          ))}
          <li>
            <a href={siteContent.portfolioHref} target="_blank" rel="noreferrer">
              Portfolio
            </a>
          </li>
        </ul>
      </aside>
    </section>
  );
}
