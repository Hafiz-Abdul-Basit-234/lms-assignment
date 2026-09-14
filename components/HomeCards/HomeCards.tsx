import "./HomeCards.css";
import Image from "next/image";
import Link from "next/link";
import logo from "@/public/assets/logo1.png";

import {
  FaUserGraduate,
  FaChalkboardTeacher,
  FaUniversity,
} from "react-icons/fa";

export default function HomeCards() {
  const cards = [
    {
      id: 1,
      icon: <FaUserGraduate />,
      title: "Students",
      count: "1,500+",
      path: "/studentlogin",
      desc: "Active students learning new skills every day.",
    },
    {
      id: 2,
      icon: <FaChalkboardTeacher />,
      title: "Teachers",
      count: "120+",
      path: "/teacherlogin",
      desc: "Professional instructors with industry experience.",
    },
    {
      id: 3,
      icon: <FaUniversity />,
      title: "Institutes",
      count: "25+",
      path: "/institutelogin",
      desc: "Trusted institutes connected to our platform.",
    },
  ];

  return (
    <div className="homePage">
      <section className="heroSection">
        <Image
          src={logo}
          alt="LMS Logo"
          className="logo"
          priority
        />

        <h1>Learning Management System</h1>

        <p>
          Empowering Students, Teachers, and Institutes through a
          modern digital learning platform.
        </p>

        <Link href={'/studentlogin'}>
        <button>Get Started</button>
        </Link>
      </section>

      <section className="homeCards">
        {cards.map((card) => (
          <Link
            href={card.path}
            key={card.id}
            className="homeCard"
          >
            <div className="cardIcon">{card.icon}</div>

            <h2>{card.count}</h2>

            <h3>{card.title}</h3>

            <p>{card.desc}</p>
          </Link>
        ))}
      </section>
    </div>
  );
}