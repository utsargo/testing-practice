import reverseString from "../reversestring.js";

describe("We are", () => {
  test("testing the reverseString function", () => {
    expect(reverseString("I am well")).toEqual("llew ma I");
  });
});
