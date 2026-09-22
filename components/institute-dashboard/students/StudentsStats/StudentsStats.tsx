
import "./StudentsStats.css";

import {
  FaUserGraduate,
  FaUserCheck,
  FaUserPlus,
  FaGraduationCap,
} from "react-icons/fa";

import { FiMoreVertical, FiTrendingUp } from "react-icons/fi";

export default function StudentsStats() {
  const stats = [
    {
      id: 1,
      title: "Total Students",
      value: "1,500",
      change: "+12.5%",
      changeText: "from last month",
      icon: FaUserGraduate,
      color: "blue",
    },
    {
      id: 2,
      title: "Active Students",
      value: "1,380",
      change: "+8.2%",
      changeText: "from last month",
      icon: FaUserCheck,
      color: "green",
    },
    {
      id: 3,
      title: "New Admissions",
      value: "120",
      change: "+15.8%",
      changeText: "from last month",
      icon: FaUserPlus,
      color: "purple",
    },
    {
      id: 4,
      title: "Graduated",
      value: "250",
      change: "+6.4%",
      changeText: "from last month",
      icon: FaGraduationCap,
      color: "orange",
    },
  ];

  return (
    <section className="studentsStats">
      {stats.map((stat) => {
        const Icon = stat.icon;

        return (
          <article
            className={`statCard statCard--${stat.color}`}
            key={stat.id}
          >
            {/* Background Glow */}
            <div className="statCardGlow"></div>

            {/* Top Accent */}
            <div className="statCardAccent"></div>

            {/* Card Header */}
            <div className="statCardHeader">
              <div className="statIcon">
                <Icon />
              </div>

              <button
                type="button"
                className="statMenu"
                aria-label={`${stat.title} options`}
              >
                <FiMoreVertical />
              </button>
            </div>

            {/* Card Content */}
            <div className="statContent">
              <p className="statTitle">
                {stat.title}
              </p>

              <h2 className="statValue">
                {stat.value}
              </h2>
            </div>

            {/* Card Footer */}
            <div className="statFooter">
              <span className="statChange">
                <FiTrendingUp className="trendIcon" />
                {stat.change}
              </span>

              <span className="statChangeText">
                {stat.changeText}
              </span>
            </div>
          </article>
        );
      })}
    </section>
  );
}

