/* products.js */
/* Author: Alexis Demetriou (G20970098) */
/* Email: ADemetriou5@uclan.ac.uk */

const hoodies = [
    ['UCLan Hoodie','Purple','cotton authentic character and practicality are combined in this comfy  warm and luxury hoodie for students that goes with everything to create casual looks',' Only £39.99','images/items/hoodies/hoodie%20(1).jpg'],
    ['UCLan Hoodie','Light Blue','cotton authentic character and practicality are combined in this comfy  warm and luxury hoodie for students that goes with everything to create casual looks',' Only £39.99','images/items/hoodies/hoodie%20(2).jpg'],
    ['UCLan Hoodie','Green','cotton authentic character and practicality are combined in this comfy  warm and luxury hoodie for students that goes with everything to create casual looks',' Only £39.99','images/items/hoodies/hoodie%20(3).jpg'],
    ['UCLan Hoodie','Dark Grey','cotton authentic character and practicality are combined in this comfy  warm and luxury hoodie for students that goes with everything to create casual looks',' Only £39.99','images/items/hoodies/hoodie%20(4).jpg'],
    ['UCLan Hoodie','Black','cotton authentic character and practicality are combined in this comfy  warm and luxury hoodie for students that goes with everything to create casual looks',' Only £39.99','images/items/hoodies/hoodie%20(5).jpg'],
    ['UCLan Hoodie','Salmon','cotton authentic character and practicality are combined in this comfy  warm and luxury hoodie for students that goes with everything to create casual looks',' Only £39.99','images/items/hoodies/hoodie%20(6).jpg'],
    ['UCLan Hoodie','Burgundy','cotton authentic character and practicality are combined in this comfy  warm and luxury hoodie for students that goes with everything to create casual looks',' Only £39.99','images/items/hoodies/hoodie%20(7).jpg'],
    ['UCLan Hoodie','Light Grey','cotton authentic character and practicality are combined in this comfy  warm and luxury hoodie for students that goes with everything to create casual looks',' Only £39.99','images/items/hoodies/hoodie%20(8).jpg'],
    ['UCLan Hoodie','Slate Blue','cotton authentic character and practicality are combined in this comfy  warm and luxury hoodie for students that goes with everything to create casual looks',' Only £39.99','images/items/hoodies/hoodie%20(9).jpg'],
    ['UCLan Hoodie','Orange','cotton authentic character and practicality are combined in this comfy  warm and luxury hoodie for students that goes with everything to create casual looks',' Only £39.99','images/items/hoodies/hoodie%20(10).jpg'],
    ['UCLan Hoodie','Teal','cotton authentic character and practicality are combined in this comfy  warm and luxury hoodie for students that goes with everything to create casual looks',' Only £39.99','images/items/hoodies/hoodie%20(11).jpg'],
    ['UCLan Hoodie','Navy','cotton authentic character and practicality are combined in this comfy  warm and luxury hoodie for students that goes with everything to create casual looks',' Only £39.99','images/items/hoodies/hoodie%20(12).jpg'],
    ['UCLan Hoodie','Orange','cotton authentic character and practicality are combined in this comfy  warm and luxury hoodie for students that goes with everything to create casual looks',' Only £39.99','images/items/hoodies/hoodie%20(13).jpg'],
    ['UCLan Hoodie','Creame','cotton authentic character and practicality are combined in this comfy  warm and luxury hoodie for students that goes with everything to create casual looks',' Only £39.99','images/items/hoodies/hoodie%20(14).jpg'],
    ['UCLan Hoodie','Lime','cotton authentic character and practicality are combined in this comfy  warm and luxury hoodie for students that goes with everything to create casual looks',' Only £39.99','images/items/hoodies/hoodie%20(15).jpg'],
    ['UCLan Hoodie','Off Blue','cotton authentic character and practicality are combined in this comfy  warm and luxury hoodie for students that goes with everything to create casual looks',' Only £39.99','images/items/hoodies/hoodie%20(16).jpg'],
    ['UCLan Hoodie','Red','cotton authentic character and practicality are combined in this comfy  warm and luxury hoodie for students that goes with everything to create casual looks',' Only £39.99','images/items/hoodies/hoodie%20(17).jpg'],
    ['UCLan Hoodie','Charcoal','cotton authentic character and practicality are combined in this comfy  warm and luxury hoodie for students that goes with everything to create casual looks',' Only £39.99','images/items/hoodies/hoodie%20(18).jpg'],
    ['UCLan Hoodie','Navy Blue','cotton authentic character and practicality are combined in this comfy  warm and luxury hoodie for students that goes with everything to create casual looks',' Only £39.99','images/items/hoodies/hoodie%20(19).jpg'],
    ['UCLan Hoodie','Lighter Grey','cotton authentic character and practicality are combined in this comfy  warm and luxury hoodie for students that goes with everything to create casual looks',' Only £39.99','images/items/hoodies/hoodie%20(20).jpg'],
    ['UCLan Hoodie','New Blue','cotton authentic character and practicality are combined in this comfy  warm and luxury hoodie for students that goes with everything to create casual looks',' Only £39.99','images/items/hoodies/hoodie%20(21).jpg'],
    ['UCLan Hoodie','Forest Green','cotton authentic character and practicality are combined in this comfy  warm and luxury hoodie for students that goes with everything to create casual looks',' Only £39.99','images/items/hoodies/hoodie%20(22).jpg'],
    ['UCLan Hoodie','Ocean Blue','cotton authentic character and practicality are combined in this comfy  warm and luxury hoodie for students that goes with everything to create casual looks',' Only £39.99','images/items/hoodies/hoodie%20(23).jpg'],
    ['UCLan Hoodie','Pink','cotton authentic character and practicality are combined in this comfy  warm and luxury hoodie for students that goes with everything to create casual looks',' Only £39.99','images/items/hoodies/hoodie%20(24).jpg'],
    ['UCLan Hoodie','Orange New','cotton authentic character and practicality are combined in this comfy  warm and luxury hoodie for students that goes with everything to create casual looks',' Only £39.99','images/items/hoodies/hoodie%20(25).jpg'],
    ['UCLan Hoodie','Black','cotton authentic character and practicality are combined in this comfy  warm and luxury hoodie for students that goes with everything to create casual looks',' Only £39.99','images/items/hoodies/hoodie%20(26).jpg'],
    ['UCLan Hoodie','Light Off Grey','cotton authentic character and practicality are combined in this comfy  warm and luxury hoodie for students that goes with everything to create casual looks',' Only £39.99','images/items/hoodies/hoodie%20(27).jpg'],
    ['UCLan Hoodie','Rusty Red','cotton authentic character and practicality are combined in this comfy  warm and luxury hoodie for students that goes with everything to create casual looks',' Only £39.99','images/items/hoodies/hoodie%20(28).jpg'],
    ['UCLan Hoodie','Slate Grey','cotton authentic character and practicality are combined in this comfy  warm and luxury hoodie for students that goes with everything to create casual looks',' Only £39.99','images/items/hoodies/hoodie%20(29).jpg'],
    ['UCLan Hoodie','Bright Green','cotton authentic character and practicality are combined in this comfy  warm and luxury hoodie for students that goes with everything to create casual looks',' Only £39.99','images/items/hoodies/hoodie%20(30).jpg'],
    ['UCLan Hoodie','Bright Pink','cotton authentic character and practicality are combined in this comfy  warm and luxury hoodie for students that goes with everything to create casual looks',' Only £39.99','images/items/hoodies/hoodie%20(31).jpg'],
    ['UCLan Hoodie','Burgundy New','cotton authentic character and practicality are combined in this comfy  warm and luxury hoodie for students that goes with everything to create casual looks',' Only £39.99','images/items/hoodies/hoodie%20(32).jpg'],
    ['UCLan Hoodie','Navy New','cotton authentic character and practicality are combined in this comfy  warm and luxury hoodie for students that goes with everything to create casual looks',' Only £39.99','images/items/hoodies/hoodie%20(33).jpg'],
    ['UCLan Hoodie','Bright Green','cotton authentic character and practicality are combined in this comfy  warm and luxury hoodie for students that goes with everything to create casual looks',' Only £39.99','images/items/hoodies/hoodie%20(34).jpg']
];

