/*jslint plusplus: true*/
/*global console, alert, document, prompt*/

var myCar = {
    colour: "White",
    type: "Sedan",
    price: "50.000",
    model: "2015"
};

console.log(myCar.type);

/*
  For / In Loop Syntax:
  =====================

  for ( Var In Obgect ) {

      if (object.hasOwnProperty(var)) {

          //Statment
      }
}
*/

var prop;

for (prop in myCar) {

    if (myCar.hasOwnProperty(prop)) {

        console.log(prop + ": " + myCar[prop]);
    }
}











































































































































// ////////////////////////////////////////////////////////////////Height
