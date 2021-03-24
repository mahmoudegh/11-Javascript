/*global console, alert, document, prompt*/

/*
var ticketPrice = 2001;

if (ticketPrice < 1500) {
    console.log("Yes It's Cheap");

} else if (ticketPrice <= 2000) {
    console.log("Yes It's Good Price");

} else {
    console.log("No It's Expensive");
}
*/



var yourAge = prompt("What's Your Age ?");

if (yourAge < 18) {
    document.getElementById("test").innerHTML =
        "Sorry Your Age Is " + yourAge + " You Aren't Allowed Here.";
} else {
    document.getElementById("test").innerHTML =
        "Hello Your Age Is " + yourAge + " You Are Welcome Here.";
}

















































// ////////////////////////////////////////////////////////////////Height
