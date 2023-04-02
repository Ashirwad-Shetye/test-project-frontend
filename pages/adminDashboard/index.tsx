import Courses from "@/components/adminDashboard/courses";
import NavBar from "@/components/navbar";
import React from "react";

function AdminDashboard() {
  return (
    <div>
      <NavBar />
      <section>
        <div className="mt-8">
          <Courses />
        </div>
      </section>
    </div>
  );
}

export default AdminDashboard;
