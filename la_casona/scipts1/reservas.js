fetch('data1/reserva.json')
  .then(response => response.json())
  .then(data => {
    const contenedorReservas = document.getElementById('contenedor-reservas'); // Asegúrate de tener un elemento con este ID en tu HTML

    data.forEach(reserva => {
      const tarjeta = document.createElement('div');
      tarjeta.classList.add('tarjeta-reserva'); // Añade una clase para estilos CSS

      const image = document.createElement('img');
      image.src = reserva.image;
      image.alt = reserva.title;

      const title = document.createElement('h3');
      title.textContent = reserva.title;

      const description = document.createElement('p');
      description.textContent = reserva.description;


      const botonReserva = document.createElement('a');
      botonReserva.href = reserva.enlace_reserva;
      botonReserva.textContent = reserva.precio === "Consultar" ? "Contactar" : "Reservar Ahora";
      botonReserva.classList.add('boton-reserva'); // Añade una clase para estilos CSS

      tarjeta.appendChild(image);
      tarjeta.appendChild(title);
      tarjeta.appendChild(description);
      tarjeta.appendChild(botonReserva);

      contenedorReservas.appendChild(tarjeta);
    });
  })
  .catch(error => {
    console.error('Error al cargar las reservas:', error);
  });