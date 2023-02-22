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
