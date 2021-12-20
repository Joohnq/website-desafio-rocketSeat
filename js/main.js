const navbarToggle = document.getElementById('navbar__toggle');
const navbarClose = document.getElementById('navbar__close');
const navLink = document.querySelectorAll('.nav__link')
const button = document.getElementById('button')

function toggleMenu() {
    const nav = document.getElementById('nav')  
    nav.classList.toggle('active')  
}

function darkMode(){
    const html = document.querySelector("html") 
    html.classList.toggle('dark-mode') 
}

navbarToggle.addEventListener('click', toggleMenu);

navbarClose.addEventListener('click', toggleMenu);

navLink.forEach(n => n.addEventListener('click', toggleMenu));

