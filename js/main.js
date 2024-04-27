var typed = new Typed(".lg", {
    strings: ["Mathis.", "\"MLG\"."],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1500,
    loop: true
})

const navMenu = document.querySelector(".nav-menu")
const navToggle = document.querySelector(".nav-toggle")
const navClose = document.querySelector(".nav-close")
const navItems = document.querySelectorAll(".nav-item")
const navLinks = document.querySelectorAll(".nav-link")
const navbarHeight = document.querySelector(".nav").offsetHeight; // Hauteur de la navbar

if(navToggle){
    navToggle.addEventListener('click', () =>{
        navMenu.classList.toggle('open');
    })
}

if(navClose){
    navClose.addEventListener('click', () =>{
        navMenu.classList.remove('open');
    })
}

navLinks.forEach(item => {
    item.addEventListener('click', (event) => {
        event.preventDefault(); // Empêcher le comportement par défaut du lien
        const targetId = item.getAttribute("href"); // Récupérer l'ID de la cible
        const targetSection = document.querySelector(targetId); // Sélectionner la section cible
        const targetPosition = targetSection.offsetTop - navbarHeight; // Calculer la position de la section cible avec décalage

        // Faire défiler jusqu'à la section cible avec décalage
        window.scrollTo({
            top: targetPosition,
            behavior: "smooth" // Défilement fluide
        });
    });
    item.addEventListener('click', () => {
        navMenu.classList.remove('open');
    });
});

const btn_project1 = document.querySelector(".btn-project1")
const jsp = document.querySelector(".jsp-popup")

btn_project1.addEventListener('click', ()=>{
    jsp.classList.toggle('open');
})

const btn_project2 = document.querySelector(".btn-project2")
const teleport_georges = document.querySelector(".teleport-georges-popup")

btn_project2.addEventListener('click', ()=>{
    teleport_georges.classList.toggle('open');
})

const btn_project3 = document.querySelector(".btn-project3")
const el_gamal = document.querySelector(".el-gamal-popup")

btn_project3.addEventListener('click', ()=>{
    el_gamal.classList.toggle('open');
})

document.querySelector(".popup-close1").addEventListener("click", ()=>{
    jsp.classList.toggle('open');
})

document.querySelector(".popup-close2").addEventListener("click", ()=>{
    teleport_georges.classList.toggle('open');
})

document.querySelector(".popup-close3").addEventListener("click", ()=>{
    el_gamal.classList.toggle('open');
})

let img__slider = document.getElementsByClassName('img-slider');

let etape = 0;

let nbr__img = img__slider.length;

let precedent = document.querySelector('.slider-precedent');
let suivant = document.querySelector('.slider-suivant');

function enleverActiveImages() {
    for(let i = 0 ; i < nbr__img ; i++) {
        img__slider[i].classList.remove('active');
    }
}

suivant.addEventListener('click', function() {
    etape++;
    if(etape >= nbr__img) {
        etape = 0;
    }
    enleverActiveImages();
    img__slider[etape].classList.add('active');
})

precedent.addEventListener('click', function() {
    etape--;
    if(etape < 0) {
        etape = nbr__img - 1;
    }
    enleverActiveImages();
    img__slider[etape].classList.add('active');
})