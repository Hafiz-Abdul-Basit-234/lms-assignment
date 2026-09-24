"use client";

import "./SidebarInstitute.css";
import Image from "next/image";
import Link from "next/link";

import logo from "@/public/assets/logo1.png";

import {
  FiGrid,
  FiUsers,
  FiUserCheck,
  
  FiMenu,
} from "react-icons/fi";

interface SidebarProps {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function SidebarInstitute({
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
        className={`sidebar ${
          !open ? "hide" : ""
        }`}
      >
        <div className="sidebarTop">
          <Image
            src={logo}
            alt="Logo"
            className="sidebarLogo"
          />
        </div>

        <nav className="sidebarMenu">

          <Link
            href="/institute-dashboard"
            className="menuItem"
          >
            <FiGrid />
            <span>Dashboard</span>
          </Link>

          <Link
            href="/institute-dashboard/students"
            className="menuItem"
          >
            <FiUsers />
            <span>Students</span>
          </Link>

          <Link
            href="/institute-dashboard/trainers"
            className="menuItem"
          >
            <FiUserCheck />
            <span>Trainers</span>
          </Link>

         
        </nav>

        <div className="sidebarBottom">

          <div className="userInfo">

            <div className="avatar">
              IN
            </div>

            <div>
              <h4>SMIT Institute</h4>
              <p>Institute Admin</p>
            </div>

          </div>

        </div>

      </aside>
    </>
  );
}