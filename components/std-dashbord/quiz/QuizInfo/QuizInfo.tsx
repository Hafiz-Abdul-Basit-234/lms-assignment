import "./QuizInfo.css";
import { FiAlertTriangle } from "react-icons/fi";

export default function QuizInfo() {
  return (
    <div className="quizInfoCard">

      <div className="quizInfoHeader">
        <FiAlertTriangle />
        <h3>Important Information</h3>
      </div>

      <ul className="quizInfoList">
        <li>Once started, quizzes must be completed in one session</li>
        <li>Switching tabs or leaving the window will be recorded</li>
        <li>Ensure you have a stable internet connection</li>
        <li>The quiz will open in fullscreen mode</li>
      </ul>

    </div>
  );
}