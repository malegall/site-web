var typed = new Typed(".lg", {
    strings: ["Mathis.", "\"MLG\"."],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1500,
    loop: true
})

const menuHamburger = document.querySelector(".menu")
const navLinks = document.querySelector(".links")

menuHamburger.addEventListener('click',()=>{
    navLinks.classList.toggle('mobile-menu')
})

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