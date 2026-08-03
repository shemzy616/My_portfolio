import React, { useState } from "react";
import { portfolioData } from "../data/portfolioData";

// ── KEYWORD TAGS extracted per role ─────────────────────────────────────────
const experienceTags: Record<string, string[]> = {
  "ICT Assistant": ["Python", "Linux", "Cisco LAN/WAN", "Security Audits", "UAR", "Least Privilege"],
  "Multimedia & Content Assistant": ["WordPress", "Content Strategy", "Analytics", "Version Control"],
  "Sales Executive": ["Hardware Support", "SLA Management", "Customer Success", "Diagnostics"],
  "Cybersecurity Analyst (Virtual)": ["Phishing Analysis", "Security Awareness", "Threat Reporting", "Mastercard Forage"],
  "Security Analyst (Virtual)": ["IAM", "Incident Investigation", "Log Correlation", "C2 Detection", "TCS Forage"],
};

const educationTags: Record<string, string[]> = {
  "BSc. Information Technology": ["Networking", "Security", "Databases", "Software Dev"],
  "National Trade Test Certificates (Grade 1–3)": ["Electronics", "Trade Certification"],
};

// ── TYPE BADGE ───────────────────────────────────────────────────────────────
const TypeBadge: React.FC<{ label: string; color?: string }> = ({ label, color = "purple" }) => (
  <span
    className={`text-[10px] font-mono font-bold uppercase tracking-widest px-2 py-0.5 border ${
      color === "purple"
        ? "border-purple-500/40 bg-purple-500/10 text-purple-400"
        : "border-blue-500/40 bg-blue-500/10 text-blue-400"
    }`}
  >
    {label}
  </span>
);

// ── TIMELINE ENTRY ───────────────────────────────────────────────────────────
interface TimelineEntryProps {
  role: string;
  company: string;
  period: string;
  tags: string[];
  isLast?: boolean;
  typeBadge?: string;
  badgeColor?: string;
}

const TimelineEntry: React.FC<TimelineEntryProps> = ({
  role,
  company,
  period,
  tags,
  isLast = false,
  typeBadge,
  badgeColor = "purple",
}) => (
  <div className="flex gap-6">
    {/* Timeline spine */}
    <div className="flex flex-col items-center shrink-0">
      {/* Dot */}
      <div className="w-3 h-3 bg-purple-500 shadow-[0_0_10px_rgba(168,85,247,0.7)] mt-1 shrink-0" />
      {/* Line */}
      {!isLast && <div className="w-px flex-1 bg-gradient-to-b from-purple-500/50 to-transparent mt-1" />}
    </div>

    {/* Content */}
    <div className={`pb-10 min-w-0 flex-1 ${isLast ? "pb-0" : ""}`}>
      <div className="flex flex-wrap items-start justify-between gap-2 mb-3">
        <div>
          <h3 className="font-mono font-bold text-base text-white uppercase tracking-wide">
            {role}
          </h3>
          <p className="text-xs font-mono text-gray-500 mt-0.5">{company}</p>
        </div>
        <div className="flex items-center gap-2 shrink-0">
          {typeBadge && <TypeBadge label={typeBadge} color={badgeColor} />}
          <span className="text-[11px] font-mono text-gray-500 border border-[#221b30] px-2 py-0.5">
            {period}
          </span>
        </div>
      </div>

      {/* Tag pills */}
      <div className="flex flex-wrap gap-1.5">
        {tags.map((tag, i) => (
          <span
            key={i}
            className="text-[10px] font-mono px-2 py-0.5 border border-[#2a1f45] bg-[#0c0817] text-gray-400 uppercase tracking-wide"
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  </div>
);

// ── MAIN COMPONENT ───────────────────────────────────────────────────────────
const ExperienceSection: React.FC = () => {
  const [showSims, setShowSims] = useState(false);

  return (
    <section
      id="experience"
      className="py-24 px-4 sm:px-6 max-w-[1180px] mx-auto border-t border-[#221b30]"
    >
      {/* Header */}
      <div data-animate className="animate-fade-up mb-14">
        <span className="text-xs font-mono text-purple-400 font-bold uppercase tracking-widest">
          05 // EXPERIENCE
        </span>
        <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-white uppercase mt-2">
          Experience &amp; Education
        </h2>
      </div>

      <div className="grid lg:grid-cols-2 gap-16">
        {/* ── WORK EXPERIENCE TIMELINE ── */}
        <div data-animate className="animate-fade-up">
          <h3 className="text-xs font-mono font-bold text-gray-500 uppercase tracking-widest mb-8 border-b border-[#221b30] pb-3">
            Work Experience
          </h3>

          <div>
            {portfolioData.experience.map((item, idx) => (
              <TimelineEntry
                key={idx}
                role={item.role}
                company={`${item.company} · ${item.location}`}
                period={item.period}
                tags={experienceTags[item.role] ?? item.bullets.slice(0, 4)}
                isLast={idx === portfolioData.experience.length - 1}
                typeBadge="Work"
              />
            ))}
          </div>
        </div>

        {/* ── EDUCATION + SIMULATIONS ── */}
        <div data-animate className="animate-fade-up delay-1">
          {/* Education */}
          <h3 className="text-xs font-mono font-bold text-gray-500 uppercase tracking-widest mb-8 border-b border-[#221b30] pb-3">
            Education
          </h3>

          <div>
            {portfolioData.education.map((edu, idx) => (
              <TimelineEntry
                key={idx}
                role={edu.degree}
                company={edu.institution}
                period={edu.period}
                tags={educationTags[edu.degree] ?? []}
                isLast={idx === portfolioData.education.length - 1}
                typeBadge="Edu"
                badgeColor="blue"
              />
            ))}
          </div>

          {/* Virtual Simulations — collapsible */}
          <div className="mt-10">
            <button
              onClick={() => setShowSims((s) => !s)}
              className="flex items-center gap-3 text-xs font-mono font-bold text-gray-500 uppercase tracking-widest mb-6 border-b border-[#221b30] pb-3 w-full text-left hover:text-purple-400 transition-colors"
            >
              <span>Virtual Job Simulations</span>
              <span className="text-[10px] font-mono px-2 py-0.5 border border-purple-500/40 bg-purple-500/10 text-purple-400 uppercase tracking-wider ml-1">
                Forage
              </span>
              <span className="ml-auto text-gray-600">{showSims ? "▲" : "▼"}</span>
            </button>

            {showSims && (
              <div>
                {portfolioData.simulations.map((item, idx) => (
                  <TimelineEntry
                    key={idx}
                    role={item.role}
                    company={item.company}
                    period={item.period}
                    tags={experienceTags[item.role] ?? item.bullets.slice(0, 4)}
                    isLast={idx === portfolioData.simulations.length - 1}
                    typeBadge="Sim"
                  />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
