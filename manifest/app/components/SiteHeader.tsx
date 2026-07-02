"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { brandAssets, siteContent } from "../content/site";

export function SiteHeader() {
  const [isHidden, setIsHidden] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    let lastScrollY = window.scrollY;
    let ticking = false;
    const threshold = 10;
    const heroOffset = 140;

    const updateHeader = () => {
      const currentScrollY = window.scrollY;
      const delta = currentScrollY - lastScrollY;

      setIsScrolled(currentScrollY > 64);

      if (currentScrollY < heroOffset) {
        setIsHidden(false);
      } else if (Math.abs(delta) >= threshold) {
        setIsHidden(delta > 0);
      }

      lastScrollY = currentScrollY;
      ticking = false;
    };

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(updateHeader);
        ticking = true;
      }
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`site-header ${isHidden ? "site-header--hidden" : ""} ${
        isScrolled ? "site-header--scrolled" : ""
      }`}
      aria-label="Manifest site header"
      onFocus={() => setIsHidden(false)}
      onMouseEnter={() => setIsHidden(false)}
    >
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
        Identity Gap Audit™
      </a>
    </header>
  );
}
