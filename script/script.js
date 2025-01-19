window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('shadow');
    } else {
        navbar.classList.remove('shadow');
    }
});

window.addEventListener('scroll', function() {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-link');

    let currentSection = '';

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (window.scrollY >= sectionTop - sectionHeight / 3) {
            currentSection = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('ssest');
        if (link.getAttribute('href').includes(currentSection)) {
            link.classList.add('ssest');
        }
    });
});
const navbar = document.querySelector('.navbar');
const navbarLogo = document.getElementById('navbar-logo');
const navLinks = document.querySelectorAll('.nav-link');
const navbarButton = document.getElementById('navbar-button');

const originalLogo = 'res/logo3.png'; 
const altLogo = 'res/logo2.png'; 

function updateNavbar() {
    const homeSection = document.querySelector('#home');
    const homeSectionTop = homeSection.offsetTop;
    const homeSectionHeight = homeSection.clientHeight;

    if (window.scrollY >= homeSectionTop && window.scrollY < homeSectionTop + homeSectionHeight) {
        navbar.classList.add('bg-transparent');
        navbar.classList.remove('bg-dark');
        navbarLogo.src = altLogo;
        navLinks.forEach(link => {
            link.style.color = 'black';
        });
        navbarButton.classList.add('home');
    } else {
        navbar.classList.remove('bg-transparent');
        navbar.classList.add('bg-dark');
        navbarLogo.src = originalLogo;
        navLinks.forEach(link => {
            link.style.color = 'white';
        });
        navbarButton.classList.remove('home');
    }
}
window.addEventListener('scroll', updateNavbar);
window.addEventListener('load', updateNavbar);
