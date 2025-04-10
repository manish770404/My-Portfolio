import React from "react";
import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";

const Hero = () => {
  return (
    <section className="min-h-screen flex flex-col md:flex-row items-center justify-center px-6 gap-12 bg-gray-900 text-white">
      
      {/* Photo Section */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
      >
        <img
          src="/myphoto.jpg"
          alt="Manish Jaiswal"
          className="w-40 h-40 md:w-56 md:h-56 rounded-full object-cover border-4 border-indigo-500 shadow-lg"
        />
      </motion.div>

      {/* Text Section */}
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        className="text-center md:text-left space-y-4"
      >
        <h1 className="text-4xl md:text-6xl font-bold text-indigo-400">
          Hi, I’m <span className="text-white">Manish</span>
        </h1>
        <p className="text-lg md:text-2xl text-gray-300">
          <Typewriter
            words={[
              "Frontend Developer",
              "MERN Stack Enthusiast",
              "React & Tailwind Lover",
              "Problem Solver 🚀"
            ]}
            loop
            cursor
            cursorStyle="_"
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1000}
          />
        </p>
      </motion.div>
    </section>
  );
};

export default Hero;
