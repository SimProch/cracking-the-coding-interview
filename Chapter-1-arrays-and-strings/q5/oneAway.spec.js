const oneAway = require("./oneAway").oneAway;

describe("Interview questions", () => {
  describe("One away return true if one string is one or zero edits away from another", () => {
    it("Should return true for one away strings", () => {
      expect(oneAway("pale", "pale")).toBeTrue();
      expect(oneAway("pale", "ple")).toBeTrue();
      expect(oneAway("pale", "bale")).toBeTrue();
      expect(oneAway("pale", "pales")).toBeTrue();
      expect(oneAway("ple", "pale")).toBeTrue();
      expect(oneAway("bale", "pale")).toBeTrue();
      expect(oneAway("pales", "pale")).toBeTrue();
    });
    it("Should return false for NOT one away strings", () => {
      expect(oneAway("pale", "bake")).toBeFalse();
      expect(oneAway("bake", "pale")).toBeFalse();
      expect(oneAway("bake", "ppake")).toBeFalse();
      expect(oneAway("pale", "paless")).toBeFalse();
      expect(oneAway("paless", "pale")).toBeFalse();
    });
  });
});
