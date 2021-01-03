const navbar = document.querySelector(".nav-hamburger-mobile");
const hamburger = document.querySelector(".hamburger");
const transformHamburger = document.querySelector(".hamburger");
const toggleImages = document.querySelector(
  ".SVGMarsMobile div:nth-of-type(1)"
);
const toggleImages2 = document.querySelector(
  ".SVGMarsMobile div:nth-of-type(2)"
);
const toggledInfo = document.querySelector(".toggled-info");
const info = document.querySelector(".mars-info");

hamburger.addEventListener("click", () => {
  if (navbar.classList.contains("showNav")) {
    navbar.classList.toggle("closeNav");
    navbar.classList.remove("showNav");
  } else {
    navbar.classList.toggle("showNav");
    navbar.classList.remove("closeNav");
  }
});

disableScroll = (_) => {
  document.body.classList.toggle("disableScroll");
};

hamburgerTransform = (_) => {
  transformHamburger.classList.toggle("transformHamburger");
};

toggleImage = (_) => {
  toggleImages.classList.toggle("showImageSVG");
  toggleImages2.classList.toggle("hideImageSVG");
  toggledInfo.classList.toggle("hideImageSVG");
  info.classList.toggle("showImageSVG");
};
