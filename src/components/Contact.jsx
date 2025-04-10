import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_qa29s54',
        'template_crkzea8',
        form.current,
        '2LuBPII7T9t8ziJTw'
      )
      .then(
        (result) => {
          console.log(result.text);
          alert('Message sent successfully!');
          form.current.reset();
        },
        (error) => {
          console.log(error.text);
          alert('Oops! Something went wrong: ' + error.text);
        }
      );
  };

  return (
    <section id="contact" className="py-16 px-6 bg-gray-700 text-white">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-teal-300 mb-6">Contact Me</h2>
        <p className="mb-8 text-gray-200">
          Feel free to reach out to me. I'm happy to discuss any opportunities or questions.
        </p>
        <form
          ref={form}
          onSubmit={sendEmail}
          className="bg-gray-800 p-8 rounded-xl shadow-md"
        >
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            required
            className="w-full p-3 mb-4 rounded bg-gray-700 text-white outline-none"
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            required
            className="w-full p-3 mb-4 rounded bg-gray-700 text-white outline-none"
          />
          <textarea
            name="message"
            placeholder="Your Message"
            required
            rows="4"
            className="w-full p-3 mb-4 rounded bg-gray-700 text-white outline-none"
          ></textarea>
          <button
            type="submit"
            className="bg-teal-500 hover:bg-teal-600 transition w-full py-3 rounded text-white font-semibold"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
