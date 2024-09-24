import Link from "next/link";
import React from "react";

const PersonalInfo = () => {
  const calculateAge = (birthDate) => {
    const today = new Date();
    const birth = new Date(birthDate);
    let age = today.getFullYear() - birth.getFullYear();
    const monthDifference = today.getMonth() - birth.getMonth();

    // Si el cumpleaños aún no ha ocurrido este año, restar un año
    if (
      monthDifference < 0 ||
      (monthDifference === 0 && today.getDate() < birth.getDate())
    ) {
      age--;
    }

    return age;
  };

  const age = calculateAge("1991-05-06"); // Fecha de nacimiento en formato YYYY-MM-DD

  return (
    <section className="personal-info">
      <h2>Datos Personales</h2>
      <ul>
        <li>
          <strong>Edad:</strong> {age} años
        </li>
        <li>
          <strong>Fecha de Nacimiento:</strong> 6 de Mayo del 1991
        </li>
        <li>
          <strong>DNI:</strong> 35.838.770
        </li>
        <li>
          <strong>Nacionalidad:</strong> Argentino
        </li>
        <li>
          <strong>Estado Civil:</strong> Soltero
        </li>
        <li>
          <strong>Teléfono:</strong>{" "}
          <Link
            href="https://wa.me/5493755687686"
            className="no-underline text-inherit"
            target="_blank"
            rel="noopener noreferrer"
          >
            +54 (3755) 68 7686
          </Link>
        </li>
        <li>
          <strong>Email:</strong>{" "}
          <Link
            href="mailto:ingpabloquinones@gmail.com"
            className="no-underline text-inherit"
            target="_blank"
            rel="noopener noreferrer"
          >
            ingpabloquinones@gmail.com
          </Link>
        </li>
      </ul>
    </section>
  );
};

export default PersonalInfo;
