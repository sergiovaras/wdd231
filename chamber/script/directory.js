const membersContainer = document.getElementById('members-container');
const gridViewButton = document.getElementById('grid-view');
const listViewButton = document.getElementById('list-view');

async function fetchMembers() {
  const response = await fetch('data/members.json');
  const members = await response.json();
  return members;
}

function displayMembers(members, view) {
  membersContainer.innerHTML = '';
  members.forEach(member => {
    if (view === 'grid') {
      const card = document.createElement('div');
      card.classList.add('member-card');
      card.innerHTML = `
        <h2>${member.name}</h2>
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
        <h2>${member.name}</h2>
        <p>${member.address}</p>
        <p>${member.phone}</p>
        <a href="${member.website}">Sitio web</a>
      `;
      membersContainer.appendChild(listItem);
    }
  });
}

async function init() {
  const members = await fetchMembers();
  displayMembers(members, 'grid');
}

init();

gridViewButton.addEventListener('click', () => {
  membersContainer.classList.remove('list-view');
  displayMembers(members, 'grid');
});

listViewButton.addEventListener('click', () => {
  membersContainer.classList.add('list-view');
  displayMembers(members, 'list');
});