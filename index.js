const map = (sourceArray, callback) => {
  const result = [];
  sourceArray.forEach((el) => result.push(callback(el)));
  return result;
};

const reduce = (sourceArray, callback, startingValue = 0) => {
  let total = startingValue;

  for (let i = 0; i < sourceArray.length; i++) {
    if (total === 0) {
      total = sourceArray[0];
      i = 1;
    }

    total = callback(total, sourceArray[i]);
  }
  return total;
};
