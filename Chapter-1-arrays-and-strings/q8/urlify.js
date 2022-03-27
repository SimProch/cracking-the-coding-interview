const urlify = (str = "") => {
  const charArray = str.split("");
  const urlified = charArray.map((i) => (i === " " ? "%20" : i));
  return urlified.join("");
};

module.exports = {
  urlify,
};
