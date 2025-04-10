import React from "react";

const Certifications = () => {
  return (
    <section id="certifications" className="py-16 px-6 bg-gray-900 text-white">
      <h2 className="text-3xl font-bold text-center text-teal-300 mb-10">
        📜 Certifications
      </h2>
      <div className="max-w-3xl mx-auto space-y-6">
        {[
          {
            title: "SQL (HackerRank)",
            desc: "Certification in intermediate SQL concepts",
            link: "https://github.com/manish770404/Certification/blob/main/certificates/sql_intermediate%20certificate.pdf",
          },
          {
            title: "Group Discussion (TCS iON)",
            desc: "Professional development and communication certification",
            link: "https://github.com/manish770404/Certification/blob/main/certificates/tcs%20ion%20group%20discussion.pdf",
          },
          {
            title: "Python (HackerRank)",
            desc: "Basic Python programming concepts",
            link: "https://github.com/manish770404/Certification/blob/main/certificates/python_basic%20certificate.pdf",
          },
          {
            title: "Cloud (AWS Academy)",
            desc: "AICTE AWS Internship Certification",
            link: "https://github.com/manish770404/Certification/blob/main/certificates/aicte%20aws%20internship%20certificate.pdf",
          },
        ].map((cert, idx) => (
          <div
            key={idx}
            className="bg-gray-800 hover:bg-gray-700 p-6 rounded-xl shadow-md transition-all duration-300"
          >
            <h3 className="text-lg font-semibold text-indigo-400">
              {cert.title}
            </h3>
            <p className="text-gray-300">{cert.desc}</p>
            <a
              href={cert.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:underline mt-2 inline-block"
            >
              📄 View Certificate
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Certifications;
