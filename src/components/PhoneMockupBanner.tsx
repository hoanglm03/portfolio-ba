"use client";

import Image from "next/image";

interface PhoneMockupBannerProps {
  bgImage: string;
  screenImage?: string;
  title: string;
  subtitle: string;
  label?: string;
}

export default function PhoneMockupBanner({ bgImage, screenImage, title, subtitle, label = "Mobile App" }: PhoneMockupBannerProps) {
  return (
    <div className="relative h-56 overflow-hidden">
      <Image src={bgImage} alt="" fill className="object-cover" />
      <div className="absolute inset-0 bg-gradient-to-r from-emerald-900/85 via-emerald-900/70 to-emerald-900/50" />

      {/* Phone mockup */}
      {screenImage && (
        <div className="absolute right-[10%] top-1/2 -translate-y-[46%] w-[110px] md:w-[130px] z-10">
          <div className="relative rounded-[14px] overflow-hidden shadow-2xl shadow-black/60">
            <div className="relative w-full" style={{ aspectRatio: "9 / 19.5" }}>
              <Image src={screenImage} alt="App screen" fill className="object-cover" />
            </div>
          </div>
        </div>
      )}

      {/* Left text */}
      <div className="absolute left-6 top-1/2 -translate-y-1/2 z-10 max-w-[55%]">
        <div className="flex items-center gap-2 mb-2">
          <span className="w-2 h-2 rounded-full bg-emerald-300 animate-pulse" />
          <span className="text-emerald-200 text-[11px] font-semibold tracking-widest uppercase">{label}</span>
        </div>
        <h3 className="text-white font-display text-xl md:text-2xl leading-snug mb-2"
          dangerouslySetInnerHTML={{ __html: title }}
        />
        <p className="text-emerald-200/70 text-xs leading-relaxed max-w-[280px]">{subtitle}</p>
      </div>
    </div>
  );
}
