"use client";

import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";

const slides = [
  {
    image: "/images/runway-event.jpg",
    alt: "Young runway finalists celebrate at a kids fashion show",
    label: "A RUNWAY FOR EVERY STAR",
    title: "The spotlight is theirs.",
  },
  {
    image: "/images/runway-toddler.png",
    alt: "A young contestant poses on the kids fashion show runway",
    label: "CONFIDENCE IN EVERY STEP",
    title: "Little steps. Big dreams.",
  },
  {
    image: "/images/runway-model.png",
    alt: "A young child models a stylish outfit at a kids fashion event",
    label: "A WEEK FULL OF WONDER",
    title: "Every child can shine.",
  },
];

export default function HeroGalleryCarousel() {
  const [activeSlide, setActiveSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const touchStartX = useRef<number | null>(null);

  useEffect(() => {
    if (isPaused) return;

    const interval = window.setInterval(() => {
      setActiveSlide((current) => (current + 1) % slides.length);
    }, 5000);

    return () => window.clearInterval(interval);
  }, [isPaused]);

  const showPrevious = () => {
    setActiveSlide((current) => (current - 1 + slides.length) % slides.length);
  };

  const showNext = () => {
    setActiveSlide((current) => (current + 1) % slides.length);
  };

  const handleTouchEnd = (event: React.TouchEvent<HTMLDivElement>) => {
    if (touchStartX.current === null) return;

    const distance = event.changedTouches[0].clientX - touchStartX.current;
    if (Math.abs(distance) > 48) {
      if (distance > 0) showPrevious();
      else showNext();
    }
    touchStartX.current = null;
  };

  return (
    <div
      className="relative aspect-[4/3] sm:aspect-[16/10] overflow-hidden rounded-2xl border border-white/80 bg-pink-soft shadow-[0_24px_70px_-30px_rgba(159,18,57,0.5)]"
      role="region"
      aria-roledescription="carousel"
      aria-label="Runway Kids photo highlights"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onTouchStart={(event) => {
        touchStartX.current = event.touches[0].clientX;
      }}
      onTouchEnd={handleTouchEnd}
    >
      {slides.map((slide, index) => (
        <div
          key={slide.image}
          className={`absolute inset-0 transition-opacity duration-700 motion-reduce:transition-none ${
            activeSlide === index ? "opacity-100" : "opacity-0"
          }`}
          aria-hidden={activeSlide !== index}
        >
          <Image
            src={slide.image}
            alt={slide.alt}
            fill
            priority={index === 0}
            sizes="(max-width: 1024px) 100vw, 40vw"
            className="object-cover"
          />
        </div>
      ))}

      <div className="absolute inset-0 bg-gradient-to-t from-charcoal/85 via-charcoal/10 to-charcoal/20" />

      <div className="absolute left-4 right-4 top-4 flex items-start justify-between gap-3 sm:left-6 sm:right-6 sm:top-6">
        <span className="rounded-full border border-white/35 bg-charcoal/25 px-3 py-1.5 text-[9px] font-extrabold tracking-[0.16em] text-white backdrop-blur-sm sm:text-[10px]">
          RUNWAY KIDS · LUCKNOW 2026
        </span>
        <span className="rounded-full bg-white px-3 py-1.5 text-[9px] font-extrabold tracking-wider text-pink-dark shadow-sm sm:text-[10px]">
          FREE ENTRY
        </span>
      </div>

      <div
        className="absolute bottom-0 left-0 right-0 flex items-end justify-between gap-3 p-4 text-white sm:p-6"
        aria-live="polite"
        aria-atomic="true"
      >
        <div className="min-w-0">
          <div className="mb-1 text-[9px] font-extrabold tracking-[0.18em] text-pink-100 sm:text-[10px]">
            {slides[activeSlide].label}
          </div>
          <h2 className="font-serif text-2xl font-black leading-tight sm:text-3xl">
            {slides[activeSlide].title}
          </h2>
        </div>

        <div className="flex shrink-0 gap-2">
          <button
            type="button"
            onClick={showPrevious}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-white/50 bg-charcoal/20 text-lg text-white backdrop-blur-sm transition hover:bg-white hover:text-charcoal focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            aria-label="Previous photo"
          >
            <span aria-hidden="true">&larr;</span>
          </button>
          <button
            type="button"
            onClick={showNext}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-white/50 bg-charcoal/20 text-lg text-white backdrop-blur-sm transition hover:bg-white hover:text-charcoal focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            aria-label="Next photo"
          >
            <span aria-hidden="true">&rarr;</span>
          </button>
        </div>
      </div>

      <div className="absolute left-4 top-16 flex gap-1.5 sm:left-6 sm:top-20">
        {slides.map((slide, index) => (
          <button
            key={slide.image}
            type="button"
            onClick={() => setActiveSlide(index)}
            className="flex h-8 items-center justify-center px-1 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            aria-label={`Show photo ${index + 1}`}
            aria-pressed={activeSlide === index}
          >
            <span
              className={`h-1.5 rounded-full transition-all ${
                activeSlide === index ? "w-7 bg-white" : "w-1.5 bg-white/60"
              }`}
            />
          </button>
        ))}
      </div>
    </div>
  );
}
