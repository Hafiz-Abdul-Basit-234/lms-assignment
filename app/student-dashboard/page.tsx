"use client";

import { useState } from "react";

import Sidebar from "@/components/std-dashbord/Sidebar/Sidebar";
import DashboardHeader from "@/components/std-dashbord/dashboardHeader/DashboardHeader";
import DashboardCards from "@/components/std-dashbord/dashboardCards/DashboardCards";
import ScheduleCard from "@/components/std-dashbord/scheduleCard/ScheduleCard";
import ActiveCourse from "@/components/std-dashbord/activeCourse/ActiveCourse";
import QuizCard from "@/components/std-dashbord/quizCard/QuizCard";

import "./page.css";

export default function Page() {
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

        <div className="topGrid">
          <DashboardCards />
          <ScheduleCard />
        </div>

        <div className="middleGrid">
          <ActiveCourse />
          <QuizCard />
        </div>
      </main>
    </div>
  );
}