import React from "react";
import { CheckCircle } from "lucide-react";

function Membership() {
  return (
    <section className="py-12 px-10">
      <div className="flex flex-col md:flex-row items-center justify-center gap-10">
        
        {/* Left Content */}
        <div className="flex-1">
          <h2 className="text-2xl font-bold text-red-900 mb-6">Become a Member</h2>
          <p className="text-gray-700 mb-6 max-w-2xl">
            Join the IETE MITS community and gain access to a world of opportunities.
            Our membership is designed to support your journey every step of the way.
          </p>
          <ul className="space-y-3 text-gray-700">
            <li className="flex items-center">
              <CheckCircle className="text-blue-500 mr-2" /> Access to all programs
              and workshops
            </li>
            <li className="flex items-center">
              <CheckCircle className="text-blue-500 mr-2" /> Exclusive networking
              events with professionals
            </li>
            <li className="flex items-center">
              <CheckCircle className="text-blue-500 mr-2" /> Build a huge
              professional network
            </li>
          </ul>
        </div>

        {/* Right Card (Centered) */}
        <div className="flex-1 flex justify-center">
          <div className="h-48 w-80 bg-gradient-to-r from-blue-700 to-blue-500 rounded-lg shadow-lg" />
        </div>

      </div>
    </section>
  );
}

export default Membership;
