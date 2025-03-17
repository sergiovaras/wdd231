const url = 'https://brotherblazzard.github.io/canvas-content/latter-day-prophets.json';
const cards =  document.getElementById('cards')

async function getProphetData(){
  const response= await fetch(url);
  const data = await response.json();
  console.table(data.prophets);
  displayProphets(data.prophets);
}

const displayProphets =(prophets) =>{
    prophets.forEach((prophet) => {
      let card = document.createElement('section');
      let fullName = document.createElement('h2');
      let portrait = document.createElement('img');
      let dateOfBirth = document.createElement('span');
      let placeOfBirth = document.createElement('span');

      fullName.textContent = `${prophet.name} ${prophet.lastname}`

      portrait.setAttribute('src',prophet.imageurl);
      portrait.setAttribute('alt',  `${prophet.name} ${prophet.lastname}`);
      portrait.setAttribute('loading', 'lazy');
      portrait.setAttribute('width','200');
      portrait.setAttribute('height','300');
      dateOfBirth.innerHTML = `Date of birth: ${prophet.birthdate}<br>`;
      placeOfBirth.innerHTML = `Place of birth: ${prophet.birthplace}<br>`;
      
      card.appendChild(fullName);
      card.appendChild(dateOfBirth);
      card.appendChild(placeOfBirth);
      card.appendChild(portrait);
      cards.appendChild(card);

    });
  
  
  }
  getProphetData()    