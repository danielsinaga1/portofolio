import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import { personalDetails } from "../Details";

function Home() {
  const { name, tagline, img } = personalDetails;
  const h11 = useRef();
  const h12 = useRef();
  const h13 = useRef();
  const ctaButtonRef = useRef();
  const socialLinksRef = useRef();
  const myimageref = useRef();
  const backgroundRef = useRef();

  useEffect(() => {
    const tl = gsap.timeline();
    
    // Background animation
    tl.from(backgroundRef.current, {
      opacity: 0,
      duration: 1,
      ease: "Power2.easeOut",
    })
    
    // Text animations with stagger
    .from(h11.current, {
      x: "-100%",
      opacity: 0,
      duration: 1.5,
      ease: "Power3.easeOut",
    }, "-=0.5")
    
    .from(h12.current, {
      x: "-100%",
      opacity: 0,
      duration: 1.5,
      ease: "Power3.easeOut",
    }, "-=1.2")
    
    .from(h13.current, {
      x: "-100%",
      opacity: 0,
      duration: 1.5,
      ease: "Power3.easeOut",
    }, "-=1")
    
    // CTA and social links
    .from(ctaButtonRef.current, {
      y: 50,
      opacity: 0,
      duration: 1,
      ease: "Power2.easeOut",
    }, "-=0.5")
    
    .from(socialLinksRef.current, {
      y: 30,
      opacity: 0,
      duration: 1,
      ease: "Power2.easeOut",
    }, "-=0.8")
    
    // Image animation
    .from(myimageref.current, {
      x: "100%",
      opacity: 0,
      duration: 2,
      ease: "Power3.easeOut",
    }, "-=1.5");

  }, []);

  const scrollToProjects = () => {
    const projectsSection = document.getElementById('projects');
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <main className="relative flex items-center justify-center min-h-screen overflow-hidden">
      {/* Animated Background */}
      <div 
        ref={backgroundRef}
        className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900"
      >
        {/* Floating Elements */}
        <div className="absolute w-20 h-20 bg-blue-200 rounded-full top-20 left-10 dark:bg-blue-800 opacity-20 animate-float"></div>
        <div className="absolute w-16 h-16 bg-purple-200 rounded-full top-40 right-20 dark:bg-purple-800 opacity-20 animate-float-delayed"></div>
        <div className="absolute w-12 h-12 bg-pink-200 rounded-full bottom-20 left-1/4 dark:bg-pink-800 opacity-20 animate-float"></div>
      </div>

      <div className="container relative z-10 px-6 mx-auto max-width">
        <div className="flex flex-col items-center justify-between gap-12 lg:flex-row">
          
          {/* Content Section */}
          <div className="flex-1 text-center lg:text-left">
            {/* Greeting */}
            <div className="mb-8">
              <h1
                ref={h11}
                className="mb-4 text-3xl font-bold leading-tight md:text-5xl xl:text-6xl text-dark-heading dark:text-light-heading"
              >
                Hi there! 👋<br />
                <span className="text-2xl font-medium text-gray-600 md:text-4xl xl:text-5xl dark:text-gray-400">
                  I'm
                </span>
              </h1>
              
              {/* Name with Gradient */}
              <h1
                ref={h12}
                className="mb-4 text-4xl font-bold leading-tight text-transparent md:text-6xl xl:text-3xl bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text"
              >
                {name}
              </h1>
              
              {/* Tagline */}
              <h2
                ref={h13}
                className="text-xl font-semibold leading-relaxed md:text-3xl xl:text-4xl text-dark-heading dark:text-light-heading"
              >
                {tagline}
              </h2>
            </div>

            {/* Call to Action Buttons */}
            <div ref={ctaButtonRef} className="mb-8">
              <div className="flex flex-col justify-center gap-4 sm:flex-row lg:justify-start">
                <button 
                  onClick={scrollToProjects}
                  className="px-8 py-4 font-semibold text-white transition-all duration-300 transform rounded-lg shadow-lg bg-gradient-to-r from-blue-600 to-purple-600 hover:shadow-xl hover:-translate-y-1 hover:from-blue-700 hover:to-purple-700"
                >
                  View My Work
                </button>
                <button className="px-8 py-4 font-semibold text-blue-600 transition-all duration-300 transform border-2 border-blue-600 rounded-lg dark:text-blue-400 hover:bg-blue-600 hover:text-white dark:hover:text-white hover:-translate-y-1">
                  Download CV
                </button>
              </div>
            </div>

            {/* Social Links */}
            <div ref={socialLinksRef} className="flex justify-center gap-6 lg:justify-start">
              <a 
                href="#" 
                className="flex items-center justify-center w-12 h-12 text-gray-600 transition-all duration-300 transform bg-white rounded-full shadow-lg dark:bg-gray-800 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 hover:shadow-xl hover:-translate-y-1"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                </svg>
              </a>
              <a 
                href="#" 
                className="flex items-center justify-center w-12 h-12 text-gray-600 transition-all duration-300 transform bg-white rounded-full shadow-lg dark:bg-gray-800 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 hover:shadow-xl hover:-translate-y-1"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
              <a 
                href="#" 
                className="flex items-center justify-center w-12 h-12 text-gray-600 transition-all duration-300 transform bg-white rounded-full shadow-lg dark:bg-gray-800 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 hover:shadow-xl hover:-translate-y-1"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Image Section */}
          <div className="flex justify-center flex-1 lg:justify-end">
            <div className="relative">
              {/* Decorative Elements */}
              <div className="absolute rounded-full -top-4 -left-4 w-72 h-72 bg-gradient-to-br from-blue-400 to-purple-600 opacity-20 blur-xl"></div>
              <div className="absolute rounded-full -bottom-4 -right-4 w-60 h-60 bg-gradient-to-br from-pink-400 to-red-500 opacity-20 blur-xl"></div>
              
              {/* Main Image */}
              <div className="relative z-10">
                <img 
                  ref={myimageref} 
                  className="object-cove dark:border-gray-800" 
                  src={img} 
                  alt={name}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Down Indicator */}
      <div className="absolute transform -translate-x-1/2 bottom-8 left-1/2">
        <div className="animate-bounce">
          <svg className="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        
        @keyframes float-delayed {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-15px); }
        }
        
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        
        .animate-float-delayed {
          animation: float-delayed 8s ease-in-out infinite;
          animation-delay: 2s;
        }
      `}</style>
    </main>
  );
}

export default Home;