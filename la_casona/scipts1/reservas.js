fetch('reserva.json')
  .then(response => response.json())
  .then(data => {
    const contenedorReservas = document.getElementById('contenedor-reservas'); // Asegúrate de tener un elemento con este ID en tu HTML

    data.forEach(reserva => {
      const tarjeta = document.createElement('div');
      tarjeta.classList.add('tarjeta-reserva'); // Añade una clase para estilos CSS

      const imagen = document.createElement('img');
      imagen.src = reserva.imagen;
      imagen.alt = reserva.titulo;

      const titulo = document.createElement('h3');
      titulo.textContent = reserva.titulo;

      const descripcion = document.createElement('p');
      descripcion.textContent = reserva.descripcion;

      const precio = document.createElement('p');
      precio.textContent = reserva.precio === "Consultar" ? "Precio: Consultar" : `Precio: ${reserva.precio} ${reserva.moneda}`;

      const botonReserva = document.createElement('a');
      botonReserva.href = reserva.enlace_reserva;
      botonReserva.textContent = reserva.precio === "Consultar" ? "Contactar" : "Reservar Ahora";
      botonReserva.classList.add('boton-reserva'); // Añade una clase para estilos CSS

      tarjeta.appendChild(imagen);
      tarjeta.appendChild(titulo);
      tarjeta.appendChild(descripcion);
      tarjeta.appendChild(precio);
      tarjeta.appendChild(botonReserva);

      contenedorReservas.appendChild(tarjeta);
    });
  })
  .catch(error => {
    console.error('Error al cargar las reservas:', error);
  });