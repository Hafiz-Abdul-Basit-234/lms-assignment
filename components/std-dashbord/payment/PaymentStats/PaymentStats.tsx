import "./PaymentStats.css";
import {
  FiDollarSign,
  FiCheckCircle,
  FiClock,
} from "react-icons/fi";

export default function PaymentStats() {
  return (
    <div className="paymentStats">

      <div className="paymentCard">
        <div>
          <h2>Rs 12,000</h2>
          <p>Total Fees</p>
        </div>

        <div className="iconBox blue">
          <FiDollarSign />
        </div>
      </div>

      <div className="paymentCard">
        <div>
          <h2>Rs 11,000</h2>
          <p>Paid</p>
        </div>

        <div className="iconBox green">
          <FiCheckCircle />
        </div>
      </div>

      <div className="paymentCard">
        <div>
          <h2>Rs 1,000</h2>
          <p>Pending</p>
        </div>

        <div className="iconBox orange">
          <FiClock />
        </div>
      </div>

    </div>
  );
}