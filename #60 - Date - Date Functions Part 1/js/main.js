/*jslint plusplus: true, evil: true*/
/*global console, alert, document, prompt*/

//In All Functions WE Can Add UTC After get To Convert To Universal Time.

///////////////////////////// #01 - getDate(); /////////////////////////////////
//Day Of The Month.

var theDate = new Date(),

    theDay = theDate.getDate();

console.log(theDay);



///////////////////////////// #02 - getDay(); //////////////////////////////////
//Day Of The Week.(start From Sunday = 0)

var theDate = new Date(),

    theDay = theDate.getDay();

console.log(theDay);



/////////////////////////// #03 - getFullYear(); ///////////////////////////////

var theDate = new Date(),

    theYear = theDate.getFullYear();

console.log(theYear);



////////////////////////////// #04 - getHours(); ///////////////////////////////

var theDate = new Date(),

    theHours = theDate.getHours();

console.log(theHours);



/////////////////////////// #05 - getMinutes(); ////////////////////////////////

var theDate = new Date(),

    theMinutes = theDate.getMinutes();

console.log(theMinutes);



/////////////////////////// #06 - getSeconds(); ////////////////////////////////

var theDate = new Date(),

    theSeconds = theDate.getSeconds();

console.log(theSeconds);



////////////////////////// #07 - getMilliseconds(); ////////////////////////////

var theDate = new Date(),

    theMilliSeconds = theDate.getMilliseconds();

console.log(theMilliSeconds);



////////////////////////////// #08 - getTime(); ////////////////////////////////
//Number Of MilliSeconds From 1970 To Specific Date.
var theDate = new Date("29 Dec 1986 14:00:00"),

    theTime = theDate.getTime();

console.log(theTime);



//////////////////////// #09 - getTimezoneOffset(); ////////////////////////////
//UTC - Local Time.[result in minutes]
var theDate = new Date(),

    theTimeDiff = theDate.getTimezoneOffset();

console.log(theTimeDiff);



/////////////////////////////// #10 - Training /////////////////////////////////

var button = document.getElementById("button");

button.onclick = function () {

    "use strict";

    var fromStartTillNow = new Date(),

        myBirthDate = document.getElementById("input"),

        beforMyBirth = new Date(myBirthDate.value),

        myAgeInMilliSeconds = fromStartTillNow - beforMyBirth;

    document.getElementById("result-a").innerHTML =
        "My Age In Milli Seconds : " + Math.round(myAgeInMilliSeconds) + " MilliSecond.";

    document.getElementById("result-b").innerHTML =
        "My Age In Seconds : " + Math.round(myAgeInMilliSeconds / 1000) + " Second.";

    document.getElementById("result-c").innerHTML =
        "My Age In Minutes : " + Math.round(myAgeInMilliSeconds / (1000 * 60)) + " Minute.";

    document.getElementById("result-d").innerHTML =
        "My Age In Hours : " + Math.round(myAgeInMilliSeconds / (1000 * 60 * 60)) + " Hour.";

    document.getElementById("result-e").innerHTML =
        "My Age In Days : " + Math.round(myAgeInMilliSeconds / (1000 * 60 * 60 * 24)) + " Day.";

    document.getElementById("result-f").innerHTML =
        "My Age In Years : " + Math.round(myAgeInMilliSeconds / (1000 * 60 * 60 * 24 * 365)) + " Year.";
};









































































// ////////////////////////////////////////////////////////////////Height
