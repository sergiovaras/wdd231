const membersContainer = document.getElementById('members-container');
const gridViewButton = document.getElementById('grid-view');
const listViewButton = document.getElementById('list-view');
const listMembers = document.getElementById('list-members');
let members=[];

async function fetchMembers() {
  const response = await fetch('data/members.json');
  const data = await response.json();
  members = data;
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
        <a href="${member.website}"></a>
      `;
      membersContainer.appendChild(card);
    } else {
      const listItem = document.createElement('div');
      listItem.classList.add('member-list-item');
      listItem.innerHTML = `
        <h3>${member.name}</h3>
        <img src="${member.image}" alt="${member.name}">
        <p>${member.address}</p>
        <p>${member.phone}</p>
        <a href="${member.website}"></a>
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
await fetchMembers();
displayMembers(members, 'grid');




gridViewButton.addEventListener('click', async () => {
membersContainer.classList.remove('list-view');
displayMembers(members, 'grid');
});

listViewButton.addEventListener('click', async () => {
  membersContainer.classList.add('list-view');
  displayMembers(members, 'list');
});
}
init();

const lastModified = document.lastModified;
document.getElementById('lastModified').textContent = lastModified;
function mostrarHora() {
  const ahora = new Date();
  const hora = ahora.toLocaleTimeString();
  document.getElementById('current_time').textContent = hora;
}

setInterval(mostrarHora, 1000); // Actualiza cada segundo
mostrarHora(); // Muestra la hora inicial

