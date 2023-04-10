/**
 * لديك ال String التالي
قمنا بعدها بإستخدام Method بإسم addLove
ظهرت لنا النتيجة كما في ال Output بالأسفل
ماذا تحتاج لتكتب لتعمل هذه ال Method وتظهر النتيجة المطلوبة
 */

// Write Your Code Here

// Do Not Edit Below
let myStr = "Elzero";
String.prototype.addLove = () => {
  return "I Love Elzero Web School";
};
console.log(myStr.addLove()); // I Love Elzero Web School
