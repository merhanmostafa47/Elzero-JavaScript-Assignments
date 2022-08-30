/**
 * قم بإنشاء Function تقوم بعمل عمليات حسابية مختلفة
ال Function تقبل ثلاثة Parameters هم الرقم الأول والثاني ونوع العملية الحسابية
ال Function تقوم بعمل العملية الحسابية التي تكتبها على الرقمين وهي تحتوي على 3 عمليات فقط ( add | subtract | multiply )
في حالة لم يتم كتابة نوع العملية الحسابية قم بجمع الرقمين
في حالة تم كتابة رقم واحد فقط داخل ال Function قم بإظهار رسالة في ال Console تفيد بأن الرقم الثاني غير موجود
 */

function calculate(firstNum, secondNum, operation = undefined) {
  // Your Code Here
  if (secondNum == undefined) {
    console.log("Second Number Not Found");
  } else {
    if (operation === "add") {
      console.log(firstNum + secondNum);
    } else if (operation === "subtract") {
      console.log(firstNum - secondNum);
    } else if (operation === "multiply") {
      console.log(firstNum * secondNum);
    } else {
      console.log(firstNum + secondNum);
    }
  }
}

// Needed Output
calculate(20); // Second Number Not Found
calculate(20, 30); // 50
calculate(20, 30, "add"); // 50
calculate(20, 30, "subtract"); // -10
calculate(20, 30, "multiply"); // 600
