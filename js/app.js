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
// const pageSections = document.querySelectorAll('section');
const navFragment = document.createDocumentFragment();
const pageSections = document.querySelectorAll('section');
const navUnorderdList = document.getElementById('navbar__list');

/**
 * End Global Variables
 * Start Helper Functions
 *
*/



/**
 * End Helper Functions
 * Begin Main Functions
 *
*/

// build the nav
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

// Add class 'active' to section when near top of viewport
document.addEventListener('scroll', () => {
    for (const section of pageSections) {
        const rect = section.getBoundingClientRect();
        const allNavLinks = document.querySelectorAll(`[href="#${section.id}"]`);

        for (const link of allNavLinks) {
            (rect.top >= 0 && rect.top < 500) ? (
                `
                ${section.classList.add("your-active-class")}
                ${link.classList.add("menu__link__active")}
                `
            ) : (
                `
                ${section.classList.remove("your-active-class")}
                ${link.classList.remove("menu__link__active")}
                `
            );
        };
    };
});

// Scroll to anchor ID using scrollTO event


/**
 * End Main Functions
 * Begin Events
 *
*/

// Build menu

// Scroll to section on link click

// Set sections as active


