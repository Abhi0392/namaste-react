import { Sum } from "../Sum";
test("Sum function should calculate sum of 2 numbers", () => {
  const result = Sum(2, 3);

  //Assertion
  expect(result).toBe(5);
});
