import React, { useState } from "react";
import Project from "../Components/Project";
import { projectDetails } from "../Details";

function Projects() {
  const [filter, setFilter] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  // Get unique tech stacks for filtering
  const allTechStacks = [...new Set(projectDetails.flatMap(project => project.techstack))];
  
  // Filter projects based on selected filter and search term
  const filteredProjects = projectDetails.filter(project => {
    const matchesFilter = filter === 'all' || project.techstack.includes(filter);
    const matchesSearch = project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         project.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         project.techstack.some(tech => tech.toLowerCase().includes(searchTerm.toLowerCase()));
    return matchesFilter && matchesSearch;
  });

  return (
    <main className="container pt-10 pb-20 mx-auto max-width">
      <section>
        {/* Header Section */}
        <div className="mb-12 text-center">
          <h1 className="mb-4 text-3xl font-bold text-dark-heading dark:text-light-heading md:text-4xl xl:text-5xl xl:leading-tight animate-fade-in">
            My Projects
          </h1>
          <div className="w-24 h-1 mx-auto mb-6 rounded-full bg-gradient-to-r from-blue-500 to-purple-600"></div>
          <p className="mx-auto mb-8 text-lg leading-relaxed text-content lg:max-w-3xl">
            A collection of projects that showcase my skills and passion for development
          </p>
        </div>

        {/* Search and Filter Section */}
        <div className="mb-8 space-y-4">
          {/* Search Bar */}
          <div className="flex justify-center">
            <div className="relative w-full max-w-md">
              <input
                type="text"
                placeholder="Search projects..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full px-4 py-2 pl-10 pr-4 text-gray-700 transition-all duration-300 bg-white border border-gray-300 rounded-lg dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              <div className="absolute inset-y-0 left-0 flex items-center pl-3">
                <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
            </div>
          </div>

          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-2">
            <button
              onClick={() => setFilter('all')}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                filter === 'all'
                  ? 'bg-blue-500 text-white shadow-lg transform scale-105'
                  : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600'
              }`}
            >
              All Projects
            </button>
            {allTechStacks.slice(0, 6).map((tech) => (
              <button
                key={tech}
                onClick={() => setFilter(tech)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  filter === tech
                    ? 'bg-blue-500 text-white shadow-lg transform scale-105'
                    : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600'
                }`}
              >
                {tech}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Count */}
        <div className="mb-8 text-center">
          <p className="text-gray-600 dark:text-gray-400">
            Showing {filteredProjects.length} of {projectDetails.length} projects
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {filteredProjects.length > 0 ? (
            React.Children.toArray(
              filteredProjects.map(
                ({ title, image, description, techstack, previewLink, githubLink }, index) => (
                  <div 
                    className="animate-fade-in-up"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <Project
                      title={title}
                      image={image}
                      description={description}
                      techstack={techstack}
                      previewLink={previewLink}
                      githubLink={githubLink}
                    />
                  </div>
                )
              )
            )
          ) : (
            /* No Projects Found */
            <div className="py-12 text-center col-span-full">
              <div className="mb-4 text-6xl">🔍</div>
              <h3 className="mb-2 text-xl font-semibold text-gray-700 dark:text-gray-300">
                No projects found
              </h3>
              <p className="text-gray-500 dark:text-gray-400">
                Try adjusting your search or filter criteria
              </p>
              <button
                onClick={() => {
                  setFilter('all');
                  setSearchTerm('');
                }}
                className="px-6 py-2 mt-4 text-white transition-colors duration-300 bg-blue-500 rounded-lg hover:bg-blue-600"
              >
                Clear Filters
              </button>
            </div>
          )}
        </div>

        {/* Load More Button (if you want to implement pagination later) */}
        {filteredProjects.length > 0 && filteredProjects.length < projectDetails.length && (
          <div className="mt-12 text-center">
            <button className="px-8 py-3 font-medium text-white transition-all duration-300 transform rounded-lg shadow-lg bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 hover:scale-105">
              View All Projects
            </button>
          </div>
        )}
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

export default Projects;