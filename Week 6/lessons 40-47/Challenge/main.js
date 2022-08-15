/**
 قم بكتابة ال Code المناسب لتستطيع تنفيذ المطلوب منك
غير مسموح بإستخدام الأرقام نهائيا ويمكنك إستخدام قيم المتغيرات المتاحة فقط
مسموح لك فقط التعديل على “????” ولا شيء آخر
قم بكتابة ال Code المناسب وإستخدم فيه قيم المتغيرات وكل ما تعلمته لتستطيع تنفيذ المطلوب
كل طلب بجانبه ال Output المطلوب
 */

let zero = 0;
let counter = 3;
let my = ["Ahmed", "Mazero", "Elham", "Osama", "Gamal", "Ameer"];

// my.reverse().splice(zero, counter - +true);
// console.log(my); // ["Osama", "Elham", "Mazero", "Ahmed"];

console.log(my.slice(zero + true, counter).reverse()); // ["Elham", "Mazero"]

console.log(
  my
    .slice(zero + true, counter)
    .reverse()
    .shift()
    .slice(zero, counter - true) +
    my
      .slice(zero + true, counter)
      .reverse()
      .pop()
      .slice(-counter - true)
); // "Elzero"

console.log(
  my
    .splice(zero + true, counter - true - true)
    .toString()
    .slice(-counter + true)
    .charAt(zero)
    .toLowerCase() +
    my
      .splice(counter - true, zero + true)
      .toString()
      .slice(zero, zero + true)
); // "rO"
