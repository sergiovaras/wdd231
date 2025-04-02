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
        <a href="${member.website}">Website</a>
      `;
      membersContainer.appendChild(card);
    } else {
      const listItem = document.createElement('div');
      listItem.classList.add('member-list-item');
      listItem.innerHTML = `
        <h3>${member.name}</h3>
        <p>${member.address}</p>
        <p>${member.phone}</p>
        <a href="${member.website}">Website</a>
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

gridViewButton.addEventListener('click', async () => {
    membersContainer.classList.remove('list-view');
    await displayMembers(members, 'grid');
});

listViewButton.addEventListener('click', async () => {
    membersContainer.classList.add('list-view');
    await displayMembers(members, 'list');
});

const lastModified = document.lastModified;
document.getElementById('lastModified').textContent = lastModified;
function mostrarHora() {
  const ahora = new Date();
  const hora = ahora.toLocaleTimeString();
  document.getElementById('current time').textContent = hora;
}

setInterval(mostrarHora, 1000); // Actualiza cada segundo
mostrarHora(); // Muestra la hora inicial

