export let originBar = {} // 引用不变

export let setCount = 0

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

export default exp