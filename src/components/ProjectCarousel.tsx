import React, { useState } from "react";
import { projects } from "../data/projectsData";

const ProjectCarousel = () => {
  const [selectedProject, setSelectedProject] = useState<any>(null);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section id="projects" className="relative py-20 bg-black text-white">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl sm:text-4xl font-bold mb-8">
          Featured <span className="text-red-500">Projects</span>
        </h2>

        {/* --- Netflix-Style Project Grid --- */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 relative z-10">
          {projects.map((project, i) => (
            <div
              key={i}
              onClick={() => setSelectedProject(project)}
              onMouseEnter={() => setHoveredIndex(i)}
              onMouseLeave={() => setHoveredIndex(null)}
              className={`relative group rounded-xl overflow-hidden bg-gray-900 cursor-pointer transition-all duration-300 ${
                hoveredIndex === i
                  ? "scale-[1.08] z-20 shadow-[0_0_60px_rgba(255,0,0,0.6)] animate-redPulse"
                  : "scale-100"
              }`}
            >
              {/* Image */}
              <img
                src={project.image}
                alt={project.title}
                className={`w-full h-56 object-cover transition-all duration-500 ${
                  hoveredIndex === i
                    ? "brightness-100"
                    : "brightness-75 group-hover:brightness-100"
                }`}
              />

              {/* Cinematic Overlay */}
              <div
                className={`absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent transition-all duration-500 ${
                  hoveredIndex === i ? "opacity-80" : "opacity-90"
                }`}
              />

              {/* Text Content */}
              <div className="absolute bottom-0 p-5">
                <h3 className="text-xl font-semibold mb-1 text-white drop-shadow-lg">
                  {project.title}
                </h3>
                <p className="text-gray-300 text-sm mb-2">{project.teaser}</p>
                <p className="text-red-500 text-sm italic font-medium">
                  ▶ Click for more info
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* --- Modal (Netflix “More Info”) --- */}
        {selectedProject && (
          <div
            className="fixed inset-0 bg-black/80 backdrop-blur-sm flex justify-center items-center z-50 animate-fadeIn"
            onClick={() => setSelectedProject(null)}
          >
            <div
              className="bg-gray-900 max-w-lg w-full rounded-2xl p-8 relative shadow-[0_0_50px_rgba(255,0,0,0.6)] animate-slideUp"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 text-gray-400 hover:text-red-500 text-xl font-bold"
              >
                ✕
              </button>

              <img
                src={selectedProject.image}
                alt={selectedProject.title}
                className="w-full h-48 object-cover rounded-lg mb-4 brightness-90"
              />

              <h3 className="text-2xl font-bold mb-4 text-red-500">
                {selectedProject.title}
              </h3>
              <p className="text-gray-300 leading-relaxed mb-4 whitespace-pre-line">
                {selectedProject.description}
              </p>

              <div>
                <h4 className="text-sm text-gray-400 mb-1">Tech Stack:</h4>
                <p className="text-gray-200 font-mono">
                  {selectedProject.tech}
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default ProjectCarousel;
