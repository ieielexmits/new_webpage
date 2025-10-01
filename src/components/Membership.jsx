import React from "react";
import { CheckCircle } from "lucide-react";

function Membership() {
  return (
    <section className="py-16 px-6 md:px-10 bg-white">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16">
        
        {/* Left Content - Extended */}
        <div className="flex-1 lg:max-w-2xl">
          <h2 className="text-4xl font-bold text-red-900 mb-6">
            Become a Member
          </h2>
          <p className="text-lg text-gray-700 mb-8 leading-relaxed">
            Join the IETE MITS community and gain access to a world of opportunities.
            Our membership is designed to support your journey every step of the way.
          </p>
          
          <div className="space-y-4">
            <div className="flex items-start gap-4">
              <CheckCircle className="text-blue-500 flex-shrink-0 mt-1" size={24} />
              <div>
                <h3 className="font-semibold text-gray-800 mb-1">
                  Access to all programs and workshops
                </h3>
                <p className="text-gray-600 text-sm">
                  Participate in exclusive technical sessions and skill development programs
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <CheckCircle className="text-blue-500 flex-shrink-0 mt-1" size={24} />
              <div>
                <h3 className="font-semibold text-gray-800 mb-1">
                  Exclusive networking events with professionals
                </h3>
                <p className="text-gray-600 text-sm">
                  Connect with industry experts and alumni from leading organizations
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <CheckCircle className="text-blue-500 flex-shrink-0 mt-1" size={24} />
              <div>
                <h3 className="font-semibold text-gray-800 mb-1">
                  Build a huge professional network
                </h3>
                <p className="text-gray-600 text-sm">
                  Grow your connections and create lasting relationships in your field
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <CheckCircle className="text-blue-500 flex-shrink-0 mt-1" size={24} />
              <div>
                <h3 className="font-semibold text-gray-800 mb-1">
                  Career guidance and mentorship
                </h3>
                <p className="text-gray-600 text-sm">
                  Receive personalized support from experienced mentors in your domain
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <CheckCircle className="text-blue-500 flex-shrink-0 mt-1" size={24} />
              <div>
                <h3 className="font-semibold text-gray-800 mb-1">
                  Recognition and certificates
                </h3>
                <p className="text-gray-600 text-sm">
                  Earn official certifications and recognition for your achievements
                </p>
              </div>
            </div>
          </div>

          <button className="mt-10 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-lg shadow-md transition-colors">
            Join Now
          </button>
        </div>
         {/*Right side card*/}
        <div className="flex-1 flex justify-center lg:justify-end">
            <div className="relative">
              <div className="absolute inset-0 bg-blue-600 rounded-2xl blur-xl opacity-20"></div>
              <img 
                src="IEI_Membership.png" 
                alt="IEI Membership Card" 
                className="relative rounded-2xl shadow-2xl max-w-full h-auto transform hover:scale-105 transition-transform duration-300"
              />
            </div>
          </div>

      </div>
    </section>
  );
}

export default Membership;