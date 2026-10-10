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
  // stage: "brand" -> "image-0" -> "image-1" -> "image-2" -> "exit" -> "done"
  const [stage, setStage] = useState<"brand" | 0 | 1 | 2 | "exit" | "done">("brand");

  useEffect(() => {
    const t1 = setTimeout(() => setStage(0), 1600);
    const t2 = setTimeout(() => setStage(1), 3400);
    const t3 = setTimeout(() => setStage(2), 5200);
    const t4 = setTimeout(() => setStage("exit"), 7000);
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
      className={`fixed inset-0 h-[100dvh] z-[100] flex flex-col items-center justify-between bg-[#140d10] text-white px-4 py-4 sm:py-8 lg:py-10 transition-opacity duration-500 overflow-hidden ${
        stage === "exit" ? "opacity-0 pointer-events-none" : "opacity-100"
      }`}
    >
      {/* Top Bar */}
      <div className="w-full max-w-5xl flex items-center justify-between border-b border-white/15 pb-3 sm:pb-4 shrink-0">
        <div className="flex flex-col min-w-0">
          <span className="font-serif font-black text-base sm:text-xl tracking-[0.2em] uppercase text-white leading-none">
            Runway
          </span>
          <span className="text-[9px] sm:text-[10px] font-extrabold tracking-[0.16em] sm:tracking-[0.18em] uppercase text-pink-primary mt-1">
            Kids Fashion Week 2026
          </span>
        </div>

        <button
          type="button"
          onClick={() => setStage("done")}
          className="shrink-0 px-3 sm:px-4 py-1.5 text-[10px] font-extrabold uppercase tracking-widest text-white/90 border border-white/25 rounded hover:bg-white hover:text-charcoal transition-colors"
        >
          Skip Intro
        </button>
      </div>

      {/* Center Content: Either Brand Loader or Sequential Image Showcase */}
      <div className="relative flex-1 w-full max-w-4xl flex items-center justify-center my-2 sm:my-4 overflow-hidden min-h-0">
        {stage === "brand" ? (
          <div className="text-center space-y-4 sm:space-y-5 px-2 sm:px-4 animate-pulse">
            <div className="inline-block px-3 py-1 bg-pink-primary/20 border border-pink-primary/40 rounded-full text-[9px] sm:text-xs font-extrabold uppercase tracking-[0.18em] sm:tracking-[0.25em] text-pink-200">
              IEM &times; ADONMO PRESENT &bull; LUCKNOW 2026
            </div>

            <div className="space-y-1.5 sm:space-y-2">
              <h1 className="font-serif text-4xl sm:text-6xl lg:text-8xl font-black uppercase tracking-tight text-white">
                Runway
              </h1>
              <p className="font-serif text-base sm:text-2xl lg:text-3xl font-bold uppercase tracking-[0.16em] sm:tracking-[0.22em] text-pink-primary">
                Kids Fashion Week 2026
              </p>
            </div>

            <div className="w-48 sm:w-72 h-1.5 bg-white/15 rounded-full overflow-hidden mx-auto mt-4 sm:mt-6">
              <div className="h-full bg-pink-primary rounded-full w-full origin-left animate-[loaderBar_1.5s_ease-in-out_forwards]" />
            </div>

            <p className="text-[10px] sm:text-[11px] font-bold uppercase tracking-[0.2em] text-white/60">
              Loading Official Showcase...
            </p>
          </div>
        ) : (
          <div className="relative w-full h-full flex flex-col items-center justify-center min-h-0">
            {introImages.map((item, idx) => {
              const isActive = stage === idx;
              return (
                <div
                  key={item.src}
                  className={`absolute inset-0 flex flex-col items-center justify-center transition-all duration-500 ${
                    isActive
                      ? "opacity-100 scale-100 z-10"
                      : "opacity-0 scale-95 pointer-events-none z-0"
                  }`}
                >
                  <div className="relative h-[58dvh] sm:h-[64dvh] lg:h-[68dvh] aspect-[9/16] max-w-[82vw] rounded-xl sm:rounded-2xl overflow-hidden border-2 border-pink-primary/60 shadow-[0_25px_70px_rgba(225,29,72,0.45)] bg-black">
                    <Image
                      src={item.src}
                      alt={item.title}
                      fill
                      priority
                      sizes="(max-width: 640px) 80vw, 380px"
                      className="object-cover"
                    />
                  </div>

                  <div className="mt-3 sm:mt-4 text-center space-y-0.5 sm:space-y-1 px-2">
                    <div className="text-[9px] sm:text-[10px] font-extrabold uppercase tracking-[0.2em] sm:tracking-[0.25em] text-pink-primary">
                      {item.step} &bull; {item.category}
                    </div>
                    <div className="font-serif text-xs sm:text-base lg:text-lg font-bold text-white line-clamp-1">
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
      <div className="w-full max-w-md flex items-center justify-center gap-2 pt-2">
        <div
          className={`h-1.5 rounded-full transition-all duration-300 ${
            stage === "brand" ? "w-12 bg-pink-primary" : "w-4 bg-white/30"
          }`}
        />
        {[0, 1, 2].map((idx) => (
          <div
            key={idx}
            className={`h-1.5 rounded-full transition-all duration-300 ${
              stage === idx ? "w-12 bg-pink-primary" : "w-4 bg-white/30"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
