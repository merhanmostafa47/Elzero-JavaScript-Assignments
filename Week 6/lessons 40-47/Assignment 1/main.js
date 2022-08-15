/**
 * ممنوع إستخدام الأرقام نهائيا ويمكنك إستخدام قيم المتغيرات مع ما تعلمته لتنفيذ المطلوب
يجب عمل الحل والمطلوب بطريقتين مختلفتين
يمكنك كتابة ما تريد خارج ال Console لتنفيذ المطلوب
 */

let myFriends = ["Ahmed", "Elham", "Osama", "Gamal"];
let num = 3;

// Method 1
myFriends.pop();
console.log(myFriends); // ["Ahmed", "Elham", "Osama"];

// Method 2
console.log(myFriends.slice(undefined, num)); // ["Ahmed", "Elham", "Osama"];
