"use client";

import { useState } from "react";
import "./AssignmentTable.css";

const students = [
  { id: 1, name: "Ali Khan", assignment: "React Dashboard", status: "Submitted" },
  { id: 2, name: "Ahmed Raza", assignment: "Next JS LMS", status: "Approved" },
  { id: 3, name: "Fatima Noor", assignment: "JavaScript Quiz", status: "Rejected" },
  { id: 4, name: "Hamza Ali", assignment: "React Project", status: "Approved" },
  { id: 5, name: "Usman Tariq", assignment: "LMS UI", status: "Submitted" },
  { id: 6, name: "Ayesha Malik", assignment: "Authentication", status: "Approved" },
  { id: 7, name: "Bilal Ahmed", assignment: "API Integration", status: "Submitted" },
  { id: 8, name: "Sana Khan", assignment: "Admin Panel", status: "Approved" },
  { id: 9, name: "Zain Ahmed", assignment: "E-Commerce", status: "Rejected" },
  { id: 10, name: "Hassan Raza", assignment: "React Hooks", status: "Approved" },

  { id: 11, name: "Mariam Noor", assignment: "Redux Toolkit", status: "Submitted" },
  { id: 12, name: "Abdullah", assignment: "Portfolio", status: "Approved" },
  { id: 13, name: "Hina Tariq", assignment: "Landing Page", status: "Submitted" },
  { id: 14, name: "Saad Khan", assignment: "Next Auth", status: "Rejected" },
  { id: 15, name: "Ibrahim", assignment: "Dashboard", status: "Approved" },
  { id: 16, name: "Talha", assignment: "React Forms", status: "Submitted" },
  { id: 17, name: "Anaya", assignment: "LMS Project", status: "Approved" },
  { id: 18, name: "Huzaifa", assignment: "API CRUD", status: "Submitted" },
  { id: 19, name: "Daniyal", assignment: "React Router", status: "Approved" },
  { id: 20, name: "Eman", assignment: "UI Design", status: "Submitted" },
];

export default function AssignmentTable() {
  const [page, setPage] = useState(1);

  const perPage = 10;

  const start = (page - 1) * perPage;

  const currentStudents = students.slice(
    start,
    start + perPage
  );

  return (
    <div className="assignmentTableWrapper">

      <div className="assignmentTable">

        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Student</th>
              <th>Assignment</th>
              <th>Status</th>
            </tr>
          </thead>

          <tbody>

            {currentStudents.map((student) => (

              <tr key={student.id}>
                <td>{student.id}</td>
                <td>{student.name}</td>
                <td>{student.assignment}</td>

                <td>
                  <span
                    className={`status ${
                      student.status === "Approved"
                        ? "approved"
                        : student.status === "Rejected"
                        ? "rejected"
                        : "submitted"
                    }`}
                  >
                    {student.status}
                  </span>
                </td>
              </tr>

            ))}

          </tbody>
        </table>

      </div>

      <div className="pagination">

        <button
          disabled={page === 1}
          onClick={() => setPage(page - 1)}
        >
          ← Prev
        </button>

        <span>
          Page {page} / 2
        </span>

        <button
          disabled={page === 2}
          onClick={() => setPage(page + 1)}
        >
          Next →
        </button>

      </div>

    </div>
  );
}