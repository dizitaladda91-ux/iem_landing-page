"use client";

import Image from "next/image";
import React, { useEffect, useState } from "react";

const introImages = [
  {
    src: "/images/category-1.jpg",
    step: "01 / 03",
    category: "CATEGORY 01",
    title: "Newborn (Under 1 Year) — Walk with Mom",
  },
  {
    src: "/images/category-2.jpg",
    step: "02 / 03",
    category: "CATEGORY 02",
    title: "Class 1 – Class 3 — Independent Ramp Walk + Themed Round",
  },
  {
    src: "/images/category-3.jpg",
    step: "03 / 03",
    category: "CATEGORY 03",
    title: "Class 4 – Class 5 — Groomed Fashion Walk + Designer Showcase",
  },
];

export default function IntroLoader() {
  // stage: "brand" -> 0 -> 1 -> 2 -> "exit" -> "done"
  const [stage, setStage] = useState<"brand" | 0 | 1 | 2 | "exit" | "done">("brand");

  useEffect(() => {
    const t1 = setTimeout(() => setStage(0), 1800);
    const t2 = setTimeout(() => setStage(1), 3500);
    const t3 = setTimeout(() => setStage(2), 5200);
    const t4 = setTimeout(() => setStage("exit"), 6900);
    const t5 = setTimeout(() => setStage("done"), 7600);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
      clearTimeout(t4);
      clearTimeout(t5);
    };
  }, []);

  if (stage === "done") return null;

  return (
    <div
      className={`fixed inset-0 h-[100dvh] z-[100] flex flex-col items-center justify-between bg-surface text-charcoal px-4 py-4 sm:py-8 lg:py-10 transition-all duration-700 ease-in-out overflow-hidden ${
        stage === "exit"
          ? "-translate-y-full opacity-0 pointer-events-none"
          : "translate-y-0 opacity-100"
      }`}
    >
      {/* Soft Royal Navy & Gold Background Glow */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-[360px] sm:w-[640px] h-[360px] sm:h-[640px] rounded-full bg-gold/15 blur-3xl" />
        <div className="absolute -bottom-24 left-1/2 -translate-x-1/2 w-[320px] sm:w-[540px] h-[320px] sm:h-[540px] rounded-full bg-pink-soft/80 blur-3xl" />
      </div>

      {/* Top Bar */}
      <div className="relative z-10 w-full max-w-5xl flex items-center justify-between border-b border-border-pink pb-3 sm:pb-4 shrink-0">
        <div className="flex flex-col min-w-0">
          <span className="font-serif font-black text-base sm:text-xl tracking-[0.2em] uppercase text-pink-primary leading-none">
            Runway
          </span>
          <span className="text-[9px] sm:text-[10px] font-extrabold tracking-[0.16em] sm:tracking-[0.18em] uppercase text-gold-dark mt-1">
            Kids Fashion Week 2026
          </span>
        </div>

        <button
          type="button"
          onClick={() => setStage("done")}
          className="shrink-0 px-3.5 sm:px-4 py-1.5 text-[10px] font-extrabold uppercase tracking-widest text-pink-primary bg-white border border-gold rounded-full hover:bg-pink-primary hover:text-white transition-colors shadow-sm"
        >
          Skip Intro
        </button>
      </div>

      {/* Center Content: Either Bottom-to-Top Text Loader or Top-Down Dropping Images */}
      <div className="relative z-10 flex-1 w-full max-w-4xl flex items-center justify-center my-2 sm:my-4 overflow-hidden min-h-0">
        {stage === "brand" ? (
          <div className="intro-rise-up text-center space-y-4 sm:space-y-5 px-2 sm:px-4">
            <div className="space-y-1">
              <div className="text-xs sm:text-sm font-black uppercase tracking-[0.2em] text-pink-primary">
                Jashn <span className="text-gold-dark">|</span> Realty
              </div>
              <div className="text-[9px] sm:text-[10px] font-bold uppercase tracking-[0.3em] text-charcoal-muted">
                PRESENTS
              </div>
            </div>

            {/* Runway Text Rising from Bottom & Loading/Filling Up */}
            <div className="space-y-2 sm:space-y-3">
              <div className="relative inline-block select-none">
                {/* Base Soft Royal Ghost Text */}
                <span className="block font-serif text-5xl sm:text-7xl lg:text-8xl font-black tracking-tight text-pink-soft">
                  Runway
                </span>
                {/* Bottom-to-Top Filling Active Royal Navy Text */}
                <span
                  aria-hidden="true"
                  className="intro-text-fill absolute inset-0 block font-serif text-5xl sm:text-7xl lg:text-8xl font-black tracking-tight text-pink-primary drop-shadow-[0_4px_12px_rgba(17,34,102,0.2)]"
                >
                  Runway
                </span>
              </div>

              <div>
                <span className="inline-block px-5 py-1.5 rounded-full bg-pink-primary border border-gold text-white font-serif text-xs sm:text-base lg:text-lg font-extrabold uppercase tracking-[0.22em] shadow-sm">
                  Kids Fashion Week 2026
                </span>
              </div>

              <div className="pt-1 text-[10px] sm:text-xs font-extrabold uppercase tracking-[0.25em] text-gold-dark">
                Big Dreams &bull; Little Steps
              </div>
            </div>

            {/* Loading Bar */}
            <div className="w-52 sm:w-72 h-2 bg-white border border-gold/60 rounded-full overflow-hidden mx-auto mt-4 sm:mt-6 p-0.5 shadow-inner">
              <div className="h-full bg-pink-primary rounded-full w-full origin-left animate-[loaderBar_1.6s_ease-in-out_forwards]" />
            </div>

            <p className="text-[10px] sm:text-xs font-extrabold uppercase tracking-[0.22em] text-pink-primary">
              A Premium Kids Fashion &amp; Lifestyle Event
            </p>
          </div>
        ) : (
          <div className="relative w-full h-full flex flex-col items-center justify-center min-h-0">
            {introImages.map((item, idx) => {
              const isActive = stage === idx;
              if (!isActive) return null;

              return (
                <div
                  key={item.src}
                  className="intro-image-drop flex flex-col items-center justify-center w-full h-full"
                >
                  <div className="relative h-[58dvh] sm:h-[64dvh] lg:h-[68dvh] aspect-[9/16] max-w-[82vw] rounded-2xl overflow-hidden border-2 border-gold shadow-[0_25px_60px_-15px_rgba(17,34,102,0.4)] bg-pink-soft">
                    <Image
                      src={item.src}
                      alt={item.title}
                      fill
                      priority
                      sizes="(max-width: 640px) 80vw, 380px"
                      className="object-cover"
                    />
                  </div>

                  <div className="mt-3 sm:mt-4 text-center space-y-0.5 sm:space-y-1 px-4 py-2 bg-white border border-gold/60 rounded-xl shadow-sm">
                    <div className="text-[9px] sm:text-[10px] font-extrabold uppercase tracking-[0.2em] sm:tracking-[0.25em] text-gold-dark">
                      {item.step} &bull; {item.category}
                    </div>
                    <div className="font-serif text-xs sm:text-base lg:text-lg font-bold text-pink-primary line-clamp-1">
                      {item.title}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>

      {/* Bottom Progress Indicators */}
      <div className="relative z-10 w-full max-w-md flex items-center justify-center gap-2 pt-2 shrink-0">
        <div
          className={`h-2 rounded-full transition-all duration-300 ${
            stage === "brand" ? "w-12 bg-pink-primary" : "w-4 bg-border-pink"
          }`}
        />
        {[0, 1, 2].map((idx) => (
          <div
            key={idx}
            className={`h-2 rounded-full transition-all duration-300 ${
              stage === idx ? "w-12 bg-gold-dark" : "w-4 bg-border-pink"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
