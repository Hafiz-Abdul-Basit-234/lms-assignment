"use client";

import { useState } from "react";

import SidebarInstitute from "@/components/institute-dashboard/sidebar/SidebarInstitute";

import TrainersStats from "@/components/institute-dashboard/trainers/TrainersStats/TrainersStats";
import TrainersTable from "@/components/institute-dashboard/trainers/TrainersTable/TrainersTable";

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

        <div className="pageHeader">
          <h1>Trainers Management</h1>
          <p>
            Manage all trainers of
            institute
          </p>
        </div>

        <TrainersStats />

        <TrainersTable />

      </main>

    </div>
  );
}