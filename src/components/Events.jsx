import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

function Events() {
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [selectedUpcomingEvent, setSelectedUpcomingEvent] = useState(null);
  
  const enrollFormUrl = "https://docs.google.com/forms/d/e/1FAIpQLSf_rUFclwPr0B-O0GZf4E9Ohb2dPXSzl4MpZ6RTcLaDCsXs1A/viewform?usp=sharing&ouid=108023437612421612453";
  const eventImageUrl = "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=400&h=300&fit=crop";

  const pastEvents = [
    {
      id: 1,
      name: "Event",
      title: "Tech Workshop 2024",
      date: "March 15, 2024",
      description: "An intensive workshop covering the latest in web development technologies. Participants learned React, Node.js, and modern deployment practices.",
      attendees: "50+ participants",
      highlights: ["Hands-on coding sessions", "Industry expert speakers", "Networking opportunities"],
      imageUrl: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=600&h=400&fit=crop"
    },
    {
      id: 2,
      name: "Event 2",
      title: "Annual Meetup 2024",
      date: "February 10, 2024",
      description: "Our annual gathering brought together community members for a day of learning, sharing, and celebration. Featured guest speakers and interactive sessions.",
      attendees: "100+ participants",
      highlights: ["Keynote presentations", "Panel discussions", "Awards ceremony"],
      imageUrl: "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?w=600&h=400&fit=crop"
    }
  ];

  const upcomingEvents = [
    {
      id: 1,
      name: "AI Summit 2025",
      date: "November 20, 2025",
      brief: "Join us for an exciting exploration of artificial intelligence and machine learning. Learn about the latest trends, tools, and techniques from industry experts.",
      topics: ["Machine Learning Basics", "AI Ethics", "Future of AI"]
    },
    {
      id: 2,
      name: "Hackathon 2025",
      date: "December 5, 2025",
      brief: "A 48-hour coding marathon where teams compete to build innovative solutions. Great prizes, mentorship, and networking opportunities await!",
      topics: ["Team Collaboration", "Problem Solving", "Innovation"]
    }
  ];

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
    <section id="events-section" className="bg-[linear-gradient(225deg,#A9D6F1_48.98%,#00A6FF_85.36%)] py-16 min-h-screen pt-20">
      <h2 className="text-4xl font-bold text-center mb-12" style={{ color: 'var(--text-primary)' }}>
        Our Events
      </h2>
      <div className="flex flex-col md:flex-row gap-8 px-10 max-w-7xl mx-auto justify-center items-stretch">
        {/* Past Events */}
        <motion.div
          className="rounded-3xl shadow-lg p-8 cursor-pointer flex-1 min-w-[300px] transition-colors duration-300"
          style={{ backgroundColor: 'var(--card-bg)' }}
          variants={cardVariants}
          initial="initial"
          whileHover="hover"
        >
          <h3 className="text-xl font-bold mb-6" style={{ color: 'var(--text-primary)' }}>
            Past Events
          </h3>
          <ul className="space-y-4">
            {pastEvents.map((event, index) => (
              <li 
                key={event.id}
                onClick={() => setSelectedEvent(event)}
                className="flex items-center justify-between hover:text-blue-600 transition-colors cursor-pointer hover:bg-opacity-50 p-2 rounded-lg"
                style={{ color: 'var(--text-secondary)' }}
              >
                <span>{index + 1}. {event.name}</span>
                <span className="text-gray-400">›</span>
              </li>
            ))}
          </ul>
        </motion.div>

        {/* Live Event */}
        <motion.div
          className="rounded-3xl shadow-lg p-8 text-center cursor-pointer flex-1 min-w-[300px] transition-colors duration-300"
          style={{ backgroundColor: 'var(--card-bg)' }}
          variants={cardVariants}
          initial="initial"
          whileHover="hover"
        >
          <h3 className="text-xl font-bold text-blue-600 mb-4">
            Live event <span className="text-red-600 text-2xl animate-pulse">●</span>
          </h3>
          <p className="italic mb-4" style={{ color: 'var(--text-secondary)' }}>
            'Name of Event'
          </p>
          
          <motion.button
            onClick={handleEnrollClick}
            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-lg shadow-md mb-6 transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Enroll Now
          </motion.button>

          {/* Event Image */}
          <div className="mt-4 rounded-lg overflow-hidden shadow-inner" style={{ backgroundColor: 'var(--bg-secondary)' }}>
            <img 
              src={eventImageUrl} 
              alt="Event" 
              className="w-full h-48 object-cover"
            />
          </div>
        </motion.div>

        {/* Upcoming Events */}
        <motion.div
          className="rounded-3xl shadow-lg p-8 cursor-pointer flex-1 min-w-[300px] transition-colors duration-300"
          style={{ backgroundColor: 'var(--card-bg)' }}
          variants={cardVariants}
          initial="initial"
          whileHover="hover"
        >
          <h3 className="text-xl font-bold mb-6" style={{ color: 'var(--text-primary)' }}>
            Upcoming Events
          </h3>
          {upcomingEvents.length > 0 ? (
            <ul className="space-y-4">
              {upcomingEvents.map((event, index) => (
                <li 
                  key={event.id}
                  onClick={() => setSelectedUpcomingEvent(event)}
                  className="flex items-center justify-between hover:text-blue-600 transition-colors cursor-pointer hover:bg-opacity-50 p-2 rounded-lg"
                  style={{ color: 'var(--text-secondary)' }}
                >
                  <span>{index + 1}. {event.name}</span>
                  <span className="text-gray-400">›</span>
                </li>
              ))}
            </ul>
          ) : (
            <p className="mt-16 text-center italic" style={{ color: 'var(--text-secondary)' }}>
              'New events coming soon'
            </p>
          )}
        </motion.div>
      </div>

      {/* Event Details Modal */}
      <AnimatePresence>
        {selectedEvent && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedEvent(null)}
            className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto transition-colors duration-300"
              style={{ backgroundColor: 'var(--card-bg)' }}
            >
              {/* Modal Header */}
              <div className="relative">
                <img 
                  src={selectedEvent.imageUrl} 
                  alt={selectedEvent.title}
                  className="w-full h-64 object-cover rounded-t-2xl"
                />
                <button
                  onClick={() => setSelectedEvent(null)}
                  className="absolute top-4 right-4 bg-white rounded-full p-2 shadow-lg hover:bg-gray-100 transition-colors"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              {/* Modal Content */}
              <div className="p-8">
                <h2 className="text-3xl font-bold mb-2" style={{ color: 'var(--text-primary)' }}>
                  {selectedEvent.title}
                </h2>
                <p className="text-blue-600 font-semibold mb-4">{selectedEvent.date}</p>
                
                <div className="mb-6">
                  <h3 className="text-lg font-semibold mb-2" style={{ color: 'var(--text-primary)' }}>
                    About
                  </h3>
                  <p className="leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                    {selectedEvent.description}
                  </p>
                </div>

                <div className="mb-6">
                  <p style={{ color: 'var(--text-secondary)' }}>
                    <span className="font-semibold">Attendees:</span> {selectedEvent.attendees}
                  </p>
                </div>

                <div className="mb-6">
                  <h3 className="text-lg font-semibold mb-3" style={{ color: 'var(--text-primary)' }}>
                    Highlights
                  </h3>
                  <ul className="space-y-2">
                    {selectedEvent.highlights.map((highlight, index) => (
                      <li key={index} className="flex items-start">
                        <span className="text-blue-600 mr-2">✓</span>
                        <span style={{ color: 'var(--text-secondary)' }}>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <button
                  onClick={() => setSelectedEvent(null)}
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-lg transition-colors"
                >
                  Close
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Upcoming Event Details Modal */}
      <AnimatePresence>
        {selectedUpcomingEvent && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedUpcomingEvent(null)}
            className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4"
          >
            <motion.div
              initial={{ scale: 0.9, y: 50 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 50 }}
              onClick={(e) => e.stopPropagation()}
              className="rounded-2xl shadow-2xl max-w-lg w-full p-8 transition-colors duration-300"
              style={{ backgroundColor: 'var(--card-bg)' }}
            >
              {/* Close Button */}
              <div className="flex justify-between items-start mb-4">
                <div className="flex items-center gap-2">
                  <span className="text-2xl">📅</span>
                  <h2 className="text-2xl font-bold" style={{ color: 'var(--text-primary)' }}>
                    {selectedUpcomingEvent.name}
                  </h2>
                </div>
                <button
                  onClick={() => setSelectedUpcomingEvent(null)}
                  className="text-gray-400 hover:text-gray-600 transition-colors"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              {/* Date Badge */}
              <div className="inline-block bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-semibold mb-4">
                {selectedUpcomingEvent.date}
              </div>

              {/* Brief Description */}
              <div className="mb-6">
                <h3 className="text-lg font-semibold mb-2" style={{ color: 'var(--text-primary)' }}>
                  What to Expect
                </h3>
                <p className="leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                  {selectedUpcomingEvent.brief}
                </p>
              </div>

              {/* Topics Covered */}
              <div className="mb-6">
                <h3 className="text-lg font-semibold mb-3" style={{ color: 'var(--text-primary)' }}>
                  Topics Covered
                </h3>
                <div className="flex flex-wrap gap-2">
                  {selectedUpcomingEvent.topics.map((topic, index) => (
                    <span 
                      key={index}
                      className="px-3 py-1 rounded-full text-sm"
                      style={{ 
                        backgroundColor: 'var(--bg-secondary)', 
                        color: 'var(--text-primary)' 
                      }}
                    >
                      {topic}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex gap-3">
                <button
                  onClick={() => setSelectedUpcomingEvent(null)}
                  className="flex-1 font-semibold py-3 rounded-lg transition-colors border-2"
                  style={{ 
                    backgroundColor: 'var(--bg-secondary)', 
                    color: 'var(--text-primary)',
                    borderColor: 'var(--border-color)'
                  }}
                >
                  Close
                </button>
                <button
                  onClick={() => {
                    setSelectedUpcomingEvent(null);
                  }}
                  className="flex-1 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-lg transition-colors"
                >
                  Register Interest
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

export default Events;