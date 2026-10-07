"use client";

import React from "react";

export default function PrizesSection() {
  const prizes = [
    {
      badge: "CASH AWARD",
      title: "₹21,000 Cash Prize",
      target: "Awarded to Winner (Male & Female)",
      desc: "Direct cash purse recognizing exceptional poise, runway confidence, and jury scores.",
    },
    {
      badge: "HOLIDAY TOUR",
      title: "All-Expense Family Tour Package",
      target: "Winning Child & Parents",
      desc: "A memorable holiday vacation package for the winning child and family to celebrate their victory.",
    },
    {
      badge: "ACADEMIC SCHOLARSHIP",
      title: "100% Educational Scholarship",
      target: "Institutional Partner Academy",
      desc: "Full learning scholarship grant powered by institutional partner academies.",
    },
    {
      badge: "EXCLUSIVE CALENDAR",
      title: "1st Time Lucknow HNI Fashion Calendar",
      target: "Editorial Feature",
      desc: "Selected winners will be featured in the inaugural high-profile annual HNI Calendar.",
    },
    {
      badge: "MEDIA SPOTLIGHT",
      title: "Statewide Off-Line & On-Line Media Coverage",
      target: "Print, Digital & PR Network",
      desc: "Extensive press releases, influencer spotlight, newspaper coverage, and magazine features.",
    },
    {
      badge: "PARTNER HAMPERS",
      title: "Luxury Gift Hampers & Brand Coupons",
      target: "Top Finalists & Category Stars",
      desc: "Curated gift hampers from leading apparel, toy, lifestyle, and kid-care brand sponsors.",
    },
  ];

  return (
    <section id="prizes" className="py-20 bg-surface border-b border-border-pink">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <div className="inline-block px-3 py-1 bg-white text-pink-dark border border-border-pink text-xs font-bold uppercase tracking-wider rounded mb-3">
            AWARDS &amp; REWARDS
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl font-black text-charcoal uppercase tracking-tight">
            Winner Rewards &amp; Brand Privileges
          </h2>
          <p className="mt-3 text-base text-charcoal-muted leading-relaxed">
            Every participating child receives official grooming, professional photos, and a Certificate of Participation. Outstanding models earn prestigious cash rewards, family trips, scholarships, and media stardom.
          </p>
        </div>

        {/* Prizes 3x2 Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {prizes.map((pz, idx) => (
            <div
              key={idx}
              className="bg-white border border-border-pink p-8 rounded-xl flex flex-col justify-between hover:border-pink-primary transition-all duration-300 hover:-translate-y-1"
            >
              <div>
                <div className="flex justify-between items-center mb-4">
                  <span className="text-[10px] font-extrabold uppercase tracking-widest text-pink-primary bg-pink-soft px-2.5 py-1 rounded">
                    {pz.badge}
                  </span>
                  <span className="font-serif text-lg font-black text-charcoal-muted">
                    0{idx + 1}
                  </span>
                </div>

                <h3 className="font-serif text-xl font-black text-charcoal mb-2 leading-snug">
                  {pz.title}
                </h3>

                <div className="text-xs font-bold uppercase tracking-wider text-pink-dark mb-3">
                  {pz.target}
                </div>

                <p className="text-xs text-charcoal-muted leading-relaxed">
                  {pz.desc}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-border-pink text-[11px] font-bold uppercase tracking-wider text-charcoal">
                OFFICIAL RUNWAY 2026 TITLE
              </div>
            </div>
          ))}
        </div>

        {/* Participation guarantee */}
        <div className="mt-12 bg-white border border-border-pink rounded-xl p-8 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <span className="text-xs font-black uppercase tracking-wider text-pink-primary block mb-1">
              GUARANTEED RECOGNITION FOR EVERY CHILD
            </span>
            <h4 className="font-serif text-xl font-bold text-charcoal">
              Every Participant Receives an Official Certificate of Participation
            </h4>
            <p className="text-xs text-charcoal-muted mt-1 max-w-xl">
              Plus category titles including Mr. &amp; Miss Little Star, Best Walk, Best Smile, and Best Parent-Child Duo!
            </p>
          </div>
          <a
            href="#register"
            className="w-full sm:w-auto text-center px-6 py-3.5 text-xs font-extrabold uppercase tracking-widest text-white bg-pink-primary hover:bg-pink-dark rounded transition-colors"
          >
            Nominate Today &rarr;
          </a>
        </div>

      </div>
    </section>
  );
}
