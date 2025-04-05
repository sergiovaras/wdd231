document.addEventListener("DOMContentLoaded", function () {
    const gridContainer = document.querySelector(".grid-container");
    
    
    while (gridContainer.firstChild) {
        gridContainer.removeChild(gridContainer.firstChild);
    }
    
    
    const placeholder = document.createElement('div');
    placeholder.classList.add('grid-placeholder');
    placeholder.textContent = 'Loading content...';
    gridContainer.appendChild(placeholder);

    fetch("data/discover.json")
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => { 
            gridContainer.innerHTML = '';
            if (!Array.isArray(data.items)) {
                throw new Error('Invalid data format: expected items array');
            }

            const fragment = document.createDocumentFragment();
            
            data.items.forEach(item => {
                // Validar datos básicos del item
                if (!item.name || !item.image) {
                    console.warn('Invalid item data:', item);
                    return; 
                }

                const card = document.createElement("article");
                card.classList.add("grid-item");
                
                // Title
                const h2 = document.createElement('h2');
                h2.textContent = item.name || 'Unnamed location';
                
                // Imagen
                const figure = document.createElement('figure');
                const img = document.createElement('img');
                img.src = item.image;
                img.alt = item.name || 'Location image';
                img.width = 300;
                img.height = 200;
                img.decoding = "async";
                img.loading = "lazy";
                img.style.opacity = 0;
                img.addEventListener('load', () => {
                    img.style.opacity = 1;
                    img.style.transition = 'opacity 0.5s ease';
                });
                figure.appendChild(img);
                
                // Dirección
                const address = document.createElement('address');
                address.textContent = item.address || 'Address not available';
                
                // Descripción
                const p = document.createElement('p');
                p.textContent = item.description || 'No description provided';
                
                // Botón
                const button = document.createElement('button');
                button.setAttribute('aria-label', `Learn more about ${item.name}`);
                const a = document.createElement('a');
                a.href = item.link || "https://turismomagdalena.gob.ar/";
                a.target = "_blank";
                a.rel = "noopener noreferrer";
                a.textContent = "learn more";
                button.appendChild(a);
                
                // Ensamblar tarjeta
                card.append(h2, figure, address, p, button);
                fragment.appendChild(card);
            });
            
            gridContainer.appendChild(fragment);
        })
        .catch(error => {
            console.error("Error loading data:", error);
            gridContainer.innerHTML = '';
            
            const errorMsg = document.createElement('div');
            errorMsg.classList.add('error-message');
            errorMsg.innerHTML = `
                <p>Failed to load content. Please try again later.</p>
                <button onclick="window.location.reload()">Retry</button>
            `;
            gridContainer.appendChild(errorMsg);
        });

    // Visitor Message 
    const visitorMessage = document.getElementById("visitor-message");
    if (visitorMessage) {  
        const lastVisit = localStorage.getItem("lastVisit");
        const currentDate = Date.now();
        const oneDay = 24 * 60 * 60 * 1000; 

        if (!lastVisit) {
            visitorMessage.textContent = "Welcome! Let us know if you have any questions.";
        } else {
            const daysDifference = Math.round((currentDate - parseInt(lastVisit)) / oneDay);
            
            if (daysDifference === 0) {
                visitorMessage.textContent = "Back so soon! Awesome!";
            } else if (daysDifference === 1) {
                visitorMessage.textContent = "You last visited yesterday.";
            } else {
                visitorMessage.textContent = `You last visited ${daysDifference} days ago.`;
            }
        }
        
        localStorage.setItem("lastVisit", currentDate.toString());
    }
});