const jumpers = [
    ['UCLan Logo Jumper','Purple','cotton authentic character and practicality are combined in this winter jumper for students that goes with everything to create casual looks',' Only £29.99','images/items/jumpers/jumper%20(1).jpg'],
    ['UCLan Logo Jumper','Rusty Red','cotton authentic character and practicality are combined in this winter jumper for students that goes with everything to create casual looks',' Only £29.99','images/items/jumpers/jumper%20(2).jpg'],
    ['UCLan Logo Jumper','Water Blue','cotton authentic character and practicality are combined in this winter jumper for students that goes with everything to create casual looks',' Only £29.99','images/items/jumpers/jumper%20(3).jpg'],
    ['UCLan Logo Jumper','White','cotton authentic character and practicality are combined in this winter jumper for students that goes with everything to create casual looks',' Only £29.99','images/items/jumpers/jumper%20(4).jpg'],
    ['UCLan Logo Jumper','Pink','cotton authentic character and practicality are combined in this winter jumper for students that goes with everything to create casual looks',' Only £29.99','images/items/jumpers/jumper%20(5).jpg'],
    ['UCLan Logo Jumper','Black','cotton authentic character and practicality are combined in this winter jumper for students that goes with everything to create casual looks',' Only £29.99','images/items/jumpers/jumper%20(6).jpg'],
    ['UCLan Logo Jumper','Old Blue','cotton authentic character and practicality are combined in this winter jumper for students that goes with everything to create casual looks',' Only £29.99','images/items/jumpers/jumper%20(7).jpg'],
    ['UCLan Logo Jumper','Dark Grey ','cotton authentic character and practicality are combined in this winter jumper for students that goes with everything to create casual looks',' Only £29.99','images/items/jumpers/jumper%20(8).jpg'],
    ['UCLan Logo Jumper','Red','cotton authentic character and practicality are combined in this winter jumper for students that goes with everything to create casual looks',' Only £29.99','images/items/jumpers/jumper%20(9).jpg'],
    ['UCLan Logo Jumper','Brown','cotton authentic character and practicality are combined in this winter jumper for students that goes with everything to create casual looks',' Only £29.99','images/items/jumpers/jumper%20(10).jpg'],
    ['UCLan Logo Jumper','Green','cotton authentic character and practicality are combined in this winter jumper for students that goes with everything to create casual looks',' Only £29.99','images/items/jumpers/jumper%20(11).jpg'],
    ['UCLan Logo Jumper','Dark Red','cotton authentic character and practicality are combined in this winter jumper for students that goes with everything to create casual looks',' Only £29.99','images/items/jumpers/jumper%20(12).jpg'],
    ['UCLan Logo Jumper','Yellow','cotton authentic character and practicality are combined in this winter jumper for students that goes with everything to create casual looks',' Only £29.99','images/items/jumpers/jumper%20(13).jpg'],
    ['UCLan Logo Jumper','Light Grey','cotton authentic character and practicality are combined in this winter jumper for students that goes with everything to create casual looks',' Only £29.99','images/items/jumpers/jumper%20(14).jpg'],
    ['UCLan Logo Jumper','Light Green','cotton authentic character and practicality are combined in this winter jumper for students that goes with everything to create casual looks',' Only £29.99','images/items/jumpers/jumper%20(15).jpg'],
    ['UCLan Logo Jumper','Old Red','cotton authentic character and practicality are combined in this winter jumper for students that goes with everything to create casual looks',' Only £29.99','images/items/jumpers/jumper%20(16).jpg'],
    ['UCLan Logo Jumper','Light Purple','cotton authentic character and practicality are combined in this winter jumper for students that goes with everything to create casual looks',' Only £29.99','images/items/jumpers/jumper%20(17).jpg'],
    ['UCLan Logo Jumper','Slate Blue','cotton authentic character and practicality are combined in this winter jumper for students that goes with everything to create casual looks',' Only £29.99','images/items/jumpers/jumper%20(18).jpg'],
    ['UCLan Logo Jumper','Real Red','cotton authentic character and practicality are combined in this winter jumper for students that goes with everything to create casual looks',' Only £29.99','images/items/jumpers/jumper%20(19).jpg'],
    ['UCLan Logo Jumper','Old Pink','cotton authentic character and practicality are combined in this winter jumper for students that goes with everything to create casual looks',' Only £29.99','images/items/jumpers/jumper%20(20).jpg'],
    ['UCLan Logo Jumper','Slate Grey','cotton authentic character and practicality are combined in this winter jumper for students that goes with everything to create casual looks',' Only £29.99','images/items/jumpers/jumper%20(21).jpg'],
    ['UCLan Logo Jumper','Bright Green','cotton authentic character and practicality are combined in this winter jumper for students that goes with everything to create casual looks',' Only £29.99','images/items/jumpers/jumper%20(22).jpg'],
    ['UCLan Logo Jumper','Teal','cotton authentic character and practicality are combined in this winter jumper for students that goes with everything to create casual looks',' Only £29.99','images/items/jumpers/jumper%20(23).jpg'],
    ['UCLan Logo Jumper','Sky Blue','cotton authentic character and practicality are combined in this winter jumper for students that goes with everything to create casual looks',' Only £29.99','images/items/jumpers/jumper%20(24).jpg'],
    ['UCLan Logo Jumper','Sunshine Pink','cotton authentic character and practicality are combined in this winter jumper for students that goes with everything to create casual looks',' Only £29.99','images/items/jumpers/jumper%20(25).jpg'],
    ['UCLan Logo Jumper','Bronze','cotton authentic character and practicality are combined in this winter jumper for students that goes with everything to create casual looks',' Only £29.99','images/items/jumpers/jumper%20(26).jpg'],
    ['UCLan Logo Jumper','Olive Green','cotton authentic character and practicality are combined in this winter jumper for students that goes with everything to create casual looks',' Only £29.99','images/items/jumpers/jumper%20(27).jpg'],
    ['UCLan Logo Jumper','Bright White Green','cotton authentic character and practicality are combined in this winter jumper for students that goes with everything to create casual looks',' Only £29.99','images/items/jumpers/jumper%20(28).jpg'],
    ['UCLan Logo Jumper','Navy Blue','cotton authentic character and practicality are combined in this winter jumper for students that goes with everything to create casual looks',' Only £29.99','images/items/jumpers/jumper%20(29).jpg'],
    ['UCLan Logo Jumper','Rusty Orange','cotton authentic character and practicality are combined in this winter jumper for students that goes with everything to create casual looks',' Only £29.99','images/items/jumpers/jumper%20(30).jpg'],
    ['UCLan Logo Jumper','Bright Orange','cotton authentic character and practicality are combined in this winter jumper for students that goes with everything to create casual looks',' Only £29.99','images/items/jumpers/jumper%20(31).jpg'],
    ['UCLan Logo Jumper','Sky Purple','cotton authentic character and practicality are combined in this winter jumper for students that goes with everything to create casual looks',' Only £29.99','images/items/jumpers/jumper%20(32).jpg'],
    ['UCLan Logo Jumper','Really Red','cotton authentic character and practicality are combined in this winter jumper for students that goes with everything to create casual looks',' Only £29.99','images/items/jumpers/jumper%20(33).jpg'],
    ['UCLan Logo Jumper','Plum Purple','cotton authentic character and practicality are combined in this winter jumper for students that goes with everything to create casual looks',' Only £29.99','images/items/jumpers/jumper%20(34).jpg'],
    ['UCLan Logo Jumper','Dark Purple','cotton authentic character and practicality are combined in this winter jumper for students that goes with everything to create casual looks',' Only £29.99','images/items/jumpers/jumper%20(35).jpg'],
    ['UCLan Logo Jumper','Vibrant Red','cotton authentic character and practicality are combined in this winter jumper for students that goes with everything to create casual looks',' Only £29.99','images/items/jumpers/jumper%20(36).jpg'],
    ['UCLan Logo Jumper','Ocean Blue','cotton authentic character and practicality are combined in this winter jumper for students that goes with everything to create casual looks',' Only £29.99','images/items/jumpers/jumper%20(37).jpg'],
    ['UCLan Logo Jumper','Creame','cotton authentic character and practicality are combined in this winter jumper for students that goes with everything to create casual looks',' Only £29.99','images/items/jumpers/jumper%20(38).jpg'],
    ['UCLan Logo Jumper','Lighter Blue','cotton authentic character and practicality are combined in this winter jumper for students that goes with everything to create casual looks',' Only £29.99','images/items/jumpers/jumper%20(39).jpg'],
    ['UCLan Logo Jumper','Light Grey','cotton authentic character and practicality are combined in this winter jumper for students that goes with everything to create casual looks',' Only £29.99','images/items/jumpers/jumper%20(40).jpg']
];

