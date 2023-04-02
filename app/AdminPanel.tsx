import Courses from "@/components/adminDashboard/courses";
import NavBar from "@/components/navbar";
import React from "react";

function AdminPanel() {
  return (
    <>
      <NavBar />
      <section>
        <div className="mt-8">
          <Courses />
        </div>
      </section>
    </>
  );
}

export default AdminPanel;
