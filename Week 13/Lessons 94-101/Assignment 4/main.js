/**
 * لديك البنية التالية في الصفحة
المطلوب الوصول لكلمة "Elzero" بدون اي مسافات أو New Line
المطلوب جلبها من داخل العنصر وليس كتابتها بيدك 😀
 */

let element = document.querySelector("div");

//first solution
console.log(element.lastChild.nodeValue.trim());

//second solution
console.log(element.childNodes[3].nextSibling.nodeValue.trim());
