const palindromePermutations =
  require("./palindromePermutations").palindromePermutations;

describe("Interview questions", () => {
  describe("palindromePermutations find whether a word is a permutation of a palindrome", () => {
    describe("Palindrome permutations", () => {
      it("Should return true for empty string", () => {
        expect(palindromePermutations("")).toBeTrue();
      });
      it("Should return true for 'racecar'", () => {
        expect(palindromePermutations("racecar")).toBeTrue();
        expect(palindromePermutations("race car")).toBeTrue();
      });
      it("Should ignore spaces", () => {
        expect(palindromePermutations("aabb")).toBeTrue();
        expect(palindromePermutations("ab a b")).toBeTrue();
        expect(palindromePermutations(" a b a b ")).toBeTrue();
        expect(
          palindromePermutations("sasadfgsadfghjk;hjk;sadfghjk;dfghjk;")
        ).toBeTrue();
        expect(
          palindromePermutations("sa sadfgsadfgh jk;hjkz;sadfg hjk;dfghjk;")
        ).toBeTrue();
      });
    });
    describe("Not palindrome permutations", () => {
      it("Should return false for non-palindromic permutations", () => {
        expect(palindromePermutations("abcadef")).toBeFalse();
        expect(palindromePermutations("1234567890")).toBeFalse();
        expect(palindromePermutations("a b")).toBeFalse();
      });
    });
  });
});
