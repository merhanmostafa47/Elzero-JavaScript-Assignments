/**
 كل ما عليك هو التأكد أن قيمة متغير needle موجود داخل ال Array المسماه haystack
يجب عمل الحل بثلاث طرق مختلفة
قم بطباعة كلمة Found في ال Console إذا كانت الكلمة موجودة
 */

let needle = "JS";
let haystack = ["PHP", "JS", "Python"];

// Write 3 Solutions
if (haystack.includes(needle)) {
  console.log("Found");
}

if (haystack.slice(1, 2).toString() === needle) {
  console.log("Found");
}

if (haystack.sort().shift() === needle) {
  console.log("Found");
}
