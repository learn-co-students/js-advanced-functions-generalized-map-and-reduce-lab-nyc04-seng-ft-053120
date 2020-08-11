const map = (sourceArray, callback) => {
  const result = [];
  sourceArray.forEach(el => result.push(callback(el)));
  return result;
}

const reduce = (sourceArray, callback, startingValue = 0) => {
  let total = startingValue;
  sourceArray.forEach(el => (total = callback(total,el)));
  return total;
}