import React from "react";

const Experience = () => {
  return (
    <section id="experience" className="py-16 px-6 bg-gray-700 text-white">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-teal-300 mb-10">💼 Experience</h2>
        <div className="space-y-6">
          <div className="bg-gray-800 p-6 rounded-xl shadow-md">
            <h3 className="text-xl font-semibold text-indigo-600">Frontend Developer Intern</h3>
            <p className="text-gray-300">Code Clause | July 2023 – August 2023</p>
            <ul className="list-disc list-inside mt-2 text-gray-200">
              <li>Built responsive UI using HTML, CSS, and JavaScript</li>
              <li>Collaborated with designers to implement modern layouts</li>
              <li>Improved UI/UX for a smoother user experience</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
