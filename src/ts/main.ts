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
