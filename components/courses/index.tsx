import React from "react";
import { IoMdAdd } from "react-icons/io";

function Courses() {
  return (
    <div className="h-80 mx-5 relative rounded-2xl bg-white/30 p-5">
      <h1 className="font-roboto text-xl">Courses</h1>
      <div className="absolute bottom-5">
        <button className="flex items-center justify-center space-x-1 bg-white/40 p-1 rounded-md hover:scale-105 duration-150 hover:shadow-lg">
          <IoMdAdd className="text-lg" />
          <h1>New Course</h1>
        </button>
      </div>
    </div>
  );
}

export default Courses;
