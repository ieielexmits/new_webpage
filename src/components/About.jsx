import React from "react";

function About() {

  return (
    <section className="about-section py-24 px-6 md:px-10">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16">
        <h2 className="text-4xl font-bold text-gray-900 mb-4">About IEI EC MITS Gwalior</h2>
      </div>

      {/* Mission Section with Image */}
      <div className="flex flex-col lg:flex-row items-start gap-8 mb-12">
        {/* Image Section */}
        <div className="flex-shrink-0 lg:w-1/2">
          <img 
            src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=600&h=400&fit=crop" 
            alt="IEI MITS team" 
            className="w-full h-[520px] object-cover rounded-lg shadow-lg"
          />
        </div>

        {/* Mission Text Section */}
        <div className="lg:w-1/2">
          <p className="text-gray-700 leading-7 mb-6">
           The IEI Student Chapter is a vibrant platform for budding engineers, fostering innovation, technical expertise, and industry-oriented learning across multiple engineering disciplines. The chapter provides opportunities for students to participate in technical workshops, industrial visits, seminars, competitions, and collaborative projects, enabling holistic growth beyond classroom learning. By nurturing a culture of curiosity, innovation, and teamwork, IEI empowers students to become future-ready engineers and responsible leaders of society.
          </p>
          <h3 className="text-3xl font-bold text-gray-900 mb-6">Our Aims: </h3>
          <p className="text-gray-700 leading-7 mb-6">
            <ul className="space-y-4 text-gray-700">
          <li className="flex items-start">
            <span className="text-red-600 font-bold text-xl mr-3">•</span>
            <span className="leading-7">Bridge the gap between theoretical concepts and real-world applications.</span>
          </li>
          <li className="flex items-start">
            <span className="text-red-600 font-bold text-xl mr-3">•</span>
            <span className="leading-7">Provide students with opportunities to engage in technical events, industrial interactions, and research-driven initiatives.</span>
          </li>
          <li className="flex items-start">
            <span className="text-red-600 font-bold text-xl mr-3">•</span>
            <span className="leading-7">Promote multidisciplinary collaboration, innovation, and entrepreneurship among students.</span>
          </li>
          <li className="flex items-start">
            <span className="text-red-600 font-bold text-xl mr-3">•</span>
            <span className="leading-7">Instill values of integrity, leadership, and lifelong learning to prepare engineers who can address global challenges responsibly.</span>
          </li>
        </ul>
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;