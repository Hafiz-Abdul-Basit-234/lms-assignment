import "./ActiveCourse.css";
import { FiMapPin, FiUsers } from "react-icons/fi";

export default function ActiveCourse() {
  return (
    <div className="activeCourse">
      <div className="courseTop">
        <div>
          <h2>Modern Web Application Development</h2>
          <p>Batch 20 • Active Enrollment</p>
        </div>

        <span className="enrolled">Enrolled</span>
      </div>

      <div className="progressArea">
        <div className="progressInfo">
          <span>Course Progress</span>
          <span>72%</span>
        </div>

        <div className="progressBar">
          <div className="progressFill"></div>
        </div>
      </div>

      <div className="courseDetails">
        <div className="detailCard">
          <FiUsers />
          <div>
            <h4>Batch</h4>
            <p>Batch 20</p>
          </div>
        </div>

        <div className="detailCard">
          <FiMapPin />
          <div>
            <h4>Campus</h4>
            <p>Bahadurabad</p>
          </div>
        </div>

        <div className="detailCard">
          <FiMapPin />
          <div>
            <h4>City</h4>
            <p>Karachi</p>
          </div>
        </div>
      </div>
    </div>
  );
}