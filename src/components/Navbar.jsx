import React, { useState, useEffect } from "react";

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

  const joinIEIFormUrl = "https://forms.gle/L26q7ycAQPzNby4v5";

  const handleJoinIEI = () => {
    window.open(joinIEIFormUrl, '_blank', 'noopener,noreferrer');
  };

  const handleLiveEvent = () => {
    const eventsSection = document.getElementById('events-section');
    if (eventsSection) {
      eventsSection.scrollIntoView({ 
        behavior: 'smooth', 
        block: 'start' 
      });
    }
  };

  return (
    <nav className="flex justify-between items-center px-8 py-4 shadow-md bg-white">
      {/* Logo */}
      <div className="flex items-center space-x-2">
        <img src="iei_logo.png" alt="Logo" className="h-12 w-12" />
        <h1 className="text-2xl font-bold text-red-900">IEI MITS</h1>
      </div>

      {/* Links */}
      <ul className="flex space-x-6 text-gray-700 font-medium">
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
          <a href="/membership" className="hover:text-blue-600 transition-colors">
            Membership
          </a>
        </li>
        <li>
          <a href="/contact" className="hover:text-blue-600 transition-colors">
            Contact us
          </a>
        </li>
      </ul>

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
  );
}

export default Navbar;