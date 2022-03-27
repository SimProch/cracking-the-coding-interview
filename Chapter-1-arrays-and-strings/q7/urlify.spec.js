const urlify = require("./urlify").urlify;

describe("Interview questions", () => {
  describe("urlify changes spaces from regular string to '%20'", () => {
    it("Should return 'Mr%20John%20Smith' for 'Mr John Smith", () => {
      expect(urlify("Mr John Smith")).toBe("Mr%20John%20Smith");
    });
  });
});
