let str = 'kjfslfj342384723kjlkjfs23842sdfsdfsdf39jk0009089080980980'
let str2 = 'kkjkfjdkljflksdjflsdjflsd'
function test(string) {
  if (Object.prototype.toString.call(string) !== '[object String]') {
    throw new Error('param must be a string')
  }
  let len = string.length
  if (len <= 0) {
    return
  }
  let tempArr = []
  let str = ''
  for (let i = 0; i < len; i++) {
    if (Number(string[i]) >= 0) {
      str += string[i]
    } else {
      if (str.length > 0) {
        tempArr.push(str)
        str = ''
        continue
      }
    }
  }
  if (str.length > 0) {
    tempArr.push(str)
  }
  let maxIndex = 0
  for (let i = 1; i < tempArr.length; i++) {
    if (tempArr[i].length > tempArr[maxIndex].length) {
      maxIndex = i
    }
  }
  if (tempArr[maxIndex]) {
    return tempArr[maxIndex]
  }
  return -1
}

console.log(test(str))