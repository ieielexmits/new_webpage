import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { collection, query, where, getDocs, orderBy, Timestamp } from "firebase/firestore";
import { db } from "../firebase";

function Events() {
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [selectedUpcomingEvent, setSelectedUpcomingEvent] = useState(null);
  const [pastEvents, setPastEvents] = useState([]);
  const [upcomingEvents, setUpcomingEvents] = useState([]);
  const [liveEvent, setLiveEvent] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchEvents();
  }, []);

  const fetchEvents = async () => {
    try {
      setLoading(true);
      console.log("Fetching events from Firestore...");

      const eventsRef = collection(db, "events");
      const querySnapshot = await getDocs(eventsRef);
      
      const currentDate = new Date();
      currentDate.setHours(0, 0, 0, 0);

      const past = [];
      const upcoming = [];
      let live = null;

      querySnapshot.forEach((doc) => {
        const eventData = { 
          id: doc.id, 
          ...doc.data() 
        };

        console.log("Event:", eventData);

        // Check status field first
        if (eventData.status === "live") {
          live = eventData;
        } else if (eventData.status === "past") {
          past.push(eventData);
        } else if (eventData.status === "upcoming") {
          upcoming.push(eventData);
        } else {
          // If no status field, try to determine by date
          if (eventData.eventEndDate) {
            const eventEndDate = eventData.eventEndDate.toDate();
            if (eventEndDate < currentDate) {
              past.push(eventData);
            } else {
              upcoming.push(eventData);
            }
          } else if (eventData.eventDate) {
            const eventDate = eventData.eventDate.toDate();
            if (eventDate < currentDate) {
              past.push(eventData);
            } else {
              upcoming.push(eventData);
            }
          } else {
            // Default to past if no date info
            past.push(eventData);
          }
        }
      });

      // Sort by date (most recent first for past, nearest first for upcoming)
      past.sort((a, b) => {
        const dateA = a.eventDate ? a.eventDate.toDate() : new Date(0);
        const dateB = b.eventDate ? b.eventDate.toDate() : new Date(0);
        return dateB - dateA; // Descending (newest first)
      });

      upcoming.sort((a, b) => {
        const dateA = a.eventDate ? a.eventDate.toDate() : new Date();
        const dateB = b.eventDate ? b.eventDate.toDate() : new Date();
        return dateA - dateB; // Ascending (nearest first)
      });

      setPastEvents(past);
      setUpcomingEvents(upcoming);
      setLiveEvent(live);

      console.log("Categorized events:", {
        past: past.length,
        upcoming: upcoming.length,
        live: live ? 1 : 0
      });

    } catch (error) {
      console.error("Error fetching events:", error);
      alert("Error loading events. Check console for details.");
    } finally {
      setLoading(false);
    }
  };

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
    if (liveEvent && liveEvent.enrollmentUrl) {
      window.open(liveEvent.enrollmentUrl, '_blank');
    }
  };

  // Get display name for event
  const getEventName = (event) => {
    return event.name || event.title || event.id;
  };

  if (loading) {
    return (
      <section id="events-section" className="bg-[linear-gradient(225deg,#A9D6F1_48.98%,#00A6FF_85.36%)] py-16 min-h-screen pt-20 flex items-center justify-center">
        <div className="text-center">
          <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-white"></div>
          <p className="mt-4 text-white font-semibold">Loading events...</p>
        </div>
      </section>
    );
  }

  return (
    <section id="events-section" className="bg-[linear-gradient(225deg,#A9D6F1_48.98%,#00A6FF_85.36%)] py-16 min-h-screen pt-20">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 md:mb-12 px-4" style={{ color: 'var(--text-primary)' }}>
        Our Events
      </h2>
      <div className="flex flex-col lg:flex-row gap-6 md:gap-8 px-4 md:px-6 lg:px-10 max-w-7xl mx-auto justify-center items-stretch">
        
        {/* Past Events */}
        <motion.div
          className="rounded-3xl shadow-lg p-6 md:p-8 cursor-pointer flex-1 min-w-[280px] transition-colors duration-300"
          style={{ backgroundColor: 'var(--card-bg)' }}
          variants={cardVariants}
          initial="initial"
          whileHover="hover"
        >
          <h3 className="text-lg md:text-xl font-bold mb-4 md:mb-6" style={{ color: 'var(--text-primary)' }}>
            Past Events
          </h3>
          {pastEvents.length > 0 ? (
            <ul className="space-y-3 md:space-y-4">
              {pastEvents.map((event, index) => (
                <li 
                  key={event.id}
                  onClick={() => setSelectedEvent(event)}
                  className="flex items-center justify-between hover:text-blue-600 transition-colors cursor-pointer hover:bg-opacity-50 p-2 rounded-lg text-sm md:text-base"
                  style={{ color: 'var(--text-secondary)' }}
                >
                  <span>{index + 1}. {getEventName(event)}</span>
                  <span className="text-gray-400">›</span>
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-center italic mt-8" style={{ color: 'var(--text-secondary)' }}>
              No past events
            </p>
          )}
        </motion.div>

        {/* Live Event */}
        <motion.div
          className="rounded-3xl shadow-lg p-6 md:p-8 text-center cursor-pointer flex-1 min-w-[280px] transition-colors duration-300"
          style={{ backgroundColor: 'var(--card-bg)' }}
          variants={cardVariants}
          initial="initial"
          whileHover="hover"
        >
          <h3 className="text-lg md:text-xl font-bold text-blue-600 mb-3 md:mb-4">
            Live event <span className="text-red-600 text-xl md:text-2xl animate-pulse">●</span>
          </h3>
          {liveEvent ? (
            <>
              <p className="italic mb-3 md:mb-4 text-sm md:text-base" style={{ color: 'var(--text-secondary)' }}>
                '{getEventName(liveEvent)}'
              </p>
              
              <motion.button
                onClick={handleEnrollClick}
                className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2.5 md:py-3 px-6 md:px-8 rounded-lg shadow-md mb-4 md:mb-6 transition-colors text-sm md:text-base w-full sm:w-auto"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Enroll Now!
              </motion.button>

              {liveEvent.imageUrl && (
                <div className="mt-4 rounded-lg overflow-hidden shadow-inner" style={{ backgroundColor: 'var(--bg-secondary)' }}>
                  <img 
                    src={liveEvent.imageUrl} 
                    alt="Event" 
                    className="w-full h-40 md:h-48 object-cover"
                  />
                </div>
              )}
            </>
          ) : (
            <p className="mt-8 italic" style={{ color: 'var(--text-secondary)' }}>
              No live events at the moment
            </p>
          )}
        </motion.div>

        {/* Upcoming Events */}
        <motion.div
          className="rounded-3xl shadow-lg p-6 md:p-8 cursor-pointer flex-1 min-w-[280px] transition-colors duration-300"
          style={{ backgroundColor: 'var(--card-bg)' }}
          variants={cardVariants}
          initial="initial"
          whileHover="hover"
        >
          <h3 className="text-lg md:text-xl font-bold mb-4 md:mb-6" style={{ color: 'var(--text-primary)' }}>
            Upcoming Events
          </h3>
          {upcomingEvents.length > 0 ? (
            <ul className="space-y-3 md:space-y-4">
              {upcomingEvents.map((event, index) => (
                <li 
                  key={event.id}
                  onClick={() => setSelectedUpcomingEvent(event)}
                  className="flex items-center justify-between hover:text-blue-600 transition-colors cursor-pointer hover:bg-opacity-50 p-2 rounded-lg text-sm md:text-base"
                  style={{ color: 'var(--text-secondary)' }}
                >
                  <span>{index + 1}. {getEventName(event)}</span>
                  <span className="text-gray-400">›</span>
                </li>
              ))}
            </ul>
          ) : (
            <p className="mt-12 md:mt-16 text-center italic text-sm md:text-base" style={{ color: 'var(--text-secondary)' }}>
              'New events coming soon'
            </p>
          )}
        </motion.div>
      </div>

      {/* Past Event Details Modal */}
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
                {selectedEvent.imageUrl && (
                  <img 
                    src={selectedEvent.imageUrl} 
                    alt={selectedEvent.title}
                    className="w-full h-48 md:h-64 object-cover rounded-t-2xl"
                  />
                )}
                <button
                  onClick={() => setSelectedEvent(null)}
                  className="absolute top-4 right-4 bg-white rounded-full p-2 shadow-lg hover:bg-gray-100 transition-colors"
                >
                  <svg className="w-5 h-5 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              {/* Modal Content */}
              <div className="p-6 md:p-8">
                <h2 className="text-2xl md:text-3xl font-bold mb-2" style={{ color: 'var(--text-primary)' }}>
                  {selectedEvent.title || selectedEvent.name || selectedEvent.id}
                </h2>
                <p className="text-blue-600 font-semibold mb-4 text-sm md:text-base">{selectedEvent.date}</p>
                
                {selectedEvent.description && (
                  <div className="mb-6">
                    <h3 className="text-base md:text-lg font-semibold mb-2" style={{ color: 'var(--text-primary)' }}>
                      About
                    </h3>
                    <p className="leading-relaxed text-sm md:text-base" style={{ color: 'var(--text-secondary)' }}>
                      {selectedEvent.description}
                    </p>
                  </div>
                )}

                {/* Speakers */}
                {selectedEvent.speakers && selectedEvent.speakers.length > 0 && (
                  <div className="mb-6">
                    <h3 className="text-base md:text-lg font-semibold mb-2" style={{ color: 'var(--text-primary)' }}>
                      Speaker(s)
                    </h3>
                    <ul className="space-y-2">
                      {selectedEvent.speakers.map((speaker, index) => (
                        <li key={index} className="text-sm md:text-base" style={{ color: 'var(--text-secondary)' }}>
                          <span className="font-semibold text-blue-600">{speaker.name}</span>
                          {speaker.role && ` — ${speaker.role}`}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {selectedEvent.attendees && (
                  <div className="mb-6">
                    <p className="text-sm md:text-base" style={{ color: 'var(--text-secondary)' }}>
                      <span className="font-semibold">Attendees:</span> {selectedEvent.attendees}
                    </p>
                  </div>
                )}

                {selectedEvent.highlights && selectedEvent.highlights.length > 0 && (
                  <div className="mb-6">
                    <h3 className="text-base md:text-lg font-semibold mb-3" style={{ color: 'var(--text-primary)' }}>
                      Highlights
                    </h3>
                    <ul className="space-y-2">
                      {selectedEvent.highlights.map((highlight, index) => (
                        <li key={index} className="flex items-start text-sm md:text-base">
                          <span className="text-blue-600 mr-2">✓</span>
                          <span style={{ color: 'var(--text-secondary)' }}>{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                <button
                  onClick={() => setSelectedEvent(null)}
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2.5 md:py-3 rounded-lg transition-colors text-sm md:text-base"
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
              className="rounded-2xl shadow-2xl max-w-lg w-full p-6 md:p-8 transition-colors duration-300"
              style={{ backgroundColor: 'var(--card-bg)' }}
            >
              <div className="flex justify-between items-start mb-4">
                <div className="flex items-center gap-2">
                  <span className="text-xl md:text-2xl">📅</span>
                  <h2 className="text-xl md:text-2xl font-bold" style={{ color: 'var(--text-primary)' }}>
                    {getEventName(selectedUpcomingEvent)}
                  </h2>
                </div>
                <button
                  onClick={() => setSelectedUpcomingEvent(null)}
                  className="text-gray-400 hover:text-gray-600 transition-colors"
                >
                  <svg className="w-5 h-5 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              <div className="inline-block bg-blue-100 text-blue-700 px-3 md:px-4 py-1.5 md:py-2 rounded-full text-xs md:text-sm font-semibold mb-4">
                {selectedUpcomingEvent.date}
              </div>

              {(selectedUpcomingEvent.brief || selectedUpcomingEvent.description) && (
                <div className="mb-6">
                  <h3 className="text-base md:text-lg font-semibold mb-2" style={{ color: 'var(--text-primary)' }}>
                    What to Expect
                  </h3>
                  <p className="leading-relaxed text-sm md:text-base" style={{ color: 'var(--text-secondary)' }}>
                    {selectedUpcomingEvent.brief || selectedUpcomingEvent.description}
                  </p>
                </div>
              )}

              {selectedUpcomingEvent.topics && selectedUpcomingEvent.topics.length > 0 && (
                <div className="mb-6">
                  <h3 className="text-base md:text-lg font-semibold mb-3" style={{ color: 'var(--text-primary)' }}>
                    Topics Covered
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {selectedUpcomingEvent.topics.map((topic, index) => (
                      <span 
                        key={index}
                        className="px-2 md:px-3 py-1 rounded-full text-xs md:text-sm"
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
              )}

              <div className="flex flex-col sm:flex-row gap-3">
                <button
                  onClick={() => setSelectedUpcomingEvent(null)}
                  className="flex-1 font-semibold py-2.5 md:py-3 rounded-lg transition-colors border-2 text-sm md:text-base"
                  style={{ 
                    backgroundColor: 'var(--bg-secondary)', 
                    color: 'var(--text-primary)',
                    borderColor: 'var(--border-color)'
                  }}
                >
                  Close
                </button>
                <button
                  onClick={() => setSelectedUpcomingEvent(null)}
                  className="flex-1 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2.5 md:py-3 rounded-lg transition-colors text-sm md:text-base"
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