/*
*قم بإنشاء Set جديدة بإسم setOfNumbers
قم بإضافة رقم 10 لل Set أثناء الإنشاء
قم بإضافة رقم 20 لل Set في سطر منفصل
في نفس السطر السابق قم بإضافة عنصر جديد وهو عبارة عن عدد عناصر ال Set السابقة
قم بطباعة ال Set في ال Console وتأكد أنها مطابقة للمثال التالي
في سطر واحد فقط منفصل إستخدم ما تعلمته لتطبع آخر عنصر موجود في ال Set
*/

let setOfNumbers = new Set().add(10);
setOfNumbers.add(20).add(setOfNumbers.size);

console.log(setOfNumbers);
console.log([...setOfNumbers].length - 1);

// Needed Output
// Set(3) {10, 20, 2}
// 2
