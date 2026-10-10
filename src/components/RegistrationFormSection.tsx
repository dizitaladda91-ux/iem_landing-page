"use client";

import React, { useState } from "react";
import confetti from "canvas-confetti";

export default function RegistrationFormSection() {
  const [formData, setFormData] = useState({
    childName: "Kiara Advani",
    age: "7 Years",
    selectedClass: "Class 2",
    category: "Class 2 – Class 3 (Independent Ramp Walk)",
    parentName: "Sunita Advani",
    relation: "Mother",
    whatsapp: "+91 98765 43210",
    email: "sunita@example.com",
    city: "Gomti Nagar, Lucknow",
    instagramHandle: "@kiara_little_star",
    hobbies: "Dancing & Stage Posing",
    photoUrl: "",
    agreedToTerms: true,
  });

  const [photoPreview, setPhotoPreview] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittedData, setSubmittedData] = useState<{
    id: string;
    childName: string;
    category: string;
    whatsapp: string;
  } | null>(null);

  // Handle Photo selection
  const handlePhotoUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      const reader = new FileReader();
      reader.onload = (event) => {
        if (event.target?.result) {
          setPhotoPreview(event.target.result as string);
        }
      };
      reader.readAsDataURL(file);
    }
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value, type } = e.target;
    if (type === "checkbox") {
      const target = e.target as HTMLInputElement;
      setFormData((prev) => ({ ...prev, [name]: target.checked }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const GOOGLE_FORM_URL =
    "https://docs.google.com/forms/d/e/1FAIpQLScLhiYtE6aWKlI-T3tou7OzfVQVucW4uxHgf8Q7P5bLI4JKLw/viewform";

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.childName || !formData.whatsapp) {
      alert("Please provide the child's name and contact WhatsApp number.");
      return;
    }

    setIsSubmitting(true);

    // Redirect user to the official Google Form for registration
    window.open(GOOGLE_FORM_URL, "_blank", "noopener,noreferrer");

    // Simulate submission & voting card generation
    setTimeout(() => {
      setIsSubmitting(false);
      const generatedId = `KFW-LKO-${Math.floor(1000 + Math.random() * 9000)}`;

      setSubmittedData({
        id: generatedId,
        childName: formData.childName,
        category: formData.category,
        whatsapp: formData.whatsapp,
      });

      // Fire festive celebration confetti!
      try {
        confetti({
          particleCount: 100,
          spread: 70,
          origin: { y: 0.6 },
          colors: ["#112266", "#D4AF37", "#F6E29C", "#0A1440", "#FFFFFF"],
        });
      } catch {
        // fallback if canvas not available
      }
    }, 600);
  };

  const handleShareWhatsApp = () => {
    if (!submittedData) return;
    const shareText = `Vote for ${submittedData.childName} in Jashn Realty Presents Runway Kids Fashion Week 2026 (IEM × AdOnMo)! Contestant ID: ${submittedData.id}. Support with your Likes and Shares for the Wild Card Finale Entry!`;
    const url = `https://wa.me/?text=${encodeURIComponent(shareText)}`;
    window.open(url, "_blank");
  };

  return (
    <section id="register" className="py-20 bg-white border-b border-border-pink relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-3xl">
            <div className="inline-block px-3 py-1 bg-surface text-pink-dark border border-border-pink text-xs font-bold uppercase tracking-wider rounded mb-3">
              JASHN REALTY PRESENTS &bull; CONTESTANT NOMINATION
            </div>
            <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-extrabold text-charcoal uppercase tracking-tight">
              Register Child &amp; Generate Voting Card
            </h2>
            <p className="mt-2 text-sm sm:text-base text-charcoal-muted leading-relaxed">
              Preview your child&apos;s <strong className="text-charcoal font-semibold">Social Media Voting Creative</strong> below and complete your official registration for <strong className="text-pink-primary font-semibold">Jashn Realty Presents Runway Kids Fashion Week 2026</strong> on our Google Form!
            </p>
          </div>
          <a
            href={GOOGLE_FORM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 px-6 py-3.5 text-center text-xs font-extrabold uppercase tracking-widest text-white bg-pink-primary hover:bg-pink-dark rounded-lg shadow-sm transition-colors"
          >
            Fill Official Registration Form
          </a>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Form */}
          <div className="lg:col-span-7 bg-surface border border-border-pink rounded-xl p-6 sm:p-8">
            
            <form onSubmit={handleSubmit} className="space-y-6">
              
              {/* Section 1: Child Details */}
              <div>
                <div className="flex items-center justify-between pb-3 mb-4 border-b border-border-pink">
                  <span className="text-xs font-extrabold uppercase tracking-widest text-pink-primary">
                    SECTION 01 &bull; PARTICIPANT DETAILS
                  </span>
                  <span className="text-[10px] font-bold uppercase bg-white border border-border-pink px-2 py-0.5 rounded text-charcoal">
                    FREE ENTRY
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-charcoal mb-1.5">
                      Child&apos;s Full Name *
                    </label>
                    <input
                      type="text"
                      name="childName"
                      required
                      value={formData.childName}
                      onChange={handleInputChange}
                      placeholder="e.g. Kiara Advani"
                      className="w-full px-3.5 py-2.5 text-sm bg-white border border-border-pink rounded focus:outline-none focus:border-pink-primary text-charcoal font-medium"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-charcoal mb-1.5">
                      Age / Date of Birth *
                    </label>
                    <input
                      type="text"
                      name="age"
                      required
                      value={formData.age}
                      onChange={handleInputChange}
                      placeholder="e.g. 7 Years (15 May 2019)"
                      className="w-full px-3.5 py-2.5 text-sm bg-white border border-border-pink rounded focus:outline-none focus:border-pink-primary text-charcoal font-medium"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-charcoal mb-1.5">
                      School / Current Class
                    </label>
                    <input
                      type="text"
                      name="selectedClass"
                      value={formData.selectedClass}
                      onChange={handleInputChange}
                      placeholder="e.g. Class 2 / Toddler"
                      className="w-full px-3.5 py-2.5 text-sm bg-white border border-border-pink rounded focus:outline-none focus:border-pink-primary text-charcoal font-medium"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-charcoal mb-1.5">
                      Contest Category *
                    </label>
                    <select
                      id="categorySelect"
                      name="category"
                      value={formData.category}
                      onChange={handleInputChange}
                      className="w-full px-3.5 py-2.5 text-sm bg-white border border-border-pink rounded focus:outline-none focus:border-pink-primary text-charcoal font-medium"
                    >
                      <option value="Newborn (1–2 Years) — Walk with Mom">
                        Category 1: Newborn (1–2 Yrs) — Walk with Mom
                      </option>
                      <option value="Class 2 – Class 3 (Independent Ramp Walk)">
                        Category 2: Class 2 – Class 3 (Ramp Walk)
                      </option>
                      <option value="Class 4 – Class 5 (Groomed Fashion Walk)">
                        Category 3: Class 4 – Class 5 (Designer Showcase)
                      </option>
                      <option value="Sporty Walk with Dad (Father & Child Duo)">
                        Category 4: Sporty Walk with Dad (Special Duo)
                      </option>
                    </select>
                  </div>
                </div>

                <div className="mt-4">
                  <label className="block text-xs font-bold uppercase tracking-wider text-charcoal mb-1.5">
                    Child&apos;s Interests &amp; Talents
                  </label>
                  <input
                    type="text"
                    name="hobbies"
                    value={formData.hobbies}
                    onChange={handleInputChange}
                    placeholder="e.g. Ramp Walk, Dancing, Posing, Singing, Sports"
                    className="w-full px-3.5 py-2.5 text-sm bg-white border border-border-pink rounded focus:outline-none focus:border-pink-primary text-charcoal font-medium"
                  />
                </div>
              </div>

              {/* Section 2: Parent & Contact Details */}
              <div className="pt-2">
                <div className="flex items-center justify-between pb-3 mb-4 border-b border-border-pink">
                  <span className="text-xs font-extrabold uppercase tracking-widest text-pink-primary">
                    SECTION 02 &bull; PARENT / GUARDIAN CONTACT
                  </span>
                  <span className="text-[10px] font-bold uppercase bg-white border border-border-pink px-2 py-0.5 rounded text-charcoal-muted">
                    VERIFIED CONTACT
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-charcoal mb-1.5">
                      Parent / Guardian Name *
                    </label>
                    <input
                      type="text"
                      name="parentName"
                      required
                      value={formData.parentName}
                      onChange={handleInputChange}
                      placeholder="e.g. Sunita Advani"
                      className="w-full px-3.5 py-2.5 text-sm bg-white border border-border-pink rounded focus:outline-none focus:border-pink-primary text-charcoal font-medium"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-charcoal mb-1.5">
                      Relationship with Child
                    </label>
                    <select
                      name="relation"
                      value={formData.relation}
                      onChange={handleInputChange}
                      className="w-full px-3.5 py-2.5 text-sm bg-white border border-border-pink rounded focus:outline-none focus:border-pink-primary text-charcoal font-medium"
                    >
                      <option value="Mother">Mother</option>
                      <option value="Father">Father</option>
                      <option value="Guardian">Guardian</option>
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-charcoal mb-1.5">
                      WhatsApp Number (For Voting Card) *
                    </label>
                    <input
                      type="tel"
                      name="whatsapp"
                      required
                      value={formData.whatsapp}
                      onChange={handleInputChange}
                      placeholder="+91 95489 18304"
                      className="w-full px-3.5 py-2.5 text-sm bg-white border border-border-pink rounded focus:outline-none focus:border-pink-primary text-charcoal font-medium"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-charcoal mb-1.5">
                      City &amp; Area (Lucknow / Other) *
                    </label>
                    <input
                      type="text"
                      name="city"
                      required
                      value={formData.city}
                      onChange={handleInputChange}
                      placeholder="e.g. Gomti Nagar, Lucknow"
                      className="w-full px-3.5 py-2.5 text-sm bg-white border border-border-pink rounded focus:outline-none focus:border-pink-primary text-charcoal font-medium"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-charcoal mb-1.5">
                      Instagram / Social Media Handle (For Voting Tag)
                    </label>
                    <input
                      type="text"
                      name="instagramHandle"
                      value={formData.instagramHandle}
                      onChange={handleInputChange}
                      placeholder="@child_name_or_parent"
                      className="w-full px-3.5 py-2.5 text-sm bg-white border border-border-pink rounded focus:outline-none focus:border-pink-primary text-charcoal font-medium"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-charcoal mb-1.5">
                      Upload Child Photo (Optional)
                    </label>
                    <input
                      type="file"
                      accept="image/*"
                      onChange={handlePhotoUpload}
                      className="w-full text-xs text-charcoal file:mr-3 file:py-2 file:px-3 file:rounded file:border-0 file:text-xs file:font-bold file:bg-pink-soft file:text-pink-dark hover:file:bg-pink-muted cursor-pointer"
                    />
                  </div>
                </div>
              </div>

              {/* Terms checkbox */}
              <div className="pt-2">
                <label className="flex items-start gap-3 cursor-pointer">
                  <input
                    type="checkbox"
                    name="agreedToTerms"
                    checked={formData.agreedToTerms}
                    onChange={handleInputChange}
                    className="mt-1 h-4 w-4 rounded border-border-pink text-pink-primary focus:ring-pink-primary"
                  />
                  <span className="text-xs text-charcoal-muted leading-relaxed">
                    I confirm that the details provided are accurate and grant permission for my child to participate in the screening, rehearsals, media coverage, and social media voting of <strong className="text-charcoal font-semibold">Jashn Realty Presents Runway Kids Fashion Week 2026</strong>.
                  </span>
                </label>
              </div>

              {/* Submit CTA */}
              <div className="pt-2">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3.5 text-center text-xs font-extrabold uppercase tracking-widest text-white bg-pink-primary hover:bg-pink-dark rounded transition-all shadow-sm hover:shadow disabled:opacity-50"
                >
                  {isSubmitting ? "PROCESSING NOMINATION..." : "SUBMIT NOMINATION & GENERATE VOTING CARD"}
                </button>
              </div>

            </form>
          </div>

          {/* Right Column: LIVE OFFICIAL VOTING CARD PREVIEW */}
          <div className="lg:col-span-5 sticky top-28">
            
            <div className="flex items-center justify-between mb-3">
              <span className="text-xs font-black uppercase tracking-wider text-charcoal">
                LIVE OFFICIAL VOTING CREATIVE PREVIEW
              </span>
              <span className="text-[10px] font-extrabold uppercase bg-pink-soft text-pink-dark px-2 py-0.5 rounded border border-border-pink">
                UPDATES IN REAL-TIME
              </span>
            </div>

            {/* Official Digital Voting Creative Card */}
            <div className="bg-white border-2 border-border-pink rounded-xl p-5 sm:p-6 shadow-md relative overflow-hidden">
              
              {/* Card Header */}
              <div className="border-b-2 border-border-pink pb-3 mb-3 text-center">
                <div className="text-[9px] font-black tracking-[0.2em] text-pink-primary uppercase mb-0.5">
                  JASHN <span className="text-gold-dark">|</span> REALTY PRESENTS
                </div>
                <div className="flex items-center justify-center gap-2 mb-1">
                  <span className="font-serif font-black text-xl tracking-widest text-charcoal uppercase">
                    RUNWAY
                  </span>
                  <span className="bg-pink-primary text-white text-[10px] font-extrabold uppercase px-2 py-0.5 rounded tracking-widest">
                    2026
                  </span>
                </div>
                <div className="text-[10px] font-bold uppercase tracking-widest text-charcoal-muted">
                  KIDS FASHION WEEK &bull; OFFICIAL VOTING PASS
                </div>
                <div className="text-[9px] font-semibold tracking-wider text-pink-primary uppercase mt-0.5">
                  JASHN REALTY &bull; IEM &times; ADONMO LUCKNOW
                </div>
              </div>

              {/* Child Photo Frame */}
              <div className="relative mb-4">
                <div className="w-full h-48 sm:h-52 bg-surface border-2 border-border-pink rounded-lg overflow-hidden flex flex-col items-center justify-center text-center p-4">
                  {photoPreview ? (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img
                      src={photoPreview}
                      alt={formData.childName}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="space-y-2">
                      <div className="w-14 h-14 rounded-full bg-white border border-border-pink mx-auto flex items-center justify-center font-serif text-xl font-bold text-pink-primary shadow-sm">
                        {formData.childName ? formData.childName.charAt(0).toUpperCase() : "K"}
                      </div>
                      <div className="text-xs font-bold uppercase text-charcoal">
                        OFFICIAL CONTESTANT PORTRAIT
                      </div>
                      <div className="text-[10px] text-charcoal-muted">
                        Upload photo or will be clicked at studio
                      </div>
                    </div>
                  )}
                </div>

                {/* Candidate ID Tag */}
                <div className="absolute top-3 left-3 bg-white border border-border-pink px-2.5 py-1 rounded text-[10px] font-black uppercase tracking-wider text-charcoal shadow-sm">
                  PASS ID: #KFW-LKO-2026
                </div>

                {/* Direct Wild Card Pill */}
                <div className="absolute bottom-3 right-3 bg-pink-primary text-white px-2.5 py-1 rounded text-[9px] font-black uppercase tracking-widest shadow-sm">
                  WILD CARD CANDIDATE
                </div>
              </div>

              {/* Participant Name & Details */}
              <div className="space-y-2.5 pb-4 border-b border-border-pink">
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-charcoal-muted block">
                    CONTESTANT NAME
                  </span>
                  <h3 className="font-serif text-xl font-bold text-charcoal uppercase leading-tight">
                    {formData.childName || "Participant Name"}
                  </h3>
                </div>

                <div className="grid grid-cols-2 gap-2 text-xs">
                  <div className="bg-surface p-2 rounded border border-border-pink">
                    <span className="text-[9px] font-bold uppercase text-charcoal-muted block">
                      AGE &bull; CLASS
                    </span>
                    <strong className="text-charcoal font-bold">
                      {formData.age} {formData.selectedClass ? `(${formData.selectedClass})` : ""}
                    </strong>
                  </div>

                  <div className="bg-surface p-2 rounded border border-border-pink">
                    <span className="text-[9px] font-bold uppercase text-charcoal-muted block">
                      CITY / LOCATION
                    </span>
                    <strong className="text-charcoal font-bold">
                      {formData.city || "Lucknow"}
                    </strong>
                  </div>
                </div>

                <div className="bg-pink-light p-2.5 rounded border border-border-pink text-xs">
                  <span className="text-[9px] font-black uppercase tracking-wider text-pink-dark block">
                    NOMINATED CATEGORY
                  </span>
                  <strong className="text-charcoal font-bold">
                    {formData.category}
                  </strong>
                </div>

                {formData.instagramHandle && (
                  <div className="text-[11px] font-semibold text-charcoal-muted">
                    Official Social Tag: <strong className="text-pink-primary">{formData.instagramHandle}</strong>
                  </div>
                )}
              </div>

              {/* Voting Instruction Footer */}
              <div className="pt-4 text-center space-y-2">
                <div className="text-[11px] font-extrabold uppercase tracking-wider text-pink-dark">
                  &ldquo;HELP ME WIN THE WILD CARD ENTRY TO THE FINALE!&rdquo;
                </div>
                <div className="text-[10px] text-charcoal-muted">
                  Share this creative with friends &amp; family. Highest Likes, Shares &amp; Comments qualify directly.
                </div>
                <div className="inline-block text-[9px] font-bold uppercase tracking-widest text-charcoal-muted bg-surface border border-border-pink px-3 py-1 rounded">
                  JASHN REALTY PRESENTS RUNWAY KIDS FASHION WEEK 2026
                </div>
              </div>

            </div>

          </div>

        </div>

        {/* Confirmation Modal */}
        {submittedData && (
          <div className="fixed inset-0 z-50 bg-charcoal/60 backdrop-blur-sm flex items-center justify-center p-4">
            <div className="bg-white border-2 border-border-pink max-w-lg w-full rounded-2xl p-8 shadow-2xl relative animate-in fade-in zoom-in duration-300">
              
              <div className="text-center space-y-3 pb-6 border-b border-border-pink">
                <span className="inline-block px-3 py-1 bg-pink-soft text-pink-primary border border-border-pink text-xs font-black uppercase tracking-widest rounded-full">
                  JASHN REALTY PRESENTS &bull; NOMINATION SUCCESSFUL
                </span>
                <h3 className="font-serif text-3xl font-black text-charcoal uppercase">
                  Welcome to Runway 2026!
                </h3>
                <p className="text-sm text-charcoal-muted">
                  Your nomination for <strong className="text-charcoal">{submittedData.childName}</strong> in <strong className="text-pink-primary">Jashn Realty Presents Runway Kids Fashion Week 2026</strong> has been registered successfully.
                </p>
              </div>

              <div className="py-6 space-y-4">
                <div className="bg-surface p-4 rounded-xl border border-border-pink text-center">
                  <span className="text-[10px] font-extrabold uppercase tracking-widest text-charcoal-muted block">
                    OFFICIAL REGISTRATION &amp; VOTING ID
                  </span>
                  <span className="font-serif text-2xl font-black text-pink-primary tracking-wider block mt-1">
                    {submittedData.id}
                  </span>
                  <span className="text-[11px] text-charcoal-muted mt-1 block">
                    Save this ID for the Mega Audition on 26th October at Jashn Realty.
                  </span>
                </div>

                <div className="text-xs text-charcoal-muted space-y-1.5">
                  <div className="flex justify-between py-1 border-b border-border-pink">
                    <span>Category:</span>
                    <strong className="text-charcoal">{submittedData.category}</strong>
                  </div>
                  <div className="flex justify-between py-1 border-b border-border-pink">
                    <span>Helpline WhatsApp:</span>
                    <strong className="text-charcoal">+91 95489 18304</strong>
                  </div>
                  <div className="flex justify-between py-1">
                    <span>Audition Date:</span>
                    <strong className="text-charcoal">26 October 2026</strong>
                  </div>
                </div>
              </div>

              {/* WhatsApp Share & Close Buttons */}
              <div className="space-y-3 pt-2">
                <button
                  onClick={handleShareWhatsApp}
                  className="w-full py-3.5 text-center text-xs font-extrabold uppercase tracking-widest text-white bg-pink-primary hover:bg-pink-dark rounded transition-colors"
                >
                  Share on WhatsApp for Social Votes
                </button>
                <button
                  onClick={() => setSubmittedData(null)}
                  className="w-full py-2.5 text-center text-xs font-bold uppercase tracking-wider text-charcoal bg-surface border border-border-pink hover:bg-pink-soft rounded transition-colors"
                >
                  Close &amp; Return to Page
                </button>
              </div>

            </div>
          </div>
        )}

      </div>
    </section>
  );
}
