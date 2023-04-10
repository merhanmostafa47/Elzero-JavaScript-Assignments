/**
 * لدينا ال Object التالي
بعده هناك سطر يقوم بتغيير قيمة ال Score
بعده هناك Loop يطبع محتوى ال Object كاملة إسم ال Property وبجانبها القيمة
بعده يتم طباعة محتوى ال Object في ال Console
ممنوع التعديل على محتوى ال Object ولا ال Loop ولا سطر الطباعة في ال Console
في المكان المخصص يجب عليك كتابة ال Code لعمل المطلوب
مطلوب عدم السماح بتغيير قيمة ال score
مطلوب عدم إظهار ال id داخل ال Loop ولكن يظهر بدون اي مشكلة في محتوى ال Object في ال Console
مطلوب عدم ظهور ال Country في ال Loop ولا في محتوى ال Object في ال Console
 */

const myObj = {
  username: "Elzero",
  id: 100,
  score: 1000,
  country: "Egypt",
};

// Write Your Code Here

Object.defineProperty(myObj, "score", {
  writable: false,
});

Object.defineProperty(myObj, "id", {
  enumerable: false,
});

delete myObj.country;

myObj.score = 500;

for (let prop in myObj) {
  console.log(`${prop} => ${myObj[prop]}`);
}

console.log(myObj);

// Needed Output

// "username => Elzero"
// "score => 1000"
// {username: 'Elzero', score: 1000, id: 100}
