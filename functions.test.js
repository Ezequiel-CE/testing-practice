import {
  capitalize,
  reverseString,
  calculator,
  caesarCipher,
  analyzeArray,
} from "./functions";

test("first letter to uppercase", () => {
  expect(capitalize("hello")).toBe("Hello");
  expect(capitalize("world")).toBe("World");
});

test("reverse a word", () => {
  expect(reverseString("hello")).toBe("olleh");
  expect(reverseString("world")).toBe("dlrow");
});

test("testing calculator", () => {
  expect(calculator.add(4, 8)).toBe(12);
  expect(calculator.substract(4, 2)).toBe(2);
  expect(calculator.multiply(3, 5)).toBe(15);
  expect(calculator.divide(8, 2)).toBe(4);
});

test("encrypting word", () => {
  expect(caesarCipher("attack at dawn", 5)).toBe("fyyfhp fy ifbs");
  expect(caesarCipher("atTack at! dawn.", 10)).toBe("kddkmu kd! nkgx.");
});

test("analyzed array", () => {
  expect(analyzeArray([1, 8, 3, 4, 2, 6])).toEqual({
    average: 4,
    min: 1,
    max: 8,
    length: 6,
  });
});
