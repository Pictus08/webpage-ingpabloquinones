const Skills = () => {
  return (
    <section className="skills pt-5 mb-6">
      <h2 className="text-2xl font-bold  mb-4">Idiomas</h2>
      <p className="text-lg mb-2">
        <strong className="text-teal-400">Español:</strong> Lengua Natal
      </p>
      <p className="text-lg mb-4">
        <strong className="text-teal-400">Inglés:</strong> Nivel medio
      </p>

      <h2 className="text-2xl font-bold mb-4">Conocimientos Técnicos</h2>

      <p className="text-lg mb-2">
        <strong className="text-teal-400">Programas:</strong>
      </p>
      <ul className="flex flex-wrap space-x-4 list-none pl-0 mb-4">
        <li>Autocad</li>
        <li>Revit + Dynamo</li>
        <li>Navisworks</li>
        <li>Q-GIS</li>
        <li>Twinmotion</li>
        <li>Sketchup (Básico)</li>
        <li>Rhinoceros + Grasshopper</li>
        <li>SAP 2000</li>
        <li>Robot Structural</li>
        <li>EPANET</li>
        <li>SWMM</li>
        <li>HEC-RAS</li>
        <li>SWAT +</li>
        <li>Ilustrator</li>
        <li>Excel</li>
        <li>Word</li>
      </ul>

      <p className="text-lg mb-2">
        <strong className="text-teal-400">Lenguajes de Programación:</strong>
      </p>
      <ul className="list-disc pl-5">
        <li>JavaScript, Next.js </li>
        <li>Python (conocimientos medios)</li>
        <li>C# (básico, API de Autodesk Revit)</li>
        <li>Visual Basic (básico, automatización en Excel)</li>
        <li>Dynamo y Grasshopper (automatización BIM)</li>
      </ul>
    </section>
  );
};

export default Skills;
