/**
 * قم بإنشاء Function تقوم بإنشاء Popup داخل الصفحة كما في الصورة التالية
ال Popup تحتوي على زرار Close عند الضغط عليه يقوم بحذف ال Popup من الصفحة
يجب عليك تشغيل ال Function بعد 5 ثواني من تحميل الصفحة
 */

let popup = document.querySelector(".popup-container");
let closeBtn = document.querySelector("button");

let popupShow = setTimeout(() => {
  popup.style.display = "block";
}, 5000);

closeBtn.onclick = () => {
  clearTimeout(popupShow);
  popup.style.display = "none";
};
