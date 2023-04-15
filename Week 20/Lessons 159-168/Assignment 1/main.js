/**
 * قم بطباعة الثواني والدقائق والساعات والأيام والشهور والسنين من تاريخ ميلادك بإستخدام الوقت
شاهد النتيجة بالأسفل لتعرف الفكرة المطلوبة
المطلوب طباعة القيم من تاريخ ميلادك أنت وليس النتيجة بالأسفل
 */

let birthdayDate = new Date("7/4/2001");
console.log(birthdayDate);

let nowDate = Date.now();

let seconds = (nowDate - birthdayDate.getTime()) / 1000;
console.log(`${seconds.toFixed()} Seconds`);

let minutes = seconds / 60;
console.log(`${minutes.toFixed()} Minutes`);

let hours = minutes / 60;
console.log(`${hours.toFixed()} Hours`);

let days = hours / 24;
console.log(`${days.toFixed()} Days`);

let months = days / 30;
console.log(`${months.toFixed()} Months`);

let years = months / 12;
console.log(`${years.toFixed()} Years`);

// Needed Output

// "1247939400 Seconds"
// "20798990 Minutes"
// "346650 Hours"
// "14444 Days"
// "481 Months"
// "40 Years"
