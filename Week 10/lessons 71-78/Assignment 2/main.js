/**
 * لديك متغير بإسم myString يحتوي على Letters منها المكرر ومنها العادي
قم بإنشاء Array جديدة بواسطة ال Filter
يجب عليك إستثناء ال Letters المكررة نهائيا من النتيجة
يجب عليك عمل Concatenate لل Letters لتخرج بالنتيجة
 */

let myString = "EElllzzzzzzzeroo";

function removeDuplicates(arr) {
  return arr.split("").filter((item, index) => arr.indexOf(item) === index);
}

console.log(removeDuplicates(myString).join(""));
// Elzero
