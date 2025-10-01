import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const images = [
  "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=400",
  "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?w=400",
  "https://images.unsplash.com/photo-1523580494863-6f3031224c94?w=400",
  "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=400",
  "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=400",
];

function Carousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const prevSlide = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? images.length - 1 : prev - 1
    );
  };

  const nextSlide = () => {
    setCurrentIndex((prev) =>
      prev === images.length - 1 ? 0 : prev + 1
    );
  };

  const getVisibleSlides = () => {
    const slides = [];
    for (let i = 0; i < 4; i++) {
      const index = (currentIndex + i) % images.length;
      slides.push({ src: images[index], originalIndex: index });
    }
    return slides;
  };

  const visibleSlides = getVisibleSlides();

  return (
<<<<<<< HEAD
    <div className="flex flex-col items-center pt-8 pb-12 px-8 transition-colors duration-300" style={{ backgroundColor: 'var(--bg-primary)' }}>
      {/* Header */}
      <div className="mb-6 text-center">
        <h1 className="text-4xl font-bold mb-2" style={{ color: 'var(--text-primary)' }}>
          IEI STUDENT'S FORUM MITS
        </h1>
        <p style={{ color: 'var(--text-secondary)' }}>
          Experience our gallery with interactive cards
        </p>
      </div>

      {/* Carousel Container */}
      <div className="relative w-full max-w-6xl flex items-center gap-4">
        {/* Left Navigation Button */}
        <button
          onClick={prevSlide}
          className="hover:bg-gray-50 shadow-lg rounded-full p-3 transition-all duration-300 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-blue-500 z-30"
          style={{ backgroundColor: 'var(--card-bg)' }}
          aria-label="Previous slide"
        >
          <ChevronLeft size={28} style={{ color: 'var(--text-primary)' }} />
        </button>

        <div className="backdrop-blur-sm rounded-2xl shadow-xl p-6 relative overflow-visible flex-1" style={{ backgroundColor: 'var(--card-bg)' }}>
          {/* Slides Container */}
          <div className="flex justify-center items-center gap-6 h-64">
            {visibleSlides.map((slide, idx) => (
              <div
                key={`${currentIndex}-${idx}`}
                className="relative flex-shrink-0 transition-all duration-500 ease-out"
                style={{
                  width: hoveredIndex === idx ? '280px' : '220px',
                  height: '240px',
                  zIndex: hoveredIndex === idx ? 20 : 10 - Math.abs(idx - 1),
                }}
                onMouseEnter={() => setHoveredIndex(idx)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
=======
    <div className="bg-white min-h-screen flex flex-col">
      {/* Title Section Above Carousel */}
      <div className="pt-12 pb-8 text-center px-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-3">IEI STUDENT CHAPTER <p>Department of Electronics Engineering</p></h1>
        <p className="text-gray-600 text-lg">IEI SC MITS (EC/ET) is a Departmental Student Chapter of The Institution of Engineers (India), dedicated to enhancing technical knowledge, practical skills, and innovation among budding engineers in the Engineering and allied fields. </p>
      </div>

      {/* Carousel Container with Shadow */}
      <div className="relative w-full bg-white-50">
        <div className="flex items-center justify-between px-4 py-8">
          {/* Left Navigation Button */}
          <button
            onClick={prevSlide}
            className="bg-white hover:bg-gray-100 rounded-full p-3 transition-all duration-300 hover:scale-110 focus:outline-none z-30 flex-shrink-0 shadow-md"
            aria-label="Previous slide"
          >
            <ChevronLeft size={32} className="text-gray-700" />
          </button>

          <div className="relative overflow-visible flex-1 mx-8">
            {/* Slides Container */}
            <div className="flex justify-center items-center gap-8 h-80">
              {visibleSlides.map((slide, idx) => (
>>>>>>> 36d42e2d4e83c2539266c8d0f3a6d076092363dd
                <div
                  key={`${currentIndex}-${idx}`}
                  className="relative flex-shrink-0 transition-all duration-500 ease-out"
                  style={{
                    width: hoveredIndex === idx ? '340px' : '280px',
                    height: '280px',
                    zIndex: hoveredIndex === idx ? 20 : 10 - Math.abs(idx - 1),
                  }}
                  onMouseEnter={() => setHoveredIndex(idx)}
                  onMouseLeave={() => setHoveredIndex(null)}
                >
                  <div
                    className="relative h-full rounded-xl overflow-hidden shadow-lg transition-all duration-500 ease-out cursor-pointer"
                    style={{
                      transform: hoveredIndex === idx 
                        ? 'translateY(-20px) scale(1.05)' 
                        : idx === 1 ? 'translateY(-5px)' : 'translateY(0px)',
                      boxShadow: hoveredIndex === idx 
                        ? '0 25px 50px -12px rgba(0, 0, 0, 0.25)' 
                        : '0 10px 15px -3px rgba(0, 0, 0, 0.1)',
                    }}
                  >
                    {/* Image */}
                    <img
                      src={slide.src}
                      alt={`Slide ${slide.originalIndex}`}
                      className="w-full h-full object-cover transition-all duration-500"
                      style={{
                        filter: hoveredIndex === idx ? 'brightness(1.1)' : 'brightness(0.95)',
                      }}
                    />
                    
                    {/* Overlay on hover */}
                    <div
                      className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent transition-opacity duration-500"
                      style={{
                        opacity: hoveredIndex === idx ? 1 : 0,
                      }}
                    >
                      <div className="absolute bottom-4 left-4 right-4 text-white">
                      
                    </div>
                    </div>

                    {/* Highlight border */}
                    <div
                      className="absolute inset-0 border-4 rounded-xl transition-all duration-500"
                      style={{
                        borderColor: hoveredIndex === idx ? 'rgba(59, 130, 246, 0.8)' : 'transparent',
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Navigation Button */}
          <button
            onClick={nextSlide}
            className="bg-white hover:bg-gray-100 rounded-full p-3 transition-all duration-300 hover:scale-110 focus:outline-none z-30 flex-shrink-0 shadow-md"
            aria-label="Next slide"
          >
            <ChevronRight size={32} className="text-gray-700" />
          </button>
        </div>
<<<<<<< HEAD

        {/* Right Navigation Button */}
        <button
          onClick={nextSlide}
          className="hover:bg-gray-50 shadow-lg rounded-full p-3 transition-all duration-300 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-blue-500 z-30"
          style={{ backgroundColor: 'var(--card-bg)' }}
          aria-label="Next slide"
        >
          <ChevronRight size={28} style={{ color: 'var(--text-primary)' }} />
        </button>

=======
>>>>>>> 36d42e2d4e83c2539266c8d0f3a6d076092363dd
      </div>
    </div>
  );
}

export default Carousel;