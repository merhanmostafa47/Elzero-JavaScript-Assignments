/**
 * قم بحساب الوقت اللازم لطباعة من رقم واحد وحتى 99999 في ال Console
يجب إستخدام ال Performance.now()
شاهد الرسالة المطلوب طباعتها بالأسفل
يجب إزالة الكسور من الرقم وعدم تقريبها
 */

let t0 = performance.now()
for (let index = 0; index <= 99999; index++) {
   console.log(index)
}
let t1=performance.now()

console.log(`Loop Took ${(t1-t0).toFixed()} Milliseconds.`);

// Needed Output

// "Loop Took 1921 Milliseconds."