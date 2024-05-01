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

const scrollUp = function (): void {
    const scrollUp = document.getElementById("scroll-up");
    window.scrollY >= 350
        ? scrollUp?.classList.add("show-scroll")
        : scrollUp?.classList.remove("show-scroll");
};
window.addEventListener("scroll", scrollUp);

const sections = document.querySelectorAll("section[id]");
const scrollActive = (): void => {
    const scrollDown = window.scrollY;

    sections.forEach((current: Element) => {
        const sectionHeight = (current as HTMLElement).offsetHeight,
            sectionTop = (current as HTMLElement).offsetTop - 58,
            sectionId = current.getAttribute("id"),
            sectionClass = document.querySelector(".nav__menu a[href*='" + sectionId + "']");
        if (scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight) {
            sectionClass?.classList.add("active-link");
        } else {
            sectionClass?.classList.remove("active-link");
        }
    });
};
window.addEventListener("scroll", scrollActive);
