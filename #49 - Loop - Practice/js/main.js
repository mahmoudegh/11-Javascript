/*jslint plusplus: true, evil: true*/
/*global console, alert, document, prompt*/

////////////////////////////// #01 - for loop //////////////////////////////////

/*
var i;

for (i = 0; i <= 10; i++) {

    console.log(i);
}
*/

/*
var i = 0;

for (;;) {

    if (i > 10) {

        break;
    }

    console.log(i);

    i++;
}
*/

///////////////////////////// #02 - for in loop ////////////////////////////////

/*
var myCar = {

    name: "Toyota",
    type: "Car",
    colour: "Red"
};

var prop;

for (prop in myCar) {

    if (myCar.hasOwnProperty(prop)) {

        console.log(prop + ": " + myCar[prop]);
    }
}
*/

///////////////////////////// #03 - while loop /////////////////////////////////

/*
var i = 0;

while (i <= 10) {

    console.log(i);

    i++;
}
*/

/////////////////////////// #04 - do while loop ////////////////////////////////

/*
var i = 0;

do {
    console.log(i);

    i++;

} while (i <= 10);
*/

///////////////// #05 - loop inside loop | break; & continue; //////////////////


var i, x;

MainLoop:
for (i = 0; i <= 5; i++) {

    ChildLoop:
    for (x = 10; x <= 15; x++) {

        if (x === 12) {

            continue MainLoop;
        }
        console.log(i + " => " + x);
    }
}






































































































// ////////////////////////////////////////////////////////////////Height
