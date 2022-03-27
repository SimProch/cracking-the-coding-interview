const checkPermutation = (first = "", second = "") => {
  if (first.length != second.length) return false;
  const obj = {};
  for (let i = 0; i < first.length; i++) {
    obj[first[i]] ??= 0;
    obj[first[i]]++;
  }

  for (let i = 0; i < second.length; i++) {
    if (!obj[second[i]]) return false;
    obj[second[i]]--;
    if (obj[second[i]] < 0) return false;
  }

  return true;
};

module.exports = {
  checkPermutation,
};
