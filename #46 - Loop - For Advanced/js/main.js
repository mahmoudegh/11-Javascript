/*jslint plusplus: true, evil: true*/
/*global console, alert, document, prompt*/

/*
function generateYears(Start, End) {

    "use strict";

    document.write("<select>");

    var years;

    for (years = Start; years <= End; years++) {

        document.write("<option value=\"" + years + "\">" + years + "</option>");
    }

    document.write("</select>");
}

generateYears(1900, 2000);
generateYears(1900, 2000);
generateYears(1900, 2000);
*/
////////////////////////////////////////////////////////////////////////////////



var generate = document.getElementById("generate"),
    startYear = document.getElementById("start"),
    endYear = document.getElementById("end");

generate.onclick = function () {

    "use strict";

    document.write("<select>");

    var years;

    for (years = startYear.value; years <= endYear.value; years++) {

        document.write("<option value=\"" + years + "\">" + years + "</option>");
    }

    document.write("</select>");
};



























































































































// ////////////////////////////////////////////////////////////////Height
