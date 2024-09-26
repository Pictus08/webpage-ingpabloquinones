const Experience = () => {
  return (
    <section className="experience pt-5 mb-6">
      <h2 className="text-3xl font-bold mb-6">
        Trayectoria laboral en distintos sectores
      </h2>

      {/* Cantera San Miguel */}
      <div className="mb-6">
        <h3 className="text-xl font-semibold text-teal-400 mb-2">
          Cantera Mildner
        </h3>
        <p className="text-lg">
          <strong className="text-teal-400">Propietario:</strong> Realización de
          tareas administrativas y técnicas relacionadas con la producción de
          agregados para la construcción.
        </p>
        <span className="block text-gray-400 mt-2">(Actualidad)</span>
      </div>

      {/* CEED */}
      <div className="mb-6">
        <h3 className="text-xl font-semibold text-teal-400 mb-2">
          Centro de Estudios Energéticos para el Desarrollo (CEED)
        </h3>
        <p className="text-lg">
          <strong className="text-teal-400">Modelador MEP:</strong> Trabajo en
          Autodesk Revit en proyectos terciarizados para WEWORK{" "}
          <span className="text-gray-400">(Mayo - Noviembre 2019)</span>.
        </p>
      </div>

      {/* Municipalidad de Posadas */}
      <div>
        <h3 className="text-xl font-semibold text-teal-400 mb-2">
          Municipalidad de Posadas
        </h3>
        <p className="text-lg mb-4">
          <strong className="text-teal-400">Alumno Pasante:</strong> Trabajo en
          la Dirección de Estudios y Proyectos Hidráulicos de la Municipalidad.
          <strong className="text-teal-400 block">
            Director de Estudios y Proyectos Hidráulicos:
          </strong>{" "}
          Corrección de documentación, diseño de proyectos y consultas técnicas
          para la Secretaría de Movilidad Urbana.
          <span className="block text-gray-400 mt-2">
            (Diciembre 2020 - Enero 2023)
          </span>
        </p>
      </div>

      <h2 className="text-3xl font-bold mb-6">
        Proyectos personales y colaboraciones
      </h2>

      {/* Municipalidad de Posadas */}
      <div>
        <h3 className="text-xl text-center font-semibold text-teal-400 mb-2">
          <strong>- Municipalidad de Posadas -</strong>
        </h3>
        <ul className="text-justify">
          <li className="pt-2">
            <strong>Diseño hidráulico de la canalización del A° Sití</strong> y
            las redes pluviales correspondientes a su cuenca.
          </li>
          <li className="pt-2">
            <strong>Diseño hidráulico pluvial, con trazado de calles</strong>{" "}
            para el Barrio de Los Paraísos.
          </li>
        </ul>
      </div>

      {/* Proyectos Personales */}
      <div>
        <h3 className="pt-5 text-xl text-center font-semibold text-teal-400 mb-2">
          <strong>- Proyectos Personales- </strong>
        </h3>
        <ul className=" text-justify">
          <li className="pt-2">
            <strong>Resolución del sistema pluvial y trazado de calles</strong>{" "}
            en la urbanización &quot;Itaembé Porá&quot;, Grupo Piñhero.
          </li>
          <li className="pt-2">
            <strong>Resolución del sistema pluvial y trazado de calles</strong>{" "}
            en la urbanización &quot;Los Naranjos Country&quot;, Ciudad de
            Posadas.
          </li>
          <li className="pt-2">
            <strong>Canalización de A° Urbano</strong>Canalización de A° Urbano
            para terreno privado en Oberá, Misiones, entre calle Brasil y Av.
            Libertad.
          </li>
          <li className="pt-2">
            <strong>Canalización de A° Urbano para terreno privado</strong>
            Canalización de A° Urbano para terreno privado en Posadas, Itambé
            Miní, parte del A° Mártires Chico en terreno privado.
          </li>
          <li className="pt-2">
            <strong>Verificación de sección Hidráulica de A°</strong>
            Verificación de sección Hidráulica de A° Urbano para terreno privado
            en Posadas, parte del A° Sarmiento en terreno privado.
          </li>
          <li className="pt-2">
            <strong>Calculo estructural, estructura metálica.</strong> Estacion
            de Servicio. Capioví Misiones.
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Experience;
