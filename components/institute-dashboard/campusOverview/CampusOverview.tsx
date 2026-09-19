import "./CampusOverview.css";

export default function CampusOverview() {
  return (
    <div className="campusOverview">

      <h2>Campus Overview</h2>

      <div className="campusCard">
        <h3>Main Campus</h3>
        <p>850 Students</p>
      </div>

      <div className="campusCard">
        <h3>North Campus</h3>
        <p>420 Students</p>
      </div>

      <div className="campusCard">
        <h3>South Campus</h3>
        <p>230 Students</p>
      </div>

    </div>
  );
}