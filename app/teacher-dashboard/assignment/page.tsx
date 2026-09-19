"use client";
import './page.css'
import { useState } from "react";

import SidebarTeacher from "@/components/teacher-dashbord/sidebarteacher/Sidebarteacher";

import AssignmentStats from "@/components/teacher-dashbord/assignment/AssignmentStats/AssignmentStats";

import AssignmentTable from "@/components/teacher-dashbord/assignment/AssignmentTable/AssignmentTable";


export default function AssignmentPage() {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  return (
    <div className="dashboardWrapper">

      <SidebarTeacher
        open={sidebarOpen}
        setOpen={setSidebarOpen}
      />

      <main
        className={`dashboardContent ${
          !sidebarOpen ? "fullWidth" : ""
        }`}
      >

    

        {/* Stats Cards */}

        <AssignmentStats />

        {/* Assignment Table */}

        <AssignmentTable />

      </main>

    </div>
  );
}