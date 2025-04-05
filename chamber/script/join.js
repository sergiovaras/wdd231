document.addEventListener('DOMContentLoaded', () => {
    // Set the timestamp field with the current date and time
    const timestampField = document.getElementById('timestamp');
    if (timestampField) {
        timestampField.value = new Date().toISOString();
    }
});
const lastModified = document.lastModified;
document.getElementById('lastModified').textContent = lastModified;
function mostrarHora() {
  const ahora = new Date();
  const hora = ahora.toLocaleTimeString();
  document.getElementById('current_time').textContent = hora;
}

setInterval(mostrarHora, 1000); // Updates every second
mostrarHora(); // Displays the initial time