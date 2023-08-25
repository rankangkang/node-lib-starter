'use strict';

let originBar = {}

let setCount = 0

const exp = Object.assign({}, {
  setBar() {
    originBar.name = 'bar'
    setCount++
  },
  getBar() {
    return originBar
  }
})

exp.bar = originBar

module.exports = {
  ...exp,
  originBar,
  setCount
};