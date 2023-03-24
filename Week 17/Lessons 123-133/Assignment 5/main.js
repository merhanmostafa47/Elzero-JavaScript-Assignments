/*
*لديك متغير يحتوي على إسم Elzero
المطلوب تحويل ال String ل Array بخمس طرق مختلفة
شاهد المثال
*/

let theName = "Elzero";

console.log([...theName]);
console.log(theName.split(""));
console.log(Array.from(theName));
console.log(Object.assign([], theName));

let arr = [];
for (let char of theName) {
  arr.push(char);
}
console.log(arr);
// Needed Output
// ['E', 'l', 'z', 'e', 'r', 'o']
