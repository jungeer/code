/**
 * 函数防抖：一段时间间隔内只执行一次，如果在时间间隔内重新触发，重新计时
 * 主要应用场景: 搜索框的反复触发，防止表单重复提交
 */
function debounce(fn, time) {
  let timer = null
  return function() {
    // let context = this
    // let args = arguments
    clearTimeout(timer)
    timer = setTimeout(() => {
      fn.apply(this, arguments)
    }, time)
  }
}

// 防抖(合并版)
function debounce_merge(fn,wait = 500,isImmediate = false){
  var timerId = null;
  var flag = true;
  if(isImmediate){
    return function(){
      clearTimeout(timerId);
      if(flag){
        fn.apply(this,arguments);
        flag = false
        }
      timerId = setTimeout(() => { flag = true},wait)
    }
  }
  return function(){
    clearTimeout(timerId);
    timerId = setTimeout(() => {
      fn.apply(this,arguments)
    },wait)
  }
}


/**
 * 函数节流: 每隔一段时间执行一次
 * 主要应用场景：玩游戏时频繁触发，也只会隔 1 s 执行一次函数, scroll 滚动时加载更多
 */
function throttle(fn, timeGap) {
  let timer = null
  return function() {
    if (timer === null) {
      timer = setTimeout(() => {
        fn.apply(this, arguments)
        timer = null
      }, timeGap)
    }
  }
}

function throttle_merge(fn,wait = 500,isImmediate = false){
  var flag = true;
  var timer = null;
  if(isImmediate){
    return function(){
      if(flag) {
        fn.apply(this,arguments);
        flag = false;
        timer = setTimeout(() => {
          flag = true
        },wait)
      }
    }
  }
  return function(){
    if(flag == true){
      flag = false
      timer = setTimeout(() => {
        fn.apply(this,arguments)
        flag = true
      },wait)
    }
  }
}

