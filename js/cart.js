/* cart.js */
/* Author: Alexis Demetriou (G20970098) */
/* Email: ADemetriou5@uclan.ac.uk */

checkLocalStorage(); // Call listener function at run time

// When receiving data from a web server, the data is always a string, so you need to convert the data with JSON.parse(),
// and the data becomes a JavaScript object.
var storedProducts = JSON.parse(localStorage.cart);
var item_number = storedProducts.length, item_to_remove=0;

storedProducts.forEach(product=>{
    document.getElementById("cart_container").innerHTML += "<div class=\"flex-container\"><div class=\"item\">"+item_number+"</div><div class=\"item_image\">" +
        "<img class=\"cart_image\" alt=\"Product_Image\" src="+product[4]+" ><br/>" +product[1]+"</div><div class=\"item\"><strong>"+product[0]+"</strong></div>" +
        "<div class=\"item\">"+product[3]+"</div><div class=\"item\">\<a href='cart.html' onclick='removeItem("+item_to_remove+")'>" + "Remove" + "</a>" +
        "</div></div>"
    item_number--;
    item_to_remove++;
});

function clearBasket() {  // Function for deleting key/value in localStorage
    localStorage.removeItem('cart'); // The removeItem() method removes the specified Storage Object item.
    window.location.href = "cart.html"; // returns the href (URL) of the cart page (refreshes the page)
    checkLocalStorage(); // Call listener function at run time
}

function removeItem(item_to_remove) {  // Function for removing a product in localStorage
    storedProducts.splice(item_to_remove, 1); // The splice() method removes array element and overwrites the original array.
    localStorage.cart = JSON.stringify(storedProducts);
    checkLocalStorage(); // Call listener function at run time
}

function checkLocalStorage() { // Function for checking localStorage
    var src = "images/34568.png";
    if (localStorage.length === 0 || localStorage.cart === "[]") { // check if localStorage exists or the key/value
        // of localStorage is empty
        document.getElementById("hide").style.display = "none";
        document.getElementById("empty_container").innerHTML = "<img class='empty_cart_image' alt='Product_Image' src="+src+" >" +
            "<p class='warning_text'>Your cart is currently empty!</p><a href=\"products.html\" id='center_button' class=\"remove_product_cart_button\">Return To Shop</a>";
    }
}











