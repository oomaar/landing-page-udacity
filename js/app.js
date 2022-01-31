/**
 *
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 *
 * Dependencies: None
 *
 * JS Version: ES2015/ES6
 *
 * JS Standard: ESlint
 *
*/

/**
 * Comments should be present at the beginning of each procedure and class.
 * Great to have comments before crucial code sections within the procedure.
*/

/**
 * Define Global Variables
 *
*/
const sections = document.getElementsByTagName("section");
const fragment = document.createDocumentFragment();
const links = document.getElementsByTagName("a");

/**
 * End Global Variables
 * Start Helper Functions
 *
*/

const viewport = element => {
    let bounding = element.getBoundingClientRect();
    return (
        bounding.top >= 0 &&
        bounding.left >= 0 &&
        bounding.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        bounding.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
};

const activeFunction = () => {
    [...sections].map(section => {
        [...links].map(link => {
            // console.log(link.hash.slice(1, link.hash.length));
            // console.log(section.id);
            if (viewport(section)) {
                section.classList.add("your-active-class")
                section.id === link.hash.slice(1, link.hash.length) ? (
                    link.classList.add("menu__link__active")
                ) : (
                    link.classList.remove("menu__link__active")
                )
            } else {
                section.classList.remove("your-active-class")
            };
        })
    });
};

const scrollToFunction = e => {
    e.preventDefault();
    const sectionId = e.target.getAttribute("href").slice(1, e.target.getAttribute("href").length);
    document.getElementById(sectionId).scrollIntoView({ behavior: "smooth" });
};

/**
 * End Helper Functions
 * Begin Main Functions
 *
*/

// build the nav
[...sections].map(section => {
    const navListItem = document.createElement('li');
    const navLink = document.createElement('a');
    const navList = document.getElementById('navbar__list');

    navLink.classList.add('menu__link');
    navLink.innerText = section.id.charAt(0).toUpperCase() + section.id.slice(1, 7) + " " + section.id.slice(7, 8);
    navLink.setAttribute("href", `#${section.id}`);
    navListItem.appendChild(navLink);
    fragment.appendChild(navListItem);
    navList.append(fragment);
});

// Add class 'active' to section when near top of viewport
window.addEventListener("scroll", activeFunction);

// Scroll to anchor ID using scrollTO event
[...links].map(link => link.addEventListener("click", scrollToFunction));

/**
 * End Main Functions
 * Begin Events
 *
*/

// Build menu
document.getElementById("burger").addEventListener("click", () => document.getElementById("navbar__list").classList.toggle("toggle-show"));
