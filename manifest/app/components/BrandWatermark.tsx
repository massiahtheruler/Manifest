import Image from "next/image";

export function BrandWatermark() {
  return (
    <div className="brand-watermark" aria-hidden="true" data-brand-watermark>
      <Image
        src="/icon.png"
        alt=""
        width={320}
        height={236}
        className="brand-watermark__mark"
      />
    </div>
  );
}
