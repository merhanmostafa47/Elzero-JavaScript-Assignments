/**
لديك 5 صور في الصفحة بعضهم يحتوي على ال Alt Attributes والباقي لا
قم بعمل Loop على جميع الصور وتأكد أن ال Alt Attribute موجود أم لا
في حالة كان موجود قم بتغيير القيمة إلى الكلمة Old
في حالة لم يكن موجود قم بتغيير القيمة إلى Elzero New
شاهد النتيجة لترى المطلوب
 */

let images = document.getElementsByTagName("img");
console.log(images);

for (const element of images) {
  if (element.hasAttribute("alt")) {
    element.setAttribute("alt", "Old");
  } else if (!element.hasAttribute("alt")) {
    element.setAttribute("alt", "Elzero New");
  }
}
console.log(images);
