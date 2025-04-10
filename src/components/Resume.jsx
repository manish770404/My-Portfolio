import React from "react";
import { Typewriter } from "react-simple-typewriter";  // Import from react-simple-typewriter

const Resume = () => {
  return (
    <section id="resume" className="bg-gray-700 text-white py-16">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-8 text-teal-300">Resume</h2>
        <p className="mb-6 text-gray-200">
          <Typewriter
            words={['Download my resume to explore my technical background, education, and experience.']}
            loop={1}
            cursor
            cursorStyle='_'
            typeSpeed={50}
            deleteSpeed={50}
            delaySpeed={1000}
          />
        </p>
        <a
          href="/Manish_Jaiswal_Resume.pdf"
          download
          className="inline-block border border-blue-500 bg-blue-600 hover:bg-blue-700 text-white font-medium px-6 py-3 rounded-lg transition duration-300 shadow-md"
        >
          📄 Download Resume
        </a>
      </div>
    </section>
  );
};

export default Resume;
