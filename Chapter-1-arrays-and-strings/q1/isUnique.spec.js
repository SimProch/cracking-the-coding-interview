const isUnique = require("./isUnique").isUnique;

describe("Interview questions", () => {
  describe("isUnique find whether a string contains duplicates", () => {
    describe("Should return false", () => {
      it("Should return false for 'Aloha'", () => {
        expect(isUnique("Aloha")).toBeFalse();
      });
      it("Should return false for 'Hello'", () => {
        expect(isUnique("Hello")).toBeFalse();
      });
      it("Should return false for 'Marshmellow'", () => {
        expect(isUnique("Marshmellow")).toBeFalse();
      });
    });

    describe("Should return true", () => {
      it("Should return true for empty string", () => {
        expect(isUnique("")).toBeTrue();
      });
      it("Should return true for 'Simon'", () => {
        expect(isUnique("Simon")).toBeTrue();
      });
      it("Should return true for 'Daniel'", () => {
        expect(isUnique("Daniel")).toBeTrue();
      });
    });
  });
});
