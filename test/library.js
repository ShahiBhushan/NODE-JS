const minMax = (arr) => {
  const sortedArr = arr.sort();
  return { minValue: sortedArr[0], maxValue: sortedArr[sortedArr.length - 1] };
};

module.exports = { minMax };
