import React from "react";
import { motion } from "framer-motion";

function Events() {
  // Replace this with your actual Google Form URL
  const enrollFormUrl = "https://docs.google.com/forms/d/e/1FAIpQLSf_rUFclwPr0B-O0GZf4E9Ohb2dPXSzl4MpZ6RTcLaDCsXs1A/viewform?usp=sharing&ouid=108023437612421612453";
  
  // Replace with your actual event image URL
  const eventImageUrl = "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=400&h=300&fit=crop";

  const cardVariants = {
    initial: { scale: 1, y: 0 },
    hover: { 
      scale: 1.05, 
      y: -10,
      transition: { 
        type: "spring", 
        stiffness: 300, 
        damping: 20 
      }
    }
  };

  const handleEnrollClick = () => {
    window.open(enrollFormUrl, '_blank');
  };

  return (
    <section id="events-section" className="bg-[linear-gradient(225deg,#A9D6F1_48.98%,#00A6FF_85.36%)] py-16 min-h-screen">
      <h2 className="text-4xl font-bold text-red-900 text-center mb-12">
        Our Events
      </h2>
      <div className="flex flex-col md:flex-row gap-8 px-10 max-w-7xl mx-auto justify-center items-stretch">
        {/* Past Events */}
        <motion.div
          className="bg-white rounded-3xl shadow-lg p-8 cursor-pointer flex-1 min-w-[300px]"
          variants={cardVariants}
          initial="initial"
          whileHover="hover"
        >
          <h3 className="text-xl font-bold text-red-900 mb-6">Past Events</h3>
          <ul className="space-y-4 text-gray-700">
            <li className="flex items-center justify-between hover:text-blue-600 transition-colors">
              <span>1. Event</span>
              <span className="text-gray-400">›</span>
            </li>
            <li className="flex items-center justify-between hover:text-blue-600 transition-colors">
              <span>2. Event 2</span>
              <span className="text-gray-400">›</span>
            </li>
          </ul>
        </motion.div>

        {/* Live Event */}
        <motion.div
          className="bg-white rounded-3xl shadow-lg p-8 text-center cursor-pointer flex-1 min-w-[300px]"
          variants={cardVariants}
          initial="initial"
          whileHover="hover"
        >
          <h3 className="text-xl font-bold text-blue-600 mb-4">
            Live event <span className="text-red-600 text-2xl animate-pulse">●</span>
          </h3>
          <p className="text-gray-600 italic mb-4">'Name of Event'</p>
          
          <motion.button
            onClick={handleEnrollClick}
            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-lg shadow-md mb-6 transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Enroll Now
          </motion.button>

          {/* Event Image */}
          <div className="mt-4 rounded-lg overflow-hidden bg-gray-100 shadow-inner">
            <img 
              src={eventImageUrl} 
              alt="Event" 
              className="w-full h-48 object-cover"
            />
          </div>
        </motion.div>

        {/* Upcoming Events */}
        <motion.div
          className="bg-white rounded-3xl shadow-lg p-8 cursor-pointer flex-1 min-w-[300px]"
          variants={cardVariants}
          initial="initial"
          whileHover="hover"
        >
          <h3 className="text-xl font-bold text-red-900 mb-6">Upcoming Events</h3>
          <p className="text-gray-500 mt-16 text-center italic">'New events coming soon'</p>
        </motion.div>
      </div>
    </section>
  );
}

export default Events;