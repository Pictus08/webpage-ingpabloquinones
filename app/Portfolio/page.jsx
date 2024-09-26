import "./Portfolio.css";
import PersonalInfo from "./componets_portfolio/Personalinfo";
import Education from "./componets_portfolio/Education";
import Skills from "./componets_portfolio/Skills";
import Experience from "./componets_portfolio/Experience";
import Courses from "./componets_portfolio/Courses";
import Conferences from "./componets_portfolio/Conferences";
import Research from "./componets_portfolio/Research";
import Link from "next/link";

const Portfolio = () => {
  const currentYear = new Date().getFullYear(); // Obtener el año actual

  return (
    <div className="portfolio-container">
      <header className=" py-6">
        <div className="container mx-auto flex flex-col items-center">
          <nav className="mt-0 mb-4 flex space-x-4">
            <Link
              href="/"
              className="hover:text-blue-600 transition duration-300"
            >
              Inicio
            </Link>
            <Link
              href="/Contacto"
              className="hover:text-blue-600 transition duration-300"
            >
              Contacto
            </Link>
          </nav>
          <h1 className="text-3xl font-bold">Pablo Luis Quiñones</h1>
          <p className="mt-2 text-xl text-gray-600">Ingeniero Civil</p>{" "}
        </div>
      </header>

      <PersonalInfo />
      <Education />
      <Courses />
      <Skills />
      <Experience />
      <Conferences />
      <Research />

      <footer className="bg-gray-800 text-white py-4 mt-8">
        <div className="container mx-auto flex flex-col items-center">
          <p className="mb-2">
            © {currentYear} Pablo Quiñones - Ingeniero Civil
          </p>
          <div className="flex space-x-4">
            <Link
              href="/"
              className="text-gray-300 hover:text-white transition duration-300"
            >
              Inicio
            </Link>
            <Link
              href="/Contacto"
              className="text-gray-300 hover:text-white transition duration-300"
            >
              Contacto
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;
