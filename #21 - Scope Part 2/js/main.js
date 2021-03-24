/*global console, alert, document, prompt*/

function testParent() {         //Parent

    "use strict";

    var myName = "Osama";

    console.log(myName);

    function testChild() {       //Child

        console.log(myName);

        function testGrand() {   //Grand Child

            console.log(myName);
        }
        return testGrand();
    }
    return testChild();
}
testParent();


























// ////////////////////////////////////////////////////////////////Height
