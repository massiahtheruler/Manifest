import Image from "next/image";
import { brandAssets } from "../content/site";

const assemblyFragments = [
  { text: "value", className: "assembly-fragment assembly-fragment--value" },
  { text: "trust", className: "assembly-fragment assembly-fragment--trust" },
  { text: "offer", className: "assembly-fragment assembly-fragment--offer" },
  { text: "voice", className: "assembly-fragment assembly-fragment--voice" },
  { text: "proof", className: "assembly-fragment assembly-fragment--proof" },
  { text: "signal", className: "assembly-fragment assembly-fragment--signal" },
  { text: "presence", className: "assembly-fragment assembly-fragment--presence" },
];

export function AssemblyCorridor() {
  return (
    <section
      className="assembly-corridor"
      aria-labelledby="assembly-title"
      data-assembly-section
    >
      <div className="assembly-corridor__stage" data-assembly-stage>
        <div className="assembly-corridor__idea" aria-hidden="true" data-assembly-idea>
          {"idea".split("").map((letter) => (
            <span key={letter} data-assembly-idea-letter>
              {letter}
            </span>
          ))}
        </div>

        <div className="assembly-corridor__field" aria-hidden="true">
          {assemblyFragments.map((fragment) => (
            <span className={fragment.className} key={fragment.text} data-assembly-fragment>
              {fragment.text}
            </span>
          ))}
        </div>

        <div className="assembly-corridor__identity" aria-hidden="true" data-assembly-identity>
          identity
        </div>

        <div className="assembly-corridor__system" data-assembly-system>
          <span className="assembly-corridor__system-line assembly-corridor__system-line--top" />
          <span className="assembly-corridor__system-line assembly-corridor__system-line--right" />
          <span className="assembly-corridor__system-line assembly-corridor__system-line--bottom" />
          <span className="assembly-corridor__system-line assembly-corridor__system-line--left" />
          <Image
            src={brandAssets.logo}
            alt=""
            width={847}
            height={503}
            className="assembly-corridor__logo"
            data-assembly-logo
          />
        </div>

        <div className="assembly-corridor__copy" data-assembly-copy>
          <span>fragments become form</span>
          <h2 id="assembly-title">Your identity should feel undeniable before you explain it.</h2>
          <p>
            That is the example. The page itself has to move from loose signal to
            structured recognition.
          </p>
        </div>
      </div>
    </section>
  );
}
