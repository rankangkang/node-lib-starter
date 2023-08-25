// cjs 获取的一直是引用
const bar = require('bar')
const originBar = bar.originBar

console.log(bar.bar) // {}
console.log(originBar) // {}
console.log(bar.getBar()) // {}

bar.setBar()

console.log(bar.bar) // {}
console.log(originBar) // {}
console.log(bar.getBar()) // { name: 'bar' }

console.log(bar.bar === bar.getBar()) // false
console.log(originBar === bar.getBar()) // false
