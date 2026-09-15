"use client";

import { useState } from "react";

import Sidebar from "@/components/std-dashbord/Sidebar/Sidebar";
import DashboardHeader from "@/components/std-dashbord/dashboardHeader/DashboardHeader";

import AttendanceStats from "@/components/std-dashbord/attendance/AttendanceStats/AttendanceStats";
import AttendanceOverview from "@/components/std-dashbord/attendance/AttendanceOverview/AttendanceOverview";
import AttendanceTable from "@/components/std-dashbord/attendance/AttendanceTable/AttendanceTable";

import "../page.css";

export default function AttendancePage() {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  return (
    <div className="dashboardWrapper">
      <Sidebar
        open={sidebarOpen}
        setOpen={setSidebarOpen}
      />

      <main
        className={`dashboardContent ${
          !sidebarOpen ? "fullWidth" : ""
        }`}
      >
        <DashboardHeader />

        <AttendanceStats />

        <AttendanceOverview />

        <AttendanceTable />
      </main>
    </div>
  );
}