const menu = document.getElementById('menu')
const navContainer = document.querySelector('.nav-container')
const navbar = document.querySelector('.navbar')
const navLinks = document.querySelectorAll('.nav-link')
const mainItems = document.querySelectorAll('#hero .item img')
const animationEls = document.querySelectorAll('.animation')

checkAnimation()
window.addEventListener('scroll', checkAnimation)

menu.addEventListener('click', () => {
    navbar.classList.toggle('active')
    navContainer.classList.toggle('active')
})

navLinks.forEach(navlink => {
    navlink.addEventListener('click', () => {
        navbar.classList.remove('active')
        navContainer.classList.remove('active')
    })
})

mainItems.forEach(item => {
    item.addEventListener('click', () => {
        item.classList.add('active')
    })
    item.addEventListener('animationend', () => {
        item.classList.remove('active')
    })
})

function checkAnimation() {
    const triggerBottom = (window.innerHeight / 5) * 4

    animationEls.forEach(el => {
        const contTop = el.getBoundingClientRect().top

        if (contTop < triggerBottom && contTop > -triggerBottom) {
            el.classList.add('active')
        } else {
            el.classList.remove('active')
        }
    })
}


