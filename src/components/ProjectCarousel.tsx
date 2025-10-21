import React, { useState } from "react";
import { projects } from "../data/projectsData";

const ProjectCarousel = () => {
  const [selectedProject, setSelectedProject] = useState<any>(null);

  return (
    <section id="projects" className="relative py-20 bg-black text-white">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl sm:text-4xl font-bold mb-8">
          Featured <span className="text-red-500">Projects</span>
        </h2>

        {/* Project Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <div
              key={i}
              onClick={() => setSelectedProject(project)}
              className="bg-gray-900 rounded-xl p-6 cursor-pointer hover:scale-105 hover:shadow-[0_0_25px_rgba(255,0,0,0.5)] transition-transform duration-300"
            >
              <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
              <p className="text-gray-400">{project.teaser}</p>
              <p className="text-red-500 mt-2 italic text-sm">Click for more info ▶</p>
            </div>
          ))}
        </div>

        {/* Modal */}
{selectedProject && (
  <div
    className="fixed inset-0 bg-black/80 backdrop-blur-sm flex justify-center items-center z-50 animate-fadeIn"
    onClick={() => setSelectedProject(null)} // click outside closes modal
  >
    <div
      className="bg-gray-900 max-w-lg w-full rounded-2xl p-8 relative shadow-[0_0_50px_rgba(255,0,0,0.6)] animate-slideUp"
      onClick={(e) => e.stopPropagation()} // prevent close when clicking inside modal
    >
      <button
        onClick={() => setSelectedProject(null)}
        className="absolute top-4 right-4 text-gray-400 hover:text-red-500 text-xl font-bold"
      >
        ✕
      </button>
      <h3 className="text-2xl font-bold mb-4 text-red-500">
        {selectedProject.title}
      </h3>
      <p className="text-gray-300 leading-relaxed mb-4">
        {selectedProject.description}
      </p>
      <div>
        <h4 className="text-sm text-gray-400 mb-1">Tech Stack:</h4>
        <p className="text-gray-200 font-mono">{selectedProject.tech}</p>
      </div>
    </div>
  </div>
)}
      </div>
    </section>
  );
};

export default ProjectCarousel;
