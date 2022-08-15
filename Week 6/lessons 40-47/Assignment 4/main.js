/**
 ممنوع إستخدام الأرقام نهائيا ويمكنك إستخدام الرقم 0 فقط
يجب كتابة سطر Code واحد فقط لتخرج القيمة المطلوبة
 */

let website = "Go";
let words = [`${website}ogle`, "Facebook", ["Elzero", "Web", "School"]];

console.log(words.pop().shift().slice(website.length).toUpperCase()); // ZERO
