import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer id="footer" className="py-6 md:py-8 lg:py-10 px-4 md:px-6 lg:px-10 mt-8 md:mt-12 transition-colors duration-300" style={{ backgroundColor: 'var(--bg-secondary)' }}>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 items-start">
        
        {/* Left Section - Logo + Text */}
        <div className="flex items-start space-x-3 md:space-x-4 justify-center sm:justify-start">
          <img src="iei_logo.png" alt="Logo" className="h-12 w-12 md:h-14 md:w-14 flex-shrink-0" />
          <div>
            <h3
               className="font-frank font-bold text-lg md:text-xl"
               style={{ color: "#8F3938" }}
            >
              IEI MITS
            </h3>
            <p className="text-gray-600 text-xs md:text-sm mt-1">
              Uniting minds, advancing skills, and engineering the future.
            </p>
          </div>
        </div>

        {/* Contact */}
        <div className="text-center sm:text-left">
           <h3 className="text-base md:text-lg font-bold mb-2 md:mb-3" style={{ color: 'var(--text-primary)' }}>
             Contact us
           </h3>

             {/* Email */}
            <a 
              href="mailto:iei.elex.mits@gmail.com" 
              className="text-xs md:text-sm mt-2 block hover:underline break-all"
              style={{ color: 'var(--text-secondary)' }}
            >
            iei.elex.mits@gmail.com
            </a>

            {/* Phone */}
            <p className="text-xs md:text-sm mt-2" style={{ color: 'var(--text-secondary)' }}>
              Vaishnavi Pathak
            </p>
            <a 
              href="tel:+919174407064" 
              className="text-xs md:text-sm block hover:underline"
              style={{ color: 'var(--text-secondary)' }}
            >
            <i className="fa-solid fa-phone"></i> 9174407064
           </a>
        </div>

        {/* Quick links */}
        <div className="text-center sm:text-left">
          <h3 className="text-base md:text-lg font-bold mb-2 md:mb-3" style={{ color: 'var(--text-primary)' }}>
            Quick link
          </h3>
          <ul className="text-xs md:text-sm mt-2 space-y-1">
            <li>
              <Link to="/events" className="hover:text-red-700" style={{ color: 'var(--text-secondary)' }}>
                Events
              </Link>
            </li>
            <li>
              <Link to="/about" className="hover:text-red-700" style={{ color: 'var(--text-secondary)' }}>
                About us
              </Link>
            </li>
            <li>
              <Link to="/membership" className="hover:text-red-700" style={{ color: 'var(--text-secondary)' }}>
                Membership
              </Link>
            </li>
          </ul>
        </div>

        {/* Follow */}
        <div className="text-center sm:text-left">
          <h3 className="text-base md:text-lg font-bold mb-2 md:mb-3" style={{ color: 'var(--text-primary)' }}>
            Follow us
          </h3>
          <div className="flex flex-col sm:flex-row lg:flex-col items-center sm:items-start space-y-2 sm:space-y-0 sm:space-x-4 lg:space-x-0 lg:space-y-2 mt-2">
            <a 
              href="https://www.instagram.com/iei_student_chapter_mits?igsh=MXdyZzRrNnU4Y2Ywaw==" 
              className="hover:text-red-700 text-xs md:text-sm flex items-center"
              style={{ color: 'var(--text-secondary)' }}
            >
              <i className="fa-brands fa-instagram mr-2"></i>
              <span className="break-all">iei_student_chapter_mits</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;