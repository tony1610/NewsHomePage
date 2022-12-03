const navExpand = document.querySelector(".hamburger-btn")
const navClose = document.querySelector(".nav__close")
const ulNav = document.querySelector(".ul--nav")
const containerOverlay = document.querySelector(".container")


navExpand.addEventListener("click", e =>{
    ulNav.classList.add("expand")
    containerOverlay.classList.add("overlay")
    navClose.style.opacity = 1
})

navClose.addEventListener("click", e =>{
    ulNav.classList.remove('expand')
    containerOverlay.classList.remove("overlay")
    navClose.style.opacity = 0
})