import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer id="footer" className="py-10 px-10 mt-12 transition-colors duration-300" style={{ backgroundColor: 'var(--bg-secondary)' }}>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8 items-start">
        
        {/* Left Section - Logo + Text */}
        <div className="flex items-start space-x-4">
          <img src="iei_logo.png" alt="Logo" className="h-14 w-14" />
          <div>
            <h3
               className="font-frank font-bold"
               style={{ fontSize: "20px", color: "#8F3938" }}
            >
              IEI MITS
            </h3>
            <p className="text-gray-600 text-sm mt-1">
              Uniting minds, advancing skills, and engineering the future.
            </p>
          </div>
        </div>

        {/* Contact */}
        <div>
           <h3 className="text-lg font-bold" style={{ color: 'var(--text-primary)' }}>
             Contact us
           </h3>

             {/* Email */}
            <a 
              href="mailto:iei.elex.mits@gmail.com" 
              className="text-sm mt-2 block hover:underline"
              style={{ color: 'var(--text-secondary)' }}
            >
            <i className="fa-solid fa-envelope"></i>  iei.elex.mits@gmail.com
            </a>

            {/* Phone */}
            <p className="text-sm" style={{ color: 'var(--text-secondary)' }}>
              Vaishnavi Pathak
            </p>
            <a 
              href="tel:+919174407064" 
              className="text-sm block hover:underline"
              style={{ color: 'var(--text-secondary)' }}
            >
            <i class="fa-solid fa-phone"></i>  9174407064
           </a>
        </div>

        {/* Quick links */}
        <div>
          <h3 className="text-lg font-bold" style={{ color: 'var(--text-primary)' }}>
            Quick link
          </h3>
          <ul className="text-sm mt-2 space-y-1">
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
        <div>
          <h3 className="text-lg font-bold" style={{ color: 'var(--text-primary)' }}>
            Follow us
          </h3>
          <div className="flex space-x-4 mt-2 text-2xl">
            <a href="https://www.instagram.com/iei_student_chapter_mits?igsh=MXdyZzRrNnU4Y2Ywaw==" className="hover:text-red-700 text-sm"><i className="fa-brands fa-instagram"></i>  iei_student_chapter_mits</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;