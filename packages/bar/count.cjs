let count = 0
let name = ''

setTimeout(() => {
  console.log('cjs')
  count += 1
  name = 'cjs'
}, 1000)

exports.count = count
exports.name = name
