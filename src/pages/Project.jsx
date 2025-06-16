import React from "react";

const Project = () => {
  return (
    <div
      id="project"
      className="h-screen flex flex-col bg-Primary relative overflow-hidden"
    >
      {/* Background blur circles */}
      <div className="absolute bottom-[80%] right-[10%] w-64 h-64 sm:w-80 sm:h-80 bg-Secondary rounded-full filter blur-3xl opacity-30 animate-float z-0"></div>

      <div className="absolute w-full h-20 flex justify-center items-center">
        <h1 className="text-2xl pt-20 font-semibold underline underline-offset-8">
          My Project
        </h1>
      </div>

      {/* Main content wrapper */}
      <div className="flex-grow flex justify-center items-center px-4 sm:px-8 ">
        <div className="flex flex-col-reverse md:flex-row w-full max-w-7xl justify-center items-center h-full gap-10 md:gap-20 relative z-10">
          <div className="flex gap-16 w-full justify-center">
            <div className="w-1/3 h-64 rounded-xl bg-Secondary flex items-center justify-center font-medium text-xl">project</div>
            <div className="w-1/3 h-64 rounded-xl bg-Secondary flex items-center justify-center font-medium text-xl">project</div>
            <div className="w-1/3 h-64 rounded-xl bg-Secondary flex items-center justify-center font-medium text-xl">project</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
