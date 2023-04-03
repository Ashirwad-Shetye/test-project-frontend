"use client";

import Courses from "@/components/adminDashboard/courses";
import React, { FC } from "react";
import type { Metadata } from "next";
import NavBar from "@/components/navbar";
import Instructors from "@/components/adminDashboard/instructors";

export const metadata: Metadata = {
  title: "EdTech | Dashboard",
  description: "FAdmin Dashboard",
};

const page: FC = () => {
  return (
    <main>
      <NavBar textButton="Admin" />
      <div className="mt-8 max-w-[1200px] mx-auto">
        <Courses />
        <Instructors />
      </div>
    </main>
  );
};

export default page;
