function map(array, fn) {
    let ans = []
    for (let i = 0; i < array.length; i++) {
        ans.push(fn(array[i]))
    }
    return ans
}

function reduce(array, fn, start = 0) {
    let ans = (!!start) ? start : array[0]
    let i = (!!start) ? 0 : 1

    for (; i < array.length; i++) {
        ans = fn(array[i], ans)
    }
    return ans
}