const t_shirts = [
    ['UCLan Logo Tshirt','Navy Blue New','cotton authentic character and practicality are combined in this summery t-shirt for students that goes with everything to create casual looks. Perfect for those summer days',' Only £19.99','images/items/tshirts/tshirt%20(1).jpg'],
    ['UCLan Logo Tshirt','Rusty Red New','cotton authentic character and practicality are combined in this summery t-shirt for students that goes with everything to create casual looks. Perfect for those summer days',' Only £19.99','images/items/tshirts/tshirt%20(2).jpg'],
    ['UCLan Logo Tshirt','Burgundy','cotton authentic character and practicality are combined in this summery t-shirt for students that goes with everything to create casual looks. Perfect for those summer days',' Only £19.99','images/items/tshirts/tshirt%20(3).jpg'],
    ['UCLan Logo Tshirt','Pink','cotton authentic character and practicality are combined in this summery t-shirt for students that goes with everything to create casual looks. Perfect for those summer days',' Only £19.99','images/items/tshirts/tshirt%20(4).jpg'],
    ['UCLan Logo Tshirt','Teal','cotton authentic character and practicality are combined in this summery t-shirt for students that goes with everything to create casual looks. Perfect for those summer days',' Only £19.99','images/items/tshirts/tshirt%20(5).jpg'],
    ['UCLan Logo Tshirt','Black','cotton authentic character and practicality are combined in this summery t-shirt for students that goes with everything to create casual looks. Perfect for those summer days',' Only £19.99','images/items/tshirts/tshirt%20(6).jpg'],
    ['UCLan Logo Tshirt','Old Red','cotton authentic character and practicality are combined in this summery t-shirt for students that goes with everything to create casual looks. Perfect for those summer days',' Only £19.99','images/items/tshirts/tshirt%20(7).jpg'],
    ['UCLan Logo Tshirt','Grey','cotton authentic character and practicality are combined in this summery t-shirt for students that goes with everything to create casual looks. Perfect for those summer days',' Only £19.99','images/items/tshirts/tshirt%20(8).jpg'],
    ['UCLan Logo Tshirt','Red','cotton authentic character and practicality are combined in this summery t-shirt for students that goes with everything to create casual looks. Perfect for those summer days',' Only £19.99','images/items/tshirts/tshirt%20(9).jpg'],
    ['UCLan Logo Tshirt','Brown','cotton authentic character and practicality are combined in this summery t-shirt for students that goes with everything to create casual looks. Perfect for those summer days',' Only £19.99','images/items/tshirts/tshirt%20(10).jpg'],
    ['UCLan Logo Tshirt','Pdark Purple','cotton authentic character and practicality are combined in this summery t-shirt for students that goes with everything to create casual looks. Perfect for those summer days',' Only £19.99','images/items/tshirts/tshirt%20(11).jpg'],
    ['UCLan Logo Tshirt','Yellow','cotton authentic character and practicality are combined in this summery t-shirt for students that goes with everything to create casual looks. Perfect for those summer days',' Only £19.99','images/items/tshirts/tshirt%20(12).jpg'],
    ['UCLan Logo Tshirt','Mustard Yellow','cotton authentic character and practicality are combined in this summery t-shirt for students that goes with everything to create casual looks. Perfect for those summer days',' Only £19.99','images/items/tshirts/tshirt%20(13).jpg'],
    ['UCLan Logo Tshirt','Dark Grey','cotton authentic character and practicality are combined in this summery t-shirt for students that goes with everything to create casual looks. Perfect for those summer days',' Only £19.99','images/items/tshirts/tshirt%20(14).jpg'],
    ['UCLan Logo Tshirt','Dark Green','cotton authentic character and practicality are combined in this summery t-shirt for students that goes with everything to create casual looks. Perfect for those summer days',' Only £19.99','images/items/tshirts/tshirt%20(15).jpg'],
    ['UCLan Logo Tshirt','Bright Green','cotton authentic character and practicality are combined in this summery t-shirt for students that goes with everything to create casual looks. Perfect for those summer days',' Only £19.99','images/items/tshirts/tshirt%20(16).jpg'],
    ['UCLan Logo Tshirt','Olive Green','cotton authentic character and practicality are combined in this summery t-shirt for students that goes with everything to create casual looks. Perfect for those summer days',' Only £19.99','images/items/tshirts/tshirt%20(17).jpg'],
    ['UCLan Logo Tshirt','Dark Grey','cotton authentic character and practicality are combined in this summery t-shirt for students that goes with everything to create casual looks. Perfect for those summer days',' Only £19.99','images/items/tshirts/tshirt%20(18).jpg'],
    ['UCLan Logo Tshirt','Orange','cotton authentic character and practicality are combined in this summery t-shirt for students that goes with everything to create casual looks. Perfect for those summer days',' Only £19.99','images/items/tshirts/tshirt%20(19).jpg'],
    ['UCLan Logo Tshirt','Purple','cotton authentic character and practicality are combined in this summery t-shirt for students that goes with everything to create casual looks. Perfect for those summer days',' Only £19.99','images/items/tshirts/tshirt%20(20).jpg'],
    ['UCLan Logo Tshirt','Slate Blue','cotton authentic character and practicality are combined in this summery t-shirt for students that goes with everything to create casual looks. Perfect for those summer days',' Only £19.99','images/items/tshirts/tshirt%20(21).jpg'],
    ['UCLan Logo Tshirt','Bright Pink','cotton authentic character and practicality are combined in this summery t-shirt for students that goes with everything to create casual looks. Perfect for those summer days',' Only £19.99','images/items/tshirts/tshirt%20(22).jpg'],
    ['UCLan Logo Tshirt','Brightly Green','cotton authentic character and practicality are combined in this summery t-shirt for students that goes with everything to create casual looks. Perfect for those summer days',' Only £19.99','images/items/tshirts/tshirt%20(23).jpg'],
    ['UCLan Logo Tshirt','Lime Green','cotton authentic character and practicality are combined in this summery t-shirt for students that goes with everything to create casual looks. Perfect for those summer days',' Only £19.99','images/items/tshirts/tshirt%20(24).jpg'],
    ['UCLan Logo Tshirt','Ocean Blue','cotton authentic character and practicality are combined in this summery t-shirt for students that goes with everything to create casual looks. Perfect for those summer days',' Only £19.99','images/items/tshirts/tshirt%20(25).jpg'],
    ['UCLan Logo Tshirt','Dark Red','cotton authentic character and practicality are combined in this summery t-shirt for students that goes with everything to create casual looks. Perfect for those summer days',' Only £19.99','images/items/tshirts/tshirt%20(26).jpg'],
    ['UCLan Logo Tshirt','Another Green','cotton authentic character and practicality are combined in this summery t-shirt for students that goes with everything to create casual looks. Perfect for those summer days',' Only £19.99','images/items/tshirts/tshirt%20(27).jpg'],
    ['UCLan Logo Tshirt','Slate Grey','cotton authentic character and practicality are combined in this summery t-shirt for students that goes with everything to create casual looks. Perfect for those summer days',' Only £19.99','images/items/tshirts/tshirt%20(28).jpg'],
    ['UCLan Logo Tshirt','Bright Orange','cotton authentic character and practicality are combined in this summery t-shirt for students that goes with everything to create casual looks. Perfect for those summer days',' Only £19.99','images/items/tshirts/tshirt%20(29).jpg'],
    ['UCLan Logo Tshirt','Another Purple','cotton authentic character and practicality are combined in this summery t-shirt for students that goes with everything to create casual looks. Perfect for those summer days',' Only £19.99','images/items/tshirts/tshirt%20(30).jpg'],
    ['UCLan Logo Tshirt','Real Red','cotton authentic character and practicality are combined in this summery t-shirt for students that goes with everything to create casual looks. Perfect for those summer days',' Only £19.99','images/items/tshirts/tshirt%20(31).jpg'],
    ['UCLan Logo Tshirt','Brilliant Blue','cotton authentic character and practicality are combined in this summery t-shirt for students that goes with everything to create casual looks. Perfect for those summer days',' Only £19.99','images/items/tshirts/tshirt%20(32).jpg'],
    ['UCLan Logo Tshirt','Creame','cotton authentic character and practicality are combined in this summery t-shirt for students that goes with everything to create casual looks. Perfect for those summer days',' Only £19.99','images/items/tshirts/tshirt%20(33).jpg'],
    ['UCLan Logo Tshirt','Teal Blue','cotton authentic character and practicality are combined in this summery t-shirt for students that goes with everything to create casual looks. Perfect for those summer days',' Only £19.99','images/items/tshirts/tshirt%20(34).jpg'],
    ['UCLan Logo Tshirt','White','cotton authentic character and practicality are combined in this summery t-shirt for students that goes with everything to create casual looks. Perfect for those summer days',' Only £19.99','images/items/tshirts/tshirt%20(35).jpg']
];

