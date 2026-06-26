import Image from "next/image";
import { brandAssets, siteContent } from "../content/site";

export function SiteHeader() {
  return (
    <header className="site-header" aria-label="Manifest site header">
      <a className="site-header__brand" href="#top" aria-label="Manifest home">
        <Image
          src={brandAssets.logo}
          alt=""
          width={847}
          height={503}
          priority
          className="site-header__mark"
        />
        <span>{siteContent.name}</span>
      </a>

      <nav className="site-header__nav" aria-label="Primary navigation">
        {siteContent.nav.map((item) => (
          <a key={item.href} href={item.href}>
            {item.label}
          </a>
        ))}
      </nav>

      <a className="site-header__cta" href="#contact">
        Identity Gap Score
      </a>
    </header>
  );
}
