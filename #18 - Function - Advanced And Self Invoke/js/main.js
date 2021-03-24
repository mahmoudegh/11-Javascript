/*global console, alert, document, prompt*/

function convertUsdToRiyal() {

    "use strict";

    var amount  = document.getElementById("dollar").value,

        result  = amount * 3.75,

        message = document.getElementById("message");

    if (amount === "") {

        message.innerHTML = "This Filed Can't Be Empty";

    } else if (isNaN(amount)) {

        message.innerHTML = "This Filed Accept Numbers Only";

    } else if (amount === "0") {

        message.innerHTML = "The Value Mustn't Be 0";

    } else if (amount < 0) {

        message.innerHTML = "The Value Mustn't Be Negative Number";

    } else {

        message.innerHTML = amount + " Dollar Is Worth " + result + " Riyal";
    }
}





























// ////////////////////////////////////////////////////////////////Height
