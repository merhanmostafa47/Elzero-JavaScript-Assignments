import { a, b, c } from "./mod-two.js";

export class modOne {
  static numOne = a;
  static numTwo = b;
  static numThree = c;
}

export let calc = (a, b, c) => {
  return a + b + c;
};
