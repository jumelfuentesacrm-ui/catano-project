import { createFileRoute } from "@tanstack/react-router";
import { Star, Clock, Users, ArrowRight, Leaf } from "lucide-react";
import { useState } from "react";

export const Route = createFileRoute("/_shell/adventures")({
  head: () => ({ meta: [{ title: "Adventures — Spirit of Puerto Rico" }] }),
  component: AdventuresScreen,
});

const cats = ["All","🏄 Water","🌿 Eco","🎨 Culture","🧘 Wellness","🎣 Fishing","🍽️ Food","🎭 Events","🗺️ Custom"];

// Real PR experiences that can be booked through the platform
const experiences = [
  {
    title: "Bioluminescent Bay Night Kayak",
    desc: "Paddle through Laguna Grande in Fajardo, where microorganisms glow neon blue in the water around your kayak.",
    img: "/photos/bio-bay-kayak.png",
    dur: "3 hr", grp: "8 max", price: "$72", rating: 4.9, hot: true, cat: "🏄 Water",
  },
  {
    title: "Old San Juan Food & Culture Crawl",
    desc: "Walk the cobblestones of Old San Juan tasting mofongo, alcapurrias and fresh coconut with a local guide.",
    img: "https://images.unsplash.com/photo-1569949381669-ecf31ae8e613?w=800&q=85",
    dur: "4 hr", grp: "10 max", price: "$58", rating: 4.8, hot: false, cat: "🍽️ Food",
  },
  {
    title: "El Yunque Rainforest Hike & Waterfall",
    desc: "Explore the only tropical rainforest in the US National Forest system, ending at a natural swimming hole.",
    img: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=800&q=85",
    dur: "6 hr", grp: "12 max", price: "$95", rating: 4.9, hot: true, cat: "🌿 Eco",
  },
  {
    title: "Sunset Snorkel at Cayo Icacos",
    desc: "Snorkel the clear blue waters off Puerto Rico's east coast, home to sea turtles, parrotfish, and vibrant coral.",
    img: "https://images.unsplash.com/photo-1583212292454-1fe6229603b7?w=800&q=85",
    dur: "4 hr", grp: "10 max", price: "$88", rating: 4.7, hot: false, cat: "🏄 Water",
  },
  {
    title: "Hacienda Coffee Farm Sunrise Tour",
    desc: "Visit a working Puerto Rican coffee farm in the mountains of Jayuya. Pick beans, roast, and taste single-origin PR coffee.",
    img: "https://images.unsplash.com/photo-1528360983277-13d401cdc186?w=800&q=85",
    dur: "5 hr", grp: "8 max", price: "$65", rating: 4.8, hot: false, cat: "🌿 Eco",
  },
  {
    title: "Deep Sea Fishing Charter",
    desc: "Head offshore with local captains for mahi-mahi, wahoo, and blue marlin. All gear included, catch kept or released.",
    img: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=800&q=85",
    dur: "8 hr", grp: "6 max", price: "$140", rating: 4.9, hot: true, cat: "🎣 Fishing",
  },
  {
    title: "Bomba y Plena Cultural Workshop",
    desc: "Learn the African-rooted rhythms of bomba with a master drummer in Cataño. Includes a short performance and dance session.",
    img: "/photos/bomba-plena.png",
    dur: "2 hr", grp: "15 max", price: "$45", rating: 4.9, hot: false, cat: "🎨 Culture",
  },
  {
    title: "Beach Yoga & Wellness Retreat",
    desc: "Morning yoga on Isla Verde beach followed by meditation, breathwork, and a healthy local breakfast.",
    img: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=800&q=85",
    dur: "3 hr", grp: "12 max", price: "$55", rating: 4.8, hot: false, cat: "🧘 Wellness",
  },
];

