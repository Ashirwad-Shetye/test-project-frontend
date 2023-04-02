"use client";

import Courses from "@/components/adminDashboard/courses";
import React from "react";

function AdminPanel() {
  return (
    <>
      <div className="mt-8">
        <Courses />
      </div>
    </>
  );
}

export default AdminPanel;
