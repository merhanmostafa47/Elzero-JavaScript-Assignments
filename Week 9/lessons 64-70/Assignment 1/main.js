/**
قم بإنشاء Function بإسم getDetails تقبل منك ثلاثة Parameters وهم كالتالي zName, zAge, zCountry
ال Function ستحتوي على أربعة Functions فرعية بالأسماء التالية namePattern, ageWithMessage, countryTwoLetters, fullDetails
namePattern تقبل منك الإسم مكون من مقطعين هكذا Osama Mohamed وترجع الإسم هكذا Osama M. شاهد المثال لتفهم أكثر
ageWithMessage تقبل منك رسالة فيها العمر تستخرج منه فقط العمر وتقوم بتغيير الرسالة شاهد المثال لتفهم
countryTwoLetters تقبل منك إسم البلد وترجع لك رسالة معها أول حرفين من إسم البلد بحروف كبيرة شاهد المثال لتفهم
fullDetails تقوم بدمج جميع ال Functions السابقة لتخرج لك الرسالة كاملة كما في المثال
إسم الشخص الثاني أول حرف منه يمكن أن يكون Capital أو Small
رسالة العمر يمكن أن تتغير ولكن الرقم دائما سيكون في المقدمة ولن يتغير مكانه
التعليقات ستوضح لك المطلوب بالتفصيل
 */

function getDetails(zName, zAge, zCountry) {
  function namePattern(zName) {
    // Write Your Code Here
    zName = zName.split(" ");
    let fName = zName[0],
      lName = zName[1];
    return `Hello ${fName}  ${lName.charAt(0).toUpperCase()}` + ".";
    // Osama Mohamed => Osama M.
    // Ahmed ali => Ahmed A.
  }

  function ageWithMessage(zAge) {
    // Write Your Code Here

    zAge = zAge.split(" ");
    let age;

    for (let i = 0; i < zAge.length; i++) {
      if (
        typeof Math.floor(zAge[i]) === "number" &&
        Math.floor(zAge[i]) == zAge[i].toString() &&
        Math.floor(zAge[i]) !== " "
      ) {
        age = zAge[i];
      }
    }
    return `Your Age Is ${age}`;
    // 38 Is My Age => Your Age Is 38
    // 32 Is The Age => Your Age Is 32
  }

  function countryTwoLetters(zCountry) {
    // Write Your Code Here
    zCountry = zCountry.split("");
    let letterOne = zCountry[0].toUpperCase(),
      letterTwo = zCountry[1].toUpperCase();
    return `You Live In ${letterOne}${letterTwo}`;
    // Egypt => You Live In EG
    // Syria => You Live In SY
  }
  function fullDetails() {
    // Write Your Code Here
    return `${namePattern(zName)} , ${ageWithMessage(zAge)} , ${countryTwoLetters(zCountry)}`;
  }
  return fullDetails(); // Do Not Edit This
}

console.log(getDetails("Osama Mohamed", "38 Is My Age", "Egypt"));
// Hello Osama M., Your Age Is 38, You Live In EG

console.log(getDetails("Ahmed ali", "32 Is The Age", "Syria"));
// Hello Ahmed A., Your Age Is 32, You Live In SY