function AdventuresScreen() {
  const [activeCat, setActiveCat] = useState("All");
  const shown = activeCat === "All" ? experiences : experiences.filter((e) => e.cat === activeCat);

  return (
    <div style={{ background: "#FAF8F3" }}>

      {/* Header */}
      <div className="relative overflow-hidden" style={{ height: 240 }}>
        <img src="https://images.unsplash.com/photo-1502933691298-84fc14542831?w=1400&q=85"
          alt="Adventure kayaking Puerto Rico" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 overlay-hero" />
        <div className="absolute inset-0 overlay-left" />
        <div className="absolute bottom-0 inset-x-0 px-5 pb-6 lg:px-8">
          <p className="eyebrow mb-1" style={{ color: "#D4970A" }}>Adventure & Experience Marketplace</p>
          <h1 className="font-display text-3xl font-light italic text-white">Island <strong className="not-italic font-semibold">Adventures</strong></h1>
          <p style={{ fontFamily: "Montserrat", fontSize: "0.75rem", color: "rgba(255,255,255,0.70)", marginTop: 6 }}>
            Book tours, guides, eco-adventures, wellness and cultural experiences
          </p>
        </div>
      </div>

      <div className="px-4 py-6 lg:px-8">

        {/* Category filter */}
        <div className="no-scrollbar flex gap-2 overflow-x-auto pb-3 mb-6">
          {cats.map((c) => (
            <button key={c} onClick={() => setActiveCat(c)} className="chip whitespace-nowrap transition-all"
              style={activeCat === c
                ? { background: "#0060A0", color: "#FAF8F3" }
                : { background: "white", color: "#5A4A38", border: "1px solid #E5DDD0" }
              }>{c}</button>
          ))}
        </div>

        {/* Featured hero experience */}
        <div className="card-lift mb-8 relative overflow-hidden rounded-3xl" style={{ height: 320 }}>
          <img src="https://images.unsplash.com/photo-1583398701142-37bd2d3f9d49?w=1400&q=85"
            alt="El Morro fortress at sunset — private guided tour Puerto Rico" className="absolute inset-0 w-full h-full object-cover" />
          <div className="absolute inset-0 overlay-left" />
          <div className="absolute inset-0 overlay-hero" />
          <div className="absolute bottom-0 inset-x-0 p-7">
            <span className="chip mb-3 inline-block" style={{ background: "rgba(212,151,10,0.92)", color: "#1A0A00" }}>⭐ Featured Experience</span>
            <h2 className="font-display text-3xl font-light italic text-white leading-tight" style={{ maxWidth: 380 }}>
              Private El Morro <strong className="not-italic font-semibold">Sunset Tour</strong>
            </h2>
            <div className="flex items-center gap-4 mt-3 flex-wrap">
              <div className="flex items-center gap-1.5"><Star size={13} fill="#D4970A" color="#D4970A" /><span style={{ fontFamily: "Montserrat", fontSize: "0.75rem", color: "rgba(255,255,255,0.85)" }}>4.9</span></div>
              <div className="flex items-center gap-1.5" style={{ color: "rgba(255,255,255,0.65)" }}><Clock size={13} /><span style={{ fontFamily: "Montserrat", fontSize: "0.75rem" }}>3 hr</span></div>
              <div className="flex items-center gap-1.5" style={{ color: "rgba(255,255,255,0.65)" }}><Users size={13} /><span style={{ fontFamily: "Montserrat", fontSize: "0.75rem" }}>Private</span></div>
            </div>
            <div className="flex items-center gap-4 mt-4">
              <div className="font-display text-3xl font-light text-white">$120 <span style={{ fontFamily: "Montserrat", fontSize: "0.75rem", color: "rgba(255,255,255,0.55)", fontWeight: 400 }}>/ person</span></div>
              <button className="btn-gold">Book Now <ArrowRight size={13} /></button>
            </div>
          </div>
        </div>

        {/* Experience grid */}
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {shown.map((e) => (
            <article key={e.title} className="card-lift overflow-hidden rounded-2xl bg-white shadow-sm" style={{ border: "1px solid #EDE7D9" }}>
              <div className="relative overflow-hidden" style={{ height: 190 }}>
                <img src={e.img} alt={e.title} className="w-full h-full object-cover" />
                <div className="absolute inset-0 overlay-card" />
                {e.hot && <span className="chip absolute top-3 left-3" style={{ background: "rgba(192,57,43,0.9)", color: "white" }}>🔥 Popular</span>}
                <div className="absolute top-3 right-3 chip" style={{ background: "rgba(255,255,255,0.92)", color: "#0060A0" }}>{e.cat.split(" ")[1] || e.cat}</div>
              </div>
              <div className="p-4">
                <h3 className="font-display text-lg font-semibold" style={{ color: "#1A1612", lineHeight: 1.25 }}>{e.title}</h3>
                <p style={{ fontFamily: "Montserrat", fontSize: "0.7rem", color: "#8A7B6A", marginTop: 6, lineHeight: 1.55 }}>{e.desc}</p>
                <div className="flex items-center gap-3 mt-3">
                  <span className="flex items-center gap-1" style={{ fontFamily: "Montserrat", fontSize: "0.68rem", color: "#8A7B6A" }}><Star size={11} fill="#D4970A" color="#D4970A" /> {e.rating}</span>
                  <span className="flex items-center gap-1" style={{ fontFamily: "Montserrat", fontSize: "0.68rem", color: "#8A7B6A" }}><Clock size={11} /> {e.dur}</span>
                  <span className="flex items-center gap-1" style={{ fontFamily: "Montserrat", fontSize: "0.68rem", color: "#8A7B6A" }}><Users size={11} /> {e.grp}</span>
                </div>
                <div className="flex items-center justify-between mt-4 pt-4" style={{ borderTop: "1px solid #F0EBE1" }}>
                  <div className="font-display text-2xl font-light" style={{ color: "#0060A0" }}>{e.price} <span style={{ fontFamily: "Montserrat", fontSize: "0.65rem", color: "#9A8A78", fontWeight: 400 }}>/ person</span></div>
                  <button className="btn-gold py-2 px-4 text-xs">Book</button>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Group pricing banner */}
        <div className="mt-8 overflow-hidden rounded-2xl bg-white shadow-sm flex flex-col sm:flex-row items-center gap-0" style={{ border: "1px solid #EDE7D9" }}>
          <img src="https://images.unsplash.com/photo-1519671282429-b44b2802040e?w=400&q=80"
            alt="Group experiences" className="w-full sm:w-48 h-36 sm:h-full object-cover flex-shrink-0" />
          <div className="p-5 flex-1">
            <div className="flex items-center gap-1.5 mb-1"><Leaf size={13} color="#1A6B3C" /><p className="eyebrow">Group Pricing</p></div>
            <h3 className="font-display text-xl font-semibold italic" style={{ color: "#0060A0" }}>Groups of 6+ save up to 20%</h3>
            <p style={{ fontFamily: "Montserrat", fontSize: "0.72rem", color: "#8A7B6A", marginTop: 4 }}>Custom experiences, private guides, premium transport & exclusive activities automatically adjust for your group size.</p>
          </div>
          <div className="px-5 pb-5 sm:pb-0 sm:pr-6">
            <button className="btn-gold whitespace-nowrap">Get Group Quote</button>
          </div>
        </div>

        {/* Custom itinerary */}
        <div className="mt-5 overflow-hidden rounded-2xl relative" style={{ height: 110 }}>
          <img src="/photos/pr-festival.png"
            alt="Build custom itinerary — Puerto Rico festivals and experiences" className="absolute inset-0 w-full h-full object-cover" />
          <div className="absolute inset-0" style={{ background: "rgba(0,60,106,0.82)" }} />
          <div className="relative flex items-center justify-between h-full px-6">
            <div>
              <p className="eyebrow mb-0.5" style={{ color: "#D4970A" }}>Build Your Journey</p>
              <p className="font-display text-xl italic text-white">Custom multi-day itinerary →</p>
            </div>
            <button className="btn-gold flex-shrink-0">Start Planning</button>
          </div>
        </div>

      </div>
    </div>
  );
}
