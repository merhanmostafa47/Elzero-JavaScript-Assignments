/**
 * لديك متغير بإسم nums يحتوي على مجموعة أرقام زوجية وفردية
قم بإيجاد النتيجة النهائية المطلوبة بواسطة إستخدام ال Reduce فقط
يجب عليك تعيين ال Initial Value لل Reduce لرقم 1
إذا كانت قيمة ال Current Element في ال Reduce رقم فردي قم بجمع ال Accumulator مع ال Current Element
إذا كانت قيمة ال Current Element في ال Reduce رقم زوجي قم بضرب ال Accumulator مع ال Current Element
 */

let nums = [2, 12, 11, 5, 10, 1, 99];

let result = nums.reduce((acc, ele) => {
  if (ele % 2 != 0) {
    return acc + ele;
  } else if (ele % 2 == 0) {
    return acc * ele;
  }
}, 1);

console.log(result);
// 500
