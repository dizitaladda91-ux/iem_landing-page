"use client";

import React from "react";

export default function AnnouncementTicker() {
  const items = [
    "FREE NOMINATIONS OPEN (14–24 OCT)",
    "MEGA AUDITION AT JASHN REALTY (26 OCT)",
    "PRESS & DIGITAL MEDIA MEET (27 OCT)",
    "FINALIST PORTFOLIO PHOTOSHOOT (28–31 OCT)",
    "FASHION ON WHEELS ROADSHOW ACROSS LUCKNOW",
    "CHILDREN'S DAY MEGA FINALE (14 NOV)",
    "WIN ₹21,000 CASH PRIZE + FAMILY TOUR",
    "100% EDUCATION SCHOLARSHIP",
    "1ST TIME HNI KIDS CALENDAR",
  ];

  return (
    <div className="bg-surface border-y border-border-pink py-3 overflow-hidden select-none">
      <div className="flex w-max animate-marquee">
        {/* Repeat list twice for seamless loop */}
        {[...items, ...items].map((text, idx) => (
          <div key={idx} className="flex items-center mx-6">
            <span className="text-xs font-bold tracking-widest text-charcoal uppercase">
              {text}
            </span>
            <span className="ml-6 w-1.5 h-1.5 rounded-full bg-pink-primary inline-block"></span>
          </div>
        ))}
      </div>
    </div>
  );
}
