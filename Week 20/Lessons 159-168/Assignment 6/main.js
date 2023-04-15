/**
 * قم بإنشاء Generator Function تولد أرقام
تأكد أنها تطبع الأرقام بنفس ال Pattern كما في الأسفل
يجب ان تكون الأرقام إلى ما لا نهاية
 */

// Write Your Generator Function Here
function* gen() {
  let index = 0;
  let num = 14;
  while (true) {
    yield num;
    index++;
    num += Number(`${index++}40`);
  }
}

let generator = gen();

console.log(generator.next()); // {value: 14, done: false}
console.log(generator.next()); // {value: 154, done: false}
console.log(generator.next()); // {value: 494, done: false}
console.log(generator.next()); // {value: 1034, done: false}
console.log(generator.next()); // {value: 1774, done: false}
console.log(generator.next()); // {value: 2714, done: false}
console.log(generator.next()); // {value: 3854, done: false}
console.log(generator.next()); // {value: 5194, done: false}
console.log(generator.next()); // {value: 6734, done: false}