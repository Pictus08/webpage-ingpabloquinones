import "./Portfolio.css";
import PersonalInfo from "./PersonalInfo";
import Education from "./Education";
import Skills from "./Skills";
import Experience from "./Experience";
import Courses from "./Courses";
import Conferences from "./Conferences";
import Research from "./Research";
import Link from "next/link";

const Portfolio = () => {
  const currentYear = new Date().getFullYear(); // Obtener el año actual

  return (
    <div className="portfolio-container">
      <header className="header">
        <Link href={"/"}>
          <h1>Pablo Quiñones</h1>
        </Link>
        <p>Ingeniero Civil</p>
      </header>

      <PersonalInfo />
      <Education />
      <Courses />
      <Skills />
      <Experience />
      <Conferences />
      <Research />

      <footer>
        <p>© {currentYear} Pablo Quiñones - Ingeniero Civil</p>{" "}
        {/* Año dinámico */}
      </footer>
    </div>
  );
};

export default Portfolio;
