"use client";
import React from "react";
import NavBar from "@/components/navbar";
import { Button } from "@/components/ui/Button";

function AddCourse() {
  return (
    <main className="min-h-fit h-screen font-roboto">
      <NavBar textButton="Admin" />
      <div className="flex flex-col items-center mt-12 justify-center max-w-[20rem] mx-auto px-5">
        <h1 className="my-5 text-xl font-bold">Add New Course</h1>
        <form action="Submit" className="flex flex-col space-y-6 w-full">
          <div className="flex flex-col w-full space-y-3">
            <label>Course Title</label>
            <input
              type="text"
              maxLength={80}
              placeholder="Enter course title here..."
              className="bg-white/10 p-2 rounded-md w-full"
            />
          </div>
          <div className="flex flex-col w-full space-y-3">
            <label>Course Level</label>
            <select
              name="Select Level..."
              // value={}
              className="bg-white/10 p-2 rounded-md"
            >
              <option value="Beginner" className="bg-black/90">
                Beginner
              </option>
              <option value="Intermediate" className="bg-black/90">
                Intermediate
              </option>
              <option value="Advanced" className="bg-black/90">
                Advanced
              </option>
              <option value="Expert" className="bg-black/90">
                Expert
              </option>
            </select>
          </div>
          <div className="flex flex-col w-full space-y-3">
            <label>Course Description</label>
            <textarea
              maxLength={80}
              placeholder="Enter course title here..."
              className="bg-white/10 p-2 rounded-md w-full"
            />
          </div>
          <div className="flex flex-col w-full space-y-3">
            <label>Course Description</label>
            <input type="file" />
          </div>
          <Button className="w-40 mx-auto">Submit</Button>
        </form>
      </div>
    </main>
  );
}

export default AddCourse;
