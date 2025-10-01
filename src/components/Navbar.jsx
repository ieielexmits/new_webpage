import React, { useState, useEffect } from "react";
<<<<<<< HEAD

function Navbar() {
  const [theme, setTheme] = useState('light');

  // Check for saved theme on component mount
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') || 'light';
    setTheme(savedTheme);
    document.documentElement.setAttribute('data-theme', savedTheme);
  }, []);

  // Toggle theme function
  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
    document.documentElement.setAttribute('data-theme', newTheme);
  };

=======
import { Link } from "react-router-dom";


function Navbar() {
>>>>>>> 36d42e2d4e83c2539266c8d0f3a6d076092363dd
  const joinIEIFormUrl = "https://forms.gle/L26q7ycAQPzNby4v5";


  const handleJoinIEI = () => {
<<<<<<< HEAD
    window.open(joinIEIFormUrl, '_blank', 'noopener,noreferrer');
=======
    window.open(joinIEIFormUrl, "_blank", "noopener,noreferrer");
>>>>>>> 36d42e2d4e83c2539266c8d0f3a6d076092363dd
  };


  const handleLiveEvent = () => {
<<<<<<< HEAD
    const eventsSection = document.getElementById('events-section');
=======
    const eventsSection = document.getElementById("events-section");
>>>>>>> 36d42e2d4e83c2539266c8d0f3a6d076092363dd
    if (eventsSection) {
      eventsSection.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
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
      <nav className="flex justify-between items-center px-8 py-4 bg-white border-b-2 border-gray-200 dark:bg-gray-900 dark:border-gray-700">
 
        {/* Logo */}
        <Link to="/">
          <div className="flex items-center space-x-2">
            <img src="iei_logo.png" alt="Logo" className="h-12 w-12" />
            <h1 className="text-2xl font-bold text-red-900 dark:text-red-300">
              IEI MITS
            </h1>
          </div>
        </Link>


<<<<<<< HEAD
      {/* Buttons with Theme Toggle */}
      <div className="flex space-x-3 items-center">
        {/* Theme Toggle Button */}
        <label className="theme-toggle">
          <input 
            type="checkbox" 
            checked={theme === 'dark'}
            onChange={toggleTheme}
          />
          <span className="theme-toggle-slider"></span>
        </label>

        <button 
          onClick={handleJoinIEI}
          className="px-4 py-2 border-2 border-blue-600 text-blue-600 rounded hover:bg-blue-50 transition-colors font-medium"
        >
          Join IEI
        </button>
        <button 
          onClick={handleLiveEvent}
          className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700 transition-colors font-medium"
        >
          Live Event
        </button>
      </div>
    </nav>
=======
        {/* Links */}
        <ul className="flex space-x-6 text-gray-700 font-medium dark:text-gray-200">
          <li>
            <a href="/events" className="hover:text-blue-600 transition-colors">
              Events
            </a>
          </li>
          <li>
            <a href="/about" className="hover:text-blue-600 transition-colors">
              About us
            </a>
          </li>
          <li>
            <a
              href="/membership"
              className="hover:text-blue-600 transition-colors"
            >
              Membership
            </a>
          </li>
          <li>
            <a href="/contact" className="hover:text-blue-600 transition-colors">
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


      {/* Spacer div (navbar ki height ke barabar) */}
      <div className="h-20"></div>
    </>
>>>>>>> 36d42e2d4e83c2539266c8d0f3a6d076092363dd
  );
}


export default Navbar;
