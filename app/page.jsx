import React from "react";

const HomePage = () => {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col font-sans relative">
      {/* SVG como fondo */}
      <div className="absolute inset-0 flex items-center justify-center">
        <img
          src="/web.svg"
          alt="SVG background"
          className="w-full h-full object-cover opacity-100 filter invert drop-shadow-lg"
        />
      </div>

      {/* Barra de navegación */}
      <nav className="w-full py-4 z-10">
        <ul className="flex justify-end space-x-8 pr-8">
          <li>
            <a
              href="#portfolio"
              className="text-xl uppercase tracking-wide hover:text-gray-500"
            >
              Porfolio
            </a>
          </li>
          <li>
            <a
              href="#subcontratos"
              className="text-xl uppercase tracking-wide hover:text-gray-500"
            >
              SubContratos
            </a>
          </li>
          <li>
            <a
              href="#contacto"
              className="text-xl uppercase tracking-wide hover:text-gray-500"
            >
              Contacto
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default HomePage;
