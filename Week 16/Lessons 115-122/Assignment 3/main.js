/*
*لديك أكثر من Array تحتوي على أسماء أصدقائك
يمكنك عمل ما تريد وإستخدام ما تعلمته لتهيء البيانات لعملية ال Destructuring
قم بعمل ال Destructuring Assignment لتحصل على النتيجة المطلوبة في النهاية داخل ال Console
يجب عمل Destructuring Assignment واحدة فقط
*/

let arr1 = ["Ahmed", "Sameh", "Sayed"];
let arr2 = ["Mohamed", "Gamal", "Amir"];
let arr3 = ["Haytham", "Shady", "Mahmoud"];

// Play With Arrays To Prepare For Destructuring
// Write Your Destructuring Assignment Here
arr2 = arr1.filter((e) => {
  return e.charAt(0) == "A";
});

let [a, b, c] = arr2.concat(arr3.slice(1)).sort().reverse();

console.log(`My Best Friends: ${a}, ${b}, ${c}`);

// My Best Friends: Shady, Mahmoud, Ahmed
