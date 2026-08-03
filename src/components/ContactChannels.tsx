import React from "react";
import { portfolioData } from "../data/portfolioData";

const ContactChannels: React.FC = () => {
  const channels = [
    {
      label: portfolioData.personal.email,
      href: `mailto:${portfolioData.personal.email}`,
      icon: (
        <svg className="w-4 h-4 text-purple-400 shrink-0" viewBox="0 0 24 24" fill="currentColor">
          <path d="M1.5 4.5a3 3 0 0 1 3-3h15a3 3 0 0 1 3 3v15a3 3 0 0 1-3 3h-15a3 3 0 0 1-3-3v-15zm3-.5a1 1 0 0 0-1 1v.793l8.5 5.312 8.5-5.312V5a1 1 0 0 0-1-1h-15zm16 3.707-7.97 4.981a1 1 0 0 1-1.06 0L2.5 7.707V19.5a1 1 0 0 0 1 1h15a1 1 0 0 0 1-1V7.707z" />
        </svg>
      ),
    },
    {
      label: "GitHub",
      href: portfolioData.personal.github,
      icon: (
        <svg className="w-4 h-4 text-purple-400 shrink-0" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.009-.868-.013-1.703-2.782.604-3.369-1.342-3.369-1.342-.454-1.155-1.11-1.463-1.11-1.463-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.087.636-1.337-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0 1 12 6.836a9.59 9.59 0 0 1 2.504.337c1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.579.688.481C19.138 20.163 22 16.418 22 12c0-5.523-4.477-10-10-10z" />
        </svg>
      ),
    },
    {
      label: "LinkedIn",
      href: portfolioData.personal.linkedin,
      icon: (
        <div className="w-4 h-4 bg-purple-400 text-black flex items-center justify-center font-bold text-[9px] shrink-0 rounded-none">
          in
        </div>
      ),
    },
  ];

  return (
    <div className="flex items-center gap-6 max-w-2xl">
      {/* DIRECT CHANNELS CARD */}
      <div className="flex-1 bg-[#090611] border border-[#221838] hover:border-purple-500/60 transition-all rounded-none p-8 shadow-[0_0_25px_rgba(168,85,247,0.08)]">
        <h3 className="text-xs font-mono font-bold text-gray-400 uppercase tracking-[0.25em] mb-6">
          DIRECT CHANNELS
        </h3>

        <div className="space-y-1">
          {channels.map((ch, idx) => (
            <a
              key={idx}
              href={ch.href}
              target={ch.href.startsWith("mailto:") ? "_self" : "_blank"}
              rel="noopener noreferrer"
              className="flex items-center gap-4 py-3.5 border-b border-[#1b1428] last:border-b-0 group transition-colors"
            >
              <div className="w-5 flex justify-center">{ch.icon}</div>
              <span className="text-sm font-mono text-gray-200 group-hover:text-purple-300 transition-colors">
                {ch.label}
              </span>
            </a>
          ))}
        </div>
      </div>

      {/* PULSE INDICATOR DOT ON RIGHT */}
      <div className="hidden sm:flex w-9 h-9 border border-purple-500/60 bg-purple-950/40 items-center justify-center shrink-0 shadow-[0_0_15px_rgba(168,85,247,0.3)] rounded-none">
        <span className="w-2.5 h-2.5 bg-purple-400 shadow-[0_0_8px_#a855f7] animate-pulse" />
      </div>
    </div>
  );
};

export default ContactChannels;
