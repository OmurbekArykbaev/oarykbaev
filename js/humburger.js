const hum = document.querySelector('.humburger')
const navbar = document.querySelector('.header__navbar')
const container = document.getElementById('container')
let openMenu = false

hum.addEventListener('click', () => {
    if(!openMenu) {
        hum.classList.add('slide')
        navbar.classList.add('slide')
        document.body.style.overflow = 'hidden'
        openMenu = true
    } else {
        hum.classList.remove('slide')
        navbar.classList.remove('slide')
        document.body.style.overflow = ''
        openMenu = false
    }
})