import React from "react";
import { CheckCircle } from "lucide-react";

function Membership() {
  
  const handleJoinClick = () => {
    window.open('https://forms.gle/L26q7ycAQPzNby4v5', '_blank');
  };

  return (
    <section id="membership" className="membership-section py-12 md:py-16 lg:py-24 px-4 md:px-6 lg:px-10 bg-white">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-8 md:gap-12 lg:gap-16">
        
        {/* Left Content - Extended */}
        <div className="flex-1 w-full lg:max-w-2xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 md:mb-6 text-gray-900 text-center lg:text-left">
            Become a Member
          </h2>
          <p className="text-base md:text-lg text-gray-700 mb-6 md:mb-8 leading-relaxed text-center lg:text-left">
            Join the IEI EC MITS and open up a gate to success together.
            Our membership is curated to help reach everyone and be valuable assets to world.
          </p>
          
          <div className="space-y-3 md:space-y-4">
            <div className="flex items-start gap-3 md:gap-4">
              <CheckCircle className="text-blue-500 flex-shrink-0 mt-1" size={20} />
              <div>
                <h3 className="font-semibold text-gray-800 mb-1 text-sm md:text-base">
                  Minimal Cost access to all IEI events
                </h3>
                <p className="text-gray-600 text-xs md:text-sm">
                  Participate in exclusive technical sessions and skill development programs together
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3 md:gap-4">
              <CheckCircle className="text-blue-500 flex-shrink-0 mt-1" size={20} />
              <div>
                <h3 className="font-semibold text-gray-800 mb-1 text-sm md:text-base">
                  Build and grow your network with society professionals
                </h3>
                <p className="text-gray-600 text-xs md:text-sm">
                  Connect with industry experts and alumni from leading organizations
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3 md:gap-4">
              <CheckCircle className="text-blue-500 flex-shrink-0 mt-1" size={20} />
              <div>
                <h3 className="font-semibold text-gray-800 mb-1 text-sm md:text-base">
                  Together we grow
                </h3>
                <p className="text-gray-600 text-xs md:text-sm">
                  Receive personalized support from experienced mentors of your domains
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3 md:gap-4">
              <CheckCircle className="text-blue-500 flex-shrink-0 mt-1" size={20} />
              <div>
                <h3 className="font-semibold text-gray-800 mb-1 text-sm md:text-base">
                  Certifications and other perks
                </h3>
                <p className="text-gray-600 text-xs md:text-sm">
                  Earn official certifications and recognition for your achievements
                </p>
              </div>
            </div>
          </div>

          <button 
            onClick={handleJoinClick}
            className="mt-6 md:mt-10 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2.5 md:py-3 px-6 md:px-8 rounded-lg shadow-md transition-colors cursor-pointer w-full sm:w-auto text-sm md:text-base"
          >
            Join Now
          </button>
        </div>
         
        {/* Right side card */}
        <div className="flex-1 flex justify-center lg:justify-end w-full">
          <div className="relative w-full max-w-md">
            <div className="absolute inset-0 bg-blue-600 rounded-2xl blur-xl opacity-20"></div>
            <img 
              src="IEI_Membership.png" 
              alt="IEI Membership Card" 
              className="relative rounded-2xl shadow-2xl w-full h-auto transform hover:scale-105 transition-transform duration-300"
            />
          </div>
        </div>

      </div>
    </section>
  );
}

export default Membership;