const navbarToggle = document.getElementById('navbar__toggle');
const navbarClose = document.getElementById('navbar__close');
const navLink = document.querySelectorAll('.nav__link')
const button = document.getElementById('button')

function navBarToggle() {
    const nav = document.getElementById('nav')   
    const body = document.querySelector('body')
    nav.classList.add('active')
    body.style.overflow = 'hidden'
    
}

function navBarClose() {
    const nav = document.getElementById('nav') 
    const body = document.querySelector('body')  
    nav.classList.remove('active')
    body.style.overflow = 'visible'    
}

function darkMode(){
    const html = document.querySelector("html") 
    html.classList.toggle('dark-mode') 
}

navbarToggle.addEventListener('click', 
navBarToggle);

navbarClose.addEventListener('click', navBarClose);

button.addEventListener('click', darkMode);

navLink.forEach(n => n.addEventListener('click', toggleMenu));


