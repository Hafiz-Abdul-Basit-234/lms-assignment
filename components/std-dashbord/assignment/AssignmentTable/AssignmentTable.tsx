import "./AssignmentTable.css";
import { FiEye, FiUpload, FiEdit2 } from "react-icons/fi";

export default function AssignmentTable() {
  const assignments = [
    {
      title: "Admin Panel (E-Commerce Dashboard)",
      course: "Modern Web Application Development",
      topics: "7 Topics",
      dueDate: "September 10, 2026",
      status: "APPROVED",
    },
    {
      title: "QUICKSERVE WMA (Batch-20)",
      course: "Hackathon",
      topics: "No Topics",
      dueDate: "August 30, 2026",
      status: "NOT SUBMITTED",
    },
    {
      title: "E-Commerce Website (React JS)",
      course: "Modern Web Application Development",
      topics: "4 Topics",
      dueDate: "August 17, 2026",
      status: "APPROVED",
    },
    {
      title: "Furniture E-Commerce Website",
      course: "Modern Web Application Development",
      topics: "5 Topics",
      dueDate: "August 10, 2026",
      status: "SUBMITTED",
    },
  ];

  const getStatusClass = (status) => {
    if (status === "APPROVED") return "approved";
    if (status === "SUBMITTED") return "submitted";
    return "pending";
  };

  return (
    <>
      {/* Desktop Table */}
      <div className="assignmentTable desktopTable">
        <table>
          <thead>
            <tr>
              <th>Assignment</th>
              <th>Topics</th>
              <th>Due Date</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>

          <tbody>
            {assignments.map((item, index) => (
              <tr key={index}>
                <td>{item.title}</td>

                <td>
                  <span className="topicBadge">{item.topics}</span>
                </td>

                <td>{item.dueDate}</td>

                <td>
                  <span className={`status ${getStatusClass(item.status)}`}>
                    {item.status}
                  </span>
                </td>

                <td className="actionBtns">
                  <FiEye />
                  <FiUpload />
                  <FiEdit2 />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Mobile Cards */}
      <div className="mobileAssignments">
        {assignments.map((item, index) => (
          <div className="mobileAssignmentCard" key={index}>
            
            {/* Top */}
            <div className="cardTop">
              <h3>{item.title}</h3>
              <p className="course">{item.course}</p>
            </div>

            {/* Middle */}
            <div className="cardMiddle">
              <div className="due">
                <span>Due Date</span>
                <p>{item.dueDate}</p>
              </div>

              <span className={`status ${getStatusClass(item.status)}`}>
                {item.status}
              </span>
            </div>

            {/* Topics */}
            <div className="cardTopics">
              <span className="topicBadge">{item.topics}</span>
            </div>

            {/* Actions */}
            <div className="mobileActions">
              <div className="mobileAction">
                <FiEye />
                <span>View</span>
              </div>

              <div className="mobileAction">
                <FiUpload />
                <span>Submit</span>
              </div>

              <div className="mobileAction">
                <FiEdit2 />
                <span>Edit</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}