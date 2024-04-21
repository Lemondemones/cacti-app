type NavBar = HTMLElement | null;

const navMenu: NavBar = document.getElementById("nav-menu");
const navToggle: NavBar = document.getElementById("nav-toggle");
const navClose: NavBar = document.getElementById("nav-close");

if (navToggle) {
    navToggle.addEventListener("click", (): void => {
        navMenu?.classList.add("show-menu");
    });
}

if (navClose) {
    navClose.addEventListener("click", (): void => {
        navMenu?.classList.remove("show-menu");
    });
}

const navLink = document.querySelectorAll(".nav__link");

navLink.forEach((link) =>
    link.addEventListener("click", (): void => {
        navMenu?.classList.remove("show-menu");
    })
);

const handleBlurHeader = function (): void {
    const header = document.getElementById("header");
    window.scrollY >= 50
        ? header?.classList.add("blur-header")
        : header?.classList.remove("blur-header");
};

window.addEventListener("scroll", handleBlurHeader);
