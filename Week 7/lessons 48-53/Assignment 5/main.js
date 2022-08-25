/**
 * ممنوع إستخدام الأرقام نهائيا ولا الحروف ويمكنك إستخدام قيم المتغيرات مع ما تعلمته لتنفيذ المطلوب
يجب طباعة الأسماء كما في المثال مع وضع رقم قبل كل قيمة بطريقة ديناميكية
قم بإسثتناء الأسماء التي تبدأ بحرف A
يجب إستخدام ال Loop For لعمل المطلوب
 */

let friends = ["Ahmed", "Sayed", "Eman", "Mahmoud", "Ameer", "Osama", "Sameh"];
let letter = "a";
let j = +true;

for (let i = +null; i < friends.length; i++) {
  if (friends[i].charAt(+null) === letter.toUpperCase()) {
    continue;
  }
  console.log(j++ + "=>" + friends[i]);
}

// Output
//  "1 => Sayed"
//  "2 => Eman"
//  "3 => Mahmoud"
//  "4 => Osama"
//  "5 => Sameh"
