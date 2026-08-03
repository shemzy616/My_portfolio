import React, { useState } from "react";
import { portfolioData } from "../data/portfolioData";

// ── REAL VENDOR SVG LOGOS ────────────────────────────────────────────────────

const IBMLogo = () => (
  <svg viewBox="0 0 40 16" fill="none" className="h-4 w-auto">
    <rect width="4" height="2" x="0" y="0" fill="#1264A3"/>
    <rect width="4" height="2" x="0" y="4" fill="#1264A3"/>
    <rect width="4" height="2" x="0" y="8" fill="#1264A3"/>
    <rect width="4" height="2" x="0" y="12" fill="#1264A3"/>
    <rect width="2" height="2" x="5" y="0" fill="#1264A3"/>
    <rect width="2" height="2" x="5" y="4" fill="#1264A3"/>
    <rect width="2" height="2" x="5" y="12" fill="#1264A3"/>
    <rect width="4" height="2" x="8" y="0" fill="#1264A3"/>
    <rect width="4" height="2" x="8" y="4" fill="#1264A3"/>
    <rect width="4" height="2" x="8" y="8" fill="#1264A3"/>
    <rect width="4" height="2" x="8" y="12" fill="#1264A3"/>
    {/* E */}
    <rect width="4" height="2" x="14" y="0" fill="#1264A3"/>
    <rect width="4" height="2" x="14" y="4" fill="#1264A3"/>
    <rect width="4" height="2" x="14" y="8" fill="#1264A3"/>
    <rect width="4" height="2" x="14" y="12" fill="#1264A3"/>
    <rect width="2" height="2" x="19" y="0" fill="#1264A3"/>
    <rect width="2" height="2" x="19" y="4" fill="#1264A3"/>
    <rect width="2" height="2" x="19" y="12" fill="#1264A3"/>
    {/* M */}
    <rect width="4" height="2" x="22" y="0" fill="#1264A3"/>
    <rect width="4" height="2" x="22" y="4" fill="#1264A3"/>
    <rect width="4" height="2" x="22" y="8" fill="#1264A3"/>
    <rect width="4" height="2" x="22" y="12" fill="#1264A3"/>
    <rect width="2" height="2" x="27" y="2" fill="#1264A3"/>
    <rect width="4" height="2" x="29" y="0" fill="#1264A3"/>
    <rect width="4" height="2" x="29" y="4" fill="#1264A3"/>
    <rect width="4" height="2" x="29" y="8" fill="#1264A3"/>
    <rect width="4" height="2" x="29" y="12" fill="#1264A3"/>
  </svg>
);

const GoogleLogo = () => (
  <svg viewBox="0 0 74 24" fill="none" className="h-5 w-auto">
    <path d="M9.24 8.19v2.46h5.88c-.18 1.38-.64 2.39-1.34 3.1-.86.86-2.2 1.8-4.54 1.8-3.62 0-6.45-2.92-6.45-6.54s2.83-6.54 6.45-6.54c1.95 0 3.38.77 4.43 1.76L15.4 2.5C13.74.96 11.53 0 9.24 0 4.28 0 .11 4.04.11 9s4.17 9 9.13 9c2.68 0 4.7-.88 6.28-2.52 1.62-1.62 2.13-3.91 2.13-5.75 0-.57-.04-1.1-.13-1.54H9.24Z" fill="#4285F4"/>
    <path d="M25 6.19c-3.21 0-5.83 2.44-5.83 5.81 0 3.34 2.62 5.81 5.83 5.81s5.83-2.46 5.83-5.81c0-3.37-2.62-5.81-5.83-5.81Zm0 9.33c-1.76 0-3.28-1.45-3.28-3.52s1.52-3.52 3.28-3.52 3.28 1.43 3.28 3.52-1.52 3.52-3.28 3.52Z" fill="#EA4335"/>
    <path d="M53.58 7.49h-.09c-.57-.68-1.67-1.3-3.06-1.3C47.53 6.19 45 8.72 45 12c0 3.26 2.53 5.81 5.43 5.81 1.39 0 2.49-.62 3.06-1.32h.09v.81c0 2.22-1.19 3.41-3.1 3.41-1.56 0-2.53-1.12-2.93-2.07l-2.24.94C46.02 20.95 47.76 22 50.48 22c2.86 0 5.28-1.68 5.28-5.77V6.49h-2.18v1Zm-2.93 8.03c-1.76 0-3.1-1.5-3.1-3.52s1.34-3.54 3.1-3.54c1.74 0 3.1 1.52 3.1 3.56 0 2.02-1.36 3.5-3.1 3.5Z" fill="#4285F4"/>
    <path d="M38 6.19c-3.21 0-5.83 2.44-5.83 5.81 0 3.34 2.62 5.81 5.83 5.81s5.83-2.46 5.83-5.81c0-3.37-2.62-5.81-5.83-5.81Zm0 9.33c-1.76 0-3.28-1.45-3.28-3.52s1.52-3.52 3.28-3.52 3.28 1.43 3.28 3.52-1.52 3.52-3.28 3.52Z" fill="#FBBC05"/>
    <path d="M58 .24h2.51v17.57H58V.24Z" fill="#34A853"/>
    <path d="M68.41 15.52c-1.3 0-2.22-.59-2.82-1.76l7.77-3.21-.26-.66c-.48-1.3-1.96-3.7-4.97-3.7-2.99 0-5.48 2.35-5.48 5.81 0 3.26 2.46 5.81 5.76 5.81 2.66 0 4.2-1.63 4.84-2.57l-1.98-1.32c-.66.96-1.56 1.6-2.86 1.6Zm-.18-7.15c1.03 0 1.91.53 2.2 1.28l-5.25 2.17c0-2.44 1.73-3.45 3.05-3.45Z" fill="#EA4335"/>
  </svg>
);

