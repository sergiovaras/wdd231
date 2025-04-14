document.addEventListener('DOMContentLoaded', () => {
  // Menú hamburguesa
  const menuToggle = document.querySelector('.hamburger-menu button');
  const nav = document.querySelector('nav.main-nav');

  menuToggle.addEventListener('click', () => {
    nav.classList.toggle('open');
    menuToggle.classList.toggle('active');
  });

  // Elementos del clima
  const weatherIcon = document.querySelector("#weather-icon");
  const temperature = document.querySelector("#temperature");
  const description = document.querySelector("#description");

  const myKey = "d5441e180151f737d7e144f61bb784ab";
  const lat = "-35.08";
  const lon = "-57.51";

  const url = `//api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${myKey}&units=metric`;
  const forecastUrl = `//api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${myKey}&units=metric`;

  function unixTo24HourClock(unixTime) {
    const date = new Date(unixTime * 1000);
    const hours = date.getHours().toString().padStart(2, '0');
    const minutes = date.getMinutes().toString().padStart(2, '0');
    const seconds = date.getSeconds().toString().padStart(2, '0');
    return `${hours}:${minutes}:${seconds}`;
  }

  async function weatherApiFetch() {
    try {
      const response = await fetch(url);
      if (response.ok) {
        const data = await response.json();
        displayWeatherResults(data);
      } else {
        throw Error(await response.text());
      }
    } catch (error) {
      console.log(error);
    }
  }
  weatherApiFetch();

  function displayWeatherResults(data) {
    const iconsrc = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;
    const iconDesc = data.weather[0].description;
    weatherIcon.setAttribute('src', iconsrc);
    weatherIcon.setAttribute('alt', iconDesc);
    temperature.innerHTML = `Temp: ${data.main.temp}&deg;C`;
  }

  // Carrusel de imágenes
  const slides = document.querySelectorAll('.slide');
  let currentIndex = 0;

  function showSlide(index) {
    if (slides && slides.length > 0 && slides[index]) {
      slides.forEach(slide => slide.classList.remove('active'));
      slides[index].classList.add('active');
    }
  }

  function nextSlide() {
    if (slides && slides.length > 0) {
      currentIndex = (currentIndex + 1) % slides.length;
      showSlide(currentIndex);
    }
  }

  if (slides && slides.length > 0) {
    showSlide(currentIndex); // Mostrar la primera imagen al cargar
    setInterval(nextSlide, 3000); // Iniciar el carrusel automático
  }
});