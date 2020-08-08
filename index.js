function map(arr, cb) {
  const result = [];
  for (let el of arr) {
    result.push(cb(el));
  }
  return result;
}

function reduce(arr, cb, start) {
  let acc = start || arr[0];
  let startPos = start ? 0 : 1;
  
  for (let i = startPos; i < arr.length; i++) {
    acc = cb(acc, arr[i]);
  }
  return acc;
}