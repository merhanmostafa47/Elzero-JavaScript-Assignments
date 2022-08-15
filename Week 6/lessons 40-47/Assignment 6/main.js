/**
 *قم بكتابة Code فيه ما تعلمته لتخرج النتيجة الموجودة في المثال
يمنع كتابة اي أرقام نهائيا في اي مكان في الحل
 */

let arr1 = ["A", "C", "X"];
let arr2 = ["D", "E", "F", "Y"];
let allArrs = [];

// Your Code Here
allArrs = arr1.concat(arr2).sort().slice(arr2.length).join("").toLowerCase();
console.log(allArrs); // fxy