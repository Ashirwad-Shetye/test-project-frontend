"use client";

import Courses from "@/components/adminDashboard/courses";
import React, { FC } from "react";
import type { Metadata } from "next";
import NavBar from "@/components/navbar";

export const metadata: Metadata = {
  title: "EdTech | Dashboard",
  description: "FAdmin Dashboard",
};

const page: FC = () => {
  return (
    <main>
      <NavBar />
      <div className="mt-8">
        <Courses />
      </div>
    </main>
  );
};

export default page;