var hoodieCount=0, jumperCount=0, t_shirtCount=0, storedCart;

/*
The forEach() method calls a function for each element in an array.
The innerHTML property sets or returns the HTML content (inner HTML) of an element.
*/

hoodies.forEach(
    hoodie => {
        document.getElementById("hoodies").innerHTML += "<div class='card'> <a href='item.html' onclick='viewHoodieDetails("+hoodieCount+")'><img class='image' alt=\"UCLan_Hoodie\" src=" + hoodie[4] + "></a><div class='products_info'> <h2 class='heading'>" +
            hoodie[0] + " (" + (hoodieCount + 1) + ") - " + hoodie[1] + "</h2><p class='description'>" + hoodie[2] + " " +"<a class='link_color' href='item.html' onclick='viewHoodieDetails("+hoodieCount+")'>" + "Read More" + "</a></p> " +
            "<p class=\"price\">" + hoodie[3] + "</p><p class='button'><button onclick='addHoodieToCart("+hoodieCount+")'>Buy</button></p></div></div>";

        hoodieCount++;
    });

jumpers.forEach(
    jumper => {
        document.getElementById("jumpers").innerHTML += "<div class='card'> <a href='item.html' onclick='viewJumperDetails("+jumperCount+")'><img class='image' alt=\"UCLan_Jumper\" src=" + jumper[4] + "></a><div class='products_info'> <h2 class='heading'>" +
            jumper[0] + " (" + (jumperCount + 1) + ") - " + jumper[1] + "</h2><p class='description'>" + jumper[2] + " " +"<a class='link_color' href='item.html' onclick='viewJumperDetails("+jumperCount+")'>" + "Read More" + "</a></p> " +
            "<p class=\"price\">" + jumper[3] + "</p><p class='button'><button onclick='addJumperToCart("+jumperCount+")'>Buy</button></p></div></div>";

        jumperCount++;
    });

