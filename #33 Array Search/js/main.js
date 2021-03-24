/*global console, alert, document, prompt*/

var friends = [
    "Hassan",  //0  ==>  -8
    "Ahmed",   //1  ==>  -7
    "Mohamed", //2  ==>  -6
    "Sayed",   //3  ==>  -5
    "Hind",    //4  ==>  -4
    "Salwa",   //5  ==>  -3
    "Sameh",   //6  ==>  -2
    "Ali"      //7  ==>  -1
];

console.log(friends);

var speacialFriends = friends.lastIndexOf("Salwa", 5);

console.log(speacialFriends);

console.log(friends[speacialFriends]);

document.getElementById("all").innerHTML =

     "My Friends Are : " + friends + "<br><br>";

document.getElementById("special").innerHTML =

      "My Special Friend Is : " + "<span style='color:#f00'>" + friends[speacialFriends] + "</span>";
































// ////////////////////////////////////////////////////////////////Height
