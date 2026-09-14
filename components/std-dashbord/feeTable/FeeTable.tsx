import "./FeeTable.css";

export default function FeeTable() {
  const fees = [
    {
      id: 1,
      month: "January 2026",
      amount: "$120",
      dueDate: "05 Jan 2026",
      status: "Paid",
    },
    {
      id: 2,
      month: "February 2026",
      amount: "$120",
      dueDate: "05 Feb 2026",
      status: "Paid",
    },
    {
      id: 3,
      month: "March 2026",
      amount: "$120",
      dueDate: "05 Mar 2026",
      status: "Pending",
    },
    {
      id: 4,
      month: "April 2026",
      amount: "$120",
      dueDate: "05 Apr 2026",
      status: "Pending",
    },
  ];

  return (
    <div className="feeTableCard">
      <div className="feeHeader">
        <h2>Fee Records</h2>
        <button>View All</button>
      </div>

      <div className="tableWrapper">
        <table>
          <thead>
            <tr>
              <th>Month</th>
              <th>Amount</th>
              <th>Due Date</th>
              <th>Status</th>
            </tr>
          </thead>

          <tbody>
            {fees.map((fee) => (
              <tr key={fee.id}>
                <td>{fee.month}</td>
                <td>{fee.amount}</td>
                <td>{fee.dueDate}</td>

                <td>
                  <span
                    className={
                      fee.status === "Paid"
                        ? "paid"
                        : "pending"
                    }
                  >
                    {fee.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}