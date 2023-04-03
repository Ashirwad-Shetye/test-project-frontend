"use client";
import React from "react";
import NavBar from "@/components/navbar";
import { Button } from "@/components/ui/Button";

function AddLecture() {
  return (
    <main className="min-h-fit h-screen font-roboto">
      <NavBar textButton="Admin" />
      <div className="flex flex-col items-center mt-12 justify-center max-w-[20rem] mx-auto px-5">
        <h1 className="my-5 text-xl font-bold">Add New Lecture</h1>
        <form action="Submit" className="flex flex-col space-y-6 w-full">
          <div className="flex flex-col w-full space-y-3">
            <label>Lecture Title</label>
            <input
              type="text"
              maxLength={80}
              placeholder="Enter course title here..."
              className="bg-white/10 p-2 rounded-md w-full"
            />
          </div>
          <div className="flex flex-col w-full space-y-3">
            <label>Select Course</label>
            <select
              name="Select Level..."
              // value={}
              className="bg-white/10 p-2 rounded-md"
            >
              {/* Populate with existing course titles */}
              <option value="MERN Stack" className="bg-black/90">
                MERN Stack
              </option>
              <option value="Dev-Ops" className="bg-black/90">
                Dev-Ops
              </option>
              <option value="TypeScript" className="bg-black/90">
                TypeScript
              </option>
              <option value="C++" className="bg-black/90">
                C++
              </option>
              <option value="Java" className="bg-black/90">
                Java
              </option>
              <option
                value="Algorithms & Data Structures"
                className="bg-black/90 truncate"
              >
                Algorithms & Data Structures
              </option>
            </select>
          </div>
          <div className="flex flex-col w-full space-y-3">
            <label>Lecture Description</label>
            <textarea
              maxLength={80}
              placeholder="Enter course title here..."
              className="bg-white/10 p-2 rounded-md w-full"
            />
          </div>
          <Button className="w-40 mx-auto">Submit</Button>
        </form>
      </div>
    </main>
  );
}

export default AddLecture;
