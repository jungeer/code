function LinkedList() {
  let Node = function(element) {
    this.element = element
    this.next = null
  }
  let length = 0
  let head = null

  this.append = function(element) {
    let node = new Node(element)
    let current
    if (head === null) {
      head = node 
    } else {
      current = head
      while (current.next) {
        current = current.next
      }
      current.next = node
    }
    length++
  }
  this.removeAt = function(position) {
    if (position > -1 && position < this.length) {
      let current = head
      let previous
      let index = 0
      if (position === 0) {
        head = head.next
      } else {
        while (index < position) {
          previous = current
          current = current.next
          index++
        }
        previous.next = current.next
      }
      length--
      return current.element
    } else {
      return null
    }
  }

  this.insert = function(position, element) {
    if (position >= 0 && position <= length) {
      let node = new Node(element)
      let current = this.head
      let previous
      let index = 0
      if (position === 0) {
        node.next = current
        head = node
      } else {
        while (index < position) {
          previous = current
          current = current.next
          index++
        }
        node.next = current
        previous.next = node
      }
      length++
      return true
    } else { 
      return false
    }
  }

  this.toString = function() {
    let string = ''
    let current = head
    while (current !== null) {
      string += ' ' + current.element
      current = current.next
    }
    return string.trim()
  }

  this.indexOf = function(element) {
    let current = head
    let index = 0
    while (current !== null) {
      if (current.element === element) {
        return index
      }
      index++
      current = current.next
    }
    return -1
  }

  this.isEmpty = function() {
    return length === 0
  }

  this.getLen = function() {
    return length
  }

  this.show = function() {
    let current = this.head
    while (current !== null) {
      console.log(current.element)
      current = current.next
    }
  }
}

let linklist = new LinkedList()

linklist.insert(0, 1)
linklist.append(2)
linklist.append(3)
linklist.insert(2, 4)
linklist.removeAt(1)
linklist.show()

let str = linklist.toString()
console.log('str:', typeof str)
