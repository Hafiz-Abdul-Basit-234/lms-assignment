"use client";

import { useState } from "react";

import Sidebar from "@/components/std-dashbord/Sidebar/Sidebar";
import DashboardHeader from "@/components/std-dashbord/dashboardHeader/DashboardHeader";

import PaymentStats from "@/components/std-dashbord/payment/PaymentStats/PaymentStats";
import PaymentTable from "@/components/std-dashbord/payment/PaymentTable/PaymentTable";

import "../page.css";

export default function PaymentPage() {
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

        <PaymentStats />

        <PaymentTable />
      </main>
    </div>
  );
}