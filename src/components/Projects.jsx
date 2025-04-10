import React from "react";
import projectsData from "../Data/Projects.json"; // Make sure the path is correct

const Projects = () => {
  return (
    <section id="projects" className="bg-gray-800 text-white py-16">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">Projects</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projectsData.map((project, index) => (
            <div
              key={index}
              className="bg-gray-700 hover:bg-gray-600 transition duration-300 rounded-xl p-6 shadow-lg"
            >
              <h3 className="text-2xl font-semibold text-teal-400 mb-2">{project.name}</h3>
              <p className="text-gray-300 mb-4">{project.description}</p>
              
              <div className="flex flex-wrap gap-2 mb-4">
                {project.technologies.map((tech, i) => (
                  <span
                    key={i}
                    className="bg-teal-600 text-white px-3 py-1 text-sm rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-teal-400 hover:underline"
              >
                View on GitHub
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
