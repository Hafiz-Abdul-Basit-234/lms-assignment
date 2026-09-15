import "./ProgressStats.css";
import { FiBookOpen, FiAward, FiClock } from "react-icons/fi";

export default function ProgressStats() {
  return (
    <div className="progressStats">
      <div className="progressCard">
        <div>
          <h2>81</h2>
          <p>Total Topics</p>
        </div>
        <FiBookOpen />
      </div>

      <div className="progressCard">
        <div>
          <h2>56</h2>
          <p>Completed Topics</p>
        </div>
        <FiAward />
      </div>

      <div className="progressCard">
        <div>
          <h2>25</h2>
          <p>Pending Topics</p>
        </div>
        <FiClock />
      </div>
    </div>
  );
}