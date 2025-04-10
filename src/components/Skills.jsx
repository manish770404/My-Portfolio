import React from "react";
import skillsData from "../data/skills.json";

const Skills = () => {
  return (
    <section id="skills" className="bg-gray-800 text-white py-16">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">Skills</h2>
        {skillsData.map((category, index) => (
          <div key={index} className="mb-6">
            <h3 className="text-xl font-semibold mb-3 text-teal-400">{category.category}</h3>
            <div className="flex flex-wrap gap-4">
              {category.items.map((skill, idx) => (
                <div
                  key={idx}
                  className="bg-gray-700 hover:bg-gray-600 transition rounded-lg px-4 py-2 shadow text-sm"
                >
                  <span className="mr-2">{skill.icon}</span>
                  {skill.name}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
