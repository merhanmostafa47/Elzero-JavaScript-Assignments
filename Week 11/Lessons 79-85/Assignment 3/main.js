/**
 * إستخدم ال Object.assign() لتنشيء Object جديد يحتوي على كل ما سبق
 */

let a = 1;

let threeNums = {
  b: 2,
  c: 3,
  d: 4,
};

let twoNums = {
  e: 5,
  f: 6,
};

// Create Your Object Here in One Line
let finalObject = Object.assign(threeNums, twoNums, { a: a });

console.log(finalObject);

/*
   a: 1
   b: 2
   c: 3
   d: 4
   e: 5
   f: 6
 */
