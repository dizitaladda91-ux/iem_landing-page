"use client";

import React from "react";

export default function Footer() {
  return (
    <footer className="bg-surface border-t border-border-pink pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-border-pink">
          
          {/* Col 1: Brand & Presentation */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-2">
              <span className="font-serif font-black text-2xl tracking-widest text-charcoal uppercase">
                RUNWAY
              </span>
              <span className="bg-pink-primary text-white text-[10px] font-extrabold uppercase px-2 py-0.5 rounded tracking-widest">
                KIDS 2026
              </span>
            </div>
            
            <p className="text-xs text-charcoal-muted leading-relaxed max-w-sm">
              Runway Kids Fashion Week is organized by the <strong className="text-charcoal font-semibold">Institute of Event Management (IEM)</strong> in partnership with <strong className="text-charcoal font-semibold">AdOnMo</strong> to discover, empower, and celebrate youth talent across India.
            </p>

            <div className="pt-2">
              <span className="text-[10px] font-black uppercase tracking-widest text-pink-primary block mb-1">
                OFFICIAL MOTTO
              </span>
              <span className="font-serif italic text-sm text-charcoal font-semibold">
                &ldquo;Unlock Your Dream &bull; Tiny Trendsetters, Big Runway Dreams!&rdquo;
              </span>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-black uppercase tracking-wider text-charcoal">
              QUICK SECTIONS
            </h4>
            <ul className="space-y-2 text-xs font-medium text-charcoal-muted">
              <li>
                <a href="#overview" className="hover:text-pink-primary transition-colors">
                  Event Overview
                </a>
              </li>
              <li>
                <a href="#categories" className="hover:text-pink-primary transition-colors">
                  4 Age Categories
                </a>
              </li>
              <li>
                <a href="#schedule" className="hover:text-pink-primary transition-colors">
                  Audition Roadmap
                </a>
              </li>
              <li>
                <a href="#voting" className="hover:text-pink-primary transition-colors">
                  Social Wild Card
                </a>
              </li>
              <li>
                <a href="#wheels" className="hover:text-pink-primary transition-colors">
                  Fashion on Wheels
                </a>
              </li>
              <li>
                <a href="#prizes" className="hover:text-pink-primary transition-colors">
                  Rewards &amp; Awards
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Categories */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-black uppercase tracking-wider text-charcoal">
              COMPETITION DIVISIONS
            </h4>
            <ul className="space-y-2 text-xs text-charcoal-muted">
              <li>
                <strong className="text-charcoal block">Category 1:</strong>
                Newborn (1–2 Yrs) — Walk with Mom
              </li>
              <li>
                <strong className="text-charcoal block">Category 2:</strong>
                Class 2 – Class 3 Ramp Walk + Themed
              </li>
              <li>
                <strong className="text-charcoal block">Category 3:</strong>
                Class 4 – Class 5 Designer Showcase
              </li>
              <li>
                <strong className="text-charcoal block">Category 4:</strong>
                Sporty Walk with Dad (Father Duo)
              </li>
            </ul>
          </div>

          {/* Col 4: Verified Contacts & Partners */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-black uppercase tracking-wider text-charcoal">
              ORGANIZER CONTACTS
            </h4>

            <div className="bg-white border border-border-pink p-4 rounded-lg space-y-2 text-xs">
              <div>
                <span className="text-[10px] font-bold uppercase text-charcoal-muted block">
                  WHATSAPP HELPLINE
                </span>
                <span className="font-bold text-pink-primary">
                  +91 95489 18304
                </span>
              </div>

              <div>
                <span className="text-[10px] font-bold uppercase text-charcoal-muted block">
                  ADONMO PRODUCTION TEAM
                </span>
                <span className="font-bold text-charcoal">
                  Mayank: +91 9773848123
                </span>
                <span className="text-[11px] text-charcoal-muted block">
                  mayank@adonmo.com
                </span>
              </div>

              <div>
                <span className="text-[10px] font-bold uppercase text-charcoal-muted block">
                  INSTITUTE WEBSITE
                </span>
                <a
                  href="https://www.iemworld.in"
                  target="_blank"
                  rel="noreferrer"
                  className="font-bold text-pink-primary hover:underline"
                >
                  www.iemworld.in
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-charcoal-muted gap-4">
          <div>
            &copy; {new Date().getFullYear()} Runway Kids Fashion Week &bull; Institute of Event Management &amp; AdOnMo. All Rights Reserved.
          </div>
          <div className="flex items-center gap-4 text-[11px] font-bold uppercase tracking-wider">
            <a href="#rules" className="hover:text-pink-primary">Guidelines</a>
            <span>&bull;</span>
            <a href="#voting" className="hover:text-pink-primary">Fair Play Policy</a>
            <span>&bull;</span>
            <a href="#register" className="text-pink-primary hover:underline">Register Now</a>
          </div>
        </div>

      </div>
    </footer>
  );
}
