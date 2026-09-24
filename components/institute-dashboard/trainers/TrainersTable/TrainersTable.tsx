"use client";

import { useState } from "react";

import Pagination from "../Pagination/Pagination";

import "./TrainersTable.css";

const trainers = Array.from(
  { length: 50 },
  (_, i) => ({
    id: i + 1,
    name: `Trainer ${i + 1}`,
    course:
      i % 2 === 0
        ? "React JS"
        : "Next JS",
    experience: `${2 + (i % 8)} Years`,
    status: "Active",
  })
);

export default function TrainersTable() {

  const [page, setPage] = useState(1);

  const perPage = 10;

  const start = (page - 1) * perPage;

  const currentData =
    trainers.slice(
      start,
      start + perPage
    );

  const totalPages =
    Math.ceil(
      trainers.length / perPage
    );

  return (
    <div className="trainersTableWrapper">

      {/* Desktop */}

      <div className="trainersTable">

        <table>

          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Course</th>
              <th>Experience</th>
              <th>Status</th>
            </tr>
          </thead>

          <tbody>

            {currentData.map(
              (trainer) => (
                <tr key={trainer.id}>
                  <td>{trainer.id}</td>
                  <td>{trainer.name}</td>
                  <td>{trainer.course}</td>
                  <td>{trainer.experience}</td>

                  <td>
                    <span className="active">
                      Active
                    </span>
                  </td>
                </tr>
              )
            )}

          </tbody>

        </table>

      </div>

      {/* Mobile */}

      <div className="mobileTrainers">

        {currentData.map(
          (trainer) => (
            <div
              key={trainer.id}
              className="trainerCard"
            >

              <div className="trainerTop">

                <h3>{trainer.name}</h3>

                <span className="active">
                  Active
                </span>

              </div>

              <div className="trainerInfo">

                <div>
                  <span>ID</span>
                  <strong>
                    #{trainer.id}
                  </strong>
                </div>

                <div>
                  <span>Course</span>
                  <strong>
                    {trainer.course}
                  </strong>
                </div>

                <div>
                  <span>Experience</span>
                  <strong>
                    {trainer.experience}
                  </strong>
                </div>

              </div>

            </div>
          )
        )}

      </div>

      <Pagination
        page={page}
        totalPages={totalPages}
        setPage={setPage}
      />

    </div>
  );
}