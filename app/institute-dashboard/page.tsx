"use client";

import { useState } from "react";

import SidebarInstitute from "@/components/institute-dashboard/sidebar/SidebarInstitute";
import DashboardHeader from "@/components/institute-dashboard/dashboardHeader/DashboardHeader";
import DashboardCards from "@/components/institute-dashboard/dashboardCards/DashboardCards";
import StudentsOverview from "@/components/institute-dashboard/studentsOverview/StudentsOverview";
import CampusOverview from "@/components/institute-dashboard/campusOverview/CampusOverview";
import TrainersTable from "@/components/institute-dashboard/trainersTable/TrainersTable";

import "./page.css";

export default function Page() {
  const [sidebarOpen, setSidebarOpen] =
    useState(true);

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

        <DashboardHeader />

        <DashboardCards />

        <div className="dashboardGrid">
          <StudentsOverview />
          <CampusOverview />
        </div>

        <TrainersTable />

      </main>

    </div>
  );
}