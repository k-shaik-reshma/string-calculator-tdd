describe("String Calculator", () => {
  test("should return 0 for an empty string", () => {
    const calculator = require("./calculator");
    expect(calculator.add("")).toBe(0);
  });

  test("should return the number itself for a single number", () => {
    expect(calculator.add("1")).toBe(1);
  });
});