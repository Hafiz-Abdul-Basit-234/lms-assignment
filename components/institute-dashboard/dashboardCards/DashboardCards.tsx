import "./DashboardCards.css";
import {
  FaUserGraduate,
  FaChalkboardTeacher,
  FaUniversity,
  FaBookOpen,
} from "react-icons/fa";

export default function DashboardCards() {
  return (
    <div className="dashboardCards">

      <div className="dashboardCard">
        <div className="cardIcon blue">
          <FaUserGraduate />
        </div>

        <div>
          <h4>Total Students</h4>
          <h2>1,500+</h2>
        </div>
      </div>

      <div className="dashboardCard">
        <div className="cardIcon green">
          <FaChalkboardTeacher />
        </div>

        <div>
          <h4>Total Trainers</h4>
          <h2>120+</h2>
        </div>
      </div>

      <div className="dashboardCard">
        <div className="cardIcon purple">
          <FaUniversity />
        </div>

        <div>
          <h4>Total Campuses</h4>
          <h2>25</h2>
        </div>
      </div>

      <div className="dashboardCard">
        <div className="cardIcon orange">
          <FaBookOpen />
        </div>

        <div>
          <h4>Courses</h4>
          <h2>48</h2>
        </div>
      </div>

    </div>
  );
}