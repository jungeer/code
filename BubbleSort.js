
const arr = [1, 3, 4, 5, 7, 2, 1]
const arr1 = [1, 2, 3, 4, 5, 6, 7]
const arr2 = [7, 6, 5, 4, 3, 2, 1]
const arr4 = [2, 3, 4, 5, 6, 1]
const arr3 = Array(99)
for (let i = 0; i < arr3.length; i++) {
  arr3[i] = Math.ceil(Math.random() * 1000)
  // arr3[i] = i
}
function BubbleSort(array) {
  console.time('BubbleSort')
  let temp, count = 0, flag = true
  for (let i = 0; i < (array.length - 1) && flag; i++) {
    flag = false
    for (let j = 0; j < array.length - 1 - i; j++) {
      count++
      if (array[j] > array[j+1]) {
        temp = array[j+1]
        array[j+1] = array[j]
        array[j] = temp
        flag = true
      }
    }
  }
  console.log('count: ', count)
  console.timeEnd('BubbleSort')
}
BubbleSort(arr4)
// console.log(arr1)