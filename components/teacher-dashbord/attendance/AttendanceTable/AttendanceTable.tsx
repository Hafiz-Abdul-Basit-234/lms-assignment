"use client";

import "./AttendanceTable.css";
import { useState } from "react";

const students = [
  {id:1,name:"Ali Khan",course:"React JS",status:"Present"},
  {id:2,name:"Ahmed Raza",course:"Next JS",status:"Absent"},
  {id:3,name:"Fatima Noor",course:"JavaScript",status:"Present"},
  {id:4,name:"Usman",course:"React JS",status:"Present"},
  {id:5,name:"Hassan",course:"Next JS",status:"Present"},
  {id:6,name:"Bilal",course:"React JS",status:"Absent"},
  {id:7,name:"Hamza",course:"JavaScript",status:"Present"},
  {id:8,name:"Saad",course:"React JS",status:"Present"},
  {id:9,name:"Talha",course:"Next JS",status:"Present"},
  {id:10,name:"Rameez",course:"JavaScript",status:"Absent"},
];

export default function AttendanceTable() {

  const [attendance,setAttendance] = useState(students);

  const toggleStatus = (id:number)=>{
    setAttendance(
      attendance.map(student =>
        student.id === id
          ? {
              ...student,
              status:
                student.status === "Present"
                  ? "Absent"
                  : "Present",
            }
          : student
      )
    );
  };

  return (
    <div className="attendanceTable">

      <h2>Student Attendance</h2>

      <table>

        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Course</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>

          {attendance.map(student => (

            <tr key={student.id}>

              <td>{student.id}</td>

              <td>{student.name}</td>

              <td>{student.course}</td>

              <td>
                <span
                  className={
                    student.status === "Present"
                      ? "present"
                      : "absent"
                  }
                >
                  {student.status}
                </span>
              </td>

              <td>
                <button
                  onClick={() =>
                    toggleStatus(student.id)
                  }
                >
                  Change
                </button>
              </td>

            </tr>

          ))}

        </tbody>

      </table>

    </div>
  );
}