/*global console, alert, document, prompt*/

/*
  var.length;
  .push("");
  .unshift("");
  .splice(2, 3, "", "", "")
*/

var friends = [
    "Mahmoud",
    "Hassan",
    "Soha",
    "Ahmed",
    "Zahra",
    "Hind",
    "Mohamed",
    "Sayed"
];

console.log(friends);

console.log(friends.length);

/*
//Adding By length

friends[friends.length] = "Sameh";

console.log(friends);

console.log(friends.length);
*/


/*
//Adding By .push(""), .unshift("");

friends.unshift("Nada");

console.log(friends);

console.log(friends.length);
*/

//Adding By .splice(index, How Many, "Iteme", "Iteme", "Iteme")
//الرقم الاول هو رقم العنصر الجديد
//الرقم الثانى هو عدد العناصر المراد حزفها بعد العنصر الجديد
//اخيرا يتم كتابة اسم العنصر(او العناصر)الجديدة
friends.splice(3, 4);

console.log(friends);





























// ////////////////////////////////////////////////////////////////Height
