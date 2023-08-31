import { count } from 'bar/count'

console.log(count)

setTimeout(() => {
  console.log(count)
}, 2000)
