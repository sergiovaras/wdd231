// ....weather...
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


const day1 = document.querySelector("#day1");
const day2 = document.querySelector("#day2");
const day3 = document.querySelector("#day3");

const memberUrl = "./data/members.json";

async function forecastApiFetch() {
    try {
        const response = await fetch(forecastUrl);
        if (response.ok) {
          const forecastData = await response.json();
          console.log(forecastData)
          displayForecastResults(forecastData);
        } else {
            throw Error(await response.text());
        }
      } catch (error) {
          console.log(error);
      }
}

weatherApiFetch();
forecastApiFetch();

function displayWeatherResults(data) {
    const iconsrc = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;
    const iconDesc = data.weather[0].description;
    weatherIcon.setAttribute('src', iconsrc);
    weatherIcon.setAttribute('alt', iconDesc);
    temperature.innerHTML = `Temp: ${data.main.temp}&deg;C`;
    description.innerHTML = `${data.weather[0].description}`;
    sunrise.innerHTML = `Sunrise: ${unixTo24HourClock(data.sys.sunrise)}`;
    sunset.innerHTML = `Sunset: ${unixTo24HourClock(data.sys.sunset)}`;

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
const membersContainer = document.getElementById('members-container');
const gridViewButton = document.getElementById('grid-view');
const listViewButton = document.getElementById('list-view');
const listMembers = document.getElementById('list-members');
async function fetchMembers() {
  const response = await fetch('data/members.json');
  const members = await response.json();
  return members;
}

function displayMembers(members, view) {
  membersContainer.innerHTML = '';
  listMembers.innerHTML = '';
  members.forEach(member => {
    if (view === 'grid') {
      const card = document.createElement('div');
      card.classList.add('member-card');
      card.innerHTML = `
        <h3>${member.name}</h3>
        <img src="${member.image}" alt="${member.name}">
        <p>${member.address}</p>
        <p>${member.phone}</p>
        <a href="${member.website}">Sitio web</a>
      `;
      membersContainer.appendChild(card);
    } else {
      const listItem = document.createElement('div');
      listItem.classList.add('member-list-item');
      listItem.innerHTML = `
        <h3>${member.name}</h3>
        <p>${member.address}</p>
        <p>${member.phone}</p>
        <a href="${member.website}">Sitio web</a>
      `;
      membersContainer.appendChild(listItem);
    }
    const tr = document.createElement('tr');
        tr.innerHTML = `
            <td>${member.name}</td>
            <td>${member.address}</td>
            <td>${member.phone}</td>
            <td><a href="${member.website}">${member.website}</a></td>
        `;
        listMembers.appendChild(tr); 
    });
}


async function init() {
  const members = await fetchMembers();
  displayMembers(members, 'grid');
}

init();






  
async function displayFeaturedMembers() {
  const members = await fetchMembers();
  const featuredMembers = members.filter(member => member.membershipLevel === 'Oro' || member.membershipLevel === 'Plata');

  if (featuredMembers.length === 0) {
    return; //There are no featured members
  }

  const featuredContainer = document.getElementById('featured-members');
  featuredContainer.innerHTML = ''; //Clean the container

  // Randomly select 2 or 3 featured members
  const numFeatured = Math.min(3, featuredMembers.length);
  const selectedMembers = [];
  while (selectedMembers.length < numFeatured) {
    const randomIndex = Math.floor(Math.random() * featuredMembers.length);
    if (!selectedMembers.includes(featuredMembers[randomIndex])) {
      selectedMembers.push(featuredMembers[randomIndex]);
    }
  }

  // Create advertising cards
  selectedMembers.forEach(member => {
    const card = document.createElement('div');
    card.classList.add('featured-card');
    card.innerHTML = `
      <h2>${member.name}</h2>
      <img src="${member.image}" alt="${member.name}">
      <p>${member.address}</p>
      <p>${member.phone}</p>
      <a href="${member.website}">Sitio web</a>
      <p>Nivel: ${member.membershipLevel}</p>
    `;
    featuredContainer.appendChild(card);
  });
}

async function init() {
  // ... your existing code...
  displayFeaturedMembers();
};

const lastModified = document.lastModified;
document.getElementById('lastModified').textContent = lastModified;
function mostrarHora() {
  const ahora = new Date();
  const hora = ahora.toLocaleTimeString();
  document.getElementById('current_time').textContent = hora;
}

setInterval(mostrarHora, 1000); // Updates every second
mostrarHora(); // Displays the initial time