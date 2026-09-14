import "./DashboardHeader.css";
import { FiMessageSquare } from "react-icons/fi";

export default function DashboardHeader() {
  return (
    <div className="dashboardHeader">
      <div className="breadcrumb">
        <span>Home</span>
        <span className="arrow">›</span>
        <span className="active">
          Modern Web Application Development
        </span>
      </div>

      <button className="feedbackBtn">
        <FiMessageSquare />
        <span>Feedback</span>
      </button>
    </div>
  );
}