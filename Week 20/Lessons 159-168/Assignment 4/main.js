/**
 * قم بطباعة تاريخ ووقت ميلادك ب 3 طرق مختلفة
طريقة كتابة التاريخ داخل String تعتبر كلها طريقة واحدة وهي String Date
تأكد أن ال 3 طرق يقوموا بطباعة التاريخ والوقت بنفس القيم كما في الأسفل
 */
let date = new Date(0);
date.setHours(0);
// date.setFullYear(2001, 6, 4); //1

// date = new Date("7/4/2001");   //2

console.log(date);

// Needed Output

// "Mon Oct 25 1982 00:00:00 GMT+0200 (Eastern European Standard Time)"
// "Mon Oct 25 1982 00:00:00 GMT+0200 (Eastern European Standard Time)"
// "Mon Oct 25 1982 00:00:00 GMT+0200 (Eastern European Standard Time)"
