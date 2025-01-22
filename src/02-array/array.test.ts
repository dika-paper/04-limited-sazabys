import { chunkArray, findCommonElements } from "./array";

describe.skip("chunkArray", () => {
  it("should break an array into an array of arrays of a given size", () => {
    expect(chunkArray([1, 2, 3, 4, 5], 2)).toEqual([[1, 2], [3, 4], [5]]);
    expect(chunkArray([1, 2, 3, 4, 5], 3)).toEqual([
      [1, 2, 3],
      [4, 5],
    ]);
    expect(chunkArray([1, 2, 3, 4, 5], 6)).toEqual([[1, 2, 3, 4, 5]]);
  });
});

describe.skip("findCommonElements", () => {
  it("should find all common elements between two arrays", () => {
    expect(findCommonElements([1, 2, 3, 4, 5], [2, 3, 6, 7])).toEqual([2, 3]);
    expect(findCommonElements([1, 2, 3], [4, 5, 6])).toEqual([]);
    expect(findCommonElements([1, 2, 3], [1, 2, 3])).toEqual([1, 2, 3]);
  });
});
