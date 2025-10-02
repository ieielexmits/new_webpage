import React from "react";

function About() {

  return (
    <section id="about" className="about-section py-12 md:py-16 lg:py-24 px-4 md:px-6 lg:px-10">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl lg:text-4xl font-bold text-gray-900 mb-6 md:mb-8 text-center lg:text-left">
          About IEI EC MITS Gwalior
        </h2>
      </div>

      {/* Mission Section with Image */}
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-start gap-6 md:gap-8 mb-8 md:mb-12">
        {/* Image Section */}
        <div className="flex-shrink-0 w-full lg:w-1/2">
          <img 
            src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=600&h=400&fit=crop" 
            alt="IEI MITS team" 
            className="w-full h-64 md:h-96 lg:h-[520px] object-cover rounded-lg shadow-lg"
          />
        </div>

        {/* Mission Text Section */}
        <div className="w-full lg:w-1/2">
          <p className="text-gray-700 leading-6 md:leading-7 mb-4 md:mb-6 text-sm md:text-base">
           The IEI Student Chapter is a vibrant platform for budding engineers, fostering innovation, technical expertise, and industry-oriented learning across multiple engineering disciplines. The chapter provides opportunities for students to participate in technical workshops, industrial visits, seminars, competitions, and collaborative projects, enabling holistic growth beyond classroom learning. By nurturing a culture of curiosity, innovation, and teamwork, IEI empowers students to become future-ready engineers and responsible leaders of society.
          </p>
          <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 md:mb-6">Our Aims: </h3>
          <ul className="space-y-3 md:space-y-4 text-gray-700">
            <li className="flex items-start">
              <span className="text-red-600 font-bold text-lg md:text-xl mr-2 md:mr-3 flex-shrink-0">•</span>
              <span className="leading-6 md:leading-7 text-sm md:text-base">Bridge the gap between theoretical concepts and real-world applications.</span>
            </li>
            <li className="flex items-start">
              <span className="text-red-600 font-bold text-lg md:text-xl mr-2 md:mr-3 flex-shrink-0">•</span>
              <span className="leading-6 md:leading-7 text-sm md:text-base">Provide students with opportunities to engage in technical events, industrial interactions, and research-driven initiatives.</span>
            </li>
            <li className="flex items-start">
              <span className="text-red-600 font-bold text-lg md:text-xl mr-2 md:mr-3 flex-shrink-0">•</span>
              <span className="leading-6 md:leading-7 text-sm md:text-base">Promote multidisciplinary collaboration, innovation, and entrepreneurship among students.</span>
            </li>
            <li className="flex items-start">
              <span className="text-red-600 font-bold text-lg md:text-xl mr-2 md:mr-3 flex-shrink-0">•</span>
              <span className="leading-6 md:leading-7 text-sm md:text-base">Instill values of integrity, leadership, and lifelong learning to prepare engineers who can address global challenges responsibly.</span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default About;