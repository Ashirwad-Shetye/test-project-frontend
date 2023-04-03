"use client";
import React from "react";
import NavBar from "@/components/navbar";
import { Button } from "@/components/ui/Button";

function AddCourse() {
  return (
    <main className="min-h-fit h-screen">
      <NavBar textButton="Admin" />
      <div className="flex items-center mt-12 justify-center mx-5 max-w-[20rem] border md:mx-auto">
        <form action="Submit" className="flex flex-col space-y-2">
          <label>Course Title</label>
          <input
            type="text"
            maxLength={80}
            placeholder="Enter course title here..."
            className="bg-white/10 p-2 rounded-md w-full"
          />
          <label>Course Title</label>
          <input
            type="text"
            maxLength={80}
            placeholder="Enter course title here..."
            className="bg-white/10 p-2 rounded-md w-full"
          />
          <label>Course Title</label>
          <input
            type="text"
            maxLength={80}
            placeholder="Enter course title here..."
            className="bg-white/10 p-2 rounded-md w-full"
          />
          <Button className="w-40 mx-auto">Submit</Button>
        </form>
      </div>
    </main>
  );
}

export default AddCourse;
