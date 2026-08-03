import React, { useState, useEffect } from "react";

const Footer: React.FC = () => {
  const [showTopBtn, setShowTopBtn] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 400) {
        setShowTopBtn(true);
      } else {
        setShowTopBtn(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      {/* Back to Top Button */}
      <button
        onClick={scrollToTop}
        className={`fixed bottom-6 right-6 z-50 p-3 rounded bg-purple-600 text-white font-mono text-xs shadow-xl transition-all duration-300 hover:bg-purple-500 border border-purple-400 ${
          showTopBtn ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20 pointer-events-none"
        }`}
        aria-label="Back to top"
      >
        ↑ TOP
      </button>

      {/* Footer Content */}
      <footer className="bg-[#07050c] py-8 border-t border-[#221b30] text-xs font-mono text-gray-400">
        <div className="max-w-[1180px] mx-auto px-4 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-2 text-center sm:text-left">
          <p>designed &amp; built by Shem Imani</p>
          <p>© 2026 · Shem Imani</p>
        </div>
      </footer>
    </>
  );
};

export default Footer;