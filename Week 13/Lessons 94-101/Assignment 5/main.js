/**
لديك في الصفحة جميع عناصر ال HTML ولكن وضعنا منها 5 عناصر فقط
المطلوب عند الضغط على أي من العناصر طباعة رسالة في ال Console فيها التالي This Is "Element Type"
الحل بسيط جدا ويكن يحتاج لبعض البحث لكيفية الوصول لنوع العنصر
 */

let container = document.querySelector("body").children;

for (let i = 0; i < container.length; i++) {
  let element = container.item(i);
  element.addEventListener("click", () => {
    console.log(`This is ${element.tagName.toLowerCase()}`);
  });
}
