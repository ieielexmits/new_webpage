import React from "react";
import { CheckCircle } from "lucide-react";

function Membership() {
  
  const handleJoinClick = () => {
    window.open('https://forms.gle/L26q7ycAQPzNby4v5', '_blank');
  };

  return (
    <section className="py-16 px-6 md:px-10 transition-colors duration-300" style={{ backgroundColor: 'var(--bg-primary)' }}>
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16">
        
        {/* Left Content - Extended */}
        <div className="flex-1 lg:max-w-2xl">
          <h2 className="text-4xl font-bold mb-6" style={{ color: 'var(--text-primary)' }}>
            Become a Member
          </h2>
          <p className="text-lg mb-8 leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
            Join the IETE MITS community and gain access to a world of opportunities.
            Our membership is designed to support your journey every step of the way.
          </p>
          
          <div className="space-y-4">
            <div className="flex items-start gap-4">
              <CheckCircle className="text-blue-500 flex-shrink-0 mt-1" size={24} />
              <div>
                <h3 className="font-semibold mb-1" style={{ color: 'var(--text-primary)' }}>
                  Access to all programs and workshops
                </h3>
                <p className="text-sm" style={{ color: 'var(--text-secondary)' }}>
                  Participate in exclusive technical sessions and skill development programs
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <CheckCircle className="text-blue-500 flex-shrink-0 mt-1" size={24} />
              <div>
                <h3 className="font-semibold mb-1" style={{ color: 'var(--text-primary)' }}>
                  Exclusive networking events with professionals
                </h3>
                <p className="text-sm" style={{ color: 'var(--text-secondary)' }}>
                  Connect with industry experts and alumni from leading organizations
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <CheckCircle className="text-blue-500 flex-shrink-0 mt-1" size={24} />
              <div>
                <h3 className="font-semibold mb-1" style={{ color: 'var(--text-primary)' }}>
                  Build a huge professional network
                </h3>
                <p className="text-sm" style={{ color: 'var(--text-secondary)' }}>
                  Grow your connections and create lasting relationships in your field
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <CheckCircle className="text-blue-500 flex-shrink-0 mt-1" size={24} />
              <div>
                <h3 className="font-semibold mb-1" style={{ color: 'var(--text-primary)' }}>
                  Career guidance and mentorship
                </h3>
                <p className="text-sm" style={{ color: 'var(--text-secondary)' }}>
                  Receive personalized support from experienced mentors in your domain
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <CheckCircle className="text-blue-500 flex-shrink-0 mt-1" size={24} />
              <div>
                <h3 className="font-semibold mb-1" style={{ color: 'var(--text-primary)' }}>
                  Recognition and certificates
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