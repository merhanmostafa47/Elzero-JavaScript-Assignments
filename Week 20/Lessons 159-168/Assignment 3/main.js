/**
 * في السطر الأول قم بطباعة التاريخ والوقت كاملا الخاص بآخر يوم في الشهر السابق
في السطر الثاني قم بطباعة إسم الشهر السابق وآخر يوم منه كما في الأسفل
يجب طباعة الرسالة بنفس الشكل
 */

let date = new Date();
date.setDate(0);
console.log(date);
const monthNames = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
console.log(
  `Previous Month Is ${monthNames[date.getMonth()]} And Last Day Is ${date.getDate()}`
);

// Needed Output

// "Sat Apr 30 2022 18:13:20 GMT+0200 (Eastern European Standard Time)"
// "Previous Month Is April And Last Day Is 30"
