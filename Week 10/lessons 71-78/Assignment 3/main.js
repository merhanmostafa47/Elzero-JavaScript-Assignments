/**
لديك متغير بإسم myArray يحتوي على Array وبداخلها Array أخرى
قم بإنشاء Array جديدة بواسطة ال Reduce
يجب عليك عمل Flatten لل Array لترجع ب Array واحدة
يجب عليك عمل Concatenate لل Letters لتخرج بالنتيجة
ممنوع إستخدام Array.flat() نهائيا
 */

let myArray = ["E", "l", "z", ["e", "r"], "o"];

let word = myArray.reduce((acc, ele) => acc.concat(ele), []).join("");
console.log(word);

// Elzero
