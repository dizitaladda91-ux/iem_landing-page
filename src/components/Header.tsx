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
      {/* Top Notification Bar - Solid Pink, No Gradient */}
      <div className="bg-pink-soft text-pink-dark py-2 px-3 sm:px-4 text-[10px] sm:text-xs font-semibold tracking-wider text-center border-b border-border-pink">
        <span className="inline-block px-2 py-0.5 bg-white text-pink-primary border border-border-pink rounded mr-1 sm:mr-2 font-bold uppercase">
          LUCKNOW 2026
        </span>
        <span className="leading-relaxed">
          OFFICIAL REGISTRATIONS &amp; SOCIAL VOTING OPEN — FINALE ON CHILDREN&apos;S DAY, 14TH NOV
        </span>
      </div>

      {/* Main Navigation */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Brand Logo & Titles - Strict Typography, No Icons */}
          <a href="#" className="flex flex-col group min-w-0">
            <div className="flex items-center gap-2">
              <span className="font-serif font-black text-xl sm:text-2xl tracking-[0.15em] sm:tracking-widest text-charcoal uppercase group-hover:text-pink-primary transition-colors">
                RUNWAY
              </span>
              <span className="bg-pink-primary text-white text-[9px] sm:text-[10px] font-extrabold uppercase px-2 py-0.5 rounded tracking-widest">
                KIDS
              </span>
            </div>
            <span className="text-[9px] sm:text-[11px] font-medium tracking-[0.12em] sm:tracking-widest text-charcoal-muted uppercase leading-tight">
              Institute of Event Management × AdOnMo
            </span>
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center space-x-7">
            <a
              href="#overview"
              className="text-sm font-semibold text-charcoal hover:text-pink-primary uppercase tracking-wider transition-colors"
            >
              Overview
            </a>
            <a
              href="#categories"
              className="text-sm font-semibold text-charcoal hover:text-pink-primary uppercase tracking-wider transition-colors"
            >
              Categories
            </a>
            <a
              href="#schedule"
              className="text-sm font-semibold text-charcoal hover:text-pink-primary uppercase tracking-wider transition-colors"
            >
              Event Flow
            </a>
            <a
              href="#voting"
              className="text-sm font-semibold text-charcoal hover:text-pink-primary uppercase tracking-wider transition-colors"
            >
              Wild Card Voting
            </a>
            <a
              href="#wheels"
              className="text-sm font-semibold text-charcoal hover:text-pink-primary uppercase tracking-wider transition-colors"
            >
              Fashion on Wheels
            </a>
            <a
              href="#prizes"
              className="text-sm font-semibold text-charcoal hover:text-pink-primary uppercase tracking-wider transition-colors"
            >
              Prizes
            </a>
          </nav>

          {/* Action CTAs */}
          <div className="hidden md:flex items-center space-x-3">
            <a
              href="#voting"
              className="px-4 py-2.5 text-xs font-bold uppercase tracking-wider text-pink-dark bg-surface border border-border-pink hover:bg-pink-soft transition-all rounded"
            >
              View Voting
            </a>
            <a
              href="#register"
              className="px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-white bg-pink-primary hover:bg-pink-dark transition-all rounded shadow-sm hover:shadow"
            >
              Nominate Child
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="flex lg:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="flex h-11 w-11 items-center justify-center rounded-lg border border-border-pink bg-surface text-charcoal transition hover:bg-pink-soft focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-pink-primary"
              aria-label={mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
              aria-expanded={mobileMenuOpen}
              aria-controls="mobile-navigation"
            >
              <svg aria-hidden="true" viewBox="0 0 24 24" className="h-5 w-5" fill="none">
                {mobileMenuOpen ? (
                  <path d="m6 6 12 12M18 6 6 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                ) : (
                  <path d="M4 7h16M4 12h16M4 17h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                )}
              </svg>
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
              href="#register"
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
            href="#register"
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
