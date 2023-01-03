/**
 * قم بإنشاء Div داخل الصفحة وبداخله رقم 10 على سبيل المثال
قم عمل Counter يقوم بالعد من الرقم الموجود داخل ال Div وحتى يصل إلى الصفر
عند الوصول للرقم 0 بدلا من إيقاف العداد قم بتحويل الصفحة الحالية لموقع الأكاديمية Elzero.org
 */

let num = document.querySelector(".number");
let intgerNum = Number(num.innerHTML);
console.log(typeof num);
console.log(num);

let interval = setInterval(() => {
  if (intgerNum >= 0) {
    if (intgerNum == 5) {
      window.open(
        "https://Elzero.org",
        "_blank",
        "width=600,height=600,left=500,top=100"
      );
      num.textContent = intgerNum--;
    }
    num.textContent = intgerNum--;
  } else {
    clearInterval(interval);
  }
}, 1000);
