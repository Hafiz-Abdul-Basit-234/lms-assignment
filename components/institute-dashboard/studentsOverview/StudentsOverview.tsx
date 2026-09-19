import "./StudentsOverview.css";

export default function StudentsOverview() {
  return (
    <div className="studentsOverview">

      <h2>Students Overview</h2>

      <div className="studentItem">
        <span>Enrolled Students</span>
        <strong>1,500</strong>
      </div>

      <div className="studentItem">
        <span>Active Students</span>
        <strong>1,320</strong>
      </div>

      <div className="studentItem">
        <span>Graduated</span>
        <strong>480</strong>
      </div>

      <div className="studentItem">
        <span>New Admissions</span>
        <strong>95</strong>
      </div>

    </div>
  );
}