t_shirts.forEach(
    t_shirt => {
        document.getElementById("t_shirts").innerHTML += "<div class='card'> <a href='item.html' onclick='viewTShirtDetails("+t_shirtCount+")'><img class='image' alt=\"UCLan_Tshirt\" src=" + t_shirt[4] + " ></a> <div class='products_info'> <h2 class='heading'>" +
            t_shirt[0] + " (" + (t_shirtCount + 1) + ") - " + t_shirt[1] + "</h2><p class='description'>" + t_shirt[2] + " " +"<a class='link_color' href='item.html' onclick='viewTShirtDetails("+t_shirtCount+")'>" + "Read More" + "</a></p> " +
            "<p class=\"price\">" + t_shirt[3] + "</p><p class='button'><button onclick='addTshirtToCart("+t_shirtCount+")'>Buy</button></p></div></div>";

        t_shirtCount++;
    });

function viewHoodieDetails(index) { // Function for storing hoodie products in sessionStorage
    // The sessionStorage object let you store key/value pairs in the browser.
    // When sending data to a web server, the data must be a string, so you need to convert the JavaScript object
    // to a string using JSON.stringify().
    sessionStorage.selected = JSON.stringify(hoodies[index]);
}
function viewJumperDetails(index) { // Function for storing jumpers products in sessionStorage
    // The sessionStorage object stores key/value pairs in the browser.
    // When sending data to a web server, the data must be a string, so you need to convert the JavaScript object
    // to a string using JSON.stringify().
    sessionStorage.selected = JSON.stringify(jumpers[index]);
}
function viewTShirtDetails(index) { // Function for storing t-shirts products in sessionStorage
    // The sessionStorage object stores key/value pairs in the browser.
    // When sending data to a web server, the data must be a string, so you need to convert the JavaScript object
    // to a string using JSON.stringify().
    sessionStorage.selected = JSON.stringify(t_shirts[index]);
}

