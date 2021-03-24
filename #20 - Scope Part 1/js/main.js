/*global console, alert, document, prompt*/
var myName = "Osama";

console.log(myName);  //Global Osama 1

function myNameFunc() {

    "use strict";

    myName = "Ahmed";

    console.log(myName);  //Global Ahmed 2
}

myNameFunc();

console.log(myName);  //Global Ahmed 3

console.log(myName);  //Global Ahmed 4


//دايما بيطبع اخر جلوبال

























// ////////////////////////////////////////////////////////////////Height
