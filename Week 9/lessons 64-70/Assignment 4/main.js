/**
قم بإنشاء Function بإسم specialMix تقبل منك عدد غير معروف من ال Parameters
ال Function يمكن أن تقبل أرقام أو Strings أو Strings تحتوي على أرقام في بدايتها
إذا كانت جميع ال Arguments عبارة عن أرقام قم بجمعهم
إذا كانت Strings تحتوي على أرقام قم بإستخراج الارقام منهم وقم بجمعهم وطبعا تستثني أي String لا يحتوي على أرقام
إذا كانت جميع ال Arguments عبارة عن String تقوم بطباعة رسالة All Is Strings
شاهد المثال لترى ال Test Cases
 */

function specialMix(...data) {
  // Your Code Here
  let sum = 0;
  for(let i = 0 ; i< data.length; i++){
    if(typeof data[i] === "number"  && typeof data[i] !== "string" ){
      sum += data[i];
    }

    if(typeof data[i] === "string" && typeof data[i] !== "number"){
      console.log('All Is Strings');
      }
 
  }
  return sum;
}

console.log(specialMix(10, 20, 30)); // 60
console.log(specialMix("10Test", "Testing", "20Cool")); // 30
console.log(specialMix("Testing", "10Testing", "40Cool")); // 50
 console.log(specialMix("Test", "Cool", "Test")); // All Is Strings

