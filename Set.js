function Set() {
  let items = {}

  this.has = function(value) {
    // 方式一
    // return value in items

    // 方式二
      return items.hasOwnProperty(value)
  }

  this.add = function(value) {
    if (!this.has(value)) {
      items[value] = value
      return true
    }
    return false
  }

  this.remove = function(value) {
    if (this.has(value)) {
      delete items[value]
      return true
    }
    return false
  }

  this.clear = function() {
    items = {}
  }

  this.size = function() {
    return Object.keys(items).length // keys 方法返回一个数组

    // 方式二
    // let count = 0
    // for (key in items) {
    //   if (items.hasOwnProperty(key)) { // 检测是否是对象自身的属性，避免重复计数
    //     ++count
    //   }
    //   return count
    // }
  }

  this.values = function() {  
    let values = []
    for (let i = 0, keys = Object.keys(items); i < keys.length; i++) {
      values.push(items[keys[i]])
    }
    return values

    // 兼容所有浏览器
    // for (key in items) {
    //   if (items.hasOwnProperty(key)) {
    //     values.push(items[key])
    //   }
    // }
  
  }
}


class Sets {
  constructor () {
    this.items = {}
  }
  has (value) {
    return this.items.hasOwnProperty(value)
  }
  add (value) {
    if (this.has(value)) {
      return false
    } else {
      this.items[value] = value
      return true
    }
  }
}

let s = new Sets()
console.log(s.add(1))
console.log(s)
