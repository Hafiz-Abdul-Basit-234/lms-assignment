import "./DashboardCards.css";

export default function DashboardCards() {
  return (
    <div className="teacherCards">

      <div className="teacherCard">
        <span>Total Students</span>
        <h2>1,500+</h2>
      </div>

      <div className="teacherCard">
        <span>Assignments</span>
        <h2>245</h2>
      </div>

      <div className="teacherCard">
        <span>Attendance</span>
        <h2>92%</h2>
      </div>

      <div className="teacherCard">
        <span>Courses</span>
        <h2>12</h2>
      </div>

    </div>
  );
}