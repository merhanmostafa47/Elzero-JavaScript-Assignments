/**
 * قم بإنشاء Object جديد بأربع طرق مختلفة
 */

// Method One
// Create Your Object Here
const objMethodOne = new Object();

console.log(objMethodOne.property); // "Method One"

// Method Two
// Create Your Object Here
const objMethodTwo = {};

console.log(objMethodTwo.property); // "Method Two"

// Method Three
// Create Your Object Here
const objMethodThree = Object.create(objMethodTwo);

console.log(objMethodThree.property); // "Method Three"

// Method Four
// Create Your Object Here
const objMethodFour = Object.assign(objMethodOne, objMethodTwo);

console.log(objMethodFour.property); // "Method Four"
