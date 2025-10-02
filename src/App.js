import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Events from "./components/Events";
import About from "./components/About";
import Membership from "./components/Membership";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import EventDetail from "./components/EventDetail";
import Carousel from "./components/Carousel";

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Carousel />
              <Events />
              <About />
              <Membership />
            </>
          }
        />
        <Route path="/events" element={<Events />} />
        <Route path="/about" element={<About />} />
        <Route path="/membership" element={<Membership />} />
        <Route
          path="/contact"
          element={
            <div className="p-10 text-center">
              <h2 className="text-2xl font-bold text-red-900">Contact Us</h2>
              <p className="mt-4 text-gray-600">
                Email: SampleEmail1@gmail.com <br />
                Phone: 2233113311
              </p>
            </div>
          }
        />
        <Route path="/events/:id" element={<EventDetail />} />
      </Routes>
      <Footer />

    </Router>
  );
}

export default App;
