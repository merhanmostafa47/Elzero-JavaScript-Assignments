/**
 * قم بطباعة الوقت بعد مرور 10 سنوات من بداية الوقت
قم بإضافة ثانية واحدة فقط للوقت
بغض النظر عن ال Time Zone الخاص بك نريد أن يكون الوقت 00:00:01
شاهد النتيجة بالأسفل لتعرف الفكرة المطلوبة
 */

let date = new Date();
date.setTime(0);
date.setTime(1000);
date.setHours(0);
date.setFullYear(1980);
console.log(date);

// Needed Output
// "Tue Jan 01 1980 00:00:01 GMT+0200 (Eastern European Standard Time)"
