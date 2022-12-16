import Calculator from "../calculator.js";

const calculator = new Calculator();

describe("We are", () => {
  describe("testing add method of calculator function by", () => {
    test("adding 3 to 4", () => {
      expect(calculator.add(4, 3)).toBe(7);
    });
    test("adding 5 to 10", () => {
      expect(calculator.add(10, 5)).toBe(15);
    });
    test("adding 2 to 5", () => {
      expect(calculator.add(5, 2)).toBe(7);
    });
  });
  describe("testing subtract method of calculator function by", () => {
    test("subtracting 3 from 4", () => {
      expect(calculator.subtract(4, 3)).toBe(1);
    });
    test("subtracting 5 from 10", () => {
      expect(calculator.subtract(10, 5)).toBe(5);
    });
    test("subtracting 2 from 5", () => {
      expect(calculator.subtract(5, 2)).toBe(3);
    });
  });
  describe("testing multiply method of calculator function by", () => {
    test("multiplying 3 times 4", () => {
      expect(calculator.multiply(4, 3)).toBe(12);
    });
    test("multiplying 5 times 10", () => {
      expect(calculator.multiply(10, 5)).toBe(50);
    });
    test("multiplying 2 times 5", () => {
      expect(calculator.multiply(5, 2)).toBe(10);
    });
  });
  describe("testing devide method of calculator function by", () => {
    test("deviding 4 by 2", () => {
      expect(calculator.devide(4, 2)).toBe(2);
    });
    test("deviding 10 by 5", () => {
      expect(calculator.devide(10, 5)).toBe(2);
    });
    test("deviding 22 by 2", () => {
      expect(calculator.devide(22, 2)).toBe(11);
    });
  });
});
