import React from "react";

function Navbar() {
  // TODO: Replace this with your actual Google Form URL
  // To get your Google Form URL:
  // 1. Open your Google Form
  // 2. Click "Send" button at the top
  // 3. Click the link icon (<>)
  // 4. Copy the URL that appears
  // Example: "https://docs.google.com/forms/d/e/1FAIpQLSc.../viewform"
  const joinIEIFormUrl = "https://forms.gle/L26q7ycAQPzNby4v5";

  const handleJoinIEI = () => {
    // Opens the Google Form in a new tab
    window.open(joinIEIFormUrl, '_blank', 'noopener,noreferrer');
  };

  const handleLiveEvent = () => {
    // Scroll to the events section
    const eventsSection = document.getElementById('events-section');
    if (eventsSection) {
      eventsSection.scrollIntoView({ 
        behavior: 'smooth', 
        block: 'start' 
      });
    }
  };

  return (
    <nav className="flex justify-between items-center px-8 py-4 bg-white border-b-2 border-gray-200">
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

      {/* Buttons */}
      <div className="flex space-x-3">
        <button 
          onClick={handleJoinIEI}
          className="px-4 py-2 border-2 border-blue-600 text-blue-600 rounded-full hover:bg-blue-50 transition-colors font-medium"
        >
          Join IEI
        </button>
        <button 
          onClick={handleLiveEvent}
          className="px-4 py-2 bg-red-600 text-white rounded-full hover:bg-red-700 transition-colors font-medium"
        >
          Live Event
        </button>
      </div>
    </nav>
  );
}

export default Navbar;