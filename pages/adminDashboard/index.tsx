import Courses from "@/components/courses";
import NavBar from "@/components/navbar";
import React from "react";

function AdminDashboard() {
  return (
    <div>
      <NavBar />
      <section>
        <div className="mt-5">
          <Courses />
        </div>
      </section>
    </div>
  );
}

export default AdminDashboard;
