export * from './util'

export function createFoo() {
  let foo: any = {}
  const setFoo = (newfoo: Record<string, any>) => {
    const nextFoo = Object.assign({}, foo, newfoo)
    foo = nextFoo
  }
  const getFoo = () => foo
  return {
    setFoo,
    getFoo
  }
}

export default createFoo
// rollup 编译出的产物 equals to 
// export { createFoo as default }