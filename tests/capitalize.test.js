import capitalize from "../capitalize.js";
describe("We are", () => {
  test("testing the capitalize function", () => {
    expect(capitalize("i am well")).toBe("I am well");
  });
});
