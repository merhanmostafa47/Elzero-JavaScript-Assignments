/**
 * لديك النموذج التالي الخاص بتحويل العملات
كل ما عليك هو كتابة العملة بالدولار داخل حقل الإدخال
في مكان النتيجة اسفل حقل الإدخال يجب عليك إظهار العملة بالدولار والمقابل لها بالجنيه المصري
الشخص يمكن أن يكتب الرقم أو يقوم بعمل Paste للرقم أيضا
يمكنك تغيير ال div الخاص بالنتيجة وتقوم بالتعديل عليه كما تحب
لا تقوم بتعديل حقل الإدخال ابدا
تنسيقات ال CSS لتجميل الشكل فقط لو أردت عملها لا توجد مشكل
الدولار = 15.6 جنيه مصري
تأكد ان الكسور التي تظهر في النتيجة لا تتعدي رقمين فقط. مثلا 1500.32
 */

let userInput = document.querySelector("[name='dollar']");
let usdNum = document.getElementById("usd");
let egpNum = document.getElementById("egp");

userInput.onmouseenter = (e) => {
  usdNum.textContent = userInput.value;
  egpNum.textContent = (userInput.value * 15.6).toFixed(2);
};
