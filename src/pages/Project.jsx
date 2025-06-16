import React from "react";

const Project = () => {
  return (
    <div
      id="project"
      className="min-h-screen flex flex-col bg-Primary relative overflow-hidden"
    >
      <div className="absolute top-[10%] right-[10%] w-64 h-64 sm:w-80 sm:h-80 bg-Secondary rounded-full filter blur-3xl opacity-30 animate-float z-0" />

      <div className="w-full pt-24 pb-10 flex justify-center items-center relative z-10">
        <h1 className="text-2xl sm:text-2xl font-semibold underline underline-offset-8 text-center">
          My Project
        </h1>
      </div>

      <div className="flex-grow flex justify-center items-center px-4 sm:px-8 pb-16">
        <div className="w-full max-w-7xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 relative z-10">
          <div className="h-64 rounded-xl bg-Secondary flex items-center justify-center font-medium text-xl hover:scale-105 transition">
            Project 1
          </div>
          <div className="h-64 rounded-xl bg-Secondary flex items-center justify-center font-medium text-xl hover:scale-105 transition">
            Project 2
          </div>
          <div className="h-64 rounded-xl bg-Secondary flex items-center justify-center font-medium text-xl hover:scale-105 transition">
            Project 3
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
