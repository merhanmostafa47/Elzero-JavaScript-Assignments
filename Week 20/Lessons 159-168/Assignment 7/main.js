/**
 * لديك إثنين من ال Generators Function
المطلوب عمل Generator Function تقوم بعمل Delegate لباقي ال Generator Functions
يجب أن تستخدم ما تعلمته لتجعل ال Function الأخيرة تستثني القيم المكررة
شاهد ال Code لترى النتيجة لتفهم المطلوب
 */

function* genNumbers() {
  yield* [1, 2, 2, 2, 3, 4, 5];
}
function* genLetters() {
  yield* ["A", "B", "B", "B", "C", "D"];
}

function* genAll() {
  yield* new Set(genNumbers());
  yield* new Set(genLetters());
}

// Write Your Generator Function Here

let generator = genAll();

console.log(generator.next()); // {value: 1, done: false}
console.log(generator.next()); // {value: 2, done: false}
console.log(generator.next()); // {value: 3, done: false}
console.log(generator.next()); // {value: 4, done: false}
console.log(generator.next()); // {value: 5, done: false}
console.log(generator.next()); // {value: "A", done: false}
console.log(generator.next()); // {value: "B", done: false}
console.log(generator.next()); // {value: "C", done: false}
console.log(generator.next()); // {value: "D", done: false}
