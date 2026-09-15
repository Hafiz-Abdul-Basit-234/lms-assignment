import "./AttendanceStats.css";
import {
  FiCalendar,
  FiCheckCircle,
  FiAlertCircle,
  FiXCircle,
} from "react-icons/fi";

export default function AttendanceStats() {
  return (
    <div className="attendanceStats">
      <div className="attendanceCard">
        <div>
          <h2>111</h2>
          <p>Total Classes</p>
        </div>
        <div className="icon gray">
          <FiCalendar />
        </div>
      </div>

      <div className="attendanceCard">
        <div>
          <h2>94</h2>
          <p>Present</p>
        </div>
        <div className="icon green">
          <FiCheckCircle />
        </div>
      </div>

      <div className="attendanceCard">
        <div>
          <h2>0</h2>
          <p>Leave</p>
        </div>
        <div className="icon orange">
          <FiAlertCircle />
        </div>
      </div>

      <div className="attendanceCard">
        <div>
          <h2>17</h2>
          <p>Absent</p>
        </div>
        <div className="icon red">
          <FiXCircle />
        </div>
      </div>
    </div>
  );
}