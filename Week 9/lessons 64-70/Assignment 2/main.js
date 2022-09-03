/**
قم بتحويل كل Function من ال Functions التالية ل Arrow Function Syntax
 */

/**
 * First function
 */

// function itsMe() {
//   return `Iam A Normal Function`;
// }

// console.log(itsMe()); // Iam A Normal Function

const itsMe = () => `Iam A Normal Function`;

console.log(itsMe());



/**
 * Second function
 */

// function urlCreate(protocol, web, tld) {
//   return `${protocol}://www.${web}.${tld}`;
// }

// console.log(urlCreate("https", "elzero", "org")); // https://www.elzero.org

const urlCreate = (protocol, web, tld) => `${protocol}://www.${web}.${tld}`;

console.log(urlCreate("https", "elzero", "org"));
