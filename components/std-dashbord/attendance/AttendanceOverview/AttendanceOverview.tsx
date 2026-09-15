
import "./AttendanceOverview.css";

export default function AttendanceOverview() {
  return (
    <div className="attendanceOverview">
      <div className="overviewTop">
        <div>
          <h3>Attendance Overview</h3>
          <p>Your attendance is good. Keep it up!</p>
        </div>

        <h2>85%</h2>
      </div>

      <div className="progressBar">
        <div className="progressFill"></div>
      </div>
    </div>
  );
}