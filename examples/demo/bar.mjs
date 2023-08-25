import bar, { originBar } from 'bar'

console.log(bar.bar) // {}
console.log(originBar) // {}
console.log(bar.getBar()) // {}
console.log(bar.bar === bar.getBar())
console.log(originBar === bar.getBar())

bar.setBar()
console.log('======')

console.log(bar.bar) // {}
console.log(originBar) // { name: 'bar' }
console.log(bar.getBar()) // { name: 'bar' }

console.log(bar.bar === bar.getBar()) // false
console.log(originBar === bar.getBar()) // false
