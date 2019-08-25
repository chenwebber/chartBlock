function removeWithoutCopy(arr, item) {
  let i = arr.indexOf(item)
  if (i != -1) {
    arr.splice(i, 1)
    return removeWithoutCopy(arr, item)
  }
  return arr
}

let arr = [1, 2, 2, 3, 4, 2, 2]
let e = removeWithoutCopy(arr, 2)
console.log(e)
