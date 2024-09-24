import "./Portfolio.css"; // Recuerda crear este archivo para estilos

const Portfolio = () => {
  return (
    <div className="portfolio-container">
      <header className="header">
        <h1>Pablo Quiñones</h1>
        <p>Ingeniero Civil</p>
      </header>

      <section className="personal-info">
        <h2>Datos Personales</h2>
        <ul>
          <li>
            <strong>Edad:</strong> 29 años
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
            <strong>Teléfono:</strong> +54 (3755) 68 7686
          </li>
          <li>
            <strong>Email:</strong> contacto@pabloquinones.page
          </li>
        </ul>
      </section>

      <section className="education">
        <h2>Formación Académica</h2>
        <p>
          <strong>Facultad de Ingeniería de Oberá – U.Na.M.</strong>{" "}
          (2009-actualidad)
        </p>
        <p>
          Ingeniería Civil - Cursa completa la carrera, adeuda: Estructuras
          Metálicas y Proyecto final.
        </p>
        <p>
          <strong>Educación Polimodal:</strong> Economía y gestión - Escuela
          Superior de Comercio N°2, Jardrín América, Misiones, Diciembre 2008.
        </p>
      </section>

      <section className="skills">
        <h2>Idiomas</h2>
        <p>
          <strong>Español:</strong> Lengua Natal
        </p>
        <p>
          <strong>Inglés:</strong> Nivel medio
        </p>

        <h2>Conocimientos Técnicos</h2>
        <p>
          <strong>Programas:</strong>
          <ul>
            <li>Autodesk Revit (Niveles 1-3)</li>
            <li>Autodesk Navisworks</li>
            <li>Q-GIS</li>
            <li>Autocad (conocimientos avanzados)</li>
            <li>Twinmotion</li>
            <li>Sketchup</li>
            <li>Rhinoceros + Grasshopper</li>
            <li>SAP 2000</li>
            <li>Robot Structural</li>
          </ul>
        </p>
        <p>
          <strong>Lenguajes de Programación:</strong>
          <ul>
            <li>Python (conocimientos medios)</li>
            <li>C# (básico, API de Autodesk Revit)</li>
            <li>Visual Basic (básico, automatización en Excel)</li>
            <li>Dynamo y Grasshopper (automatización BIM)</li>
          </ul>
        </p>
      </section>

      <section className="experience">
        <h2>Experiencia Laboral</h2>
        <h3>Centro de Estudios Energéticos para el Desarrollo (CEED)</h3>
        <p>
          <strong>Cantera San Miguel:</strong> Operación de maquinaria pesada
          (cargadores, retroexcavadoras, perforadoras neumáticas) y soldadura.
        </p>
        <p>
          <strong>Modelador MEP:</strong> Autodesk Revit en proyectos
          terciarizados para WEWORK (Mayo - Noviembre 2019).
        </p>
      </section>

      <section className="courses">
        <h2>Formación Adicional y Cursos</h2>
        <ul>
          <li>Curso de Autodesk Revit (Niveles 1-3)</li>
          <li>Curso de Autodesk Navisworks</li>
          <li>Curso de Q-GIS (30 horas)</li>
          <li>Curso de Python aplicado a la ingeniería civil</li>
          <li>Curso de Dynamo para Autodesk Revit</li>
          <li>Curso de Grasshopper (automatización de procesos)</li>
          <li>Curso de Photoshop CC (14 horas)</li>
          <li>Curso de Ilustrator CC (14 horas)</li>
        </ul>
      </section>

      <section className="conferences">
        <h2>Congresos y Jornadas</h2>
        <ul>
          <li>
            VI Congreso Nacional de Estudiantes de Ingeniería Civil (2014, Santa
            Fe, Argentina)
          </li>
          <li>
            I Jornada Regional de Estudiantes de Ingeniería Civil (2014, Oberá,
            Misiones)
          </li>
          <li>
            VII Congreso Nacional de Estudiantes de Ingeniería Civil (2014,
            Olavarría, Buenos Aires)
          </li>
          <li>
            XI Congreso Latinoamericano de Estudiantes de Ingeniería Civil
            (2015, Cancún, México)
          </li>
          <li>
            Organizador del IX Congreso Nacional de Estudiantes de Ingeniería
            Civil (2016, Posadas, Misiones)
          </li>
          <li>
            Organizador del XII Congreso Latinoamericano de Estudiantes de
            Ingeniería Civil (2016, Iguazú/Posadas, Misiones)
          </li>
        </ul>
      </section>

      <section className="research">
        <h2>Trabajos de Investigación</h2>
        <p>
          Estudio del “Estado fresco de morteros autocompactantes con arena de
          trituración basáltica” (2015-2018)
        </p>
      </section>

      <footer>
        <p>© 2023 Pablo Quiñones - Ingeniero Civil</p>
      </footer>
    </div>
  );
};

export default Portfolio;
