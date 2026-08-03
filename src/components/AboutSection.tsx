import React from "react";
import { portfolioData } from "../data/portfolioData";

const AboutSection: React.FC = () => {
  return (
    <section id="services" className="py-24 px-4 sm:px-6 max-w-[1180px] mx-auto border-t border-[#221b30]">
      {/* HEADER */}
      <div data-animate className="animate-fade-up flex items-center gap-3 mb-10">
        <span className="text-[13px] font-mono text-purple-400 font-bold uppercase tracking-widest">
          [01]
        </span>
        <h2 className="font-mono font-extrabold text-4xl sm:text-5xl text-white uppercase tracking-[0.15em]">
          ABOUT
        </h2>
      </div>

      {/* CONTENT GRID */}
      <div data-animate className="animate-fade-up delay-1 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        {/* LEFT PARAGRAPH */}
        <div className="lg:col-span-7 space-y-6 relative">
          <p className="text-base sm:text-lg font-mono text-gray-200 leading-relaxed tracking-wide">
            Cybersecurity-focused IT professional from Nairobi. I architect SOC detection labs on Azure Sentinel, wire Gemini into pipelines that map SIEM logs to MITRE ATT&CK, and automate phishing URL and IOC triage in Python. Network administration, full-stack builds on the side, and the same nagging question of how much of a SOC analyst's judgment automation should replace.
          </p>

          {/* PULSE INDICATOR DOT */}
          <div className="flex items-center gap-3 pt-2">
            <div className="w-8 h-8 rounded-none border border-purple-500/60 bg-purple-950/40 flex items-center justify-center shadow-[0_0_12px_rgba(168,85,247,0.3)]">
              <span className="w-2.5 h-2.5 rounded-none bg-purple-400 shadow-[0_0_8px_#a855f7] animate-pulse" />
            </div>
          </div>
        </div>

        {/* RIGHT INFO CARD */}
        <div className="lg:col-span-5">
          <div className="bg-[#090611] border border-[#221838] p-6 sm:p-7 space-y-4 shadow-lg">
            <div className="flex items-center justify-between py-3 border-b border-[#1b1428]">
              <span className="text-xs font-mono text-gray-500 uppercase tracking-widest font-bold">
                BASE
              </span>
              <span className="text-xs font-mono text-gray-200 font-semibold">
                Nairobi, Kenya
              </span>
            </div>

            <div className="flex items-center justify-between py-3 border-b border-[#1b1428]">
              <span className="text-xs font-mono text-gray-500 uppercase tracking-widest font-bold">
                EMAIL
              </span>
              <a
                href={`mailto:${portfolioData.personal.email}`}
                className="text-xs font-mono text-purple-400 hover:text-purple-300 transition-colors font-semibold"
              >
                {portfolioData.personal.email}
              </a>
            </div>

            <div className="flex items-center justify-between py-3">
              <span className="text-xs font-mono text-gray-500 uppercase tracking-widest font-bold">
                GITHUB
              </span>
              <a
                href={portfolioData.personal.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-mono text-purple-400 hover:text-purple-300 transition-colors font-semibold"
              >
                @shemzy616
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
