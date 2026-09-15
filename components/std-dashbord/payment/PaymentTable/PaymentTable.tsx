import "./PaymentTable.css";
import { FiCopy } from "react-icons/fi";

export default function PaymentTable() {
  const payments = [
    {
      month: "Sep 2026",
      amount: "Rs:1000/-",
      type: "Monthly",
      due: "08-Sep-2026",
      voucher: "202609776353",
      status: "Paid",
    },
    {
      month: "Aug 2026",
      amount: "Rs:1000/-",
      type: "Monthly",
      due: "08-Aug-2026",
      voucher: "202608776353",
      status: "Paid",
    },
    {
      month: "Jul 2026",
      amount: "Rs:1000/-",
      type: "Monthly",
      due: "08-Jul-2026",
      voucher: "202607776353",
      status: "Paid",
    },
    {
      month: "Feb 2026",
      amount: "Rs:1000/-",
      type: "Monthly",
      due: "08-Feb-2026",
      voucher: "202602776353",
      status: "Pending",
    },
  ];

  return (
    <div className="paymentTable">
      <table>
        <thead>
          <tr>
            <th>Month</th>
            <th>Amount</th>
            <th>Type</th>
            <th>Due Date</th>
            <th>Voucher ID</th>
            <th>Copy</th>
            <th>Status</th>
          </tr>
        </thead>

        <tbody>
          {payments.map((item, index) => (
            <tr key={index}>
              <td>{item.month}</td>
              <td>{item.amount}</td>
              <td>{item.type}</td>
              <td>{item.due}</td>
              <td>{item.voucher}</td>

              <td>
                <button className="copyBtn">
                  <FiCopy />
                </button>
              </td>

              <td>
                <span
                  className={
                    item.status === "Paid"
                      ? "paid"
                      : "pending"
                  }
                >
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