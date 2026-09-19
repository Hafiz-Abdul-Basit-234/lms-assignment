"use client";

import "./Sidebarteacher.css";
import Image from "next/image";
import Link from "next/link";

import logo from "@/public/assets/logo1.png";

import {
  FiGrid,
  FiFileText,
  FiCalendar,
  FiMenu,
} from "react-icons/fi";

interface SidebarProps {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function SidebarTeacher({
  open,
  setOpen,
}: SidebarProps) {
  return (
    <>
      <button
        className={`hamburgerBtn ${
          !open ? "showBtn" : ""
        }`}
        onClick={() => setOpen(!open)}
      >
        <FiMenu />
      </button>

      <aside
        className={`sidebar ${!open ? "hide" : ""}`}
      >
        <div className="sidebarTop">
          <Image
            src={logo}
            alt="logo"
            className="sidebarLogo"
          />
        </div>

        <nav className="sidebarMenu">

          <Link
            href="/teacher-dashboard"
            className="menuItem active"
          >
            <FiGrid />
            <span>Dashboard</span>
          </Link>

          <Link
            href="/teacher-dashboard/assignment"
            className="menuItem"
          >
            <FiFileText />
            <span>Assignment</span>
          </Link>

          <Link
            href="/teacher-dashboard/attendance"
            className="menuItem"
          >
            <FiCalendar />
            <span>Attendance</span>
          </Link>

        </nav>

        <div className="sidebarBottom">
          <div className="userInfo">

            <div className="avatar">
              HB
            </div>

            <div>
              <h4>Hafiz Abdul Basit</h4>
              <p>Teacher</p>
            </div>

          </div>
        </div>
      </aside>
    </>
  );
}