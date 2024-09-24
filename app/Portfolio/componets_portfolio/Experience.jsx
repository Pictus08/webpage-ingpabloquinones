const Experience = () => {
  return (
    <section className="experience pt-5 mb-6">
      <h2 className="text-3xl font-bold mb-6">Experiencia Laboral</h2>

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
    </section>
  );
};

export default Experience;
