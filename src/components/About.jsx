import React from "react";

function About() {
  return (
    <section className="py-12 px-10">
      <h2 className="text-2xl font-bold text-red-900 mb-6">About us</h2>

      <div className="flex flex-col md:flex-row items-start gap-8">
        {/* Text Section */}
        <p className="text-gray-700 leading-7 max-w-2xl text-justify">
          The Institution of Engineers (India) [IEI], established in 1920, is the largest
          multidisciplinary professional body of engineers in the country.
          <br />
          <br />
          At MITS, Gwalior, the IEI Local Chapter connects students, academicians,
          and industry professionals to foster technical competence, leadership,
          and innovation. Through seminars, workshops, technical talks, industrial visits,
          and hackathons, the chapter provides exposure to emerging technologies
          and offers a platform for research, knowledge sharing, and professional growth.
        </p>

        {/* Big Gray Box Section */}
        <div className="flex-shrink-0">
          <div className="h-56 w-80 bg-gray-200 rounded-md" />
        </div>
      </div>
    </section>
  );
}

export default About;