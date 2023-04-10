/**
 * لدينا ال Class التالي بإسم Phone
نحتاج لعمل Class آخر بإسم Tablet يورث خواص Class ال Phone
ال Class الخاص بال Tablet يحتوي على Property زيادة وهي ال size
ويحتوي أيضا على Method بإسم fullDetails
قمنا بإستعمال ال Class المسمى Tablet لإنشاء أكثر من Tablet
قمنا بعدها بإستعمال ال Method المسماه fullDetails والتي تطبع بيانات عن ال Tablet
الآن كل ما عليك هو إنشاء ال Tablet Class لتظهر البيانات كما هو موجود في الأسفل
لو لم يكتب الشخص ال size يجب أن تظهر كلمة Unknown
 */

class Phone {
  constructor(name, serial, price) {
    this.name = name;
    this.serial = serial;
    this.price = price;
  }
}

// Write Tablet Class Here
class Tablet extends Phone {
  constructor(name, serial, price, size) {
    super(name, serial, price, size);
    this.size = size || "unknown";
  }
  fullDetails() {
    return `${this.name} Serial is ${this.serial} And Size is ${this.size}`;
  }
}

let TabletOne = new Tablet("iPad", 100200300, 1500, 12.9);
let TabletTwo = new Tablet("Nokia", 350450650, 800, 10.5);
let TabletThree = new Tablet("LG", 250450650, 650);

console.log(`${TabletOne.fullDetails()}`);
// iPad Serial is 100200300 And Size Is 12.9

console.log(`${TabletTwo.fullDetails()}`);
// Nokia Serial is 350450650 And Size Is 10.5

console.log(`${TabletThree.fullDetails()}`);
// LG Serial is 250450650 And Size Is Unknown
