import "./TrainersTable.css";

export default function TrainersTable() {

  const trainers = [
    {
      name:"Ahmed Raza",
      course:"React JS",
      students:"120"
    },
    {
      name:"Ali Khan",
      course:"Next JS",
      students:"95"
    },
    {
      name:"Usman Tariq",
      course:"JavaScript",
      students:"140"
    },
    {
      name:"Hamza Ali",
      course:"TypeScript",
      students:"75"
    },
    {
      name:"Bilal Ahmed",
      course:"HTML/CSS",
      students:"110"
    },
  ];

  return (
    <div className="trainersTable">

      <h2>Institute Trainers</h2>

      <table>

        <thead>
          <tr>
            <th>Name</th>
            <th>Course</th>
            <th>Students</th>
          </tr>
        </thead>

        <tbody>

          {trainers.map((trainer,index)=>(
            <tr key={index}>
              <td>{trainer.name}</td>
              <td>{trainer.course}</td>
              <td>{trainer.students}</td>
            </tr>
          ))}

        </tbody>

      </table>

    </div>
  );
}