/* hamburger_menu.js */
/* Author: Alexis Demetriou (G20970098) */
/* Email: ADemetriou5@uclan.ac.uk */

var display_menu = false;
var x = window.matchMedia("(max-width: 700px)"); // The matchMedia() method returns a MediaQueryList with the
// results from the query.
show_hide_menu(x); // Call listener function at run time
x.addListener(show_hide_menu);
function show_hide_menu(x) { // Function for displaying/hiding the menu when using mobile device
    if (x.matches && display_menu === false) { // If media query matches
        // The display property hides the entire element
        document.getElementById("header-right").style.display = "none";

    }
    else {
        document.getElementById("header-right").style.display = "block";
    }
}

function click_button_action() { // Function for displaying/hiding the menu when clicking the hamburger menu
    display_menu = display_menu === false;
    show_hide_menu(x); // Call listener function at run time
}