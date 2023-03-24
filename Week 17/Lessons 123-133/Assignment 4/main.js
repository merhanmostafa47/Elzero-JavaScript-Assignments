/*
*لديك الرقم التالي 100020003000
المطلوب إستخدام ال Spread Operator + Set مع ما تعلمته لتخرج برقم 123
الحل يجب أن يكون في سطر واحد فقط
ممنوع إستخدام أي ارقام نهائيا
الناتج النهائي 123 يجب أن يكون Number وليس String
*/

let theNumber = 100020003000;

console.log(Number([...new Set([...theNumber.toString()].sort())].join("")));
// Needed Output
// 123
