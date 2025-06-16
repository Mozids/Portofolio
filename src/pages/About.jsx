import React from "react";
import i from "../assets/abc.png"; // Import your image here
import {
  FaHtml5,
  FaCss3Alt,
  FaReact,
  FaPhp,
  FaLaravel,
} from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";

const About = () => {
  return (
    <div
      id="about"
      className="min-h-screen flex flex-col bg-Tertiary relative overflow-hidden"
    >
      {/* dots */}
      <div className="absolute top-[-10%] left-[10%] w-48 h-48 sm:w-64 sm:h-64 bg-Secondary rounded-full filter blur-3xl opacity-40 animate-float z-0"></div>
      <div className="absolute bottom-[-20%] right-[10%] w-64 h-64 sm:w-80 sm:h-80 bg-Secondary rounded-full filter blur-3xl opacity-30 animate-float z-0"></div>

      {/* Title */}
      <div className="pt-24 text-center relative z-10">
        <h1 className="text-2xl font-semibold underline underline-offset-8">About Me</h1>
      </div>

      {/* Content */}
      <div className="flex-grow flex justify-center items-center px-4 sm:px-8 py-16 mt-15 ">
        <div className="flex flex-col md:flex-row w-full max-w-7xl items-center md:items-start gap-10 relative z-10">
          {/* Image */}
          <div className="w-[60%] sm:w-[40%] md:w-[30%] -mt-8 md:-mt-20">
            <div className="bg-Secondary rounded-t-full drop-shadow-lg">
              <img src={i} alt="profile" className="w-full object-cover" />
            </div>
          </div>

          {/* Text Content */}
          <div className="w-full md:w-[65%] flex flex-col items-center md:items-start text-center md:text-left">
            <div className="">
              <h1 className="text-3xl font-bold">I'M Sultan Sulaiman</h1>
              <p className="text-2xl font-medium mb-6 mt-1">Front-End Developer</p>
              <p className="text-base sm:text-lg">
                Saya adalah siswa yang memiliki motivasi kuat untuk terus berkembang, dan selalu bertanggung jawab dalam setiap tugas. Saya fokus dalam bekerja dan mampu menyelesaikan pekerjaan dengan baik, baik secara mandiri maupun dalam tim. Saya menghargai setiap kesempatan untuk belajar dan selalu berusaha memberikan hasil terbaik. Melalui PKL ini, saya berharap dapat mengembangkan keterampilan yang telah saya pelajari di sekolah serta mendapatkan pengalaman langsung yang dapat memperkaya wawasan saya di dunia kerja.
              </p>
            </div>

            {/* Tech Stack */}
            <div className="mt-6 w-full overflow-x-auto">
              <div className="flex flex-nowrap gap-4 pb-2">
                {/* HTML */}
                <div className="flex items-center gap-2 bg-orange-500 text-white px-4 py-2 rounded-lg shadow-md hover:scale-105 transition duration-300 flex-shrink-0">
                  <FaHtml5 className="w-5 h-5" />
                  <span className="text-sm font-semibold">HTML</span>
                </div>

                {/* CSS */}
                <div className="flex items-center gap-2 bg-blue-500 text-white px-4 py-2 rounded-lg shadow-md hover:scale-105 transition duration-300 flex-shrink-0">
                  <FaCss3Alt className="w-5 h-5" />
                  <span className="text-sm font-semibold">CSS</span>
                </div>

                {/* React */}
                <div className="flex items-center gap-2 bg-cyan-500 text-white px-4 py-2 rounded-lg shadow-md hover:scale-105 transition duration-300 flex-shrink-0">
                  <FaReact className="w-5 h-5 animate-spin-slow" />
                  <span className="text-sm font-semibold">React</span>
                </div>

                {/* Tailwind */}
                <div className="flex items-center gap-2 bg-sky-400 text-white px-4 py-2 rounded-lg shadow-md hover:scale-105 transition duration-300 flex-shrink-0">
                  <SiTailwindcss className="w-5 h-5" />
                  <span className="text-sm font-semibold">Tailwind</span>
                </div>

                {/* PHP */}
                <div className="flex items-center gap-2 bg-indigo-600 text-white px-4 py-2 rounded-lg shadow-md hover:scale-105 transition duration-300 flex-shrink-0">
                  <FaPhp className="w-5 h-5" />
                  <span className="text-sm font-semibold">PHP</span>
                </div>

                {/* Laravel */}
                <div className="flex items-center gap-2 bg-red-600 text-white px-4 py-2 rounded-lg shadow-md hover:scale-105 transition duration-300 flex-shrink-0">
                  <FaLaravel className="w-5 h-5" />
                  <span className="text-sm font-semibold">Laravel</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
