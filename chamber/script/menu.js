document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.querySelector('.hamburger-menu button');
    const nav = document.querySelector('nav.main-nav');

    menuToggle.addEventListener('click', () => {
        nav.classList.toggle('open');
        menuToggle.classList.toggle('active');
    });
});