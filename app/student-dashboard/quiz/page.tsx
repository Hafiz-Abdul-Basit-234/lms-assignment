"use client";

import { useState } from "react";

import Sidebar from "@/components/std-dashbord/Sidebar/Sidebar";
import DashboardHeader from "@/components/std-dashbord/dashboardHeader/DashboardHeader";

import QuizInfo from "@/components/std-dashbord/quiz/QuizInfo/QuizInfo";
import QuizTable from "@/components/std-dashbord/quiz/QuizTable/QuizTable";

import "../page.css";

export default function QuizPage() {
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

        <QuizInfo />

        <QuizTable />
      </main>
    </div>
  );
}