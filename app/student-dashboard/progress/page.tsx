"use client";

import { useState } from "react";

import Sidebar from "@/components/std-dashbord/Sidebar/Sidebar";
import DashboardHeader from "@/components/std-dashbord/dashboardHeader/DashboardHeader";

import ProgressStats from "@/components/std-dashbord/progress/ProgressStats/ProgressStats";
import ProgressList from "@/components/std-dashbord/progress/ProgressList/ProgressList";

import "../page.css";

export default function ProgressPage() {
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

        <ProgressStats />

        <ProgressList />
      </main>
    </div>
  );
}