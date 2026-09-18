import "./AssignmentStats.css";
export default function AssignmentTable() {

  const assignments = [
    {
      name: "Admin panel (E commerce Dashboard)",
      topics: "7 Topics",
      due: "September 10, 2026",
      status: "APPROVED",
    },
    {
      name: "QUICKSERVE WMA (Batch-20)",
      topics: "No topics",
      due: "August 30, 2026",
      status: "NOT SUBMITTED",
    },
    {
      name: "E-Commerce Website (React js)",
      topics: "4 Topics",
      due: "August 17, 2026",
      status: "APPROVED",
    },
    {
      name: "Furniture E-Commerce Website",
      topics: "5 Topics",
      due: "August 10, 2026",
      status: "SUBMITTED",
    },
  ];

  return (
    <div className="assignmentTable">

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

          {assignments.map((item,index)=>(
            <tr key={index}>
              <td>{item.name}</td>
              <td>{item.topics}</td>
              <td>{item.due}</td>

              <td>
                <span
                  className={`status ${
                    item.status === "APPROVED"
                      ? "approved"
                      : item.status === "SUBMITTED"
                      ? "submitted"
                      : "pending"
                  }`}
                >
                  {item.status}
                </span>
              </td>

              <td>
                👁️ 📤 ✏️
              </td>
            </tr>
          ))}

        </tbody>

      </table>

    </div>
  );
}