const stringCompression = require("./stringCompression").stringCompression;

describe("Interview questions", () => {
  describe("stringCompression compresses string characters case-sensitive", () => {
    it("Should return same string for unchanged length", () => {
      expect(stringCompression("aabbccddaa")).toBe("aabbccddaa");
      expect(stringCompression("aabbccdd")).toBe("aabbccdd");
      expect(stringCompression("abcd")).toBe("abcd");
    });
    it("Should return compressed string for bigger length", () => {
      expect(stringCompression("aaabbbcccddd")).toBe("a3b3c3d3");
      expect(stringCompression("aabcccccaaa")).toBe("a2b1c5a3");
    });
  });
});
