
const hamburger = document.querySelector('hamburger');
const menu = document.querySelector('menu');



const cursos = [
    
];

const coursesList = document.getElementById('courses-list');
const filterButtons = document.querySelectorAll('#course-filters button');

function displayCourses(filteredCourses = cursos) {
    coursesList.innerHTML = ''; 

    filteredCourses.forEach(course => {
        const courseElement = document.createElement('div');
        courseElement.classList.add('course');
        if (course.completado) {
            courseElement.classList.add('completed');
        }

        courseElement.innerHTML = `
            <h3>${course.Título}</h3>
            <p>${course.Descripción}</p>
            <p>Asunto: ${course.Asunto}, Número: ${course.número}</p>
            <p>Tecnologías: ${course.tecnología.join(', ')}</p>
        `;

        coursesList.appendChild(courseElement);
    });
}

function filterCourses(filter) {
    if (filter === 'all') {
        displayCourses();
    } else {
        const filtered = cursos.filter(course => course.Asunto === filter);
        displayCourses(filtered);
    }
}

filterButtons.forEach(button => {
    button.addEventListener('click', () => {
        const filter = button.dataset.filter;
        filterCourses(filter);
    });
});