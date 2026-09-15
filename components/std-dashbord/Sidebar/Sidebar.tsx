"use client";

import "./Sidebar.css";
import Image from "next/image";
import Link from "next/link";

import logo from "@/public/assets/logo1.png";

import {
  FiGrid,
  FiBook,
  FiCalendar,
  FiCreditCard,
  FiFileText,
  FiEdit3,
  FiMenu,
} from "react-icons/fi";

interface SidebarProps {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function Sidebar({
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
          <Link href="/student-dashboard" className="menuItem">
            <FiGrid />
            <span>Dashboard</span>
          </Link>

          <Link href="/student-dashboard/progress" className="menuItem">
            <FiBook />
            <span>Progress</span>
          </Link>

          <Link href="#" className="menuItem">
            <FiCalendar />
            <span>Attendance</span>
          </Link>

          <Link href="#" className="menuItem">
            <FiCreditCard />
            <span>Payment</span>
          </Link>

          <Link href="#" className="menuItem">
            <FiFileText />
            <span>Assignment</span>
          </Link>

          <Link href="#" className="menuItem">
            <FiEdit3 />
            <span>Quiz</span>
          </Link>
        </nav>

        <div className="sidebarBottom">
          <div className="userInfo">
            <div className="avatar">HB</div>

            <div>
              <h4>Hafiz Abdul Basit</h4>
              <p>Student</p>
            </div>
          </div>
        </div>
      </aside>
    </>
  );
}