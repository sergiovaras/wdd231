document.addEventListener('DOMContentLoaded', () => {
    // Formulario de Romantic Dinner
    const formRomanticDinner = document.getElementById('form-romantic-dinner');
    if (formRomanticDinner) {
        formRomanticDinner.addEventListener('submit', (event) => {
            event.preventDefault(); // Evita la recarga de la página

            alert('Thank you! Your romantic dinner reservation request has been sent successfully.');
            formRomanticDinner.reset(); // Opcional: Limpia el formulario
        });
    }

    // Formulario de Family Dinner
    const formFamily = document.getElementById('form-family');
    if (formFamily) {
        formFamily.addEventListener('submit', (event) => {
            event.preventDefault(); // Evita la recarga de la página

            alert('Thank you! Your family booking request has been sent successfully.');
            formFamily.reset(); // Opcional: Limpia el formulario
        });
    }

    // Formulario de Event Request
    const formEvent = document.getElementById('form-event');
    if (formEvent) {
        formEvent.addEventListener('submit', (event) => {
            event.preventDefault(); // Evita la recarga de la página

            alert('Thank you! Your event request has been successfully submitted. We will be in touch soon.');
            formEvent.reset(); // Opcional: Limpia el formulario
        });
    }
});
