/**
 * قم بعمل تعديلاتك لتجعل جميع الشروط تتحقق وتطبق كلمة Good
مسموح لك فقط التعديل على “????” ولا شيء آخر
 */

let st = "Elzero Web School";

/*
يجب عليك إستخدام المتغير مع ما تعلمته لتجعل الشرط يتحقق مع العلم أن حرف ال W داخل ال String يمكن أن يتغير مكانه لذلك الحل يجب أن يعمل بغض النظر عن مكان الحرف وهل هو حرف كبير أم صغير
*/

if (st.charAt(st.indexOf("W")).toLowerCase() === "w") {
  console.log("Good");
}

if (st.split("") !== "string") {
  console.log("Good");
}

if (typeof st.length === "number") {
  console.log("Good");
}

if (st.substr(0, 6).repeat(2) === "ElzeroElzero") {
  console.log("Good");
}
