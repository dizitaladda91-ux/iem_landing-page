"use client";

import React, { useState } from "react";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-border-pink">
      {/* Top Notification Bar - Solid Pink, No Gradient */}
      <div className="bg-pink-soft text-pink-dark py-2 px-4 text-xs font-semibold tracking-wider text-center border-b border-border-pink">
        <span className="inline-block px-2 py-0.5 bg-white text-pink-primary border border-border-pink rounded mr-2 font-bold uppercase">
          LUCKNOW 2026
        </span>
        OFFICIAL REGISTRATIONS &amp; SOCIAL VOTING OPEN — FINALE ON CHILDREN&apos;S DAY, 14TH NOV
      </div>

      {/* Main Navigation */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Brand Logo & Titles - Strict Typography, No Icons */}
          <a href="#" className="flex flex-col group">
            <div className="flex items-center gap-2">
              <span className="font-serif font-black text-2xl tracking-widest text-charcoal uppercase group-hover:text-pink-primary transition-colors">
                RUNWAY
              </span>
              <span className="bg-pink-primary text-white text-[10px] font-extrabold uppercase px-2 py-0.5 rounded tracking-widest">
                KIDS
              </span>
            </div>
            <span className="text-[11px] font-medium tracking-widest text-charcoal-muted uppercase">
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

          {/* Mobile Menu Toggle - Pure typography button */}
          <div className="flex lg:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="px-3 py-1.5 text-xs font-bold uppercase tracking-wider border border-border-pink bg-surface text-charcoal rounded"
              aria-label="Toggle Navigation"
            >
              {mobileMenuOpen ? "CLOSE" : "MENU"}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-surface border-t border-border-pink px-4 pt-3 pb-6 space-y-3">
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
        </div>
      )}
    </header>
  );
}
