var hamburgerBtn = document.querySelector('.hamburger');
var openMenu = document.querySelector('.nav-items');

hamburgerBtn.addEventListener('click', () => {
    openMenu.classList.toggle('showMenu');
});