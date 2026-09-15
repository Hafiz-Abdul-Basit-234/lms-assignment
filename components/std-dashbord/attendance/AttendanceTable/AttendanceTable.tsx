import "./AttendanceTable.css";

export default function AttendanceTable() {
  const rows = [
    { id: 1, date: "Wed, Sep 2, 2026", status: "Present" },
    { id: 2, date: "Fri, Sep 4, 2026", status: "Present" },
    { id: 3, date: "Mon, Sep 7, 2026", status: "Present" },
    { id: 4, date: "Wed, Sep 9, 2026", status: "Present" },
    { id: 5, date: "Fri, Sep 11, 2026", status: "Absent" },
  ];

  return (
    <div className="attendanceTable">
      <table>
        <thead>
          <tr>
            <th>Class</th>
            <th>Date</th>
            <th>Status</th>
          </tr>
        </thead>

        <tbody>
          {rows.map((item) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.date}</td>
              <td>
                <span className={item.status.toLowerCase()}>
                  {item.status}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}