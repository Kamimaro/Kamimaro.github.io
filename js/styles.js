/* responsividade do manu */

let show = true;

const menuSection = document.querySelector('.right')
const menuToggle = document.querySelector('.menu-toggle')

menuToggle.addEventListener('click', () => {
    menuSection.classList.toggle('active', show)
    show = !show;
    
})