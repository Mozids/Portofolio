import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import Header from "../components/Header.jsx";
import i from "../assets/abc.png";
import About from "./About.jsx";
import Project from "./Project.jsx";
import Contact from "./Contact.jsx";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <div
        id="home"
        className="min-h-screen flex flex-col bg-Primary relative overflow-hidden"
      >
        <div className="absolute top-[90%] left-[10%] w-48 h-48 sm:w-64 sm:h-64 bg-Secondary rounded-full filter blur-3xl opacity-40 animate-float z-0" />
        <div className="absolute bottom-[70%] right-[10%] w-64 h-64 sm:w-80 sm:h-80 bg-Secondary rounded-full filter blur-3xl opacity-30 animate-float z-0" />

        <div className="fixed top-0 left-0 w-full z-50">
          <Header />
        </div>

        <div className="flex-grow flex justify-center items-center px-4 sm:px-8 pt-32 pb-10">
          <div className="flex flex-col-reverse md:flex-row w-full max-w-7xl justify-between items-center gap-10 md:gap-20 relative z-10">
            <div className="md:w-1/2 flex flex-col justify-center items-start text-center md:text-left">
              <h1 className="text-3xl md:text-4xl sm:text-5xl font-bold">
                <p className="text-lg">Hello there!!</p>
                I'M{" "}
                <span className="text-Secondary text-4xl md:text-5xl sm:text-6xl">
                  Sultan
                </span>{" "}
                Sulaiman
              </h1>
              <p className="mt-6 text-lg italic max-w-md">
                Teknologi berkembang berkat keberanian mereka yang berani
                bermimpi besar dan mewujudkan ide-ide yang belum pernah ada.
              </p>

              <div className="flex mt-9 flex-col sm:flex-row items-center gap-6">
                <button
                  onClick={(e) => {
                    e.preventDefault();
                    const aboutSection = document.getElementById("contact");
                    if (aboutSection) {
                      aboutSection.scrollIntoView({ behavior: "smooth" });
                    }
                  }}
                  className="py-3 px-6 bg-Secondary rounded-full hover:bg-Secondary/80 hover:shadow-lg transition duration-300 font-semibold text-sm"
                >
                  Contact Me
                </button>

                <div className="flex items-center gap-4">
                  <Link
                    to="https://github.com/Mozids"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-9 h-9 bg-Secondary hover:text-Secondary hover:bg-black flex items-center justify-center rounded-full transition"
                  >
                    <FaGithub className="w-5 h-5" />
                  </Link>
                  <Link
                    to="#"
                    className="w-9 h-9 bg-Secondary hover:text-Secondary hover:bg-black flex items-center justify-center rounded-full transition"
                  >
                    <FaLinkedin className="w-5 h-5" />
                  </Link>
                </div>
              </div>
            </div>

            <div className="w-full md:w-1/2 flex justify-center lg:justify-end items-center">
              <div className="w-72 h-72 sm:w-80 sm:h-80 md:w-96 md:h-96 lg:w-[420px] lg:h-[420px] xl:w-[500px] xl:h-[500px] rounded-full bg-Secondary drop-shadow-xl overflow-hidden">
                <img
                  src={i}
                  alt="Sultan"
                  className="w-full h-full object-cover rounded-full"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <About />
      <Project />
      <Contact />

      <footer className="w-full bg-Tertiary py-6 text-center text-white text-sm">
        <p>
          &copy; {new Date().getFullYear()} Sultan Sulaiman. All rights
          reserved.
        </p>
      </footer>
    </>
  );
};

export default Home;
