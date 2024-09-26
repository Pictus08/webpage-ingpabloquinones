const HomePage = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-900 text-white font-sans relative">
      {/* Barra de navegación */}
      <nav className="w-full py-4">
        <ul className="flex justify-center space-x-8 pr-8">
          <li>
            <a href="/Portfolio" className="text-teal-400 hover:underline">
              CV
            </a>
          </li>
          <li>
            <a href="#Subcontratos" className="text-teal-400 hover:underline">
              Sub-Contratos
            </a>
          </li>
          <li>
            <a href="#Contacto" className="text-teal-400 hover:underline">
              Contacto
            </a>
          </li>
        </ul>
      </nav>

      {/* SVG como fondo */}
      <div className="flex flex-1 items-center justify-center overflow-hidden">
        <img
          src="/web.svg"
          alt="SVG background"
          className="w-full h-auto max-h-[120vh] sm:max-h-[100vh] aspect-[4/3] sm:aspect-[4/3] md:aspect-[21/9] lg:aspect-[3/1] xl:aspect-[2/1] object-cover opacity-100 filter invert"
        />
      </div>
    </div>
  );
};

export default HomePage;
