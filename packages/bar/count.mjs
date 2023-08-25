let name = ''
let count = 0

setTimeout(() => {
  console.log('mjs')
  name = 'mjs'
  count += 1
}, 1000)

export { count }
export default name