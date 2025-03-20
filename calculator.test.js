describe("String Calculator", () => {
  test("should return 0 for an empty string", () => {
    const calculator = require("./calculator");
    expect(calculator.add("")).toBe(0);
  });
});