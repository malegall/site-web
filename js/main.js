var typed = new Typed(".lg", {
    strings: ["Mathis", "\"MLG\""],
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