import { FaLinkedin, FaInstagram, FaTwitter } from "react-icons/fa"; // Asegúrate de instalar react-icons si no lo tienes.

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

      <div className="relative flex flex-1 items-center justify-center overflow-hidden">
        <img
          src="/web.svg"
          alt="SVG background"
          className="w-full h-auto max-h-[80vh] sm:max-h-[90vh] aspect-[4/3] object-cover opacity-100 filter invert"
        />
        <div className="absolute inset-0 cursor-default"></div>
      </div>

      {/* Botones de redes sociales */}
      <div className="absolute bottom-4 right-4 flex space-x-4">
        <a
          href="https://www.linkedin.com/in/ingpabloquinones/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-teal-400 hover:text-teal-500"
        >
          <FaLinkedin size={28} /> {/* Aumentar tamaño de ícono */}
        </a>
        <a
          href="https://www.instagram.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-teal-400 hover:text-teal-500"
        >
          <FaInstagram size={28} /> {/* Aumentar tamaño de ícono */}
        </a>
      </div>
    </div>
  );
};

export default HomePage;
