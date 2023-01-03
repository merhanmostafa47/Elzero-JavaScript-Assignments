/**
 * قم بإنشاء Div داخل الصفحة وبداخله رقم 10 على سبيل المثال
قم عمل Counter يقوم بالعد من الرقم الموجود داخل ال Div وحتى يصل إلى الصفر
عند الوصول إلى الصفر قم بإيقاف العد
 */

let num = document.querySelector(".number");
let intgerNum = Number(num.innerHTML);
console.log(typeof num);
console.log(num);

let interval = setInterval(() => {
  if (intgerNum >= 0) {
    num.textContent = intgerNum--;
  } else {
    clearInterval(interval);
  }
}, 1000);
