module.exports.func = (value) => {
  if (!value.arr || value.arr.length === 0) {
    return true;
  }
  return false;
};
