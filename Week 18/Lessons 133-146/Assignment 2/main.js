/*
*لديك متغير يحتوي على بعض الأسماء
المطلوب إنشاء RegExp Pattern لعمل Match للأسماء التي تبدأ ب Os وتنتهي ب O
*/

let specialNames = "Os10O OsO Os100O Osa100O Os1000 Os100m";

let re = /os\d*o/gi;
console.log(specialNames.match(re));
// Output
// ['Os10O', 'OsO', 'Os100O']
