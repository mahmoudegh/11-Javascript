/*global console, alert, document, prompt*/

/*******

*******/

function myAgeInSeconds() {

    "use strict";

    var myAge  = 33;

    return myAge * 365 * 24 * 60 * 60;
}

var secondsCalc = myAgeInSeconds();

document.getElementById("test").innerHTML =
    "Your Age In Days = " + secondsCalc + " Seconds.";


































































































// ////////////////////////////////////////////////////////////////Height
