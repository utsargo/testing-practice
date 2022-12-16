import sringlength from "../sringlength.js";

describe("We are", () => {
  test("testing the stringLength function", () => {
    expect(sringlength("I am well")).toBe(7);
  });
  test("testing the stringLength function for empty sring", () => {
    expect(sringlength("")).toEqual("Invalid string");
  });
  test("testing the stringLength function for empty sring", () => {
    expect(sringlength("I am well, Thank you")).toEqual("It's too long");
  });
});
