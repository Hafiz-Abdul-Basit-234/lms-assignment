import "./TrainersStats.css";

export default function TrainersStats() {
  return (
    <div className="trainersStats">

      <div className="statCard">
        <h4>Total Trainers</h4>
        <h2>50</h2>
      </div>

      <div className="statCard">
        <h4>Active Trainers</h4>
        <h2>42</h2>
      </div>

      <div className="statCard">
        <h4>Senior Trainers</h4>
        <h2>15</h2>
      </div>

      <div className="statCard">
        <h4>New Trainers</h4>
        <h2>8</h2>
      </div>

    </div>
  );
}