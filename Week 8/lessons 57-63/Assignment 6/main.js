/**
 * قم بإنشاء Function تقوم بضرب جميع الأعداد التي تمررها لها في بعضها
غير معروف كم عدد ال Parameters التي ستمررها لل Function
إذا كان ال Argument ألمستخدم في ال Function عبارة عن String لا تستعمله مع الأرقام
إذا كان ال Argument عبارة عن Float قم بتحويله ل Integer قبل بدأ عملية الضرب
 */

function multiply(...theArgs) {
  let total = 1;
  for (let arg of theArgs) {
    if (typeof arg === "number") {
      arg = Math.trunc(arg);
    }
    if (typeof arg === "string") {
      continue;
    }
    total *= arg;
  }
  console.log(total);
}

multiply(10.522, 20); // 200
multiply("A", 10, 30); // 300
multiply(100.5, 10, "B"); // 1000
