import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@mui/material";

function Navbar() {
  // Replace this with your actual Google Form URL for IEI membership
  const joinIEIFormUrl = "YOUR_GOOGLE_FORM_URL_HERE";

  const handleJoinIEI = () => {
    window.open(joinIEIFormUrl, '_blank');
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
    <nav className="flex justify-between items-center px-8 py-4 shadow-md bg-white">
      {/* Logo */}
      <div className="flex items-center space-x-2">
        <img src="iei_logo.png" alt="Logo" className="h-12 w-12" />
        <h1 className="text-2xl font-bold text-red-900">IEI MITS</h1>
      </div>

      {/* Links */}
      <ul className="flex space-x-6 text-gray-700 font-medium">
        <li>
          <Link to="/events" className="hover:text-blue-600 transition-colors">
            Events
          </Link>
        </li>
        <li>
          <Link to="/about" className="hover:text-blue-600 transition-colors">
            About us
          </Link>
        </li>
        <li>
          <Link to="/membership" className="hover:text-blue-600 transition-colors">
            Membership
          </Link>
        </li>
        <li>
          <Link to="/contact" className="hover:text-blue-600 transition-colors">
            Contact us
          </Link>
        </li>
      </ul>

      {/* Buttons */}
      <div className="flex space-x-3">
        <Button 
          variant="outlined" 
          size="small"
          onClick={handleJoinIEI}
        >
          Join IEI
        </Button>
        <Button 
          variant="contained" 
          color="error" 
          size="small"
          onClick={handleLiveEvent}
        >
          Live Event
        </Button>
      </div>
    </nav>
  );
}

export default Navbar;