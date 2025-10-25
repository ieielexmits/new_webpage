import React, { useState, useEffect } from "react";
import { collection, addDoc, updateDoc, deleteDoc, doc, getDocs, Timestamp } from "firebase/firestore";
import { db, auth } from "../firebase";
import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { Plus, Edit2, Trash2, Save, X, LogOut } from "lucide-react";

function AdminPanel() {
  const navigate = useNavigate();
  const [events, setEvents] = useState([]);
  const [isAddingEvent, setIsAddingEvent] = useState(false);
  const [editingEvent, setEditingEvent] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    title: "",
    date: "",
    eventDate: "",
    eventEndDate: "",
    status: "upcoming",
    description: "",
    imageUrl: "",
    enrollmentUrl: "",
    brief: "",
    topics: "",
    attendees: "",
    highlights: "",
    speakers: ""
  });

  useEffect(() => {
    fetchEvents();
  }, []);

  const handleLogout = async () => {
    try {
      await signOut(auth);
      navigate("/login");
    } catch (error) {
      console.error("Logout error:", error);
      alert("Error logging out");
    }
  };

  const fetchEvents = async () => {
    try {
      const eventsRef = collection(db, "events");
      const querySnapshot = await getDocs(eventsRef);
      const eventsData = querySnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }));
      setEvents(eventsData);
    } catch (error) {
      console.error("Error fetching events:", error);
      alert("Error fetching events");
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const resetForm = () => {
    setFormData({
      name: "",
      title: "",
      date: "",
      eventDate: "",
      eventEndDate: "",
      status: "upcoming",
      description: "",
      imageUrl: "",
      enrollmentUrl: "",
      brief: "",
      topics: "",
      attendees: "",
      highlights: "",
      speakers: ""
    });
    setIsAddingEvent(false);
    setEditingEvent(null);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      const eventData = {
        name: formData.name,
        title: formData.title,
        date: formData.date,
        status: formData.status,
        description: formData.description,
        imageUrl: formData.imageUrl
      };

      if (formData.eventDate) {
        eventData.eventDate = Timestamp.fromDate(new Date(formData.eventDate));
      }
      if (formData.eventEndDate) {
        eventData.eventEndDate = Timestamp.fromDate(new Date(formData.eventEndDate));
      }

      if (formData.status === "live") {
        eventData.enrollmentUrl = formData.enrollmentUrl;
      }

      if (formData.status === "upcoming") {
        eventData.brief = formData.brief;
        if (formData.topics) {
          eventData.topics = formData.topics.split(',').map(t => t.trim()).filter(t => t);
        }
      }

      if (formData.status === "past") {
        eventData.attendees = formData.attendees;
        
        if (formData.highlights) {
          eventData.highlights = formData.highlights.split('\n').map(h => h.trim()).filter(h => h);
        }
        
        if (formData.speakers) {
          eventData.speakers = formData.speakers.split('\n').map(speaker => {
            const parts = speaker.split('|').map(p => p.trim());
            return {
              name: parts[0] || "",
              role: parts[1] || ""
            };
          }).filter(s => s.name);
        }
      }

      if (editingEvent) {
        const eventRef = doc(db, "events", editingEvent.id);
        await updateDoc(eventRef, eventData);
        alert("Event updated successfully!");
      } else {
        await addDoc(collection(db, "events"), eventData);
        alert("Event added successfully!");
      }

      resetForm();
      fetchEvents();
    } catch (error) {
      console.error("Error saving event:", error);
      alert("Error saving event: " + error.message);
    }
  };

  const handleEdit = (event) => {
    setEditingEvent(event);
    setFormData({
      name: event.name || "",
      title: event.title || "",
      date: event.date || "",
      eventDate: event.eventDate ? event.eventDate.toDate().toISOString().split('T')[0] : "",
      eventEndDate: event.eventEndDate ? event.eventEndDate.toDate().toISOString().split('T')[0] : "",
      status: event.status || "upcoming",
      description: event.description || "",
      imageUrl: event.imageUrl || "",
      enrollmentUrl: event.enrollmentUrl || "",
      brief: event.brief || "",
      topics: event.topics ? event.topics.join(', ') : "",
      attendees: event.attendees || "",
      highlights: event.highlights ? event.highlights.join('\n') : "",
      speakers: event.speakers ? event.speakers.map(s => `${s.name}|${s.role}`).join('\n') : ""
    });
    setIsAddingEvent(true);
  };

  const handleDelete = async (eventId) => {
    if (window.confirm("Are you sure you want to delete this event?")) {
      try {
        await deleteDoc(doc(db, "events", eventId));
        alert("Event deleted successfully!");
        fetchEvents();
      } catch (error) {
        console.error("Error deleting event:", error);
        alert("Error deleting event");
      }
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-8 px-4 pt-24">
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Event Management</h1>
            <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
              Logged in as: {auth.currentUser?.email}
            </p>
          </div>
          <div className="flex gap-3">
            <button
              onClick={() => setIsAddingEvent(!isAddingEvent)}
              className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-colors"
            >
              {isAddingEvent ? <X size={20} /> : <Plus size={20} />}
              {isAddingEvent ? "Cancel" : "Add Event"}
            </button>
            <button
              onClick={handleLogout}
              className="flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg transition-colors"
            >
              <LogOut size={20} />
              Logout
            </button>
          </div>
        </div>

        {/* Add/Edit Event Form */}
        {isAddingEvent && (
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 mb-8">
            <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">
              {editingEvent ? "Edit Event" : "Add New Event"}
            </h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Basic Information */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-300">
                    Event Name*
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-3 py-2 border rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                    placeholder="Short name for event list"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-300">
                    Event Title
                  </label>
                  <input
                    type="text"
                    name="title"
                    value={formData.title}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                    placeholder="Full title for details (optional)"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-300">
                    Display Date*
                  </label>
                  <input
                    type="text"
                    name="date"
                    value={formData.date}
                    onChange={handleInputChange}
                    required
                    className="w-full px-3 py-2 border rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                    placeholder="e.g., 6th-7th April, 2024"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-300">
                    Status*
                  </label>
                  <select
                    name="status"
                    value={formData.status}
                    onChange={handleInputChange}
                    required
                    className="w-full px-3 py-2 border rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                  >
                    <option value="upcoming">Upcoming</option>
                    <option value="live">Live</option>
                    <option value="past">Past</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-300">
                    Event Start Date (for sorting)
                  </label>
                  <input
                    type="date"
                    name="eventDate"
                    value={formData.eventDate}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-300">
                    Event End Date (Optional)
                  </label>
                  <input
                    type="date"
                    name="eventEndDate"
                    value={formData.eventEndDate}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                  />
                </div>
              </div>

              {/* Description */}
              <div>
                <label className="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-300">
                  Description*
                </label>
                <textarea
                  name="description"
                  value={formData.description}
                  onChange={handleInputChange}
                  required
                  rows="4"
                  className="w-full px-3 py-2 border rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                  placeholder="Full event description"
                />
              </div>

              {/* Image URL */}
              <div>
                <label className="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-300">
                  Image URL/Path
                </label>
                <input
                  type="text"
                  name="imageUrl"
                  value={formData.imageUrl}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                  placeholder="e.g., Deploy.jpeg"
                />
              </div>

              {/* Conditional Fields based on Status */}
              {formData.status === "live" && (
                <div>
                  <label className="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-300">
                    Enrollment URL
                  </label>
                  <input
                    type="url"
                    name="enrollmentUrl"
                    value={formData.enrollmentUrl}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                    placeholder="https://forms.gle/..."
                  />
                </div>
              )}

              {formData.status === "upcoming" && (
                <>
                  <div>
                    <label className="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-300">
                      Brief Description
                    </label>
                    <textarea
                      name="brief"
                      value={formData.brief}
                      onChange={handleInputChange}
                      rows="3"
                      className="w-full px-3 py-2 border rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                      placeholder="What to expect from this event"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-300">
                      Topics (comma-separated)
                    </label>
                    <input
                      type="text"
                      name="topics"
                      value={formData.topics}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                      placeholder="VLSI Design, Digital Circuits, Verilog"
                    />
                  </div>
                </>
              )}

              {formData.status === "past" && (
                <>
                  <div>
                    <label className="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-300">
                      Attendees
                    </label>
                    <input
                      type="text"
                      name="attendees"
                      value={formData.attendees}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                      placeholder="e.g., 80+ students"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-300">
                      Speakers (one per line: Name|Role)
                    </label>
                    <textarea
                      name="speakers"
                      value={formData.speakers}
                      onChange={handleInputChange}
                      rows="4"
                      className="w-full px-3 py-2 border rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                      placeholder="Mr. John Doe|Software Engineer at ABC&#10;Ms. Jane Smith|Lead Developer at XYZ"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-300">
                      Highlights (one per line)
                    </label>
                    <textarea
                      name="highlights"
                      value={formData.highlights}
                      onChange={handleInputChange}
                      rows="4"
                      className="w-full px-3 py-2 border rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                      placeholder="Hands-on training&#10;Interactive Q&A session&#10;Networking opportunities"
                    />
                  </div>
                </>
              )}

              {/* Submit Button */}
              <div className="flex gap-4">
                <button
                  type="submit"
                  className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg transition-colors"
                >
                  <Save size={20} />
                  {editingEvent ? "Update Event" : "Add Event"}
                </button>
                <button
                  type="button"
                  onClick={resetForm}
                  className="px-6 py-3 border border-gray-300 dark:border-gray-600 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors text-gray-700 dark:text-gray-300"
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        )}

        {/* Events List */}
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
          <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">All Events</h2>
          
          {events.length === 0 ? (
            <p className="text-gray-500 dark:text-gray-400 text-center py-8">
              No events found. Add your first event!
            </p>
          ) : (
            <div className="space-y-4">
              {events.map((event) => (
                <div
                  key={event.id}
                  className="border dark:border-gray-700 rounded-lg p-4 hover:shadow-md transition-shadow"
                >
                  <div className="flex justify-between items-start">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                          {event.name || event.title || event.id}
                        </h3>
                        <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                          event.status === 'live' ? 'bg-red-100 text-red-700 dark:bg-red-900 dark:text-red-300' :
                          event.status === 'upcoming' ? 'bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-300' :
                          'bg-gray-100 text-gray-700 dark:bg-gray-700 dark:text-gray-300'
                        }`}>
                          {event.status}
                        </span>
                      </div>
                      <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">
                        {event.date}
                      </p>
                      <p className="text-sm text-gray-700 dark:text-gray-300 line-clamp-2">
                        {event.description}
                      </p>
                    </div>
                    <div className="flex gap-2 ml-4">
                      <button
                        onClick={() => handleEdit(event)}
                        className="p-2 text-blue-600 hover:bg-blue-50 dark:hover:bg-blue-900 rounded-lg transition-colors"
                        title="Edit event"
                      >
                        <Edit2 size={18} />
                      </button>
                      <button
                        onClick={() => handleDelete(event.id)}
                        className="p-2 text-red-600 hover:bg-red-50 dark:hover:bg-red-900 rounded-lg transition-colors"
                        title="Delete event"
                      >
                        <Trash2 size={18} />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default AdminPanel;