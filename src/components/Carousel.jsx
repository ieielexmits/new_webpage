import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const images = [
  "Team.jpeg",
  "Gateway_1.jpg",
  "Gateway_2.jpg",
  "Study_team.jpg",
  "Gateway_3.jpg",
];

function Carousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [slidesToShow, setSlidesToShow] = useState(4);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setSlidesToShow(1);
      } else if (window.innerWidth < 1024) {
        setSlidesToShow(2);
      } else {
        setSlidesToShow(4);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const prevSlide = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? images.length - 1 : prev - 1
    );
  };

  const nextSlide = () => {
    setCurrentIndex((prev) =>
      prev >= images.length - 1 ? 0 : prev + 1
    );
  };

  const getVisibleSlides = () => {
    const slides = [];
    for (let i = 0; i < slidesToShow; i++) {
      const index = (currentIndex + i) % images.length;
      slides.push({ src: images[index], originalIndex: index });
    }
    return slides;
  };

  const visibleSlides = getVisibleSlides();

  return (
     <div className="carousel-section min-h-screen flex flex-col pt-16 md:pt-20">
      {/* Title Section Above Carousel */}
      <div className="pt-6 sm:pt-8 md:pt-12 pb-4 sm:pb-6 md:pb-8 text-center px-4 sm:px-6 md:px-8">
        <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-2 md:mb-3 leading-tight">
          IEI STUDENT CHAPTER 
          <p className="mt-1 sm:mt-2">Department of Electronics Engineering</p>
        </h1>
        <p className="text-gray-600 text-xs sm:text-sm md:text-base lg:text-lg px-2 sm:px-4 md:px-8 lg:px-16 max-w-5xl mx-auto leading-relaxed">
          IEI SC MITS (EC/ET) is a Departmental Student Chapter at MITS-DU of The Institution of Engineers (India), dedicated to enhancing technical knowledge, practical skills, and innovation among budding engineers in the Engineering and allied fields. 
        </p>
      </div>

      {/* Carousel Container */}
      <div className="relative w-full px-2 sm:px-4 flex-1 flex items-center">
        <div className="flex items-center justify-center w-full gap-2 sm:gap-4 md:gap-6">
          {/* Left Navigation Button */}
          <button
            onClick={prevSlide}
            className="carousel-nav-btn rounded-full p-2 sm:p-2.5 md:p-3 transition-all duration-300 hover:scale-110 focus:outline-none z-30 flex-shrink-0 shadow-md"
            aria-label="Previous slide"
          >
            <ChevronLeft size={window.innerWidth < 640 ? 20 : window.innerWidth < 768 ? 24 : 32} className="text-gray-700" />
          </button>

          {/* Slides Container */}
          <div className="relative overflow-hidden flex-1 max-w-7xl">
            <div className={`flex items-center ${slidesToShow === 1 ? 'justify-center' : 'justify-center gap-4 md:gap-6 lg:gap-8'} h-56 sm:h-64 md:h-72 lg:h-80`}>
              {visibleSlides.map((slide, idx) => {
                const isHovered = hoveredIndex === idx;
                const isMobile = slidesToShow === 1;
                
                return (
                  <div
                    key={`${currentIndex}-${idx}`}
                    className="relative flex-shrink-0 transition-all duration-500 ease-out"
                    style={{
                      width: isMobile 
                        ? (isHovered ? '90%' : '85%')
                        : slidesToShow === 2
                        ? (isHovered ? '300px' : '260px')
                        : (isHovered ? '340px' : '280px'),
                      maxWidth: isMobile ? '400px' : 'none',
                      height: isMobile 
                        ? '220px'
                        : slidesToShow === 2
                        ? '220px'
                        : '280px',
                      zIndex: isHovered ? 20 : 10 - Math.abs(idx - 1),
                    }}
                    onMouseEnter={() => setHoveredIndex(idx)}
                    onMouseLeave={() => setHoveredIndex(null)}
                    onTouchStart={() => setHoveredIndex(idx)}
                    onTouchEnd={() => setHoveredIndex(null)}
                  >
                    <div
                      className="relative h-full rounded-lg md:rounded-xl overflow-hidden shadow-lg transition-all duration-500 ease-out cursor-pointer"
                      style={{
                        transform: isHovered 
                          ? 'translateY(-10px) scale(1.03)' 
                          : idx === 1 && !isMobile ? 'translateY(-5px)' : 'translateY(0px)',
                        boxShadow: isHovered 
                          ? '0 20px 40px -12px rgba(0, 0, 0, 0.3)' 
                          : '0 10px 15px -3px rgba(0, 0, 0, 0.1)',
                      }}
                    >
                      {/* Image */}
                      <img
                        src={slide.src}
                        alt={`Slide ${slide.originalIndex + 1}`}
                        className="w-full h-full object-cover transition-all duration-500"
                        style={{
                          filter: isHovered ? 'brightness(1.1)' : 'brightness(0.95)',
                        }}
                      />
                      
                      {/* Overlay on hover */}
                      <div
                        className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent transition-opacity duration-500"
                        style={{
                          opacity: isHovered ? 1 : 0,
                        }}
                      >
                        <div className="absolute bottom-4 left-4 right-4 text-white">
                          {/* Optional: Add content here if needed */}
                        </div>
                      </div>

                      {/* Highlight border */}
                      <div
                        className="absolute inset-0 border-2 md:border-4 rounded-lg md:rounded-xl transition-all duration-500"
                        style={{
                          borderColor: isHovered ? 'rgba(59, 130, 246, 0.8)' : 'transparent',
                        }}
                      />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right Navigation Button */}
          <button
            onClick={nextSlide}
            className="carousel-nav-btn rounded-full p-2 sm:p-2.5 md:p-3 transition-all duration-300 hover:scale-110 focus:outline-none z-30 flex-shrink-0 shadow-md"
            aria-label="Next slide"
          >
            <ChevronRight size={window.innerWidth < 640 ? 20 : window.innerWidth < 768 ? 24 : 32} className="text-gray-700" />
          </button>
        </div>
      </div>

      {/* Carousel Indicators for Mobile */}
      {slidesToShow === 1 && (
        <div className="flex justify-center gap-2 pb-6 pt-4">
          {images.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentIndex(idx)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                idx === currentIndex 
                  ? 'bg-blue-600 w-6' 
                  : 'bg-gray-300 dark:bg-gray-600'
              }`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default Carousel;