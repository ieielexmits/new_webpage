import React from "react";
import { CheckCircle } from "lucide-react";

function Membership() {
  
  const handleJoinClick = () => {
    window.open('https://forms.gle/L26q7ycAQPzNby4v5', '_blank');
  };

  return (
    <section className="-py-24 px-6 md:px-10 bg-white">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16">
        
        {/* Left Content - Extended */}
        <div className="flex-1 lg:max-w-2xl">
          <h2 className="text-4xl font-bold mb-6" style={{ color: 'var(--text-primary)' }}>
            Become a Member
          </h2>
          <p className="text-lg text-gray-700 mb-8 leading-relaxed">
            Join the IEI EC MITS and open up a gate to success together.
            Our membership is curated to help reach everyone and be valuable assets to world.
          </p>
          
          <div className="space-y-4">
            <div className="flex items-start gap-4">
              <CheckCircle className="text-blue-500 flex-shrink-0 mt-1" size={24} />
              <div>
                <h3 className="font-semibold text-gray-800 mb-1">
                  Minimal Cost access to all IEI events
                </h3>
                <p className="text-gray-600 text-sm">
                  Participate in exclusive technical sessions and skill development programs together
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <CheckCircle className="text-blue-500 flex-shrink-0 mt-1" size={24} />
              <div>
                <h3 className="font-semibold text-gray-800 mb-1">
                  Build and grow your network with society professionals
                </h3>
                <p className="text-sm" style={{ color: 'var(--text-secondary)' }}>
                  Connect with industry experts and alumni from leading organizations
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <CheckCircle className="text-blue-500 flex-shrink-0 mt-1" size={24} />
              <div>
                <h3 className="font-semibold text-gray-800 mb-1">
                  Together we grow
                </h3>
                <p className="text-gray-600 text-sm">
                  Receive personalized support from experienced mentors of your domains
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <CheckCircle className="text-blue-500 flex-shrink-0 mt-1" size={24} />
              <div>
                <h3 className="font-semibold text-gray-800 mb-1">
                  Certifications and other perks
                </h3>
                <p className="text-sm" style={{ color: 'var(--text-secondary)' }}>
                  Earn official certifications and recognition for your achievements
                </p>
              </div>
            </div>
          </div>

          <button 
            onClick={handleJoinClick}
            className="mt-10 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-lg shadow-md transition-colors cursor-pointer"
          >
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