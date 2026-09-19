import "./DashboardHeader.css";
import { FiBell, FiSearch } from "react-icons/fi";

export default function DashboardHeader() {
  return (
    <div className="dashboardHeader">

      <div className="headerLeft">
        <h1>Institute Dashboard</h1>
        <p>Welcome back, manage students, trainers and campuses</p>
      </div>

      <div className="headerRight">

        <div className="searchBox">
          <FiSearch />
          <input
            type="text"
            placeholder="Search..."
          />
        </div>

        <button className="notificationBtn">
          <FiBell />
          <span></span>
        </button>

        <div className="profileBox">
          <div className="profileAvatar">
            HB
          </div>

          <div>
            <h4>Hafiz Abdul Basit</h4>
            <p>Institute Admin</p>
          </div>
        </div>

      </div>

    </div>
  );
}