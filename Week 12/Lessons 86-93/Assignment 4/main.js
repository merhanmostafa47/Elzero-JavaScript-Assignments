/**
 * لديلك عنصريين محتواهم وال Attributes الخاصة بهم مبعثرة
المطلوب نقل المحتوى وال Title Attribute من ال div الأول للثاني ومن الثاني للأول
غير مسموح نهائيا كتابة أرقام أو Strings أو إستعمال True أو False بإستثناء أسماء ال Classes طبعا
يجب عليك إضافة رقم 2 بجانب كلمة Two
شاهد النتيجة لترى المطلوب
 */

let firstDiv = document.querySelector(".one");
let secondDiv = document.querySelector(".two");

let firstDivText = firstDiv.textContent;
let secondDivText = secondDiv.textContent;

console.log(firstDivText);
console.log(secondDivText);

// Set the title of divs
firstDiv.title = firstDiv.className;
secondDiv.title = secondDiv.className;

// Get number 2
let secondDivTextArray = firstDivText.split("");
let numTwo =
  secondDivTextArray.length + secondDivTextArray.lastIndexOf(firstDivText);

// Set the content of divs
firstDiv.textContent = secondDivText;
secondDiv.textContent = firstDivText + " " + numTwo.toString();

console.log(firstDiv);
console.log(secondDiv);
