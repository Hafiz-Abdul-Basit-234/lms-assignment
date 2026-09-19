"use client";

import { useState } from "react";

import SidebarTeacher from "@/components/teacher-dashbord/sidebarteacher/Sidebarteacher";

import AttendanceStats from "@/components/teacher-dashbord/attendance/AttendanceStats/AttendanceStats";

import AttendanceTable from "@/components/teacher-dashbord/attendance/AttendanceTable/AttendanceTable";

import './page.css'
export default function Page() {

  const [sidebarOpen,setSidebarOpen] =
    useState(true);

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

    
        <AttendanceStats />

        <AttendanceTable />

      </main>

    </div>
  );
}