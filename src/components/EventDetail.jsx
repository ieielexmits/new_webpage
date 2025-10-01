import React from "react";
import { useParams } from "react-router-dom";

function EventDetail() {
  const { id } = useParams();

  return (
    <div className="py-12 px-10 flex flex-col md:flex-row items-start gap-10">
      {/* Left side - Event heading */}
      <div className="flex-1">
        <h2 className="text-3xl font-bold text-red-900 mb-4">
          Event {id} - Web.Deploy 2024
        </h2>
        <p className="text-gray-600">
          On <span className="font-semibold">12th–13th April 2024</span>, we
          successfully organized <span className="font-semibold">Web.Deploy 2024</span>, 
          a two-day event dedicated to innovation and learning in the field of web
          technologies. The highlight of this event was an insightful session by
          industry experts who guided students on how to design and build
          chatbots.
        </p>
      </div>

      {/* Right side - Event description */}
      <div className="flex-1">
        <p className="text-gray-700 leading-relaxed">
          Through interactive workshops and discussions, participants gained
          hands-on exposure to real-world applications, modern development
          practices, and the skills required to create intelligent conversational
          systems.
        </p>
        <p className="text-gray-700 leading-relaxed mt-4">
          Web.Deploy 2024 not only helped students strengthen their technical
          expertise but also inspired them to think creatively, solve problems,
          and stay future-ready in the rapidly evolving digital world.
        </p>
      </div>
    </div>
  );
}

export default EventDetail;
