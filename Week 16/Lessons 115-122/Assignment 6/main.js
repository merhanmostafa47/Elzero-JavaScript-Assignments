/*
*لديك Array تحتوي على مجموعة من ال Objects فيها بيانات أشخاص
قم بعمل ال Destructuring Assignment لتحصل على النتيجة المطلوبة في النهاية داخل ال Console
إذا كانت قيمة ال chosen Variable 1 تقوم بجلب بيانات أول شخص وإذا كانت 2 ثاني شخص وهكذا
لاحظ ال Output يتغير على حسب المتغير available
شاهد المثال لتفهم المطلوب
*/

let chosen = 3;

let myFriends = [
  { title: "Osama", age: 39, available: true, skills: ["HTML", "CSS"] },
  { title: "Ahmed", age: 25, available: false, skills: ["Python", "Django"] },
  { title: "Sayed", age: 33, available: true, skills: ["PHP", "Laravel"] },
];

// Write Your Code Here
let availablity;
function checkAvailablity(e) {
  if (e === true) {
    availablity = "Available";
  } else {
    availablity = "Not Available";
  }
}

if (chosen == 1) {
  const [
    {
      title,
      age,
      available,
      skills: [, s],
    },
    ,
  ] = myFriends;
  checkAvailablity(available);
  console.log(`"${title}" \n ${age} \n "${availablity}" \n "${s}" `);
} else if (chosen == 2) {
  const [
    ,
    {
      title,
      age,
      available,
      skills: [, s],
    },
  ] = myFriends;
  checkAvailablity(available);
  console.log(`"${title}" \n ${age} \n "${availablity}" \n "${s}" `);
} else if (chosen == 3) {
  const [
    ,
    ,
    {
      title,
      age,
      available,
      skills: [, s],
    },
  ] = myFriends;
  checkAvailablity(available);
  console.log(`"${title}" \n ${age} \n "${availablity}" \n "${s}" `);
}

// If chosen === 1

// "Osama"
// 39
// "Available"
// "CSS"

// If chosen === 2

// "Ahmed"
// 25
// "Not Available"
// "Django"

// If chosen === 3

// "Sayed"
// 33
// "Available"
// "Laravel"