function addHoodieToCart(index) { // Function for storing hoodies products in localStorage
    // The localStorage object allows you to save key/value pairs in the browser.

    if (localStorage.cart) {
        storedCart = JSON.parse(localStorage.cart);
    }
    else {
        storedCart = [];
    }

    alert("UCLan Hoodie added to cart!"); // The alert() method displays an alert box with a message and an OK button.
    storedCart.unshift(hoodies[index]); // The unshift() method adds new hoodies products to the beginning of an array

    localStorage.cart = JSON.stringify(storedCart); // Send data to a web server by converting the JavaScript object
    // to a string using JSON.stringify().
}

function addJumperToCart(index) { // Function for storing jumpers products in localStorage
    // The localStorage object allows you to save key/value pairs in the browser
    if (localStorage.cart) {
        storedCart = JSON.parse(localStorage.cart);
    }
    else {
        storedCart = [];
    }

    alert("UCLan Jumper added to cart!"); // The alert() method displays an alert box with a message and an OK button.
    storedCart.unshift(jumpers[index]); // The unshift() method adds new jumpers products to the beginning of an array

    localStorage.cart = JSON.stringify(storedCart); // Send data to a web server by converting the JavaScript object
    // to a string using JSON.stringify().
}

function addTshirtToCart(index) { // Function for storing t-shirts products in localStorage
    // The localStorage object allows you to save key/value pairs in the browser
    if (localStorage.cart) {
        storedCart = JSON.parse(localStorage.cart);
    }
    else {
        storedCart = [];
    }

    alert("UCLan T-shirt added to cart!"); // The alert() method displays an alert box with a message and an OK button.
    storedCart.unshift(t_shirts[index]); // The unshift() method adds new t-shirts products to the beginning of an array

    localStorage.cart = JSON.stringify(storedCart); // Send data to a web server by converting the JavaScript object
    // to a string using JSON.stringify().
}
