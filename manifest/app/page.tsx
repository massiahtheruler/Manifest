import { AssemblyCorridor } from "./components/AssemblyCorridor";
import { AudienceFit } from "./components/AudienceFit";
import { FinalCTA } from "./components/FinalCTA";
import { FounderTrust } from "./components/FounderTrust";
import { HeroReveal } from "./components/HeroReveal";
import { IdentityGap } from "./components/IdentityGap";
import { ManifestMethod } from "./components/ManifestMethod";
import { ManifestMotion } from "./components/ManifestMotion";
import { OfferLadder } from "./components/OfferLadder";
import { ProofTransformations } from "./components/ProofTransformations";
import { SiteHeader } from "./components/SiteHeader";
import { StoryPrelude } from "./components/StoryPrelude";

export default function Home() {
  return (
    <ManifestMotion>
      <SiteHeader />
      <main>
        <HeroReveal />
        <StoryPrelude />
        <AssemblyCorridor />
        <IdentityGap />
        <ManifestMethod />
        <OfferLadder />
        <AudienceFit />
        <ProofTransformations />
        <FounderTrust />
        <FinalCTA />
      </main>
    </ManifestMotion>
  );
}
