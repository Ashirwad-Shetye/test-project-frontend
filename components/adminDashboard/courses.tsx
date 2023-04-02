"use client";
import Link from "next/link";

import React from "react";
import CourseCard from "./courseCard";
import { IoMdAdd } from "react-icons/io";

function Courses() {
  const handleAddCourse = () => {};

  return (
    <div className="mx-5 md:px-5 space-y-5">
      <div className="flex items-center justify-between h-12">
        <h1 className="font-roboto text-2xl mb-2 mx-2">Courses</h1>
        <Link href={"/addcourse"}>
          <button
            className="flex px-2 items-center justify-center space-x-1 bg-accentBlue py-2 rounded-md hover:scale-105 duration-150 hover:shadow-lg"
            onClick={handleAddCourse}
          >
            <IoMdAdd className="text-lg" />
            <h1>New Course</h1>
          </button>
        </Link>
      </div>
      <div className="space-y-5 pb-10">
        <CourseCard />
        <CourseCard />
        <CourseCard />
        <CourseCard />
        <CourseCard />
        <CourseCard />
        <CourseCard />
      </div>
    </div>
  );
}

export default Courses;
