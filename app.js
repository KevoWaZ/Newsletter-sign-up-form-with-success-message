let humberger = document.querySelector('.navbar-burger')
let navMenu = document.querySelector('.navbar-menu')

humberger.addEventListener('click', () => {
    navMenu.classList.toggle('is-active')
    humberger.classList.toggle('is-active')
})

