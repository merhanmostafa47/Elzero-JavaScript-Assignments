/**
 * قم بإنشاء Div داخل الصفحة وبداخله رقم 10 على سبيل المثال
قم عمل Counter يقوم بالعد من الرقم الموجود داخل ال Div وحتى يصل إلى الصفر
عند الوصول للرقم 5 قم بفتح صفحة موقع الأكاديمية Elzero.org في Popup
شاهد الصورة لتفهم الفكرة
عند الوصول للرقم صفر لا تنسى إيقاف العداد
 */

let num = document.querySelector(".number");
let intgerNum = Number(num.innerHTML);
console.log(typeof num);
console.log(num);

let interval = setInterval(() => {
  if (intgerNum >= 0) {
    num.textContent = intgerNum--;
  } else {
    window.location.href = "https://Elzero.org";
  }
}, 1000);