const CiscoLogo = () => (
  <svg viewBox="0 0 60 24" fill="none" className="h-5 w-auto">
    <rect x="28" y="3" width="4" height="18" rx="2" fill="#00BCEB"/>
    <rect x="21" y="6" width="4" height="12" rx="2" fill="#00BCEB"/>
    <rect x="35" y="6" width="4" height="12" rx="2" fill="#00BCEB"/>
    <rect x="14" y="9" width="4" height="6" rx="2" fill="#00BCEB"/>
    <rect x="42" y="9" width="4" height="6" rx="2" fill="#00BCEB"/>
    <rect x="7" y="10" width="4" height="4" rx="2" fill="#00BCEB"/>
    <rect x="49" y="10" width="4" height="4" rx="2" fill="#00BCEB"/>
  </svg>
);

// Simplified brand-color wordmarks for space-constrained pill format
const VendorLogo: React.FC<{ issuer: string }> = ({ issuer }) => {
  switch (issuer.toLowerCase()) {
    case "google":
      return <GoogleLogo />;
    case "ibm":
      return <IBMLogo />;
    case "cisco":
      return <CiscoLogo />;
    default:
      return (
        <span className="font-mono font-black text-xs tracking-wider text-white">
          {issuer.toUpperCase()}
        </span>
      );
  }
};

const INITIAL_VISIBLE = 5;

const CertificationsSection: React.FC = () => {
  const [expanded, setExpanded] = useState(false);
  const certs = portfolioData.certifications;
  const visible = expanded ? certs : certs.slice(0, INITIAL_VISIBLE);
  const hiddenCount = certs.length - INITIAL_VISIBLE;

  return (
    <section
      id="certifications"
      className="py-24 px-4 sm:px-6 max-w-[1180px] mx-auto border-t border-[#221b30]"
    >
      {/* Header */}
      <div data-animate className="animate-fade-up mb-10">
        <span className="text-xs font-mono text-purple-400 font-bold uppercase tracking-widest">
          02 // CERTIFICATIONS
        </span>
        <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-white uppercase mt-2">
          Verified Credentials
        </h2>
      </div>

      {/* Logo Strip — pill row */}
      <div data-animate className="animate-fade-up delay-1">
        <div className="flex flex-wrap gap-3 items-center">
          {visible.map((cert, idx) => (
            <a
              key={idx}
              href={cert.credlyUrl}
              target="_blank"
              rel="noopener noreferrer"
              title={cert.name}
              className="group flex items-center gap-2.5 px-4 py-2.5 bg-[#090611] border border-[#221838] hover:border-purple-500/60 transition-all duration-200 hover:shadow-[0_0_16px_rgba(168,85,247,0.15)]"
            >
              {/* Vendor Logo */}
              <span className="shrink-0 flex items-center h-5">
                <VendorLogo issuer={cert.issuer} />
              </span>

              {/* Divider */}
              <span className="w-px h-4 bg-[#2a1f45] shrink-0" />

              {/* Cert label */}
              <span className="text-[11px] font-mono text-gray-300 group-hover:text-white transition-colors max-w-[180px] truncate leading-none">
                {cert.name}
              </span>

              {/* Verified dot */}
              <span className="w-1.5 h-1.5 bg-green-400 shrink-0 shadow-[0_0_6px_rgba(74,222,128,0.7)]" />
            </a>
          ))}

          {/* Toggle button */}
          {hiddenCount > 0 && (
            <button
              onClick={() => setExpanded((e) => !e)}
              className="flex items-center gap-2 px-4 py-2.5 bg-[#0d0b14] border border-[#221838] text-[11px] font-mono text-gray-500 hover:text-purple-400 hover:border-purple-500/50 transition-all"
            >
              {expanded ? (
                <>
                  <span>Show less</span>
                  <span>▲</span>
                </>
              ) : (
                <>
                  <span>+{hiddenCount} more</span>
                  <span>▼</span>
                </>
              )}
            </button>
          )}
        </div>

        {/* Credly attribution line */}
        <p className="text-[10px] font-mono text-gray-700 mt-5 uppercase tracking-widest">
          All credentials verified via Credly · click any pill to view badge
        </p>
      </div>
    </section>
  );
};

export default CertificationsSection;
