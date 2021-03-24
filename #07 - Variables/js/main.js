/*global console, alert, document*/

/*
    Start With Letters, Underscore, $(cant Start With Number)
*/

var mainPrice        = 1200,
    mySmallDiscount  = mainPrice * 0.1,
    myMediumDiscount = mainPrice * 0.2,
    myBigDiscount    = mainPrice * 0.3;

document.getElementById("price").innerHTML    = mainPrice;
document.getElementById("product1").innerHTML = mainPrice - mySmallDiscount;
document.getElementById("product2").innerHTML = mainPrice - myMediumDiscount;
document.getElementById("product3").innerHTML = mainPrice - myBigDiscount;
