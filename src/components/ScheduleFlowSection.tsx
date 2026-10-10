"use client";

import React, { useState } from "react";

interface ScheduleStep {
  step: string;
  date: string;
  title: string;
  location: string;
  description: string;
  tags: string[];
}

const steps: ScheduleStep[] = [
  {
    step: "01",
    date: "14 – 24 OCT 2026",
    title: "Official Nominations Open (Free Entry)",
    location: "Online & Partner Registration Desks",
    description:
      "Open registrations across Lucknow via school connect programmes, RWA community drives, shopping malls, social media, and radio campaigns.",
    tags: ["FREE NOMINATION", "SCHOOL CONNECT", "MALL ACTIVATION"],
  },
  {
    step: "02",
    date: "26 OCT 2026",
    title: "Mega Audition & Screening",
    location: "Jashn Realty, Lucknow",
    description:
      "All registered children participate in a friendly, comfortable screening. Basic ramp walk, smile, posture & brief intro. Shortlisting into category finals.",
    tags: ["JASHN REALTY", "STAGE SCREENING", "RESULT FLASH OUT"],
  },
  {
    step: "03",
    date: "27 OCT 2026",
    title: "Meet & Greet: Press & Digital Media Meet",
    location: "Official Hospitality Partner Venue",
    description:
      "A grand networking and media collaboration bringing together PR agencies, influencers, lifestyle bloggers, and media professionals with selected kids.",
    tags: ["PRESS MEET", "INFLUENCERS", "DIGITAL MEDIA"],
  },
  {
    step: "04",
    date: "28 – 31 OCT 2026",
    title: "High-Fashion Portfolio Photoshoot",
    location: "Studio Setup with Event Partners",
    description:
      "All finalist children receive a professional fashion portfolio shoot. Selected pictures featured as the Face of Partner Brands; winners receive printed albums.",
    tags: ["PORTFOLIO SHOOT", "BRAND FACE", "PRINTED ALBUM"],
  },
  {
    step: "05",
    date: "09 NOV 2026",
    title: "Fun & Entertainment Tour",
    location: "Gaming Zone / Water Park, Lucknow",
    description:
      "A thrilling relaxation day designed for kids and parents to unwind, bond, play games, and build friendships before the final rehearsals.",
    tags: ["GAMING ZONE", "WATER PARK", "FAMILY TIME"],
  },
  {
    step: "06",
    date: "10 – 12 NOV 2026",
    title: "Runway Choreography & Grooming",
    location: "Partner Fashion Institute, Lucknow",
    description:
      "Three days of dedicated stage training conducted by top fashion institute trainers. Kids learn synchronization, poise, posture, and confidence.",
    tags: ["FASHION INSTITUTE", "CHOREOGRAPHY", "STAGE POISE"],
  },
  {
    step: "07",
    date: "13 NOV 2026",
    title: "Makeup Guidance & Rehearsal",
    location: "Grand Finale Venue Green Rooms",
    description:
      "Professional makeup artists conduct a gentle, kid-safe styling & makeup guidance session, followed by technical cue rehearsals on the main stage.",
    tags: ["SAFE MAKEUP", "TECHNICAL CUE", "GREEN ROOM PREP"],
  },
  {
    step: "08",
    date: "14 NOV 2026",
    title: "Children's Day Special: MEGA FINALE",
    location: "Grand Fashion Runway Stage, Lucknow",
    description:
      "The spectacular grand finale celebration! All segments take the stage before an esteemed celebrity jury, VIP guests, brand leaders, and media cameras.",
    tags: ["CHILDREN'S DAY", "MEGA FINALE", "AWARDS & PRIZES"],
  },
];

export default function ScheduleFlowSection() {
  const [selectedStep, setSelectedStep] = useState<number>(1); // 26 Oct Mega Audition default highlight

  return (
    <section id="schedule" className="py-20 bg-white border-b border-border-pink">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <div className="inline-block px-3 py-1 bg-surface text-pink-dark border border-border-pink text-xs font-bold uppercase tracking-wider rounded mb-3">
            COMPLETE ROADMAP
          </div>
          <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-extrabold text-charcoal uppercase tracking-tight">
            Event Flow &amp; Timeline
          </h2>
          <p className="mt-2 text-sm sm:text-base text-charcoal-muted leading-relaxed">
            From the first free nomination to the Children&apos;s Day Mega Finale, every stage is 
            meticulously curated to provide a stress-free, celebratory, and enriching experience for children and families.
          </p>
        </div>

        {/* Timeline Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6">
          {steps.map((st, idx) => {
            const isHighlight = idx === 1 || idx === 7; // Audition & Finale
            const isSelected = selectedStep === idx;

            return (
              <div
                key={st.step}
                onClick={() => setSelectedStep(idx)}
                className={`cursor-pointer p-5 sm:p-6 rounded-xl border transition-all relative ${
                  isSelected
                    ? "bg-pink-light border-2 border-pink-primary shadow-md -translate-y-1"
                    : isHighlight
                    ? "bg-surface border-border-pink hover:border-pink-primary"
                    : "bg-white border-border-pink hover:bg-surface"
                }`}
              >
                {/* Step badge & date */}
                <div className="flex justify-between items-center mb-3">
                  <span className="font-serif text-xl font-black text-pink-primary">
                    {st.step}
                  </span>
                  <span className="text-[10px] font-extrabold uppercase tracking-wider text-charcoal bg-white border border-border-pink px-2 py-0.5 rounded">
                    {st.date}
                  </span>
                </div>

                {/* Title */}
                <h3 className="font-serif text-sm sm:text-base font-bold text-charcoal mb-1.5 leading-snug">
                  {st.title}
                </h3>

                {/* Location */}
                <div className="text-xs font-semibold text-pink-dark mb-3">
                  {st.location}
                </div>

                {/* Description */}
                <p className="text-xs text-charcoal-muted leading-relaxed mb-4">
                  {st.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-1.5 pt-3 border-t border-border-pink">
                  {st.tags.map((tag, tIdx) => (
                    <span
                      key={tIdx}
                      className="text-[9px] font-bold uppercase tracking-wider text-charcoal-muted bg-white border border-border-pink px-2 py-0.5 rounded"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Focused Step Detail Callout */}
        <div className="mt-12 p-8 bg-surface border border-border-pink rounded-xl flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-1">
            <span className="text-xs font-bold uppercase tracking-wider text-pink-primary">
              SELECTED MILESTONE &bull; STEP {steps[selectedStep].step}
            </span>
            <h4 className="font-serif text-lg sm:text-xl font-bold text-charcoal">
              {steps[selectedStep].title} — {steps[selectedStep].date}
            </h4>
            <p className="text-xs sm:text-sm text-charcoal-muted">
              Location: <strong className="text-charcoal">{steps[selectedStep].location}</strong>
            </p>
          </div>

          <div className="flex gap-3">
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLScLhiYtE6aWKlI-T3tou7OzfVQVucW4uxHgf8Q7P5bLI4JKLw/viewform"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto text-center px-6 py-3 text-xs font-extrabold uppercase tracking-widest text-white bg-pink-primary hover:bg-pink-dark rounded transition-colors"
            >
              Nominate for this Audition
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
