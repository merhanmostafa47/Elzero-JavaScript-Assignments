/*
لديك متغير يحتوي على String  -
المطلوب جلب أول حرف من ال String  -
يجب تنفيذ الحل ب 6 طرق مختلفة  -
يجب عدم تكرار اي حل ويجب إستعمال المتغير فقط  -
يجب التأكد أن الحرف صغير Small Letter  -
واحد من الحلول تأكد أنه يقوم بتكرار الحرف المأخوذ 3 مرات  -
*/

let userName = "Elzero";
console.log(userName[0].toLowerCase()); // e
console.log(userName.charAt(0).toLowerCase()); // e
console.log(userName.slice(0, 1).toLowerCase()); // e
console.log(userName.substring(0, 1).toLowerCase()); // e
console.log(userName.substr(0, 1).toLowerCase()); // e
console.log(userName.charAt(0).toLowerCase().repeat(3)); // eee
