import React from "react";
import { techStackDetails } from "../Details";

function Technologies() {
  const {
    html,
    css,
    js,
    react,
    redux,
    tailwind,
    bootstrap,
    sass,
    vscode,
    git,
    github,
    npm,
    postman,
    figma,
  } = techStackDetails;

  const techStack = [
    { src: html, title: "HTML5", name: "HTML" },
    { src: css, title: "CSS3", name: "CSS" },
    { src: js, title: "JavaScript", name: "JavaScript" },
    { src: react, title: "React", name: "React", highlight: true },
    { src: redux, title: "Redux", name: "Redux" },
    { src: tailwind, title: "Tailwind CSS", name: "Tailwind" },
    { src: bootstrap, title: "Bootstrap", name: "Bootstrap" },
    { src: sass, title: "Sass", name: "SASS" },
  ];

  const tools = [
    { src: vscode, title: "Visual Studio Code", name: "VS Code" },
    { src: git, title: "Git", name: "Git" },
    { src: github, title: "GitHub", name: "GitHub" },
    { src: figma, title: "Figma", name: "Figma" },
    { src: npm, title: "NPM", name: "NPM" },
    { src: postman, title: "Postman", name: "Postman" },
  ];

  const TechCard = ({ src, title, name, highlight = false, index }) => (
    <div 
      className={`group relative p-4 rounded-xl bg-white dark:bg-gray-800 shadow-lg hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 ${
        highlight ? 'ring-2 ring-blue-500 ring-opacity-50' : ''
      }`}
      style={{ animationDelay: `${index * 100}ms` }}
    >
      <div className="relative overflow-hidden rounded-lg">
        <img 
          src={src} 
          title={title} 
          alt={`${name} logo`}
          className={`w-full h-16 object-contain transition-all duration-500 group-hover:scale-110 ${
            highlight 
              ? 'group-hover:animate-pulse filter group-hover:drop-shadow-lg' 
              : 'group-hover:rotate-6 group-hover:brightness-110'
          }`}
        />
        <div className="absolute inset-0 transition-opacity duration-300 rounded-lg opacity-0 bg-gradient-to-t from-blue-500/20 to-transparent group-hover:opacity-100"></div>
      </div>
      <div className="mt-3 text-center">
        <p className="text-sm font-medium text-gray-700 transition-colors duration-300 dark:text-gray-300 group-hover:text-blue-600 dark:group-hover:text-blue-400">
          {name}
        </p>
      </div>
      <div className="absolute inset-0 transition-all duration-300 border-2 border-transparent group-hover:border-blue-500/30 rounded-xl"></div>
    </div>
  );

  return (
    <main className="container pt-10 pb-20 mx-auto max-width">
      {/* Tech Stack Section */}
      <section className="mb-16">
        <div className="mb-12 text-center">
          <h1 className="mb-4 text-3xl font-bold text-dark-heading dark:text-light-heading md:text-4xl xl:text-5xl xl:leading-tight animate-fade-in">
            Tech Stack
          </h1>
          <div className="w-24 h-1 mx-auto mb-6 rounded-full bg-gradient-to-r from-blue-500 to-purple-600"></div>
          <p className="mx-auto text-lg leading-relaxed text-content lg:max-w-3xl">
            Technologies I've been working with recently
          </p>
        </div>
        
        <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-6">
          {techStack.map((tech, index) => (
            <TechCard 
              key={tech.name}
              src={tech.src}
              title={tech.title}
              name={tech.name}
              highlight={tech.highlight}
              index={index}
            />
          ))}
        </div>
      </section>

      {/* Tools Section */}
      <section>
        <div className="mb-12 text-center">
          <h1 className="mb-4 text-3xl font-bold text-dark-heading dark:text-light-heading md:text-4xl xl:text-5xl xl:leading-tight">
            Tools & Software
          </h1>
          <div className="w-24 h-1 mx-auto mb-6 rounded-full bg-gradient-to-r from-purple-500 to-pink-600"></div>
          <p className="mx-auto text-lg leading-relaxed text-content lg:max-w-3xl">
            Development tools and software I use for my workflow
          </p>
        </div>
        
        <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-6">
          {tools.map((tool, index) => (
            <TechCard 
              key={tool.name}
              src={tool.src}
              title={tool.title}
              name={tool.name}
              index={index}
            />
          ))}
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
        
        .animate-fade-in {
          animation: fade-in 0.8s ease-out;
        }
      `}</style>
    </main>
  );
}

export default Technologies;