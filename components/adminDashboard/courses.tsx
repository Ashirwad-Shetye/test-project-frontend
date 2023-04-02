import React from "react";
import CourseCard from "./courseCard";
import { IoMdAdd } from "react-icons/io";

function Courses() {
  return (
    <div className="h-fit mx-5 max-w-8xl relative rounded-2xl md:px-5">
      <h1 className="font-roboto text-2xl mb-2 mx-2">Courses</h1>
      <div className="h-72 relative rounded-2xl bg-white/10 p-5">
        <div className="flex rounded-lg mt-2 space-x-5 overflow-x-scroll scrollhide">
          <CourseCard />
          <CourseCard />
          <CourseCard />
          <CourseCard />
          <CourseCard />
          <CourseCard />
          <CourseCard />
        </div>
        <div className="absolute bottom-5">
          <button className="flex items-center justify-center space-x-1 bg-accentBlue p-1 rounded-md hover:scale-105 duration-150 hover:shadow-lg">
            <IoMdAdd className="text-lg" />
            <h1>New Course</h1>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Courses;
