# Project Description

This is the first project in the Udacity course, Web Development Professional Track.

Basically it's a Multi-section landing page, with:-

<ol>
<li> A dynamically updating navigational menu.</li>
<li> Sections are Highlighted while scrolling through the page, as well as the NavLinks.</li>
<li>When clicking a link from the navigation menu, the link scrolls to the appropriate section in a light smooth way.</li>
<li> The layout of the landing page is Responsive across all devices.</li>
<li>The scroll to top button is only visible when the user scrolls below the fold of the page and has smooth scroll functionality.</li>
</ol>

# Made Possible by the following

1. The first function (buildTheNav) in the JS file generates the navlinks dynamically, each section added to the page, the link generates automatic.

2. The Second function (activeClass) in the JS file defines the position of each section using the JS Method (getBoundingClientRect()), defines every section's id and finally checks for the condition were only the clicked section is active (by adding the `your-active-class` to the section's class list) and removes the active class from all other sections & also highlights the clicked link in the navbar by adding the (menu__link__active) class to the link's classList.

3. The (smoothScroll) function in the JS file adds an eventListner to the activelink, listens to a click event and processing a callback function that defines the sectionID and making a smooth scroll behavior happen by using scrollIntoView.

4. The navigation bar is responsive across all the devices, by adding a media query case in the CSS file hides the navbar, make a burger button visable. Thats the first part, the second part is in the JS file, An eventListner is added to the burger button listening to a click, toggle a class to display the navbar horizontaly or make the navbar disappear.

5. The scroll to top link is added by adding a div in the HTML file containg a link with an arrow up as a text,
making the div look pretty using some minimal CSS lines & adds a smooth scroll to top behavior when clicking on the link in the JS file (The link is only visable when the user scrolls a little bit from the top of the screen and this is done in the JS file by using the onScroll Method and window.pageYOffset).

<img src="/img/1.jpg" width=550>
<img src="/img/2.jpg" width=550>
<img src="/img/3.jpg" width=550>