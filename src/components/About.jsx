import React from "react";

function About() {
  return (
    <section className="py-16 px-6 md:px-10 lg:px-20">
      <h2 className="text-3xl font-bold text-red-900 mb-8">About us</h2>

      <div className="flex flex-col md:flex-row items-center justify-between gap-10">
        {/* Text Section */}
        <div className="flex-1 text-gray-700 leading-7 text-justify">
          <p className="mb-4">
            The Institution of Engineers (India) [IEI], established in 1920, is the largest
            multidisciplinary professional body of engineers in the country.
          </p>
          <p>
            At MITS, Gwalior, the IEI Local Chapter connects students, academicians,
            and industry professionals to foster technical competence, leadership,
            and innovation. Through seminars, workshops, technical talks, industrial visits,
            and hackathons, the chapter provides exposure to emerging technologies
            and offers a platform for research, knowledge sharing, and professional growth.
          </p>
        </div>

        {/* Image Section */}
        <div className="flex-shrink-0">
          <img 
            src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=600&h=400&fit=crop" 
            alt="Engineering students collaborating" 
            className="h-64 w-96 object-cover rounded-lg shadow-lg"
          />
        </div>
      </div>
    </section>
  );
}

export default About;