"use client";

import { useMemo, useState } from "react";
import {
  FiSearch,
  FiUsers,
  FiCheckCircle,
  FiBookOpen,
  FiChevronDown,
  FiUser,
  FiHash,
  FiChevronLeft,
  FiChevronRight,
} from "react-icons/fi";

import "./StudentsTable.css";
import Pagination from "../Pagination/Pagination";

const students = Array.from({ length: 50 }, (_, i) => ({
  id: i + 1,
  name: `Student ${i + 1}`,
  course: i % 2 === 0 ? "React JS" : "Next JS",
  status: i % 7 === 0 ? "Inactive" : "Active",
}));

export default function StudentsTable() {
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState("");
  const [course, setCourse] = useState("All Courses");
  const [status, setStatus] = useState("All Status");

  const perPage = 8;

  const filteredStudents = useMemo(() => {
    return students.filter((student) => {
      const matchesSearch =
        student.name.toLowerCase().includes(search.toLowerCase()) ||
        student.id.toString().includes(search);

      const matchesCourse =
        course === "All Courses" || student.course === course;

      const matchesStatus =
        status === "All Status" || student.status === status;

      return matchesSearch && matchesCourse && matchesStatus;
    });
  }, [search, course, status]);

  const totalPages = Math.max(
    1,
    Math.ceil(filteredStudents.length / perPage)
  );

  const safePage = Math.min(page, totalPages);

  const start = (safePage - 1) * perPage;

  const currentStudents = filteredStudents.slice(
    start,
    start + perPage
  );

  const activeStudents = students.filter(
    (student) => student.status === "Active"
  ).length;

  const handleSearch = (value) => {
    setSearch(value);
    setPage(1);
  };

  const handleCourse = (value) => {
    setCourse(value);
    setPage(1);
  };

  const handleStatus = (value) => {
    setStatus(value);
    setPage(1);
  };

  return (
    <section className="studentsPage">

      {/* Header */}
      <div className="studentsHeader">

        <div className="studentsHeading">

          <div className="headingIcon">
            <FiUsers />
          </div>

          <div>
            <p className="eyebrow">Student Management</p>

            <h1>Students</h1>

            <p className="headingDescription">
              Manage students, courses and enrollment status.
            </p>
          </div>

        </div>

      </div>


      {/* Stats */}
      <div className="studentStats">

        <div className="statCard">
          <div className="statIcon blue">
            <FiUsers />
          </div>

          <div>
            <span>Total Students</span>
            <strong>{students.length}</strong>
          </div>
        </div>


        <div className="statCard">
          <div className="statIcon green">
            <FiCheckCircle />
          </div>

          <div>
            <span>Active Students</span>
            <strong>{activeStudents}</strong>
          </div>
        </div>


        <div className="statCard">
          <div className="statIcon purple">
            <FiBookOpen />
          </div>

          <div>
            <span>Courses</span>
            <strong>2</strong>
          </div>
        </div>

      </div>


      {/* Main Card */}
      <div className="studentsTableWrapper">

        <div className="tableCard">

          {/* Toolbar */}
          <div className="tableToolbar">

            <div className="toolbarTitle">
              <div>
                <h2>All Students</h2>

                <p>
                  {filteredStudents.length} students found
                </p>
              </div>
            </div>


            <div className="tableFilters">

              {/* Search */}
              <div className="searchBox">

                <FiSearch />

                <input
                  type="text"
                  placeholder="Search students..."
                  value={search}
                  onChange={(e) =>
                    handleSearch(e.target.value)
                  }
                />

              </div>


              {/* Course */}
              <div className="selectBox">

                <FiBookOpen />

                <select
                  value={course}
                  onChange={(e) =>
                    handleCourse(e.target.value)
                  }
                >
                  <option>All Courses</option>
                  <option>React JS</option>
                  <option>Next JS</option>
                </select>

                <FiChevronDown />

              </div>


              {/* Status */}
              <div className="selectBox">

                <FiCheckCircle />

                <select
                  value={status}
                  onChange={(e) =>
                    handleStatus(e.target.value)
                  }
                >
                  <option>All Status</option>
                  <option>Active</option>
                  <option>Inactive</option>
                </select>

                <FiChevronDown />

              </div>

            </div>

          </div>


          {/* Desktop Table */}
          <div className="assignmentTable">

            <table>

              <thead>
                <tr>

                  <th>
                    <span>
                      <FiHash />
                      ID
                    </span>
                  </th>

                  <th>
                    <span>
                      <FiUser />
                      Student
                    </span>
                  </th>

                  <th>
                    <span>
                      <FiBookOpen />
                      Course
                    </span>
                  </th>

                  <th>Status</th>

                </tr>
              </thead>


              <tbody>

                {currentStudents.map((student) => (

                  <tr key={student.id}>

                    <td>
                      <span className="studentId">
                        #{String(student.id).padStart(3, "0")}
                      </span>
                    </td>


                    <td>

                      <div className="studentNameCell">

                        <div className="studentAvatar">
                          {student.name
                            .split(" ")
                            .map((word) => word[0])
                            .join("")}
                        </div>

                        <div>
                          <strong>{student.name}</strong>
                          <small>
                            Student ID #{student.id}
                          </small>
                        </div>

                      </div>

                    </td>


                    <td>
                      <span className="courseBadge">
                        {student.course}
                      </span>
                    </td>


                    <td>

                      <span
                        className={
                          student.status === "Active"
                            ? "active"
                            : "inactive"
                        }
                      >
                        {student.status}
                      </span>

                    </td>

                  </tr>

                ))}

              </tbody>

            </table>


            {/* Empty State */}
            {currentStudents.length === 0 && (

              <div className="emptyState">

                <div className="emptyIcon">
                  <FiSearch />
                </div>

                <h3>No students found</h3>

                <p>
                  Try changing your search or filters.
                </p>

              </div>

            )}

          </div>


          {/* Mobile Cards */}
          <div className="mobileStudents">

            {currentStudents.map((student) => (

              <article
                className="studentCard"
                key={student.id}
              >

                <div className="studentTop">

                  <div className="studentIdentity">

                    <div className="studentAvatar">
                      {student.name
                        .split(" ")
                        .map((word) => word[0])
                        .join("")}
                    </div>

                    <div>
                      <h3>{student.name}</h3>

                      <span>
                        #{String(student.id).padStart(3, "0")}
                      </span>
                    </div>

                  </div>


                  <span
                    className={
                      student.status === "Active"
                        ? "active"
                        : "inactive"
                    }
                  >
                    {student.status}
                  </span>

                </div>


                <div className="studentInfo">

                  <div>
                    <span>Course</span>

                    <strong>
                      {student.course}
                    </strong>
                  </div>


                  <div>
                    <span>Student ID</span>

                    <strong>
                      #{String(student.id).padStart(3, "0")}
                    </strong>
                  </div>

                </div>

              </article>

            ))}


            {currentStudents.length === 0 && (

              <div className="emptyState mobileEmpty">

                <div className="emptyIcon">
                  <FiSearch />
                </div>

                <h3>No students found</h3>

                <p>
                  Try changing your search or filters.
                </p>

              </div>

            )}

          </div>


          {/* Pagination */}
          <div className="tableFooter">

            <div className="paginationInfo">
              Showing{" "}
              <strong>
                {filteredStudents.length === 0
                  ? 0
                  : start + 1}
              </strong>{" "}
              to{" "}
              <strong>
                {Math.min(
                  start + perPage,
                  filteredStudents.length
                )}
              </strong>{" "}
              of{" "}
              <strong>
                {filteredStudents.length}
              </strong>
            </div>


            <Pagination
              page={safePage}
              totalPages={totalPages}
              setPage={setPage}
            />

          </div>

        </div>

      </div>

    </section>
  );
}
