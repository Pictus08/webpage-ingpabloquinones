const Courses = () => {
  return (
    <section className="courses ">
      <h2 className="font-bold">Diplomaturas</h2>
      <ul>
        <section>
          <li>
            <strong>
              Diplomatura en Hidroinformática (UTN Córdoba) - En Curso -
            </strong>
            <ul>
              <li>
                <strong>EPANET:</strong> Herramienta para el modelado de redes
                de agua a presión, permitiendo la simulación del comportamiento
                del agua en sistemas de distribución.
              </li>
              <li>
                <strong>SWMM:</strong> Modelo para el análisis de sistemas de
                drenaje y tratamiento de aguas pluviales, enfocado en el
                modelado de redes a gravedad.
              </li>
              <li>
                <strong>SWAT+:</strong> Un modelo hidrológico avanzado que
                simula el impacto del uso del suelo y las prácticas de manejo
                sobre la calidad y cantidad de recursos hídricos.
              </li>
              <li>
                <strong>HEC-RAS:</strong> Formación en módulos I, II y III,
                centrada en el modelado de flujo en ríos y la evaluación de la
                dinámica del agua en sistemas fluviales.
              </li>
            </ul>
          </li>
        </section>
        <section>
          <li>
            <strong>
              Diplomatura Universitaria en diseño y contrucción eficiente en
              madera (UNAM Misiones) - En Curso -
            </strong>
          </li>
        </section>
      </ul>
      <h2 className="font-bold">
        Capacitaciones Realizadas en aplicaciones Específicas{" "}
      </h2>
      <ul>
        <li>Curso de Autodesk Revit (Niveles 1-3)</li>
        <li>Curso de Autodesk Navisworks</li>
        <li>Curso de Q-GIS (30 horas)</li>
        <li>Curso de Python aplicado a la ingeniería civil</li>
        <li>Curso de Dynamo para Autodesk Revit</li>
        <li>Curso de Grasshopper (automatización de procesos)</li>
        <li>Curso de Photoshop CC (14 horas)</li>
        <li>Curso de Ilustrator CC (14 horas)</li>
        <section class="pt-5 mb-6">
          <h3 class="text-xl font-bold text-teal-400">
            Diseño de aplicaciones y programación web
          </h3>
          <h3 class="text-lg font-semibold mt-2">Tecnologías aprendidas:</h3>
          <ul class="text-teal-400 flex space-x-4 list-none pl-0 mt-2 font-bold">
            <li>Git</li>
            <li>JavaScript</li>
            <li>React</li>
            <li>Node.js</li>
            <li>SQL</li>
            <li>MongoDB</li>
            <li>Next.js</li>
          </ul>
        </section>
        <li>
          Formación Personal en el uso de ofimática (Excel, Word, Power Point),
          automatización de procesos y programación de macros.
        </li>
      </ul>
    </section>
  );
};

export default Courses;
