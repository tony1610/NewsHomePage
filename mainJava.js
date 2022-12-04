const navExpand = document.querySelector(".hamburger-btn")
const navClose = document.querySelector(".nav__close")
const ulNav = document.querySelector(".ul--nav")
const containerOverlay = document.querySelector(".container")


navExpand.addEventListener("click", e =>{
    ulNav.classList.add("expand")
    containerOverlay.classList.add("overlay")
    
    navExpand.style.display = "none"
    
    navClose.style.opacity = 1
    navClose.style.zIndex = 88888
})

navClose.addEventListener("click", e =>{
    ulNav.classList.remove('expand')
    containerOverlay.classList.remove("overlay")
    
    navExpand.style.display = document.querySelector('hamburger-btn')
    
    navClose.style.opacity = 0
    navClose.style.zIndex = -1
})
