import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";


function Navbar() {
  const joinIEIFormUrl = "https://forms.gle/L26q7ycAQPzNby4v5";


  const handleJoinIEI = () => {
    window.open(joinIEIFormUrl, "_blank", "noopener,noreferrer");
  };


  const handleLiveEvent = () => {
    const eventsSection = document.getElementById("events");
    if (eventsSection) {
      eventsSection.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

    const scrollToSection = (e, id) => {
    if (e && e.preventDefault) e.preventDefault();
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    } else {
      window.location.hash = `#${id}`;
    }
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


  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 flex justify-between items-center px-8 py-4 bg-white border-b-2 border-gray-200 dark:bg-gray-900 dark:border-gray-700">
 
        {/* Logo */}
        <Link to="/">
          <div className="flex items-center space-x-2">
            <img src="iei_logo.png" alt="Logo" className="h-12 w-12" />
            <h1
               className="font-frank font-bold"
               style={{ fontSize: "32px", color: "#8F3938" }}
            >
              IEI MITS
            </h1>
          </div>
        </Link>

        {/* Links */}
        <ul className="flex space-x-6 text-gray-700 font-medium dark:text-gray-200">
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


        {/* Buttons */}
        <div className="flex items-center space-x-3">
          <button
            onClick={handleJoinIEI}
            className="px-4 py-2 border-2 border-blue-600 text-blue-600 rounded-full hover:bg-blue-100 transition-colors font-medium"
          >
            Join IEI
          </button>
          <button
            onClick={handleLiveEvent}
            className="px-4 py-2 bg-red-600 text-white rounded-full hover:bg-red-700 transition-colors font-medium"
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
      </nav>
    </>
  );
}


export default Navbar;
