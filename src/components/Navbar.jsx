import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";

function Navbar() {
  const joinIEIFormUrl = "https://forms.gle/L26q7ycAQPzNby4v5";
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleJoinIEI = () => {
    window.open(joinIEIFormUrl, "_blank", "noopener,noreferrer");
    setIsMobileMenuOpen(false);
  };

  const handleLiveEvent = () => {
    const eventsSection = document.getElementById("events");
    if (eventsSection) {
      eventsSection.scrollIntoView({ 
        behavior: 'smooth', 
        block: 'start' 
      });
    }
    setIsMobileMenuOpen(false);
  };

  const scrollToSection = (e, id) => {
    if (e && e.preventDefault) e.preventDefault();
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    } else {
      window.location.hash = `#${id}`;
    }
    setIsMobileMenuOpen(false);
  };

  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem("theme");
    if (saved) {
      setIsDark(saved === "dark");
    } else {
      const prefersDark =
        window.matchMedia &&
        window.matchMedia("(prefers-color-scheme: dark)").matches;
      setIsDark(prefersDark);
    }
  }, []);

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [isDark]);

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isMobileMenuOpen && !event.target.closest('nav')) {
        setIsMobileMenuOpen(false);
      }
    };
    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, [isMobileMenuOpen]);

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 flex justify-between items-center px-4 sm:px-6 md:px-8 py-3 md:py-4 bg-white border-b-2 border-gray-200 dark:bg-gray-900 dark:border-gray-700">
 
        {/* Logo */}
        <Link to="/" className="flex items-center space-x-2 z-50">
          <img src="iei_logo.png" alt="Logo" className="h-9 w-9 sm:h-10 sm:w-10 md:h-12 md:w-12" />
          <h1
             className="font-frank font-bold text-xl sm:text-2xl md:text-3xl lg:text-[32px]"
             style={{ color: "#8F3938" }}
          >
            IEI MITS
          </h1>
        </Link>

        {/* Desktop Links */}
        <ul className="hidden lg:flex space-x-6 text-gray-700 font-medium dark:text-gray-200">
          <li>
            <a href="#events" onClick={(e) => scrollToSection(e, "events")} className="hover:text-blue-600 transition-colors">
              Events
            </a>
          </li>
          <li>
            <a href="#about" onClick={(e) => scrollToSection(e, "about")} className="hover:text-blue-600 transition-colors">
              About us
            </a>
          </li>
          <li>
            <a href="#membership" onClick={(e) => scrollToSection(e, "membership")} className="hover:text-blue-600 transition-colors">
              Membership
            </a>
          </li>
          <li>
            <a href="#footer" onClick={(e) => scrollToSection(e, "footer")} className="hover:text-blue-600 transition-colors">
              Contact us
            </a>
          </li>
        </ul>

        {/* Desktop Buttons */}
        <div className="hidden lg:flex items-center space-x-3">
          <button
            onClick={handleJoinIEI}
            className="px-4 py-2 border-2 border-blue-600 text-blue-600 rounded-full hover:bg-blue-100 transition-colors font-medium text-sm"
          >
            Join IEI
          </button>
          <button
            onClick={handleLiveEvent}
            className="px-4 py-2 bg-red-600 text-white rounded-full hover:bg-red-700 transition-colors font-medium text-sm"
          >
            Live Event
          </button>

          {/* Dark/Light toggle */}
          <button
            onClick={() => setIsDark((prev) => !prev)}
            aria-label="Toggle light/dark mode"
            className="ml-2 p-2 rounded-full border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-200 hover:shadow transition-colors"
            title={isDark ? "Switch to light mode" : "Switch to dark mode"}
          >
            {isDark ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M10 4.5a1 1 0 011 1V7a1 1 0 11-2 0V5.5a1 1 0 011-1zM10 13a3 3 0 100-6 3 3 0 000 6zM4.22 5.636a1 1 0 011.415 0L6.95 7a1 1 0 11-1.415 1.414L4.22 7.05a1 1 0 010-1.414zM15.78 14.364a1 1 0 010 1.414l-1.314 1.364A1 1 0 0113.05 16.95l1.314-1.364a1 1 0 011.416 0zM4.5 10a1 1 0 011-1H7a1 1 0 110 2H5.5a1 1 0 01-1-1zM13 10a1 1 0 011-1h1.5a1 1 0 110 2H14a1 1 0 01-1-1z" />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M17.293 13.293A8 8 0 116.707 2.707 7 7 0 0017.293 13.293z" />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile Menu Button & Theme Toggle */}
        <div className="flex lg:hidden items-center space-x-2 z-50">
          <button
            onClick={(e) => {
              e.stopPropagation();
              setIsDark((prev) => !prev);
            }}
            aria-label="Toggle light/dark mode"
            className="p-2 rounded-full border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-200 hover:shadow transition-colors"
          >
            {isDark ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M10 4.5a1 1 0 011 1V7a1 1 0 11-2 0V5.5a1 1 0 011-1zM10 13a3 3 0 100-6 3 3 0 000 6zM4.22 5.636a1 1 0 011.415 0L6.95 7a1 1 0 11-1.415 1.414L4.22 7.05a1 1 0 010-1.414zM15.78 14.364a1 1 0 010 1.414l-1.314 1.364A1 1 0 0113.05 16.95l1.314-1.364a1 1 0 011.416 0zM4.5 10a1 1 0 011-1H7a1 1 0 110 2H5.5a1 1 0 01-1-1zM13 10a1 1 0 011-1h1.5a1 1 0 110 2H14a1 1 0 01-1-1z" />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M17.293 13.293A8 8 0 116.707 2.707 7 7 0 0017.293 13.293z" />
              </svg>
            )}
          </button>
          
          <button
            onClick={(e) => {
              e.stopPropagation();
              setIsMobileMenuOpen(!isMobileMenuOpen);
            }}
            className="p-2 text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden" onClick={() => setIsMobileMenuOpen(false)} />
      )}

      {/* Mobile Menu */}
      <div className={`fixed top-[57px] sm:top-[61px] md:top-[68px] right-0 z-50 lg:hidden bg-white dark:bg-gray-900 border-l-2 border-b-2 border-gray-200 dark:border-gray-700 shadow-lg transition-transform duration-300 ease-in-out ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}
           style={{ width: '75%', maxWidth: '300px' }}>
        <div className="flex flex-col p-4 space-y-3 h-screen overflow-y-auto">
          <a 
            href="#events" 
            onClick={(e) => scrollToSection(e, "events")} 
            className="text-gray-700 dark:text-gray-200 hover:text-blue-600 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors py-3 px-4 rounded-lg font-medium"
          >
            Events
          </a>
          <a 
            href="#about" 
            onClick={(e) => scrollToSection(e, "about")} 
            className="text-gray-700 dark:text-gray-200 hover:text-blue-600 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors py-3 px-4 rounded-lg font-medium"
          >
            About us
          </a>
          <a 
            href="#membership" 
            onClick={(e) => scrollToSection(e, "membership")} 
            className="text-gray-700 dark:text-gray-200 hover:text-blue-600 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors py-3 px-4 rounded-lg font-medium"
          >
            Membership
          </a>
          <a 
            href="#footer" 
            onClick={(e) => scrollToSection(e, "footer")} 
            className="text-gray-700 dark:text-gray-200 hover:text-blue-600 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors py-3 px-4 rounded-lg font-medium"
          >
            Contact us
          </a>
          
          <div className="flex flex-col space-y-3 pt-4 border-t border-gray-200 dark:border-gray-700">
            <button
              onClick={handleJoinIEI}
              className="w-full px-4 py-3 border-2 border-blue-600 text-blue-600 rounded-full hover:bg-blue-100 dark:hover:bg-blue-900 transition-colors font-medium"
            >
              Join IEI
            </button>
            <button
              onClick={handleLiveEvent}
              className="w-full px-4 py-3 bg-red-600 text-white rounded-full hover:bg-red-700 transition-colors font-medium"
            >
              Live Event
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;