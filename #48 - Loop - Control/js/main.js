/*jslint plusplus: true, evil: true*/
/*global console, alert, document, prompt*/

/*
//////////////////////////////// #01 - break; //////////////////////////////////

var i;

for (i = 1; i < 10; i++) {

    if (i === 4) {

        break;
    }

    console.log(i);
}
*/


//////////////////////////////// #02 - continue; ///////////////////////////////

var i;

for (i = 1; i < 10; i++) {

    if (i === 4) {

        continue;
    }

    console.log(i);
}



//////////////////////////// #03 - Loop Inside Loop; ///////////////////////////

var i, x;

MainLoop:

for (i = 1; i < 5; i++) {

    ChildLoop:

    for (x = 15; x < 20; x++) {

        if (x === 17) {

          continue MainLoop;
        }
        console.log(i + "=> " + x);
    }
}


















































































































// ////////////////////////////////////////////////////////////////Height
