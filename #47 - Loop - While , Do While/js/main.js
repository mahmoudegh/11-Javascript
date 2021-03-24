/*jslint plusplus: true, evil: true*/
/*global console, alert, document, prompt*/


/*
    Syntax While:
    =============

    while (   ) {

      //Statment

  }
*/


/*

*/


function generateYears(Start, End) {

    "use strict";

    document.write("<select>");

    var years = Start;

    do {

        document.write("<option value=\"" + years + "\">" + years + "</option>");

        years++;

    } while (years <= End);

    document.write("</select>");
}

generateYears(1900, 2000);
generateYears(1900, 2000);
generateYears(1900, 2000);


/*
var i = 0;

do {

    console.log(i);

    i++;

} while (i <= 10);
*/
























































































































// ////////////////////////////////////////////////////////////////Height
