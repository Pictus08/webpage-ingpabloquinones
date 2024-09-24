function PersonalInfo() {
  const calculateAge = (birthDate) => {
    const today = new Date();
    const birth = new Date(birthDate);
    let age = today.getFullYear() - birth.getFullYear();
    const monthDifference = today.getMonth() - birth.getMonth();

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
    <section className="py-4">
      <h2 className="text-xl font-bold">Datos Personales</h2>
      <ul className="list-none">
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
          <a
            href="https://wa.me/5493755687686"
            className="no-underline text-inherit"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Enviar mensaje por WhatsApp"
          >
            +54 (3755) 68-7686
          </a>
        </li>
        <li>
          <strong>Email:</strong>{" "}
          <a
            href="mailto:ingpabloquinones@gmail.com"
            className="no-underline text-inherit"
            aria-label="Enviar correo a ingpabloquinones@gmail.com"
          >
            ingpabloquinones@gmail.com
          </a>
        </li>
      </ul>
    </section>
  );
}

export default PersonalInfo;
