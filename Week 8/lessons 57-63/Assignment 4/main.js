/**
 * قم بإنشاء Function تطبع رسالة للمستخدم فيها إسمه وسنه وهل هو متاح للعمل أم لا
ال Function تقبل ثلاثة Parameters الإسم والسن والحالة. وتكون أسمائهم a, b, c
أنواع البيانات ستكون String للإسم و Number للسن و Boolean للحالة
البيانات سوف يتم إستخدامها داخل ال Function بشكل عشوائي وليس لهم ترتيب معين
البيانات غير مرتبة وليس لها إسم يعبر عنها يجب عليك طباعة الرسالة بناء على نوع البيانات لتكون رسالة منطقية.
حالة العمل يمكن أن تكون True أو False وبناء عليها تتغير الرسالة
 */

function checkStatus(a, b, c) {
  // Your Code Here
  let name =
    typeof a == "string"
      ? a
      : typeof b == "string"
      ? b
      : typeof c == "string"
      ? c
      : unknown;

  let age =
    typeof a == "number"
      ? a
      : typeof b == "number"
      ? b
      : typeof c == "number"
      ? c
      : unknown;

  let stats =
    typeof a == "boolean"
      ? a
      : typeof b == "boolean"
      ? b
      : typeof c == "boolean"
      ? c
      : unknown;

  if (stats === true) {
    console.log(
      `Hello ${name} , your Age Is ${age} , You Are Available For Hire`
    );
  } else {
    console.log(
      `Hello ${name} , your Age Is ${age} , You Are Not Available For Hire`
    );
  }
}

// Needed Output
checkStatus("Osama", 32, true); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
checkStatus(21, "Merhan", false); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
checkStatus(false, 50, "Mohamed"); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
checkStatus(false, "Osama", 38); // "Hello Osama, Your Age Is 38, You Are Not Available For Hire"
