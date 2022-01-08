import { Calculator } from "../src/sum";

test("two plus two is four", () => {
  expect(2 + 2).toBe(4);
});

describe("더하기 빼기 테스트합니다.", () => {
  it("더하기부터 시작", function () {
    const calculator = new Calculator(5, 3);
    expect(calculator.sum()).toBe(8);
  });

  it("더하기부터 시작", function () {
    const calculator = new Calculator(5, 3);
    expect(calculator.minus()).toBe(2);
  });
});
