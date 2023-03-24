/*
*لديك 2 Arrays فيهم ارقام
المطلوب الرجوع برقم 210
ممنوع إستخدام الأرقام ولا True ولا False
ممنوع إستخدام ال Arrays Indexes لجلب أي رقم من ال Arrays
ممنوع إستخدام أي نوع من أنواع ال Loops ولا ال Higher Order Functions
الحل يجب أن يكون في سطر واحد فقط
إذا إستخدمت Length يجب إستخدامها مرة واحدة فقط
إذا إستخدمت عملية حسابية مسموح لك فقط بعلامة الضرب *
*/

let n1 = [10, 30, 10, 20];
let n2 = [30, 20, 10];

console.log(
  Number(
    [
      ...new Set([
        ...[
          ...new Set(
            [...new Set([...new Set(n1).add(...n2)])]
              .sort()
              .reverse()
              .copyWithin(Number(null), -Math.exp(0))
          ),
        ].join(""),
      ]),
    ]
      .sort()
      .reverse()
      .join("")
  )
);

// Needed Output
// 210
