import "./AssignmentStats.css";
import {
  FiFileText,
  FiCheckCircle,
  FiClock,
} from "react-icons/fi";

export default function AssignmentStats() {
  return (
    <div className="assignmentStats">

      <div className="assignmentCard">
        <div>
          <h2>16</h2>
          <p>Assigned</p>
        </div>

        <div className="iconBox blue">
          <FiFileText />
        </div>
      </div>

      <div className="assignmentCard">
        <div>
          <h2>14</h2>
          <p>Submitted</p>
        </div>

        <div className="iconBox green">
          <FiCheckCircle />
        </div>
      </div>

      <div className="assignmentCard">
        <div>
          <h2>2</h2>
          <p>Pending</p>
        </div>

        <div className="iconBox yellow">
          <FiClock />
        </div>
      </div>

    </div>
  );
}