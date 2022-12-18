/* item.js */
/* Author: Alexis Demetriou (G20970098) */
/* Email: ADemetriou5@uclan.ac.uk */

// When receiving data from a web server, the data is always a string, so you need to convert the data with JSON.parse(),
// and the data becomes a JavaScript object.
var item = JSON.parse(sessionStorage.selected);
var item_to_buy = sessionStorage.selected;

document.getElementById("card").innerHTML += "<div class='card_info'> <img class='image' alt='Product_Image' src="+item[4]+"> <div class=\"products_info\"> <h2 class=\"heading\">" +
    item[0] + " - " + item[1] + "</h2><p class=\"description\">" + item[2] + " " + "</p><p class=\"price\">" + item[3] + "</p><p class=\"button\"><button onclick='addToCart("+item_to_buy+")'>Buy</button></p></div></div>";

function addToCart(item_to_buy) { // Function for storing products in localStorage
    // The localStorage object allows you to save key/value pairs in the browser
    if (localStorage.cart) {
        storedCart = JSON.parse(localStorage.cart);
    }
    else {
        storedCart = [];
    }

    alert("Your product has been added to the cart!"); // The alert() method displays an alert box with a message and an OK button.
    storedCart.unshift(item_to_buy); // The unshift() method adds new products to the beginning of an array

    localStorage.cart = JSON.stringify(storedCart); // Send data to a web server by converting the JavaScript object
    // to a string using JSON.stringify().
}