document.addEventListener('DOMContentLoaded', () => {
    fetch('data1/menu.json')
      .then(response => response.json())
      .then(menuData => {
        const menuContainer = document.getElementById('menu-container'); // Asegúrate de tener este ID en tu HTML
  
        if (menuContainer) {
          menuData.forEach(plato => {
            const platoDiv = document.createElement('div');
            platoDiv.classList.add('plato');
  
            const imagen = document.createElement('img');
            imagen.src = plato.image; // Usa 'plato.image' para la URL de la imagen
            imagen.alt = plato.name; // Usa 'plato.name' para el texto alternativo
  
            const infoDiv = document.createElement('div');
            infoDiv.classList.add('plato-info');
  
            const nombre = document.createElement('h3');
            nombre.textContent = plato.name; // Usa 'plato.name' para el nombre
  
            const descripcion = document.createElement('p');
            descripcion.textContent = plato.description; // Usa 'plato.description'
  
            const categoria = document.createElement('p');
            categoria.classList.add('categoria');
            categoria.textContent = `Categoría: ${plato.category}`; // Usa 'plato.category'
  
            const popularidad = document.createElement('p');
            popularidad.classList.add('popularidad');
            popularidad.textContent = `Popularity: ${'⭐'.repeat(plato.popularity)}`; // Usa 'plato.popularity'
  
            infoDiv.appendChild(nombre);
            infoDiv.appendChild(descripcion);
            infoDiv.appendChild(categoria);
            infoDiv.appendChild(popularidad);
  
            platoDiv.appendChild(imagen);
            platoDiv.appendChild(infoDiv);
  
            menuContainer.appendChild(platoDiv);
            
          });
        } else {
          console.error('No se encontró el contenedor del menú con ID "menu-container" en el HTML.');
        }
      })
      .catch(error => {
        console.error('Error al cargar el menú:', error);
      });
  });