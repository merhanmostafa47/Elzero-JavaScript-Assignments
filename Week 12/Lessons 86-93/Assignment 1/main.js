/**
 * لديك العنصر التالي في ال HTML عليك إختياره بال JavaScript ب 15 طريقة مختلفة
يمكنك إستخدام querySelector أربع مرات فقط وكذلك querySelectorAll اربع مرات فقط
 */


console.log(document.getElementsByTagName("div"));
console.log(document.getElementsByClassName("element"));
console.log(document.getElementsByName("js"));
console.log(document.getElementById("elzero"));

console.log(document.querySelectorAll("div"));
console.log(document.querySelectorAll("div.element"));
console.log(document.querySelectorAll("div#elzero"));
console.log(document.querySelectorAll("div[name='js']"));

console.log(document.querySelector("div"));
console.log(document.querySelector("#elzero"));
console.log(document.querySelector(".element"));
console.log(document.querySelector("div[name='js']"));

console.log(document.body.children[0]);
console.log(document.body.firstElementChild);









