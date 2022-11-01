/**
لديك حقل إدخال تقوم بكتابة عدد العناصر التي تريد إنشائها
لديك حقل آخر يحتوي على نوع العنصر سواء كان Div أو Section
لديك حقل إدخال لكتابة الكلمة التي ستظهر داخل العنصر
لديك زر لبدا عملية الإنشاء
عند الضغط على إنشاء العناصر تأكد أن اي عناصر قديمة تم إنشاءها سوف يتم إزالتها أولا
يمكنك عمل تنسيقات ال CSS بال JavaScript في حالة كنت تريد التمرين على التنسيق بال JavaScript
يمكنك عمل التنسيق بشكل طبيعي بال CSS بدون أي مشكلة
تأكد أن ال Form لا تقوم بإرسال البيانات حتى لا يتم عمل Refresh للصفحة
العنصر يحتوي على ID و Class وال ID يزداد رقم مع كل عنصر شاهد المثال المطلوب لتفهم
 */

let formContainer = document.querySelector("form");
//Style form
let formContainerStyle = `
display:flex;
flex-direction:column;
inline-size:30%
`;
formContainer.style.cssText = formContainerStyle;

//==============================================================

let userInput = document.querySelectorAll(".input");
console.log(userInput);
//Style input
let userInputStyle = `
margin-block:.5rem;
border: 2px solid #0097A7;
padding:6px;
`;
for (const element of userInput) {
  element.style.cssText = userInputStyle;
  element.onfocus = () => {
    element.style.outline = "2px solid #FF4081";
    element.style.border = "none";
  };
  element.onblur = () => {
    element.style.outline = "2px solid #0097A7";
  };
}

//=============================================================

let submitBtn = document.querySelector("[name='create']");
//Style submit button
let submitBtnStyle = `
padding: .5rem 2rem;
background-color: #FF4081;
color: #fff;
font-size: 1rem;
font-weight:600;
border: none;
`;
submitBtn.onmouseenter = () => {
  submitBtn.style.background = "#0097A7";
};
submitBtn.onmouseleave = () => {
  submitBtn.style.background = "#FF4081";
};
submitBtn.style.cssText = submitBtnStyle;

//==============================================================

let elementsNum = document.querySelector("[name='elements']");
let elementText = document.querySelector("[name='texts']");
let elementType = document.querySelector("[name='type']");

let resultsContainer = document.querySelector(".results");

let elementStyle = `
color:#fff;
padding: 1rem 2rem;
font-size: 1.25rem;
font-weight: 700;
background-color:#0097A7;
width: 100px;
height:20px;
`;

let resultsContainerStyle = `
display:flex;
align-items:center;
flex-wrap : wrap;
gap:1rem;
max-width:100%;
margin-top:2rem;
text-align:center
`;

submitBtn.onclick = (ele) => {
  ele.preventDefault();
  resultsContainer.innerHTML = "";

  console.log(elementsNum.value);
  console.log(elementText.value);
  console.log(elementType.value);

  for (let index = 0; index < elementsNum.value; index++) {
    let element = document.createElement(elementType.value);
    element.textContent = elementText.value;
    element.setAttribute("id", `id-${index}`);
    element.setAttribute("class", "box");
    element.setAttribute("title", "Element");
    console.log(element);
    element.style.cssText = elementStyle;
    resultsContainer.appendChild(element);
    resultsContainer.style.cssText = resultsContainerStyle;
  }
};