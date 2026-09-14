import "./QuizCard.css";

export default function QuizCard() {
  return (
    <div className="quizCard">
      <h3>Upcoming Quiz</h3>

      <div className="quizBox">
        <h4>JavaScript Quiz</h4>
        <p>Tomorrow • 08:00 PM</p>

        <button>Start Preparation</button>
      </div>
    </div>
  );
}