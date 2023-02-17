/*
*لديك Array تحتوي على اسماء التقنيات الخاصة بك
قم بعمل ال Destructuring Assignment لتحصل على النتيجة المطلوبة في النهاية داخل ال Console
*/

let mySkills = [
  "HTML",
  "CSS",
  "JavaScript",
  ["PHP", "Python", ["Django", "Laravel"]],
];

// Write Your Destructuring Assignment Here
let [a, b, c, [d, e, [f, g]]] = mySkills;

console.log(`My Skills: ${a}, ${b}, ${c}, ${d}, ${e}, ${f}, ${g}`);

// My Skills: HTML, CSS, JavaScript, PHP, Python, Django, Laravel
