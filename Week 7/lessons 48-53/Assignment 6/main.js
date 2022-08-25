/**
 * ممنوع إستخدام الأرقام أو الحروف نهائيا ويمكنك إستخدام قيم المتغيرات مع ما تعلمته لتنفيذ المطلوب
المطلوب بإستخدام ال Loop تحويل الحروف الكبير لصغيرة والعكس. شاهد المثال
يجب إستخدام ال Loop For لعمل المطلوب
 */

let start = 0;
let swappedName = "elZerO";
var result = "";
for (let i = start; i < swappedName.length; ++i) {
  var charCode = swappedName.charCodeAt(i);
  if (charCode < 65 || charCode > 90) {
    // NOT an uppercase ASCII character
    // Append the uppercase character
    result += swappedName.substr(i, 1).toUpperCase();
  } else {
    // Character in the ['A'..'Z'] range
    // Append the lowercase character
    result += String.fromCharCode(charCode + 32);
  }
}

console.log(result);
// Output
// "ELzERo"
