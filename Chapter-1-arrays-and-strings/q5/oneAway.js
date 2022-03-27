const oneAway = (first = "", second = "") => {
  const diff = first.length - second.length;
  if (Math.abs(diff) > 1) return false;

  let isEdited = false;
  for (let i = 0, j = 0; i < first.length && j < second.length; i++, j++) {
    if (first[i] === second[j]) continue;
    if (isEdited) return false;
    if (first.length < second.length) i--;
    if (first.length > second.length) j--;
    isEdited = true;
  }

  return true;
};

module.exports = {
  oneAway,
};
