// const arr = [1, 3, 4, 5, 7, 2, 1]
// const arr1 = [1, 2, 3, 4, 5, 6, 7]
// const arr2 = [7, 6, 5, 4, 3, 2, 1]
// const arr3 = Array(9999)
// for (let i = 0; i < arr3.length; i++) {
//   arr3[i] = Math.ceil(Math.random() * 1000)
// }
// function SelectSort(array) {
//   console.time('SelectSort')
//   let minIndex = 0, i, temp, count = 0
//   for (i = 0; i < array.length - 1; i++) {
//     minIndex = i
//     for (let j = i + 1; j < array.length; j++) {
//       count++
//       if (array[j] < array[minIndex]) {
//         minIndex = j
//       }
//     }
//     if (i !== minIndex) {
//       temp = array[i]
//       array[i] = array[minIndex]
//       array[minIndex] = temp
//     }
//   }
//   console.log('count: ', count)
//   console.timeEnd('SelectSort')
// }

// SelectSort(arr3)
// // console.log(arr1)

function matrix(n) {
  if (n <= 0) return []
  if (n === 1) return [[1]]
  
  let arr = []
  let j
  for (let i = n; i > 0; i--) { 
    let subArr = []
    for (j = n; j >= i; j--) { 
      subArr.push(j)
    }
    for (j = j + 2; j <= n; j++) {
      subArr.push(j)
    }
    arr.push(subArr)
  }
  for (let i = arr.length - 2; i >= 0; i--) {
    arr.push(arr[i])
  }
  return arr
}

matrix(3).forEach((value) => {
  console.log(value)
})