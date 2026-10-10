"use client";

import React, { useEffect, useState } from "react";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setMobileMenuOpen(false);
    };

    window.addEventListener("keydown", closeOnEscape);
    return () => window.removeEventListener("keydown", closeOnEscape);
  }, []);

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-border-pink">
      {/* Top Running Announcement Bar - Marquee / Running Animation */}
      <div className="bg-pink-soft text-pink-dark py-2 overflow-hidden border-b border-border-pink select-none">
        <div className="flex w-max animate-marquee hover:[animation-play-state:paused]">
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="flex items-center mx-4 sm:mx-6 shrink-0">
              <span className="inline-block px-2 py-0.5 bg-white text-pink-primary border border-border-pink rounded mr-2.5 text-[10px] sm:text-xs font-bold uppercase tracking-wider">
                LUCKNOW 2026
              </span>
              <span className="text-xs sm:text-xs font-bold uppercase tracking-wider text-pink-dark">
                OFFICIAL REGISTRATIONS &amp; SOCIAL VOTING OPEN — FINALE ON CHILDREN&apos;S DAY, 14TH NOV
              </span>
              <span className="mx-5 text-pink-primary font-black text-sm">&bull;</span>
              <span className="text-xs sm:text-xs font-bold uppercase tracking-wider text-charcoal">
                FREE NOMINATION &bull; AUDITION AT JASHN REALTY (26 OCT) &bull; CASH PRIZE ₹11,000 WITH GIFT HAMPER
              </span>
              <span className="mx-5 text-pink-primary font-black text-sm">&bull;</span>
            </div>
          ))}
        </div>
      </div>


      {/* Main Navigation */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Brand Logo & Titles - Strict Typography, No Icons */}
          <a href="#" className="flex flex-col group min-w-0">
            <div className="flex items-center gap-2">
              <span className="font-serif font-black text-xl sm:text-2xl tracking-[0.15em] sm:tracking-widest text-charcoal uppercase group-hover:text-pink-primary transition-colors leading-none">
                Runway
              </span>
            </div>
            <span className="text-[10px] sm:text-xs font-extrabold tracking-[0.12em] sm:tracking-widest text-pink-primary uppercase leading-tight mt-1">
              Kids Fashion Week 2026
            </span>
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center space-x-4 xl:space-x-7">
            <a
              href="#overview"
              className="text-xs xl:text-sm font-semibold text-charcoal hover:text-pink-primary uppercase tracking-wider whitespace-nowrap transition-colors"
            >
              Overview
            </a>
            <a
              href="#categories"
              className="text-xs xl:text-sm font-semibold text-charcoal hover:text-pink-primary uppercase tracking-wider whitespace-nowrap transition-colors"
            >
              Categories
            </a>
            <a
              href="#schedule"
              className="text-xs xl:text-sm font-semibold text-charcoal hover:text-pink-primary uppercase tracking-wider whitespace-nowrap transition-colors"
            >
              Event Flow
            </a>
            <a
              href="#voting"
              className="text-xs xl:text-sm font-semibold text-charcoal hover:text-pink-primary uppercase tracking-wider whitespace-nowrap transition-colors"
            >
              Wild Card Voting
            </a>
            <a
              href="#wheels"
              className="text-xs xl:text-sm font-semibold text-charcoal hover:text-pink-primary uppercase tracking-wider whitespace-nowrap transition-colors"
            >
              Fashion on Wheels
            </a>
            <a
              href="#prizes"
              className="text-xs xl:text-sm font-semibold text-charcoal hover:text-pink-primary uppercase tracking-wider whitespace-nowrap transition-colors"
            >
              Prizes
            </a>
          </nav>

          {/* Action CTAs */}
          <div className="hidden md:flex items-center space-x-2.5 xl:space-x-3 shrink-0">
            <a
              href="#voting"
              className="px-3.5 xl:px-4 py-2.5 text-[11px] xl:text-xs font-bold uppercase tracking-wider text-pink-dark bg-surface border border-border-pink hover:bg-pink-soft transition-all rounded whitespace-nowrap"
            >
              View Voting
            </a>
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLScLhiYtE6aWKlI-T3tou7OzfVQVucW4uxHgf8Q7P5bLI4JKLw/viewform"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 xl:px-5 py-2.5 text-[11px] xl:text-xs font-bold uppercase tracking-wider text-white bg-pink-primary hover:bg-pink-dark transition-all rounded shadow-sm hover:shadow whitespace-nowrap"
            >
              Nominate Child
            </a>
          </div>

          {/* Mobile Menu Toggle - Strict Typography, No Icons */}
          <div className="flex lg:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="flex h-10 px-3 items-center justify-center rounded-lg border border-border-pink bg-surface text-[11px] font-extrabold uppercase tracking-wider text-charcoal transition hover:bg-pink-soft focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-pink-primary"
              aria-label={mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
              aria-expanded={mobileMenuOpen}
              aria-controls="mobile-navigation"
            >
              {mobileMenuOpen ? "Close" : "Menu"}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <nav id="mobile-navigation" aria-label="Mobile navigation" className="lg:hidden bg-surface border-t border-border-pink px-4 pt-3 pb-6 space-y-3">
          <a
            href="#overview"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-sm font-bold text-charcoal py-2 border-b border-border-pink uppercase tracking-wider"
          >
            Overview
          </a>
          <a
            href="#categories"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-sm font-bold text-charcoal py-2 border-b border-border-pink uppercase tracking-wider"
          >
            Categories
          </a>
          <a
            href="#schedule"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-sm font-bold text-charcoal py-2 border-b border-border-pink uppercase tracking-wider"
          >
            Event Flow
          </a>
          <a
            href="#voting"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-sm font-bold text-charcoal py-2 border-b border-border-pink uppercase tracking-wider"
          >
            Wild Card Voting
          </a>
          <a
            href="#wheels"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-sm font-bold text-charcoal py-2 border-b border-border-pink uppercase tracking-wider"
          >
            Fashion on Wheels
          </a>
          <a
            href="#prizes"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-sm font-bold text-charcoal py-2 border-b border-border-pink uppercase tracking-wider"
          >
            Prizes &amp; Rewards
          </a>
          <div className="pt-2 flex flex-col gap-2">
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLScLhiYtE6aWKlI-T3tou7OzfVQVucW4uxHgf8Q7P5bLI4JKLw/viewform"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMobileMenuOpen(false)}
              className="text-center py-3 text-xs font-bold uppercase tracking-wider text-white bg-pink-primary rounded"
            >
              Register Child Now
            </a>
            <a
              href="#voting"
              onClick={() => setMobileMenuOpen(false)}
              className="text-center py-2.5 text-xs font-bold uppercase tracking-wider text-pink-dark bg-white border border-border-pink rounded"
            >
              Participate in Voting
            </a>
          </div>
        </nav>
      )}

      <div className="fixed inset-x-0 bottom-0 z-[60] border-t border-border-pink bg-white/95 px-4 pt-3 pb-[calc(0.75rem+env(safe-area-inset-bottom))] shadow-[0_-8px_24px_rgba(28,25,23,0.08)] backdrop-blur md:hidden">
        <div className="mx-auto flex max-w-lg items-center justify-between gap-3">
          <div className="min-w-0">
            <span className="block text-[10px] font-extrabold uppercase tracking-wider text-charcoal">
              Free nomination
            </span>
            <span className="block text-[10px] text-charcoal-muted">Finale · 14 Nov</span>
          </div>
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLScLhiYtE6aWKlI-T3tou7OzfVQVucW4uxHgf8Q7P5bLI4JKLw/viewform"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setMobileMenuOpen(false)}
            className="rounded-lg bg-pink-primary px-5 py-3 text-center text-[11px] font-extrabold uppercase tracking-wider text-white shadow-sm transition hover:bg-pink-dark focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-pink-primary"
          >
            Nominate your child
          </a>
        </div>
      </div>
    </header>
  );
}
