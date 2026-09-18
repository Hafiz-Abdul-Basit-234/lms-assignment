import "./QuizTable.css";

const quizzes = [
  {
    title: "Javascript (Quiz-4)",
    module: "Modern Front-End Development",
    questions: "40",
    attempts: "1 / 3",
    percentage: "85%",
    status: "PASSED",
  },
  {
    title: "Javascript (Quiz-3)",
    module: "Modern Front-End Development",
    questions: "40",
    attempts: "1 / 3",
    percentage: "90%",
    status: "PASSED",
  },
  {
    title: "Javascript (Quiz-2)",
    module: "Modern Front-End Development",
    questions: "40",
    attempts: "1 / 3",
    percentage: "83%",
    status: "PASSED",
  },
  {
    title: "CSS Quiz",
    module: "Front-End Development",
    questions: "40",
    attempts: "1 / 3",
    percentage: "70%",
    status: "PASSED",
  },
];

export default function QuizTable() {
  return (
    <div className="quizTable">

      {/* Desktop Table */}

      <table className="desktopTable">
        <thead>
          <tr>
            <th>Title</th>
            <th>Module</th>
            <th>Questions</th>
            <th>Attempts</th>
            <th>Percentage</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>
          {quizzes.map((quiz, index) => (
            <tr key={index}>
              <td>{quiz.title}</td>
              <td>{quiz.module}</td>

              <td>
                <span className="badge">
                  {quiz.questions}
                </span>
              </td>

              <td>
                <span className="badge">
                  {quiz.attempts}
                </span>
              </td>

              <td>{quiz.percentage}</td>

              <td>
                <span className="passed">
                  {quiz.status}
                </span>
              </td>

              <td>
                <button className="completeBtn">
                  Completed
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Mobile Cards */}

      <div className="mobileQuizWrapper">

        {quizzes.map((quiz, index) => (

          <div className="mobileQuizCard" key={index}>

            <div className="quizHeader">

              <h3>{quiz.title}</h3>

              <span className="passed">
                {quiz.status}
              </span>

            </div>

            <p className="moduleName">
              {quiz.module}
            </p>

            <div className="quizInfo">

              <div className="infoBox">
                <span>Questions</span>

                <div className="badge">
                  {quiz.questions}
                </div>
              </div>

              <div className="infoBox">
                <span>Percentage</span>

                <strong>
                  {quiz.percentage}
                </strong>
              </div>

              <div className="infoBox">
                <span>Attempts</span>

                <div className="badge">
                  {quiz.attempts}
                </div>
              </div>

            </div>

            <button className="completeBtn mobileBtn">
              Completed
            </button>

          </div>

        ))}

      </div>

    </div>
  );
}