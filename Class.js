class MyClass {
  constructor() {

  }
  toString() {

  }
  print(name) {
    console.log(name)
  }
  // get prop() {
  //   return 'getter'
  // }
  // set prop(value) {
  //   console.log('setter: ', value)
  // }
}

let my = new MyClass()
let {constructor, print} = my
console.log(constructor)
// console.log(my.prop = 1)