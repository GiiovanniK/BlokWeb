// Const, omdat variabele niet opnieuw wordt toegewezen aan een ander element. Hij blijft te allen tijden hetzelfde.

const navbar = document.querySelector(".nav-hamburger-mobile")
const hamburger = document.querySelector(".hamburger")
const transformHamburger = document.querySelector(".hamburger")

hamburger.addEventListener('click', () => {
    if (navbar.classList.contains("showNav")) {
        navbar.classList.toggle("closeNav")
        navbar.classList.remove("showNav")
    } else {
        navbar.classList.toggle("showNav")
        navbar.classList.remove("closeNav")
    }
});

disableScroll = _ => {
    document.body.classList.toggle('disableScroll');
}

hamburgerTransform = _ => {
    transformHamburger.classList.toggle("transformHamburger");
}