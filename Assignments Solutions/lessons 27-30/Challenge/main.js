let a = "Elzero Web School";

// Include This Method In Your Solution [slice, charAt]
console.log(a.slice(2, 6).charAt(0).toUpperCase() + a.slice(3, 6)); // Zero

// 8 H
console.log(a.slice(-4, -3).toUpperCase().repeat(8)); // HHHHHHHH

// Return Array
console.log(a.split(" ")[0]); // ["Elzero"]

// Use Only "substr" Method + Template Literals In Your Solution
console.log(`${a.substr(0, 6)} ${a.substr(-6, 6)}`); // Elzero School

// Solution Must Be Dynamic Because String May Changes
console.log(
  a.toLowerCase().split("").slice(0, 1) +
    a.slice(1, length - 1).toUpperCase() +
    a.slice(-1)
); // eLZERO WEB SCHOOl
