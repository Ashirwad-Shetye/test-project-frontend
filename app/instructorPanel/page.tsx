"use client";

import React, { FC } from "react";
import type { Metadata } from "next";
import NavBar from "@/components/navbar";
import Lectures from "@/components/instructorDashboard/lectures";

export const metadata: Metadata = {
  title: "EdTech | Dashboard",
  description: "Instructor Dashboard",
};

const page: FC = () => {
  return (
    <main>
      <NavBar textButton="Instructor" />
      <div className="mt-8 max-w-[1200px] mx-auto">
        <Lectures />
      </div>
    </main>
  );
};

export default page;
