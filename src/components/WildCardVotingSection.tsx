"use client";

import React, { useState } from "react";

interface ContestantVote {
  id: string;
  name: string;
  age: string;
  category: string;
  city: string;
  votes: number;
  likes: number;
  shares: number;
  badge: string;
}

const initialContestants: ContestantVote[] = [
  {
    id: "KFW-101",
    name: "Aarav Sharma",
    age: "1.5 Years",
    category: "Newborn (Walk with Mom)",
    city: "Gomti Nagar, Lucknow",
    votes: 842,
    likes: 520,
    shares: 322,
    badge: "WILD CARD CONTENDER",
  },
  {
    id: "KFW-102",
    name: "Ananya Verma",
    age: "Class 2 (7 Yrs)",
    category: "Independent Ramp Walk",
    city: "Indira Nagar, Lucknow",
    votes: 960,
    likes: 610,
    shares: 350,
    badge: "TRENDING IN VOTING",
  },
  {
    id: "KFW-103",
    name: "Reyansh Gupta",
    age: "Class 4 (9 Yrs)",
    category: "Groomed Fashion Walk",
    city: "Hazratganj, Lucknow",
    votes: 720,
    likes: 440,
    shares: 280,
    badge: "STAGE NOMINEE",
  },
  {
    id: "KFW-104",
    name: "Kabir & Father",
    age: "Class 3 Duo",
    category: "Sporty Walk with Dad",
    city: "Aliganj, Lucknow",
    votes: 890,
    likes: 560,
    shares: 330,
    badge: "POPULAR DUO",
  },
];

