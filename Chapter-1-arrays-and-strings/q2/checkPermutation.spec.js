const checkPermutation = require("./checkPermutation").checkPermutation;

describe("Interview questions", () => {
  describe("checkPermutation finds whether one string is a permutation of another", () => {
    describe("Permutations", () => {
      it("Should return true for 'hello' and 'lehol", () => {
        expect(checkPermutation("hello", "lehol")).toBeTrue();
      });
      it("Should return true for 'carp' and 'parc", () => {
        expect(checkPermutation("hello", "lehol")).toBeTrue();
      });
      it("Should return true for 'mark' and 'kram", () => {
        expect(checkPermutation("hello", "lehol")).toBeTrue();
      });
      it("Should return true for 'barn' and 'bran", () => {
        expect(checkPermutation("hello", "lehol")).toBeTrue();
      });
      it("Should return true for 'racecar' and 'racecar", () => {
        expect(checkPermutation("hello", "lehol")).toBeTrue();
      });
    });

    describe("Not permutations", () => {
      it("Should return false for 'abc' and 'abcd'", () => {
        expect(checkPermutation("abd", "abcd")).toBeFalse();
      });
      it("Should return false for 'hey' and 'hi'", () => {
        expect(checkPermutation("abd", "abcd")).toBeFalse();
      });
      it("Should return false for 'fun' and 'fin'", () => {
        expect(checkPermutation("abd", "abcd")).toBeFalse();
      });
      it("Should return false for 'funny' and 'funn'", () => {
        expect(checkPermutation("abd", "abcd")).toBeFalse();
      });
      it("Should return false for 'farm' and 'fafm'", () => {
        expect(checkPermutation("abd", "abcd")).toBeFalse();
      });
    });
  });
});
