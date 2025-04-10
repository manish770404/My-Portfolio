import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-400 py-6 text-center">
      <div className="mb-3">
        <a
          href="https://github.com/manish770404"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block mx-2 text-xl hover:text-teal-400 transition"
        >
          <FaGithub />
        </a>
        <a
          href="https://linkedin.com/in/manish-jaiswal-66742b251"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block mx-2 text-xl hover:text-teal-400 transition"
        >
          <FaLinkedin />
        </a>
      </div>
      <p>© {new Date().getFullYear()} Manish Jaiswal. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
