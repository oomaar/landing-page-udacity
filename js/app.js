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
 * Define Global Variables :-
 * ==========================
 * 
 * navFragment is the empty fragment that holds the navItems.
 * pageSections are all the sections.
 * navUnorderdList is the nav ul.
 * navLinks are all the links `a`.
 * navButton is the responsive burger button.
*/
const navFragment = document.createDocumentFragment();
const pageSections = document.querySelectorAll('section');
const navUnorderdList = document.getElementById('navbar__list');
const navLinks = document.getElementsByClassName("menu__link");
const navButton = document.getElementById("burger");

/**
 * End Global Variables
 * Start Helper Functions
 *
*/

// function to Build the Navbar
const buildTheNav = () => {
    for (const section of pageSections) {
        // define navItem -> 'li' & navItemLink -> 'a'
        const navItem = document.createElement('li');
        const navItemLink = document.createElement('a');

        // Add menu__link class, set the link's text & set the href attribute dynamicly
        navItemLink.classList.add('menu__link');
        navItemLink.innerText = `${section.dataset.nav}`;
        navItemLink.setAttribute("href", `#${section.id}`);

        // Build the nav
        navItem.appendChild(navItemLink);
        navFragment.appendChild(navItem);
        navUnorderdList.append(navFragment);
    };
};

// Active Class
const activeClass = () => {
    // Loop over the sections
    for (const section of pageSections) {
        // rect is each section's boundingClientRect.
        // allNavLinks is the purpose to save the section id name into a variable.
        const rect = section.getBoundingClientRect();
        const allNavLinks = document.querySelectorAll(`[href="#${section.id}"]`);

        // loop over the links
        for (const link of allNavLinks) {
            // if the section's top is >= 0 and < 500
            (rect.top >= 0 && rect.top < 500) ? (
                // add active classes to targeted link and section
                `
                ${section.classList.add("your-active-class")}
                ${link.classList.add("menu__link__active")}
                `
            ) : (
                // else, remove the active class from all other sections
                `
                ${section.classList.remove("your-active-class")}
                ${link.classList.remove("menu__link__active")}
                `
            );
        };
    };
};

// Smooth Scroll
const smoothScroll = () => {
    // Loop over all links
    for (const link of navLinks) {
        // listen to the click event on a single link
        // 1- prevent the default
        // 2- store the section id in sectionID constatnt by getAttribute("href") and substring char[0] which is the `#`
        // 3- add the smooth scroll behavior to the selected section
        link.addEventListener("click", e => {
            e.preventDefault();
            const sectionID = e.target.getAttribute("href").substring(1);
            document.getElementById(`${sectionID}`).scrollIntoView({ behavior: "smooth" });
        });
    };
};

/**
 * End Helper Functions
 * Begin Main Functions
 *
*/

// build the nav
buildTheNav();

// Add class 'active' to section when near top of viewport
// Set sections as active
document.addEventListener('scroll', activeClass);

// Scroll to anchor ID using scrollTO event
// Scroll to section on link click
smoothScroll();

/**
 * End Main Functions
 * Begin Events
 *
*/

// Build menu
// Responsive Navbar
navButton.addEventListener("click", () => navUnorderdList.classList.toggle("toggle-show"));


// Extras

// scroll to top button
const scrollTopDiv = document.querySelector(".scroll-top");
const scrollTopLink = document.querySelector(".scroll-top-link");

window.onscroll = () => {
    if (window.pageYOffset > 300) {
        scrollTopDiv.style.display = "flex";
    } else {
        scrollTopDiv.style.display = "none";
    };
};

scrollTopLink.addEventListener("click", e => {
    e.preventDefault();
    document.querySelector(".main__hero").scrollIntoView({ behavior: "smooth", block: "center" });
});