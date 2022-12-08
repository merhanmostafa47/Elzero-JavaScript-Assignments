/**
 * شاهد الشكل التالي
لديك حقلين إدخال واحد لإضافة ال Classes على العنصر ال Current والثاني لحذف ال Classes من العنصر Current
عملية الإضافة تتم بمجرد الخروج من حقل الإدخال Blur
تأكد أن إسم ال Class يتم إضافته ك Small Letters بغض النظر عن المدخل
إذا قام الشخص بكتابة كلمتين بينهم مسافات يتم إضافتهم ك Two Classes أو حذفهم ك Two Classes أيضا
عند الخروج من حقل الإدخال تأكد أن تحذف القيمة الموجودة به
يجب التأكد أن الحقل غير فارغ قبل الخروج منه حتى لا يظهر اي خطأ
يجب عليك عمل Function يتم تشغيلها كل مرة تقوم بالخروج من حقول الإدخال
وظيفة ال Function هي عرض ال Classes الموجودة على العنصر Current في مكان النتيجة في الأسفل
ال Function تقوم بترتيب أسماء ال Classes أبجديا قبل إظهارها
إذا لم يكن هناك أي Classes على العنصر نظهر رسالة "No Classes To Show"
شاهد الشكل لتعرف المطلوب
 */

let mainElement = document.querySelector(".element");
let addInput = document.querySelector(".classes-to-add");
let removeInput = document.querySelector(".classes-to-remove");
let classesListContainer = document.querySelector(".classes-list div");
let inputValuesArray = [];
let classes = mainElement.classList;
console.log(classes);

addInput.addEventListener("blur", (e) => {
  if (addInput.value !== "") {
    inputValuesArray = e.target.value.split(" ").sort();

    //   console.log(inputValuesArray.join(" "));
    for (let i = 0; i < inputValuesArray.length; i++) {
      mainElement.classList.add(inputValuesArray[i].toLowerCase());
    }

    // let FiltteredClasses = classes.filter((c, index) => {
    //   return classes.indexOf(c) === index;
    // });

    // console.log(FiltteredClasses);

    e.target.value = "";
    classListShow();
  }
});

addInput.addEventListener("focus", (e) => {
  classesListContainer.innerHTML = "";
});

let classListShow = () => {
  for (let i = 0; i < classes.length; i++) {
    let item = document.createElement("span");
    item.textContent = classes.item(i);
    classesListContainer.appendChild(item);

    console.log(classesListContainer);
  }
};

console.log(classesListContainer);
