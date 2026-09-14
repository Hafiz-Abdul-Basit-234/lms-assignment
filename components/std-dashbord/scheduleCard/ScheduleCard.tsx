import "./ScheduleCard.css";
import { FiCalendar } from "react-icons/fi";

const days = [
  { day: "Sun", date: "13", active: false },
  { day: "Mon", date: "14", active: true },
  { day: "Tue", date: "15", active: false },
  { day: "Wed", date: "16", active: true },
  { day: "Thu", date: "17", active: false },
  { day: "Fri", date: "18", active: true },
  { day: "Sat", date: "19", active: false },
];

export default function ScheduleCard() {
  return (
    <div className="scheduleCard">
      <div className="scheduleHeader">
        <FiCalendar />
        <h3>Class Schedule</h3>
      </div>

      <div className="daysWrapper">
        {days.map((item, index) => (
          <div
            key={index}
            className={`dayBox ${item.active ? "active" : ""}`}
          >
            <span>{item.day}</span>
            <strong>{item.date}</strong>
          </div>
        ))}
      </div>
    </div>
  );
}