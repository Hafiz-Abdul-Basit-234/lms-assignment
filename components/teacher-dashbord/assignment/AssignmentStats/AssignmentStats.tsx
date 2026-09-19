import "./AssignmentStats.css";

export default function AssignmentStats() {
  return (
    <div className="assignmentStats">

      <div className="statCard total">
        <h4>Total Assignments</h4>
        <h2>120</h2>
      </div>

      <div className="statCard submitted">
        <h4>Submitted</h4>
        <h2>95</h2>
      </div>

      <div className="statCard approved">
        <h4>Approved</h4>
        <h2>80</h2>
      </div>

      <div className="statCard rejected">
        <h4>Rejected</h4>
        <h2>15</h2>
      </div>

    </div>
  );
}