const stringCompression = (str = "") => {
  let result = "";
  let counter = 1;
  for (let i = 0; i < str.length; i++) {
    if (str[i] != str[i + 1]) {
      result += str[i] + counter.toString();
      counter = 1;
      continue;
    }
    counter++;
  }
  return str.length <= result.length ? str : result;
};

module.exports = {
  stringCompression,
};
