/*global console, alert, document, prompt*/

var myInput    = document.getElementById("input"),

    myCurrency = document.getElementById("currency"),

    myDiv      = document.getElementById("div");

myCurrency.onchange = function () {

    "use strict";

    myDiv.innerHTML = "Worth " + myInput.value * myCurrency.value + " Egyption Pound";
};





























// ////////////////////////////////////////////////////////////////Height
