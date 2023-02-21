const menuHamburger = document.querySelector(".menu")
const navLinks = document.querySelector(".links")

menuHamburger.addEventListener('click',()=>{
    navLinks.classList.toggle('mobile-menu')
})