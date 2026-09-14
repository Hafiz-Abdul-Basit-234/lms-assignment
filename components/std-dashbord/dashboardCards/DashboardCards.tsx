import "./DashboardCards.css";
import { FiClock } from "react-icons/fi";
import { PiGraduationCap } from "react-icons/pi";

export default function DashboardCards() {
  return (
    <div className="cardsWrapper">

      <div className="card">
        <div>
          <h2>94/110</h2>
          <p>Attendance</p>
        </div>

        <div className="cardIcon green">
          <FiClock />
        </div>
      </div>

      <div className="card">
        <div>
          <h2>8/13</h2>
          <p>Assignment</p>
        </div>

        <div className="cardIcon purple">
          <PiGraduationCap />
        </div>
      </div>

    </div>
  );
}