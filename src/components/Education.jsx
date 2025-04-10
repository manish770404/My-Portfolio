import React from "react";

const Education = () => {
  return (
    <section id="education" className="py-16 px-6 bg-gray-700 text-white">
      <div className="max-w-3xl mx-auto text-center mb-10">
        <h2 className="text-3xl font-bold text-teal-300">🎓 Education</h2>
      </div>

      <div className="max-w-3xl mx-auto space-y-6">
        <div className="bg-gray-800 p-6 rounded-xl shadow-md text-left">
          <h3 className="text-xl font-semibold text-indigo-400">
            B.Tech in Computer Science & Engineering (AI & ML)
          </h3>
          <p className="text-gray-200">GL Bajaj Institute of Technology & Management, Greater Noida</p>
          <p className="text-gray-400">CGPA: 8.0</p>
        </div>

        <div className="bg-gray-800 p-6 rounded-xl shadow-md text-left">
          <h3 className="text-lg font-medium text-white">Intermediate (Class 12)</h3>
          <p className="text-gray-200">Maharishi Vidya Mandir, Gonda</p>
          <p className="text-gray-400">Percentage: 78%</p>
        </div>

        <div className="bg-gray-800 p-6 rounded-xl shadow-md text-left">
          <h3 className="text-lg font-medium text-white">High School (Class 10)</h3>
          <p className="text-gray-200">Maharishi Vidya Mandir, Gonda</p>
          <p className="text-gray-400">Percentage: 89.3%</p>
        </div>
      </div>
    </section>
  );
};

export default Education;
