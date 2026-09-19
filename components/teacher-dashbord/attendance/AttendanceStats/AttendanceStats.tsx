import "./AttendanceStats.css";

export default function AttendanceStats() {
  return (
    <div className="attendanceStats">

      <div className="attendanceCard">
        <h4>Total Students</h4>
        <h2>1500</h2>
      </div>

      <div className="attendanceCard">
        <h4>Present Today</h4>
        <h2>1380</h2>
      </div>

      <div className="attendanceCard">
        <h4>Absent Today</h4>
        <h2>120</h2>
      </div>

      <div className="attendanceCard">
        <h4>Attendance Rate</h4>
        <h2>92%</h2>
      </div>

    </div>
  );
}