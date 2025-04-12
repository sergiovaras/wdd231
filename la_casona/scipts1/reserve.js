document.addEventListener('DOMContentLoaded', () => {
    // Formulario de Romantic Dinner
    const formRomanticDinner = document.getElementById('form-romantic-dinner');
    if (formRomanticDinner) {
        formRomanticDinner.addEventListener('submit', (event) => {
            event.preventDefault(); // Evita la recarga de la página

            alert('¡Gracias! Su solicitud de reserva para una cena romántica ha sido enviada con éxito.');
            formRomanticDinner.reset(); // Opcional: Limpia el formulario
        });
    }

    // Formulario de Family Dinner
    const formFamily = document.getElementById('form-family');
    if (formFamily) {
        formFamily.addEventListener('submit', (event) => {
            event.preventDefault(); // Evita la recarga de la página

            alert('¡Gracias! Su solicitud de reserva familiar ha sido enviada con éxito.');
            formFamily.reset(); // Opcional: Limpia el formulario
        });
    }

    // Formulario de Event Request
    const formEvent = document.getElementById('form-event');
    if (formEvent) {
        formEvent.addEventListener('submit', (event) => {
            event.preventDefault(); // Evita la recarga de la página

            alert('¡Gracias! Su solicitud de evento ha sido enviada con éxito. Nos pondremos en contacto pronto.');
            formEvent.reset(); // Opcional: Limpia el formulario
        });
    }
});
