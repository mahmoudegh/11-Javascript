/*jslint plusplus: true, evil: true*/
/*global console, alert, document, prompt*/


/////////////////////////// #01 - var.toString(); //////////////////////////////

var x = 100;

console.log(typeof x);

var newx = x.toString();

console.log(typeof newx);



////////////////////////// #02 - ().toExponential(); ///////////////////////////

//e = 10

console.log((100).toExponential(3)); //1e+2    [1 * (10 * 10)]

console.log((25).toExponential(2));  //2.5e+1  [2.5 * (10 * 1)]

console.log((50).toExponential());  //5e+1    [5 * (10 * 1)]

console.log((500).toExponential()); //5e+2    [5 * (10 * 2)]



///////////////////////////// #03 - ().toFixed(); //////////////////////////////

//التقريب لاقرب رقم عشرى

console.log((99.65).toFixed(2));



////////////////////////////// #04 - parseInt(); ///////////////////////////////

//Return Number From String.

console.log(parseInt("100px;", 10));













































// ////////////////////////////////////////////////////////////////Height
