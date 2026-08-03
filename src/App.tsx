import React, { useState, useEffect } from "react";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import SkillGlobe from "./components/SkillGlobe";
import ProjectCard from "./components/ProjectCard";
import ContactChannels from "./components/ContactChannels";
import AboutSection from "./components/AboutSection";
import TerminalWidget from "./components/TerminalWidget";
import ExperienceSection from "./components/ExperienceSection";
import CertificationsSection from "./components/CertificationsSection";
import { portfolioData } from "./data/portfolioData";

const App: React.FC = () => {
  // Text rotator for hero roles
  const roles = ["Software Developer", "Cybersecurity Analyst", "Network Administrator"];
  const [roleIndex, setRoleIndex] = useState(0);
  const [fadeClass, setFadeClass] = useState("opacity-100 translate-y-0");

  useEffect(() => {
    const interval = setInterval(() => {
      setFadeClass("opacity-0 -translate-y-3");
      setTimeout(() => {
        setRoleIndex((prev) => (prev + 1) % roles.length);
        setFadeClass("opacity-100 translate-y-0");
      }, 300);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  // Scroll-reveal: add .in-view to elements with data-animate when they enter viewport
  useEffect(() => {
    const els = document.querySelectorAll("[data-animate]");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("in-view");
          }
        });
      },
      { threshold: 0.12 }
    );
    els.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-[#07050c] text-white font-mono selection:bg-purple-500 selection:text-black relative">
      {/* Background Grid & Noise Atmosphere */}
      <div className="fixed inset-0 grid-bg-overlay pointer-events-none z-0"></div>
      <div className="fixed inset-0 noise-overlay pointer-events-none z-50"></div>

      {/* Fixed Social Sidebar */}
      <aside className="fixed left-0 top-1/2 -translate-y-1/2 z-40 hidden md:flex flex-col">
        <a
          href={portfolioData.personal.github}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
          className="w-10 h-10 flex items-center justify-center border border-[#1a1528] text-gray-500 hover:text-purple-400 hover:border-purple-500/50 transition-all"
        >
          {/* GitHub icon */}
          <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.009-.868-.013-1.703-2.782.604-3.369-1.342-3.369-1.342-.454-1.155-1.11-1.463-1.11-1.463-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.087.636-1.337-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0 1 12 6.836a9.59 9.59 0 0 1 2.504.337c1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.579.688.481C19.138 20.163 22 16.418 22 12c0-5.523-4.477-10-10-10z" />
          </svg>
        </a>
        <a
          href={portfolioData.personal.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
          className="w-10 h-10 flex items-center justify-center border border-[#1a1528] text-gray-500 hover:text-purple-400 hover:border-purple-500/50 transition-all"
        >
          {/* LinkedIn icon */}
          <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
          </svg>
        </a>
      </aside>

      <Nav />

      <main id="home" className="relative z-10 pt-24 sm:pt-32">
        {/* HERO SECTION */}
        <section className="px-4 sm:px-6 max-w-[1180px] mx-auto pt-8 pb-16 sm:pb-24">
          <div className="max-w-3xl space-y-6">
            {/* Badge Tag */}
            <div data-animate className="animate-fade-up inline-flex items-center gap-2 px-3 py-1 rounded border border-[#3d2f54] bg-[#0d0b14] text-xs font-mono text-purple-400">
              <span className="w-2 h-2 rounded-full bg-purple-500 animate-ping"></span>
              <span>CYBERSECURITY ANALYST & SOFTWARE DEV</span>
            </div>

            {/* Big White Neo Title */}
            <div data-animate className="animate-fade-up delay-1 space-y-1">
              <p className="text-sm font-mono tracking-widest text-purple-400 uppercase">
                System User //
              </p>
              <h1 className="font-display font-black text-4xl sm:text-6xl lg:text-7xl tracking-tight text-white uppercase leading-none">
                {portfolioData.personal.name}
              </h1>
            </div>

            {/* Roles — animated rotator */}
            <h2 data-animate className="animate-fade-up delay-2 font-display font-black text-2xl sm:text-4xl lg:text-5xl tracking-tight text-gray-200 uppercase flex items-center gap-3">
              <span>A</span>
              <span className={`inline-block text-purple-400 transition-all duration-300 ease-in-out ${fadeClass}`}>
                {roles[roleIndex]}
              </span>
            </h2>

            {/* One-liner */}
            <p data-animate className="animate-fade-up delay-3 text-base sm:text-lg font-mono text-purple-300 border-l-2 border-purple-500 pl-4 py-1 italic max-w-2xl">
              {portfolioData.personal.tagline}
            </p>

            {/* Actions */}
            <div className="flex flex-wrap gap-4 pt-4">
              <a
                href="#projects"
                className="px-6 py-3 rounded font-mono font-bold text-xs tracking-wider uppercase bg-white text-black hover:bg-purple-400 hover:text-black transition-all shadow-lg shadow-purple-500/10 flex items-center gap-2"
              >
                <span>Explore Projects</span>
                <span>↓</span>
              </a>
              <a
                href="#certifications"
                className="px-6 py-3 rounded font-mono font-bold text-xs tracking-wider uppercase border border-[#3d2f54] bg-[#0d0b14] text-white hover:border-purple-500 transition-all"
              >
                View Certifications
              </a>
              <a
                href="#contact"
                className="px-6 py-3 rounded font-mono font-bold text-xs tracking-wider uppercase border border-[#221b30] text-gray-400 hover:text-white hover:border-gray-500 transition-all"
              >
                Contact Direct
              </a>
            </div>
          </div>
        </section>

        {/* QUICK STATS BAR */}
        <section className="border-y border-[#221b30] bg-[#0d0b14]/80 py-8">
          <div className="max-w-[1180px] mx-auto px-4 sm:px-6 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {portfolioData.stats.map((stat, idx) => (
              <div key={idx} className="space-y-1">
                <p className="font-display font-extrabold text-3xl sm:text-4xl text-white">
                  {stat.value}
                </p>
                <p className="text-xs font-mono text-gray-400 uppercase tracking-widest">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* SKILLS MARQUEE */}
        {(() => {
          const allSkills = portfolioData.skillCategories.flatMap((c) => c.skills);
          const doubled = [...allSkills, ...allSkills];
          return (
            <section className="py-5 border-b border-[#221b30] overflow-hidden relative">
              {/* Fade edges */}
              <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-[#07050c] to-transparent z-10 pointer-events-none" />
              <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-[#07050c] to-transparent z-10 pointer-events-none" />

              <div className="flex animate-marquee whitespace-nowrap">
                {doubled.map((skill, idx) => (
                  <span key={idx} className="inline-flex items-center gap-4 mx-4 text-sm font-mono text-gray-400 tracking-wide uppercase shrink-0">
                    <span>{skill}</span>
                    <span className="w-1 h-1 rounded-full bg-purple-500/60" />
                  </span>
                ))}
              </div>
            </section>
          );
        })()}

        {/* SECTION 01 // ABOUT */}
        <AboutSection />

        {/* SECTION 02 // CAPABILITIES */}
        <section id="services" className="py-24 px-4 sm:px-6 max-w-[1180px] mx-auto">
          <div data-animate className="animate-fade-up mb-14">
            <span className="text-xs font-mono text-purple-400 font-bold uppercase tracking-widest">
              [01]
            </span>
            <h2 className="font-display font-extrabold text-3xl sm:text-5xl text-white uppercase mt-2">
              Capabilities
            </h2>
          </div>

          {/* Grid — 4 columns, bordered cells */}
          <div data-animate className="animate-fade-up delay-1 border border-[#1a1528] rounded-xl overflow-hidden">
            <div className="grid grid-cols-2 lg:grid-cols-4">
              {portfolioData.services.map((service, idx) => {
                // Geometric SVG icons
                const icons: Record<string, React.ReactNode> = {
                  circle: (
                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                      <circle cx="12" cy="12" r="8" />
                    </svg>
                  ),
                  target: (
                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                      <circle cx="12" cy="12" r="8" />
                      <circle cx="12" cy="12" r="3" fill="currentColor" />
                    </svg>
                  ),
                  triangle: (
                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                      <path d="M12 4L22 20H2L12 4z" />
                    </svg>
                  ),
                  diamond: (
                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                      <path d="M12 2L22 12L12 22L2 12L12 2z" />
                    </svg>
                  ),
                  square: (
                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                      <rect x="5" y="5" width="14" height="14" rx="1" />
                    </svg>
                  ),
                  hexagon: (
                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                      <path d="M12 2L21 7V17L12 22L3 17V7L12 2z" />
                    </svg>
                  ),
                  dot: (
                    <svg className="w-5 h-5" viewBox="0 0 24 24">
                      <circle cx="12" cy="12" r="5" fill="currentColor" />
                    </svg>
                  ),
                  ring: (
                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                      <circle cx="12" cy="12" r="8" />
                      <circle cx="12" cy="12" r="4" />
                    </svg>
                  ),
                };

                return (
                  <div
                    key={idx}
                    className="border border-[#1a1528] px-6 py-8 flex flex-col gap-4 hover:bg-[#0d0b14] transition-colors"
                  >
                    <span className="text-purple-400">
                      {icons[service.icon] || icons.circle}
                    </span>
                    <h3 className="font-mono text-xs sm:text-sm font-semibold text-white uppercase tracking-[0.12em]">
                      {service.title}
                    </h3>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* SKILLS MARQUEE 2 — reverse scroll */}
        {(() => {
          const allSkills = portfolioData.skillCategories.flatMap((c) => c.skills);
          const doubled = [...allSkills, ...allSkills];
          return (
            <section className="py-5 border-y border-[#221b30] overflow-hidden relative">
              <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-[#07050c] to-transparent z-10 pointer-events-none" />
              <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-[#07050c] to-transparent z-10 pointer-events-none" />

              <div className="flex animate-marquee-reverse whitespace-nowrap">
                {doubled.map((skill, idx) => (
                  <span key={idx} className="inline-flex items-center gap-4 mx-4 text-sm font-mono text-gray-400 tracking-wide uppercase shrink-0">
                    <span>{skill}</span>
                    <span className="w-1 h-1 rounded-full bg-purple-500/60" />
                  </span>
                ))}
              </div>
            </section>
          );
        })()}

        {/* SECTION 02 // CERTIFICATIONS */}
        <CertificationsSection />

        {/* SECTION 03 // SKILLS */}
        <section id="skills" className="py-24 px-4 sm:px-6 max-w-[1180px] mx-auto border-t border-[#221b30]">
          <div data-animate className="animate-fade-up mb-14 text-center">
            <span className="text-xs font-mono text-purple-400 font-bold uppercase tracking-widest">
              03 // SKILLS
            </span>
            <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-white uppercase mt-2">
              Skill Universe
            </h2>
          </div>

          <div data-animate className="animate-fade-up delay-1 flex justify-center">
            <SkillGlobe />
          </div>
        </section>

        {/* SECTION 04 // WORK / PROJECTS */}
        <section id="projects" className="py-24 border-t border-[#221b30]">
          <div data-animate className="animate-fade-up mb-10 px-4 sm:px-6 max-w-[1180px] mx-auto">
            <span className="text-xs font-mono text-purple-400 font-bold uppercase tracking-widest">
              04 // WORK
            </span>
            <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-white uppercase mt-2">
              Projects
            </h2>
          </div>

          {/* Horizontal scroll row */}
          <div
            data-animate
            className="animate-fade-up delay-1 flex gap-5 overflow-x-auto pb-4 px-4 sm:px-6"
            style={{ scrollbarWidth: "thin", scrollbarColor: "#3b0f6e #07050c" }}
          >
            {portfolioData.projects.map((project, idx) => (
              <ProjectCard key={project.id} project={project} index={idx} />
            ))}
          </div>
        </section>

        {/* SECTION 05 // EXPERIENCE & EDUCATION */}
        <ExperienceSection />

        {/* SECTION 06 // TERMINAL / CONTACT */}
        <section id="contact" className="py-24 px-4 sm:px-6 max-w-[1180px] mx-auto border-t border-[#221b30]">
          <div className="mb-14">
            <span className="text-xs font-mono text-purple-400 font-bold uppercase tracking-widest">
              06 // CONTACT
            </span>
            <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-white uppercase mt-2">
              Get In Touch
            </h2>
          </div>

          <div className="grid lg:grid-cols-12 gap-8 items-start">
            {/* Terminal CLI Widget (secure_comms.exe) */}
            <div className="lg:col-span-6">
              <TerminalWidget />
            </div>

            {/* Direct Channels */}
            <div className="lg:col-span-6">
              <ContactChannels />
            </div>
          </div>
        </section>

      </main>

      <Footer />
    </div>
  );
};

export default App;
