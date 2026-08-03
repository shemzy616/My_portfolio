import React, { useState } from "react";
import { Link } from "react-router-dom";

type Category = "all" | "cars" | "cinema" | "life";

interface Photo {
  src: string;
  caption: string;
  tag: string;
  category: Category;
  size: "md" | "lg" | "xl";
}

const photos: Photo[] = [
  {
    src: "/fun/car-green-bmw.jpg",
    caption: "Java Green M3 at Bang Cars NBI 🔥",
    tag: "CARS",
    category: "cars",
    size: "lg",
  },
  {
    src: "/fun/car-bmw-m5.jpg",
    caption: "BMW M5 under the tent. Pure art.",
    tag: "CARS",
    category: "cars",
    size: "xl",
  },
  {
    src: "/fun/cinema-selfie.jpg",
    caption: "Cinema vibes, always front row energy.",
    tag: "CINEMA",
    category: "cinema",
    size: "md",
  },
  {
    src: "/fun/graduation.jpg",
    caption: "BSc IT — Class of 2025. We did it. 🎓",
    tag: "LIFE",
    category: "life",
    size: "lg",
  },
  {
    src: "/fun/concert.jpg",
    caption: "Nairobi streets alive. Nothing like live music.",
    tag: "LIFE",
    category: "life",
    size: "md",
  },
];

const tabs: { key: Category; label: string; icon: string }[] = [
  { key: "all",    label: "All",    icon: "◈" },
  { key: "cars",   label: "Cars",   icon: "◎" },
  { key: "cinema", label: "Cinema", icon: "▶" },
  { key: "life",   label: "Life",   icon: "◇" },
];

const tagColors: Record<string, string> = {
  CARS:   "border-yellow-500/50 text-yellow-400 bg-yellow-500/10",
  CINEMA: "border-purple-500/50 text-purple-400 bg-purple-500/10",
  LIFE:   "border-green-500/50  text-green-400  bg-green-500/10",
};

const sizeClasses: Record<Photo["size"], string> = {
  md: "col-span-1 row-span-1",
  lg: "col-span-1 md:col-span-2 row-span-1",
  xl: "col-span-1 md:col-span-2 row-span-2",
};

const Fun: React.FC = () => {
  const [active, setActive]   = useState<Category>("all");
  const [hovered, setHovered] = useState<number | null>(null);

  const filtered = active === "all" ? photos : photos.filter((p) => p.category === active);

  return (
    <div className="min-h-screen bg-[#07050c] text-white font-mono selection:bg-purple-500 selection:text-black">
      {/* Background grid */}
      <div
        className="fixed inset-0 pointer-events-none z-0"
        style={{
          backgroundImage:
            "linear-gradient(rgba(168,85,247,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(168,85,247,0.04) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
          maskImage: "radial-gradient(ellipse 80% 60% at 50% 0%, #000 30%, transparent 80%)",
        }}
      />

      {/* Mini nav */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-[#07050c]/85 backdrop-blur-xl border-b border-white/[0.06]">
        <div className="max-w-[1180px] mx-auto px-6 h-14 flex items-center justify-between">
          <Link
            to="/"
            className="flex items-center gap-2 group"
          >
            {/* Arrow back */}
            <svg className="w-4 h-4 text-gray-500 group-hover:text-white transition-colors" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M19 12H5M5 12l7-7M5 12l7 7" />
            </svg>
            <span className="text-[13px] font-mono text-gray-500 group-hover:text-white transition-colors uppercase tracking-widest">
              Back to Portfolio
            </span>
          </Link>

          <span className="font-display font-extrabold text-white text-base tracking-wide">
            Shem<span className="text-gray-500">.fun</span>
          </span>
        </div>
      </header>

      {/* Page content */}
      <main className="relative z-10 pt-28 pb-24 px-4 sm:px-6 max-w-[1180px] mx-auto">

        {/* Header */}
        <div className="mb-8">
          <span className="text-xs font-mono text-purple-400 font-bold uppercase tracking-widest">
            [Beyond the Code]
          </span>
          <h1 className="font-display font-extrabold text-4xl sm:text-6xl text-white uppercase mt-2 leading-none">
            The Fun Side
          </h1>
          <p className="text-gray-500 font-mono text-sm mt-3 max-w-xl">
            Cars, cinema, concerts — the stuff that keeps the brain alive outside the terminal.
          </p>
        </div>

        {/* Interest pills */}
        <div className="flex flex-wrap gap-3 mb-10">
          {[
            { icon: "🚗", label: "Car Enthusiast" },
            { icon: "🎬", label: "Cinema Lover" },
            { icon: "📷", label: "Photography" },
            { icon: "🎵", label: "Live Music" },
          ].map((item) => (
            <span
              key={item.label}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded font-mono text-xs border border-[#221b30] bg-[#0d0b14] text-gray-300 uppercase tracking-wider"
            >
              {item.icon} {item.label}
            </span>
          ))}
        </div>

        {/* Tab filter */}
        <div className="flex gap-2 mb-10 flex-wrap">
          {tabs.map((tab) => (
            <button
              key={tab.key}
              onClick={() => setActive(tab.key)}
              className={`px-4 py-2 rounded font-mono text-xs font-bold uppercase tracking-widest transition-all flex items-center gap-2 ${
                active === tab.key
                  ? "bg-white text-black"
                  : "border border-[#221b30] bg-[#0d0b14] text-gray-400 hover:text-white"
              }`}
            >
              <span className="text-base leading-none">{tab.icon}</span>
              {tab.label}
            </button>
          ))}
        </div>

        {/* Bento grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 auto-rows-[280px]">
          {filtered.map((photo, idx) => (
            <div
              key={`${active}-${idx}`}
              className={`${sizeClasses[photo.size]} relative overflow-hidden rounded-xl border border-[#1a1528] group cursor-pointer`}
              style={{
                transition: "transform 0.4s cubic-bezier(0.22,1,0.36,1), box-shadow 0.4s ease",
                transform:  hovered === idx ? "scale(1.015)" : "scale(1)",
                boxShadow:  hovered === idx ? "0 0 48px rgba(168,85,247,0.18)" : "none",
              }}
              onMouseEnter={() => setHovered(idx)}
              onMouseLeave={() => setHovered(null)}
            >
              <img
                src={photo.src}
                alt={photo.caption}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />

              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent opacity-50 group-hover:opacity-90 transition-opacity duration-300" />

              {/* Tag */}
              <span className={`absolute top-3 left-3 text-[10px] font-mono font-bold px-2 py-0.5 rounded border uppercase tracking-widest ${tagColors[photo.tag]}`}>
                {photo.tag}
              </span>

              {/* Caption slide-up */}
              <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-2 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                <p className="font-mono text-xs text-white leading-snug">{photo.caption}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Footer quote */}
        <div className="mt-16 border-t border-[#221b30] pt-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <p className="font-mono text-xs text-gray-600 italic max-w-sm">
            "Life's too short for bad code and boring weekends."
          </p>
          <Link
            to="/"
            className="px-5 py-2 rounded font-mono font-bold text-xs uppercase tracking-wider border border-[#221b30] text-gray-400 hover:text-white hover:border-white/30 transition-all"
          >
            ← Back to Portfolio
          </Link>
        </div>
      </main>
    </div>
  );
};

export default Fun;
