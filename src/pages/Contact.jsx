import React from "react";
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa"; // Importing icons

const Contact = () => {
  return (
    <div
      id="contact"
      className="relative flex flex-col items-center justify-center overflow-hidden bg-Primary px-4 py-16 sm:px-8" // Removed h-screen, added py-16 for vertical padding
    >

      {/* Main content wrapper */}
      <div className="relative z-10 flex w-full max-w-xl flex-col items-center justify-center gap-12 rounded-xl bg-white/10 p-8 shadow-xl backdrop-blur-md md:p-12">
        <h1 className="text-center text-4xl font-bold text-white underline underline-offset-8">
          Contact Me
        </h1>
          {/* Contact Form */}
          <div className="w-full">
            <form className="flex flex-col gap-6">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full rounded-md border border-gray-300 bg-white/20 p-3 text-white placeholder-gray-300 focus:border-Secondary focus:outline-none"
              />
              <input
                type="email"
                placeholder="Your Email"
                className="w-full rounded-md border border-gray-300 bg-white/20 p-3 text-white placeholder-gray-300 focus:border-Secondary focus:outline-none"
              />
              <input
                type="text"
                placeholder="Subject"
                className="w-full rounded-md border border-gray-300 bg-white/20 p-3 text-white placeholder-gray-300 focus:border-Secondary focus:outline-none"
              />
              <textarea
                placeholder="Your Message"
                rows="5"
                className="w-full rounded-md border border-gray-300 bg-white/20 p-3 text-white placeholder-gray-300 focus:border-Secondary focus:outline-none"
              ></textarea>
              <button
                type="submit"
                className="rounded-md bg-Secondary px-6 py-3 text-lg font-semibold text-white transition duration-300 hover:bg-opacity-80"
              >
                Send Message
              </button>
            </form>
          </div>
      </div>
    </div>
  );
};

export default Contact;