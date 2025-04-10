import React from "react";
import { motion } from "framer-motion";
import projectsData from "../data/projects.json";

const Projects = () => {
  return (
    <section id="projects" className="bg-gray-900 text-white py-16">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-10 text-center text-teal-400">Projects</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {projectsData.map((project, index) => (
            <motion.div
              key={index}
              className="bg-gray-800 rounded-xl shadow-lg p-6 hover:shadow-xl transition"
              initial={{ opacity: 0, y: 50 }} // Initial state: invisible and moved down
              whileInView={{ opacity: 1, y: 0 }} // When in view, it becomes visible and moves to original position
              viewport={{ once: true, amount: 0.2 }} // Triggers animation when 20% of the element is in view
              transition={{ duration: 0.5, delay: index * 0.2 }} // Duration of animation and delay between cards
            >
              <h3 className="text-xl font-semibold text-white mb-2">{project.name}</h3>
              <p className="text-gray-300 mb-3">{project.description}</p>
              <p className="text-sm text-teal-300 mb-4">
                Tech Stack: {project.technologies.join(", ")}
              </p>
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-teal-400 hover:underline text-sm"
              >
                🔗 View on GitHub
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
