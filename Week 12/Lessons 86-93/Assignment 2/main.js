/**
 * دينا مجموعة من الصور في الصفحة عبارة عن 10 صور بلا Source
المطلوب هو تغيير ال Src Attribute لصورة اللوجو التالية “https://elzero.org/wp-content/themes/elzero/imgs/logo.png”
تغيير محتوى ال Alt Attribute ل Elzero Logo
يجب عمل Loop يقوم بالوظيفة مباشرة ولا تقوم بتكرار ال Code
 */

let image = document.getElementsByTagName("img");
console.log(image);

for (const element of image) {
  element.setAttribute(
    "src",
    "https://elzero.org/wp-content/themes/elzero/imgs/logo.png"
  );
  element.setAttribute("alt", "Elzero Logo");
}
