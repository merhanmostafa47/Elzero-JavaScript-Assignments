/*
*لديك ال Constructor Function التالية والمطلوب تحويلها لل Class Syntax
لا تعتمد على البرنامج وقم بعملها بنفسك لتتأكد أنك تعرف ال Syntax
قم بإضافة إثنين Methods واحدة بإسم run وواحدة بإسم stop
كل واحدة فيهم تحتوي على رسالة
الأولى Car Is Running Now والثانية Car Is Stopped
قم بإنشاء ثلاث سيارات بواسطة هذا ال Class بأي بيانات تختارها
قم بطباعة بيانات أول سيارة منهم في ال Console بالطريقة الموجودة في الأسفل
في السطر الذي بعده قم بطباعة ال Method المسماه run
*/

class Car {
  constructor(name, model, price) {
    this.n = name;
    this.m = model;
    this.p = price;
  }

  run() {
    return "Car Is Running Now";
  }
  stop() {
    return "Car Is Stopped";
  }
}

let carOne = new Car("MG", 2022, 420000);
let carTwo = new Car("MG", 2020, 320000);
let carThree = new Car("MG", 2018, 220000);

console.log(
  `Car One Name Is ${carOne.n} And Model Is ${carOne.m} And Price Is ${carOne.p}`
);
console.log(carOne.run());

// Needed Output
// ("Car One Name Is MG And Model Is 2022 And Price Is 420000");
// ("Car Is Running Now");
