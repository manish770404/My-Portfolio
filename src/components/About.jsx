import React from 'react';
import { Typewriter } from 'react-simple-typewriter';

const About = () => {
  return (
    <section id="about" className="bg-gray-800 text-white py-16 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-6 text-teal-400">About Me</h2>
        <p className="text-lg text-gray-300 leading-relaxed">
          <Typewriter
            words={[
              "I'm Manish, a passionate Frontend Developer with hands-on experience in building responsive and interactive web apps using HTML, CSS, JavaScript, and modern frameworks like React. I'm constantly learning and enjoy creating elegant, user-friendly interfaces that leave a lasting impact."
            ]}
            typeSpeed={40}
            deleteSpeed={0}
            delaySpeed={100000} // a big number so it never deletes
            loop={1}
            cursor
            cursorStyle="_"
          />
        </p>
      </div>
    </section>
  );
};

export default About;
