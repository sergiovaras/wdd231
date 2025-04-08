document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.querySelector('.hamburger-menu button');
    const nav = document.querySelector('nav.main-nav');

    menuToggle.addEventListener('click', () => {
        nav.classList.toggle('open');
        menuToggle.classList.toggle('active');
    });
});

const weatherIcon = document.querySelector("#weather-icon");
const temperature = document.querySelector("#temperature");
const description =  document.querySelector("#description");
const sunrise = document.querySelector("#sunrise");
const sunset = document.querySelector("#sunset");

const myKey = "d5441e180151f737d7e144f61bb784ab";
const lat = "-35.08";
const lon = "-57.51";

const url = `//api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${myKey}&units=metric`
const forecastUrl = `//api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${myKey}&units=metric`


function unixTo24HourClock(unixTime) {
    const date = new Date(unixTime * 1000); // Convert Unix time to milliseconds
    const hours = date.getHours().toString().padStart(2, '0'); // Get hours and pad with leading zero if needed
    const minutes = date.getMinutes().toString().padStart(2, '0'); // Get minutes and pad with leading zero if needed
    const seconds = date.getSeconds().toString().padStart(2, '0'); // Get seconds and pad with leading zero if needed
    return `${hours}:${minutes}:${seconds}`; // Format as HH:MM:SS
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
    description.innerHTML = `${data.weather[0].description}`;
    

}

function displayForecastResults(data) {
    const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const date = new Date();
    const tomorrow = (date.getDay()) +1;
    const dayAfterTomorrow = (date.getDay()) +2;

    day1.innerHTML = `Today: ${data.list[0].main.temp}&deg;C`;
    day2.innerHTML = `${daysOfWeek[tomorrow]}: ${data.list[6].main.temp}&deg;C`;
    day3.innerHTML = `${daysOfWeek[dayAfterTomorrow]}: ${data.list[14].main.temp}&deg;C`;

}  