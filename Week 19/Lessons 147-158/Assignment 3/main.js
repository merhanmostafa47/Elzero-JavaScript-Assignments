/**
 * لديك ال Class التالي بإسم User
نحتاج للتعديل عليه كما تريد لتنفيذ المطلوب بالأسفل
أولا منع الدخول على ال Card Property مباشرة
عند إنشاء مستخدمين تلاحظ كل شخص كتب ال Card Number بطريقة مختلفة
نحتاج جميع الأرقام أن تكون String وبعد كل 4 أرقام علامة – كما في ال Output
يجب عدم التعديل على أسطر إنشاء المستخدمين ولا أسطر ال Console
 */

// Edit The Class
class User {
  #c;
  constructor(username, card) {
    this.u = username;
    this.#c = card.toString();
  }

  get formattedCard() {
    return this.#c.replace(/(\d{4})(\d{4})(\d{4})(\d{4})/, "$1-$2-$3-$4");
  }

  get showData() {
    return `Hello ${this.u} Your Credit Card Number Is ${this.formattedCard}`;
  }
}

// Do Not Edit Anything Below

let userOne = new User("Osama", "1234-5678-1234-5678");
let userTwo = new User("Ahmed", "1234567812345678");
let userThree = new User("Ghareeb", 1234567812345678);

console.log(userOne.showData);
// Hello Osama Your Credit Card Number Is 1234-5678-1234-5678

console.log(userTwo.showData);
// Hello Ahmed Your Credit Card Number Is 1234-5678-1234-5678

console.log(userThree.showData);
// Hello Ghareeb Your Credit Card Number Is 1234-5678-1234-5678

console.log(userOne.c); // Prevent Accessing To Card Property Here
// Undefined
