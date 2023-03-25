/*
 *لديك ال IP التالي قم بعمل RegExp Pattern لعمل Match لهذا ال IP
 */

let ip = "2001:db8:3333:4444:5555:6666:7777:8888";
let re = /\d{3}:\w{2}\d:\d{4}:\d{4}:\d{4}:\d{4}:\d{4}:\d{4}/;
console.log(re.test(ip));
