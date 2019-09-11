
// const arr = [1, 3, 4, 5, 7, 2, 1]
const arr1 = [1, 2, 3, 4, 5, 6, 7]
const arr2 = [7, 6, 5, 4, 3, 2, 1]
const arr4 = [2, 3, 4, 5, 6, 1]

const arr3 = Array(9)
for (let i = 0; i < arr3.length; i++) {
  arr3[i] = Math.ceil(Math.random() * 1000)
  // arr3[i] = arr3.length - i
  // arr3[i] = arr3.length - i
}
[2, 3, 1]
function InsertSort(array) {
  console.time('InsertSort')
  let i, j, temp, count = 0
  for (i = 1; i < array.length; i++) { // 2
    temp = array[i] // temp = array[2] = 1
    for (j = i; j > 0; j--) { // j = 2 -> j = 1
      count++
      if (temp < array[j-1]) { // 1 < array[1] = 3 // 1 < array[0] = 2
        array[j] = array[j-1] // array[2] = 3 [ 2, 3, 3 ] // array[1] = 2 [2, 2, 3]
      } else {
        break
      }
    }
    array[j] = temp
  }
  console.log('count: ', count)
  console.timeEnd('InsertSort')
}

InsertSort(arr4)
console.log(arr3)