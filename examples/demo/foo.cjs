// eslint-disable-next-line @typescript-eslint/no-var-requires
const createFoo = require('foo').default

const foo = createFoo()

console.log(foo.getFoo())

foo.setFoo({ name: 'foo' })

console.log(foo.getFoo())
