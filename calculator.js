export default class Calculator {
  constructor() {
    this.result = 0;
  }

  add = (a, b) => {
    this.result = a + b;
    return this.result;
  };

  subtract = (a, b) => {
    this.result = a - b;
    return this.result;
  };

  devide = (a, b) => {
    this.result = a / b;
    return this.result;
  };
  multiply = (a, b) => {
    this.result = a * b;
    return this.result;
  };
}
