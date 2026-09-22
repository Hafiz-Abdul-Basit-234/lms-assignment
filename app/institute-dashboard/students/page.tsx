"use client";

import { useState } from "react";

import SidebarInstitute from "@/components/institute-dashboard/sidebar/SidebarInstitute";

import StudentsStats from "@/components/institute-dashboard/students/StudentsStats/StudentsStats";
import StudentsTable from "@/components/institute-dashboard/students/StudentsTable/StudentsTable";

import "./page.css";

export default function Page() {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  return (
    <div className="dashboardWrapper">

      <SidebarInstitute
        open={sidebarOpen}
        setOpen={setSidebarOpen}
      />

      <main
        className={`dashboardContent ${
          !sidebarOpen ? "fullWidth" : ""
        }`}
      >

        <div className="pageHeader">
          <h1>Students Management</h1>
          <p>Manage all institute students</p>
        </div>

        <StudentsStats />

        <StudentsTable />

      </main>

    </div>
  );
}