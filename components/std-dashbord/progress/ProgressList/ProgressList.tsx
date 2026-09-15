import "./ProgressList.css";

const courses = [
  {
    title: "Web Designing",
    topics: "20/20",
    percent: "100%",
    status: "completed",
  },
  {
    title: "Front-End Development",
    topics: "26/31",
    percent: "84%",
    status: "progress",
  },
  {
    title: "Modern Front-End Development",
    topics: "10/14",
    percent: "71%",
    status: "progress",
  },
  {
    title: "Back-End Development",
    topics: "0/16",
    percent: "0%",
    status: "pending",
  },
];

export default function ProgressList() {
  return (
    <div className="progressList">
      {courses.map((course, index) => (
        <div className="courseItem" key={index}>
          <div>
            <h3>{course.title}</h3>
            <p>Topics: {course.topics}</p>
          </div>

          <div className="percentCircle">
            {course.percent}
          </div>
        </div>
      ))}
    </div>
  );
}