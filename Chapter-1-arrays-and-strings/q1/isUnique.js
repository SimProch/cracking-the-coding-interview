const isUnique = (str = "") => {
  const lowerCaseStr = str.toLowerCase();
  const obj = {};
  for (let i = 0; i < lowerCaseStr.length; i++) {
    obj[lowerCaseStr[i]] ??= 0;
    obj[lowerCaseStr[i]]++;
    if (obj[lowerCaseStr[i]] > 1) return false;
  }
  return true;
};

module.exports = {
  isUnique,
};
