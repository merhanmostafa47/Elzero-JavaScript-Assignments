/*
*لديك Array تحتوي على اسماء أصدقائك وهناك منهم أسماء مكررة
المطلوب طباعة الأسماء في ال Console مرتبين أبجديا وبدون تكرار
المطلوب عمل الحل بسطر واحد فقط
*/

let myFriends = ["Osama", "Ahmed", "Sayed", "Sayed", "Mahmoud", "Osama"];
console.log([...new Set(myFriends)].sort());

// Needed Output
// (4) ['Ahmed', 'Mahmoud', 'Osama', 'Sayed']
