/*
*لديك Object يحتوي على بياناتك
المطلوب إستخدام ما تعلمته لتحويل ال Object ل Map
المطلوب في السطر الأول طباعة محتوى ال Map
في السطر الثاني تقوم بطباعة عدد عناصر ال Map
في السطر الأخير تقوم بفحص هل ال Map تحتوي على عنصر بإسم role أم لا
*/

let myInfo = {
  username: "Osama",
  role: "Admin",
  country: "Egypt",
};

// The Object.entries() method returns an array of key-value pairs from the object
myInfo = new Map(Object.entries(myInfo));
console.log(myInfo);
console.log(myInfo.size);
console.log(myInfo.has("role"));

// Needed Output
// Map(3) {'username' => 'Osama', 'role' => 'Admin', 'country' => 'Egypt'}
// 3
// true
