import { sampleProvinceData, Province } from "../src/testCase/testcase";

describe("province", function () {
  let asia: Province;

  // 각 테스트 케이스마다 데이터를 초기화
  beforeEach(function () {
    asia = new Province(sampleProvinceData());
  });

  it("shortfall", function () {
    expect(asia.shortfall).toBe(5);
  });

  it("profit", function () {
    expect(asia.profit).toEqual(230);
  });
});
