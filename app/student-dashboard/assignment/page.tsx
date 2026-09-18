"use client";

import { useState } from "react";

import Sidebar from "@/components/std-dashbord/Sidebar/Sidebar";
import DashboardHeader from "@/components/std-dashbord/dashboardHeader/DashboardHeader";

import AssignmentStats from "@/components/std-dashbord/assignment/AssignmentStats/AssignmentStats";
import AssignmentTable from "@/components/std-dashbord/assignment/AssignmentTable/AssignmentTable";

import "../page.css";

export default function AssignmentPage() {
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

        <AssignmentStats />

        <AssignmentTable />
      </main>
    </div>
  );
}