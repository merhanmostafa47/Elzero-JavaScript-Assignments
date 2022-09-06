/**
 * لديك متغير بإسم numsAndStrings يحتوي على Letters And Numbers
قم بإنشاء Array جديدة بواسطة ال Filter + Map
يجب عليك إستثناء ال Letters من النتيجة
يجب عليك عكس الأرقام بمعنى الموجب يكون سالب والسالب يكون موجب
يجب عليك إستخدام ال Map + Filter + ما تريد
 */

let numsAndStrings = [1, 10, -10, -20, 5, "A", 3, "B", "C"];

let numbersArr = numsAndStrings
  .filter((ele) => (typeof ele === "number" ? ele : ""))
  .map((ele) => -ele);
  
console.log(numbersArr);
// [-1, -10, 10, 20, -5, -3]
