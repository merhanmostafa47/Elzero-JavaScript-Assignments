/**
 * قم بإستعمال ال Prompt لجلب رسالة من المستخدم
الرسالة ستكون كالتالي “Print Number From – To”
الرسالة الإفتراضية ستكون كالتالي “Example: 5-20”
سيقوم الشخص بكتابة رقمين وبينهم علامة –
يمكن أن يكون الرقم الأول أكبر من الثاني أو العكس
في كلا الحالتين نقوم بطباعة الأرقام داخل الصفحة من أصغر رقم حتى أكبر رقم. شاهد المثال لتفهم الفكرة
 */

let nums = prompt("Print Number From – To", "Example: 5-20");

let numsArray = nums.split("-");
console.log(numsArray);

let start;
let end;

if (Number(numsArray[0]) < Number(numsArray[1])) {
  start = Number(numsArray[0]);
  end = Number(numsArray[1]);
} else {
  start = Number(numsArray[1]);
  end = Number(numsArray[0]);
}

let interval = setInterval(() => {
  if (start < end) {
    document.write(start++ + "\n");
  }
}, 1000);

console.log(end);

if (start === end++) {
  clearInterval(interval);
}
