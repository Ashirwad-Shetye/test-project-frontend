"use client";
import Link from "next/link";

import React from "react";
import CourseCard from "./courseCard";
import { IoMdAdd } from "react-icons/io";
import { Button } from "../ui/Button";

function Courses() {
  const handleAddCourse = () => {};

  return (
    <div className="mx-5 md:px-5 space-y-5">
      <div className="flex items-center justify-between h-12">
        <h1 className="font-roboto text-2xl mb-2 mx-2">Courses</h1>
        <Link href={"/addCourse"}>
          <Button size="lg" variant="default">
            <IoMdAdd className="text-lg" />
            <h1 className="">New Course</h1>
          </Button>
        </Link>
      </div>
      <div className="space-x-5 flex scrollhide overflow-x-scroll pb-10">
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