export default function WildCardVotingSection() {
  const [contestants, setContestants] = useState<ContestantVote[]>(initialContestants);
  const [votedIds, setVotedIds] = useState<{ [key: string]: boolean }>({});
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const handleVote = (id: string, name: string) => {
    if (votedIds[id]) {
      setToastMessage(`You have already voted for ${name}!`);
      setTimeout(() => setToastMessage(null), 3000);
      return;
    }

    setContestants((prev) =>
      prev.map((c) =>
        c.id === id
          ? { ...c, votes: c.votes + 1, likes: c.likes + 1 }
          : c
      )
    );

    setVotedIds((prev) => ({ ...prev, [id]: true }));
    setToastMessage(`Success! Your vote for ${name} has been counted.`);
    setTimeout(() => setToastMessage(null), 3500);
  };

  return (
    <section id="voting" className="py-20 bg-surface border-b border-border-pink relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Floating Toast Notification */}
        {toastMessage && (
          <div className="fixed bottom-6 right-6 z-50 bg-charcoal text-white text-xs font-bold uppercase tracking-wider px-6 py-3.5 rounded shadow-2xl border border-border-pink">
            {toastMessage}
          </div>
        )}

        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <div className="inline-block px-3 py-1 bg-white text-pink-dark border border-border-pink text-xs font-bold uppercase tracking-wider rounded mb-3">
            SOCIAL MEDIA WILD CARD ENTRY
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl font-black text-charcoal uppercase tracking-tight">
            Direct Finale Entry via Social Voting
          </h2>
          <p className="mt-3 text-base text-charcoal-muted leading-relaxed">
            Parents don&apos;t just wait for offline audition callbacks! Once registered, every child 
            receives an official branded social media voting card. The top 2 most engaged participants 
            per category directly enter the Grand Finale without audition screening!
          </p>
        </div>

        {/* Rules & Process Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          <div className="bg-white border border-border-pink p-8 rounded-xl">
            <div className="text-xs font-black uppercase tracking-widest text-pink-primary mb-2">
              STEP 01
            </div>
            <h3 className="font-serif text-lg font-bold text-charcoal mb-2">
              Official Creative Generation
            </h3>
            <p className="text-xs text-charcoal-muted leading-relaxed">
              After successful registration, our design team prepares an official participant creative and posts it across verified partner handles.
            </p>
          </div>

          <div className="bg-white border border-border-pink p-8 rounded-xl">
            <div className="text-xs font-black uppercase tracking-widest text-pink-primary mb-2">
              STEP 02
            </div>
            <h3 className="font-serif text-lg font-bold text-charcoal mb-2">
              Engagement Scoring Formula
            </h3>
            <p className="text-xs text-charcoal-muted leading-relaxed">
              Score = Genuine Likes + Comments + Shares. Friends, family, and supporters cheer for the child to boost their national reach.
            </p>
          </div>

          <div className="bg-white border border-border-pink p-8 rounded-xl">
            <div className="text-xs font-black uppercase tracking-widest text-pink-primary mb-2">
              STEP 03
            </div>
            <h3 className="font-serif text-lg font-bold text-charcoal mb-2">
              Direct Wild Card Pass
            </h3>
            <p className="text-xs text-charcoal-muted leading-relaxed">
              Top 2 entries in each of the 4 categories skip the physical screening and receive direct entry into the Children&apos;s Day Mega Finale!
            </p>
          </div>
        </div>

        {/* Live Voting Simulator Board */}
        <div className="bg-white border-2 border-border-pink rounded-xl p-6 sm:p-10 shadow-sm">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 border-b border-border-pink gap-4">
            <div>
              <span className="text-[10px] font-extrabold uppercase tracking-widest text-pink-primary bg-pink-soft px-2.5 py-1 rounded">
                LIVE DEMONSTRATION
              </span>
              <h3 className="font-serif text-2xl font-black text-charcoal mt-1">
                Featured Contestant Voting Board
              </h3>
              <p className="text-xs text-charcoal-muted">
                Experience how votes are cast and tracked in real-time. Register below to list your child!
              </p>
            </div>
            <a
              href="#register"
              className="self-start sm:self-auto w-full sm:w-auto text-center px-5 py-2.5 text-xs font-extrabold uppercase tracking-wider text-white bg-pink-primary hover:bg-pink-dark rounded transition-colors"
            >
              Get Your Child Listed &rarr;
            </a>
          </div>

          {/* Contestant Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 pt-8">
            {contestants.map((child) => (
              <div
                key={child.id}
                className="bg-surface border border-border-pink rounded-xl p-5 flex flex-col justify-between hover:border-pink-primary transition-all"
              >
                <div>
                  {/* Top Bar */}
                  <div className="flex justify-between items-center mb-3">
                    <span className="text-[10px] font-black uppercase tracking-wider bg-white border border-border-pink px-2 py-0.5 rounded text-charcoal">
                      ID: {child.id}
                    </span>
                    <span className="text-[9px] font-extrabold uppercase tracking-wider text-pink-dark bg-pink-soft px-2 py-0.5 rounded">
                      {child.badge}
                    </span>
                  </div>

                  {/* Photo Placeholder Card (Child Themed) - Solid, No Gradient */}
                  <div className="w-full h-36 bg-white border border-border-pink rounded-lg mb-4 flex flex-col items-center justify-center text-center p-3">
                    <div className="w-12 h-12 rounded-full bg-pink-soft border border-border-pink flex items-center justify-center font-serif font-black text-pink-primary text-lg mb-2">
                      {child.name.charAt(0)}
                    </div>
                    <span className="text-xs font-bold text-charcoal uppercase tracking-wider">
                      {child.name}
                    </span>
                    <span className="text-[10px] text-charcoal-muted">
                      {child.age} &bull; {child.city}
                    </span>
                  </div>

                  {/* Category */}
                  <div className="text-[11px] font-semibold text-charcoal mb-4 bg-white border border-border-pink p-2 rounded text-center">
                    {child.category}
                  </div>

                  {/* Voting Stats */}
                  <div className="grid grid-cols-2 gap-2 text-center mb-4">
                    <div className="bg-white border border-border-pink p-2 rounded">
                      <span className="text-sm font-black text-pink-primary block">
                        {child.likes}
                      </span>
                      <span className="text-[9px] uppercase font-bold text-charcoal-muted">
                        Social Likes
                      </span>
                    </div>
                    <div className="bg-white border border-border-pink p-2 rounded">
                      <span className="text-sm font-black text-charcoal block">
                        {child.votes}
                      </span>
                      <span className="text-[9px] uppercase font-bold text-charcoal-muted">
                        Total Points
                      </span>
                    </div>
                  </div>
                </div>

                {/* Vote Action */}
                <button
                  onClick={() => handleVote(child.id, child.name)}
                  disabled={votedIds[child.id]}
                  className={`w-full py-2.5 text-xs font-extrabold uppercase tracking-widest rounded transition-all ${
                    votedIds[child.id]
                      ? "bg-white text-charcoal-muted border border-border-pink cursor-not-allowed"
                      : "bg-pink-primary hover:bg-pink-dark text-white active:scale-95"
                  }`}
                >
                  {votedIds[child.id] ? "VOTE COUNTED" : "CAST VOTE"}
                </button>
              </div>
            ))}
          </div>

          {/* Anti-fraud policy note */}
          <div className="mt-8 pt-6 border-t border-border-pink flex flex-col sm:flex-row items-center justify-between text-xs text-charcoal-muted gap-4">
            <div>
              <strong className="text-charcoal uppercase font-bold">FAIR PLAY POLICY:</strong> Only genuine and organic engagement is accepted. Any automated, paid, or fraudulent voting leads to immediate disqualification.
            </div>
            <span className="text-[11px] font-bold uppercase tracking-wider text-pink-primary bg-surface border border-border-pink px-3 py-1 rounded">
              VERIFIED JURY AUDIT
            </span>
          </div>
        </div>

      </div>
    </section>
  );
}
