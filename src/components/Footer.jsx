import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="bg-gray-100 py-10 px-10 mt-12">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8 items-start">
        
        {/* Left Section - Logo + Text */}
        <div className="flex items-start space-x-4">
          <img src="iei_logo.png" alt="Logo" className="h-14 w-14" />
          <div>
            <h3 className="text-lg font-bold text-red-900">IEI MITS</h3>
            <p className="text-gray-600 text-sm mt-1">
              Connecting professionals, fostering growth, and building the
              future together.
            </p>
          </div>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-lg font-bold">Contact us</h3>
          <p className="text-gray-700 text-sm mt-2">iei.elex.mits@gmail.com</p>
          <p className="text-gray-700 text-sm">9174407064</p>
        </div>

        {/* Quick links */}
        <div>
          <h3 className="text-lg font-bold">Quick link</h3>
          <ul className="text-gray-700 text-sm mt-2 space-y-1">
            <li>
              <Link to="/events" className="hover:text-red-700">
                Events
              </Link>
            </li>
            <li>
              <Link to="/about" className="hover:text-red-700">
                About us
              </Link>
            </li>
            <li>
              <Link to="/membership" className="hover:text-red-700">
                Membership
              </Link>
            </li>
          </ul>
        </div>

        {/* Follow */}
        <div>
          <h3 className="text-lg font-bold">Follow us</h3>
          <div className="flex space-x-4 mt-2 text-2xl">
            <a href="https://www.instagram.com/iei_student_chapter_mits?igsh=MXdyZzRrNnU4Y2Ywaw==" className="hover:text-red-700">🌐</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
