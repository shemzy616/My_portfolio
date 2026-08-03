import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Nav: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const navItems = [
    { label: "ABOUT", id: "services" },
    { label: "SKILLS", id: "skills" },
    { label: "WORK", id: "projects" },
    { label: "CONTACT", id: "contact" },
    { label: "FUN ✦", id: "fun", accent: true },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-[#07050c]/85 backdrop-blur-xl border-b border-white/[0.06]"
          : "bg-[#07050c]/60 backdrop-blur-sm border-b border-white/[0.04]"
      }`}
    >
      <div className="max-w-[1180px] mx-auto px-6 h-14 flex items-center justify-between">
        {/* Brand / Logo — Left */}
        <a
          href="#home"
          onClick={(e) => {
            e.preventDefault();
            scrollToSection("home");
          }}
          className="flex items-center gap-2 group shrink-0"
        >
          {/* Diamond / gem icon */}
          <svg
            className="w-4 h-4 text-purple-400 group-hover:text-purple-300 transition-colors"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path d="M12 2L2 12l10 10 10-10L12 2zm0 3.41L18.59 12 12 18.59 5.41 12 12 5.41z" />
          </svg>
          <span className="font-display font-extrabold text-white text-base tracking-wide">
            Shem
          </span>
          <span className="font-display font-semibold text-gray-500 text-base tracking-wide -ml-1.5">
            .sec
          </span>
        </a>

        {/* Desktop Navigation — Center */}
        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            (item as any).accent ? (
              <Link
                key={item.id}
                to="/fun"
                className="text-[13px] font-mono tracking-[0.15em] transition-colors duration-200 uppercase text-purple-400 hover:text-purple-300"
              >
                {item.label}
              </Link>
            ) : (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="text-[13px] font-mono tracking-[0.15em] transition-colors duration-200 uppercase text-gray-400 hover:text-white"
              >
                {item.label}
              </button>
            )
          ))}
        </nav>

        {/* Resume Button — Right */}
        <div className="flex items-center gap-3 shrink-0">
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            download="Shem's Resume.pdf"
            className="hidden md:inline-flex items-center gap-1.5 px-4 py-1.5 rounded border border-white/20 text-[13px] font-mono tracking-[0.1em] text-gray-200 hover:border-white/50 hover:text-white transition-all duration-200 uppercase"
          >
            <span>Resume</span>
            <svg className="w-3 h-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M7 17L17 7M17 7H7M17 7v10" />
            </svg>
          </a>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-gray-400 hover:text-white transition-colors"
            aria-label="Toggle Menu"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {mobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#07050c]/95 backdrop-blur-xl border-b border-white/[0.06] px-6 py-5 space-y-1">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className="block w-full text-left text-sm font-mono tracking-[0.12em] text-gray-400 hover:text-white py-2.5 transition-colors uppercase"
            >
              {item.label}
            </button>
          ))}
          <div className="pt-3 border-t border-white/[0.06]">
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              download="Shem's Resume.pdf"
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded border border-white/20 text-sm font-mono tracking-[0.1em] text-gray-200 hover:border-white/50 hover:text-white transition-all uppercase"
            >
              <span>Resume</span>
              <svg className="w-3 h-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M7 17L17 7M17 7H7M17 7v10" />
              </svg>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Nav;