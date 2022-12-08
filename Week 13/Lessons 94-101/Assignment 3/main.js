// لديك عنصرين موجودين في الصفحة عبارة عن Div و Paragraph
//  المطلوب إزالة ال Paragraph من الصفحة تماما
//  أما بخصوص ال Div المطلوب وضع عنصر قبله وعنصر بعده فيهم المطلوب في المثال بالأسفل

let divElement = document.querySelector("div");
let paragraphElement = document.querySelector("p");
paragraphElement.remove();

let startElement = document.createElement("div");
let endElement = document.createElement("div");

startElement.innerHTML = "Start";
endElement.innerHTML = "End";

startElement.className = "start";
endElement.className = "end";

startElement.title = "Start Element";
endElement.title = "End Element";

startElement.dataset.value = "Start";
endElement.dataset.value = "End ";

divElement.before(startElement);
divElement.after(endElement);
