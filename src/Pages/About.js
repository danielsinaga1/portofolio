import React from "react";
import Work from "../Components/Work";
import { personalDetails, workDetails, eduDetails } from "../Details";

function About() {
  return (
    <main className="container pt-10 pb-20 mx-auto max-width">
      {/* About Me Section */}
      <section className="mb-16">
        <div className="mb-12 text-center">
          <h1 className="mb-4 text-3xl font-bold text-dark-heading dark:text-light-heading md:text-4xl xl:text-5xl xl:leading-tight animate-fade-in">
            About Me
          </h1>
          <div className="w-24 h-1 mx-auto mb-6 rounded-full bg-gradient-to-r from-blue-500 to-purple-600"></div>
        </div>
        
        {/* About Content Card */}
        <div className="p-8 transition-all duration-300 bg-white shadow-lg dark:bg-gray-800 rounded-xl hover:shadow-xl animate-fade-in-up">
          <div className="flex flex-col items-center gap-8 lg:flex-row">
            {/* Profile Image Placeholder - Add if you have a profile image */}
            <div className="flex-shrink-0">
              <div className="flex items-center justify-center w-32 h-32 text-4xl font-bold text-white rounded-full shadow-lg bg-gradient-to-br from-blue-500 to-purple-600">
                {personalDetails.name ? personalDetails.name.charAt(0) : 'A'}
              </div>
            </div>
            
            {/* About Text */}
            <div className="flex-1">
              <p className="text-lg leading-relaxed text-content">
                {personalDetails.about}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Work Experience Section */}
      <section className="mb-16">
        <div className="mb-12 text-center">
          <h1 className="mb-4 text-3xl font-bold text-dark-heading dark:text-light-heading md:text-4xl xl:text-5xl xl:leading-tight">
            Work Experience
          </h1>
          <div className="w-24 h-1 mx-auto mb-6 rounded-full bg-gradient-to-r from-green-500 to-blue-600"></div>
          <p className="text-lg text-content">
            My professional journey and achievements
          </p>
        </div>
        
        <div className="space-y-6">
          {workDetails.length > 0 ? (
            React.Children.toArray(
              workDetails.map(({ Position, Company, Location, Type, Duration }, index) => (
                <div 
                  className="animate-fade-in-up"
                  style={{ animationDelay: `${index * 150}ms` }}
                >
                  <Work
                    position={Position}
                    company={Company}
                    location={Location}
                    type={Type}
                    duration={Duration}
                  />
                </div>
              ))
            )
          ) : (
            <div className="py-12 text-center">
              <div className="mb-4 text-6xl">💼</div>
              <h3 className="mb-2 text-xl font-semibold text-gray-700 dark:text-gray-300">
                No work experience yet
              </h3>
              <p className="text-gray-500 dark:text-gray-400">
                Currently building skills and looking for opportunities
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Education Section */}
      <section>
        <div className="mb-12 text-center">
          <h1 className="mb-4 text-3xl font-bold text-dark-heading dark:text-light-heading md:text-4xl xl:text-5xl xl:leading-tight">
            Education
          </h1>
          <div className="w-24 h-1 mx-auto mb-6 rounded-full bg-gradient-to-r from-purple-500 to-pink-600"></div>
          <p className="text-lg text-content">
            My academic background and qualifications
          </p>
        </div>
        
        <div className="space-y-6">
          {eduDetails.length > 0 ? (
            React.Children.toArray(
              eduDetails.map(({ Position, Company, Location, Type, Duration }, index) => (
                <div 
                  className="animate-fade-in-up"
                  style={{ animationDelay: `${index * 150}ms` }}
                >
                  <Work
                    position={Position}
                    company={Company}
                    location={Location}
                    type={Type}
                    duration={Duration}
                  />
                </div>
              ))
            )
          ) : (
            <div className="py-12 text-center">
              <div className="mb-4 text-6xl">🎓</div>
              <h3 className="mb-2 text-xl font-semibold text-gray-700 dark:text-gray-300">
                No education details available
              </h3>
              <p className="text-gray-500 dark:text-gray-400">
                Education information will be added soon
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Skills Summary Section (Optional Enhancement) */}
      <section className="mt-16">
        <div className="p-8 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-gray-800 dark:to-gray-700 rounded-xl">
          <div className="text-center">
            <h2 className="mb-4 text-2xl font-bold text-dark-heading dark:text-light-heading">
              Quick Facts
            </h2>
            <div className="grid grid-cols-1 gap-6 mt-8 md:grid-cols-3">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600 dark:text-blue-400">
                  {workDetails.length}+
                </div>
                <p className="text-gray-600 dark:text-gray-400">Work Experiences</p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-600 dark:text-purple-400">
                  {eduDetails.length}+
                </div>
                <p className="text-gray-600 dark:text-gray-400">Educational Qualifications</p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-600 dark:text-green-400">
                  ∞
                </div>
                <p className="text-gray-600 dark:text-gray-400">Learning & Growing</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fade-in {
          animation: fade-in 0.8s ease-out;
        }
        
        .animate-fade-in-up {
          animation: fade-in-up 0.6s ease-out forwards;
          opacity: 0;
        }
      `}</style>
    </main>
  );
}

export default About;