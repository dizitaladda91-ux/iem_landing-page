"use client";

import React from "react";

export default function FashionOnWheelsSection() {
  const routeHighlights = [
    {
      area: "Hazratganj & Heritage Corridor",
      desc: "Promotional flag-off through the historic heart of Lucknow with media cameras.",
    },
    {
      area: "Civil Lines & Royal Enclave",
      desc: "City landmark tour with live influencer broadcasts and music on board.",
    },
    {
      area: "Gomti Nagar Premium Malls",
      desc: "High-footfall stops at premier shopping destinations for public cheers and interactive moments.",
    },
    {
      area: "University & Cultural Hubs",
      desc: "Engaging youth audiences and student designers with live street teasers.",
    },
  ];

  return (
    <section id="wheels" className="py-20 bg-white border-b border-border-pink">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Concept and Route */}
          <div className="lg:col-span-7 space-y-6">
            
            <div className="inline-block px-3 py-1 bg-surface text-pink-dark border border-border-pink text-xs font-bold uppercase tracking-wider rounded">
              SIGNATURE ATTRACTION
            </div>

            <div className="space-y-2">
              <span className="text-xs font-extrabold uppercase tracking-widest text-pink-primary block">
                MOVING BILLBOARD &amp; CELEBRATION
              </span>
              <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-extrabold text-charcoal uppercase tracking-tight">
                Fashion on Wheels
              </h2>
            </div>

            <p className="text-sm sm:text-base text-charcoal-muted leading-relaxed">
              An open-branded luxury double-decker bus packed with participants, proud parents, and 
              mentors travels across Lucknow&apos;s most iconic spots leading up to the grand finale. 
              Dressed in event tees and chic casuals, young trendsetters dance, wave to cheerers, and 
              broadcast live reels across social platforms!
            </p>

            {/* Tagline Callout */}
            <div className="p-4 sm:p-5 bg-pink-light border-l-4 border-pink-primary rounded-r">
              <span className="text-[11px] font-black uppercase tracking-wider text-pink-dark block">
                OFFICIAL SLOGAN
              </span>
              <p className="font-serif text-lg sm:text-xl font-bold text-charcoal italic mt-1">
                &ldquo;Tiny Trendsetters, Big Runway Dreams!&rdquo;
              </p>
            </div>

            {/* Route Highlights Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              {routeHighlights.map((rt, i) => (
                <div key={i} className="p-4 bg-surface border border-border-pink rounded-lg">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-[10px] font-black text-white bg-pink-primary px-1.5 py-0.5 rounded">
                      STOP 0{i + 1}
                    </span>
                    <h3 className="text-xs font-bold text-charcoal uppercase">
                      {rt.area}
                    </h3>
                  </div>
                  <p className="text-[11px] text-charcoal-muted leading-relaxed">
                    {rt.desc}
                  </p>
                </div>
              ))}
            </div>

          </div>

          {/* Right Column: Execution Card */}
          <div className="lg:col-span-5">
            <div className="bg-surface border-2 border-border-pink rounded-xl p-8 space-y-6">
              
              <div className="flex justify-between items-center pb-4 border-b border-border-pink">
                <span className="text-xs font-black uppercase tracking-wider text-charcoal">
                  CAMPAIGN BLUEPRINT
                </span>
                <span className="text-[10px] font-bold uppercase bg-white border border-border-pink px-2.5 py-1 rounded text-pink-primary">
                  HIGH MEDIA IMPACT
                </span>
              </div>

              {/* Blueprint details */}
              <div className="space-y-4">
                <div className="bg-white p-4 rounded border border-border-pink">
                  <div className="text-[11px] font-black text-pink-primary uppercase tracking-wider mb-1">
                    01 &bull; FULL-WRAP VINYL BRANDING
                  </div>
                  <p className="text-xs text-charcoal-muted leading-relaxed">
                    High-impact vehicle wrap displaying partner logos, event dates, and kids fashion graphics.
                  </p>
                </div>

                <div className="bg-white p-4 rounded border border-border-pink">
                  <div className="text-[11px] font-black text-pink-primary uppercase tracking-wider mb-1">
                    02 &bull; DIGITAL REEL HUBS
                  </div>
                  <p className="text-xs text-charcoal-muted leading-relaxed">
                    Live streaming from the bus deck, instant photo booths, and influencer meetups along key junctions.
                  </p>
                </div>

                <div className="bg-white p-4 rounded border border-border-pink">
                  <div className="text-[11px] font-black text-pink-primary uppercase tracking-wider mb-1">
                    03 &bull; PARTICIPANT PRIDE
                  </div>
                  <p className="text-xs text-charcoal-muted leading-relaxed">
                    Kids receive official event tour merchandise, t-shirts, sunshades, and safety-supervised seating.
                  </p>
                </div>
              </div>

              {/* Action */}
              <div className="pt-2">
                <a
                  href="https://docs.google.com/forms/d/e/1FAIpQLScLhiYtE6aWKlI-T3tou7OzfVQVucW4uxHgf8Q7P5bLI4JKLw/viewform"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full block py-3.5 text-center text-xs font-extrabold uppercase tracking-widest text-white bg-pink-primary hover:bg-pink-dark rounded transition-colors"
                >
                  Join the Runway Movement
                </a>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
