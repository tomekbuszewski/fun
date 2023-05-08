import { isOdd } from "./is-odd";

describe("isOdd", function () {
  it("should return truthy for odd values", function () {
    expect(isOdd(1)).toBeTruthy();
    expect(isOdd(3)).toBeTruthy();
  });

  it("should return false for even values", function () {
    expect(isOdd(2)).toBeFalsy();
    expect(isOdd(4)).toBeFalsy();
  });
});
