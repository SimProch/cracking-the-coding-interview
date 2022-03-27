const palindromePermutations = (str = "") => {
  const lowercaseStr = str.toLowerCase();
  const obj = {};
  for (let i = 0; i < lowercaseStr.length; i++) {
    if (lowercaseStr[i] == " ") continue;
    if (obj[lowercaseStr[i]] == null) obj[lowercaseStr[i]] = true;
    else delete obj[lowercaseStr[i]];
  }
  const length = Object.values(obj).length;
  return length <= 1;
};

palindromePermutations("abcadef");

module.exports = {
  palindromePermutations,
};
