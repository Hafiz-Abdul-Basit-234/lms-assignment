"use client";

import { useState } from "react";

import SidebarTeacher from "@/components/teacher-dashbord/sidebarteacher/Sidebarteacher";

import "./page.css";

export default function Page() {
  const [sidebarOpen, setSidebarOpen] = useState(true);

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

        {/* Header */}

        <div className="teacherHeader">
          <h1>Teacher Dashboard</h1>
          <p>Welcome Back Teacher 👋</p>
        </div>

        {/* Stats Cards */}

        <div className="teacherCards">

          <div className="teacherCard">
            <h3>Total Students</h3>
            <h2>1,500+</h2>
          </div>

          <div className="teacherCard">
            <h3>Assignments</h3>
            <h2>245</h2>
          </div>

          <div className="teacherCard">
            <h3>Attendance</h3>
            <h2>92%</h2>
          </div>

          <div className="teacherCard">
            <h3>Courses</h3>
            <h2>12</h2>
          </div>

        </div>

        {/* Middle Section */}

        <div className="dashboardGrid">

          <div className="assignmentCard">

            <h2>Recent Assignments</h2>

            <div className="assignmentItem">
              <h4>React Dashboard UI</h4>
              <span>Due: 20 Sep 2026</span>
            </div>

            <div className="assignmentItem">
              <h4>JavaScript Quiz</h4>
              <span>Due: 18 Sep 2026</span>
            </div>

            <div className="assignmentItem">
              <h4>LMS Project</h4>
              <span>Due: 15 Sep 2026</span>
            </div>

            <div className="assignmentItem">
              <h4>Next JS Authentication</h4>
              <span>Due: 12 Sep 2026</span>
            </div>

          </div>

          <div className="attendanceCard">

            <h2>Attendance Summary</h2>

            <div className="attendanceBox">
              <h1>92%</h1>
              <p>Overall Attendance</p>
            </div>

            <div className="attendanceStats">

              <div>
                <strong>Present</strong>
                <span>1380</span>
              </div>

              <div>
                <strong>Absent</strong>
                <span>120</span>
              </div>

            </div>

          </div>

        </div>

        {/* Students */}

        <div className="studentsTable">

          <h2>Recent Students</h2>

          <div className="studentCards">

          

            <div className="studentCard">
              <h4>Ahmed Raza</h4>
              <p>Next JS</p>
              <span className="activeStatus">Active</span>
            </div>

            <div className="studentCard">
              <h4>Fatima Noor</h4>
              <p>JavaScript</p>
              <span className="activeStatus">Active</span>
            </div>

            <div className="studentCard">
              <h4>Usman Tariq</h4>
              <p>React JS</p>
              <span className="activeStatus">Active</span>
            </div>

            <div className="studentCard">
              <h4>Ayesha Malik</h4>
              <p>Next JS</p>
              <span className="activeStatus">Active</span>
            </div>

            <div className="studentCard">
              <h4>Hamza Ali</h4>
              <p>JavaScript</p>
              <span className="activeStatus">Active</span>
            </div>

            <div className="studentCard">
              <h4>Zain Ahmed</h4>
              <p>React JS</p>
              <span className="activeStatus">Active</span>
            </div>

          </div>

        </div>

      </main>

    </div>
  );
}