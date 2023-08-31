// 使用命名导入
import { createFoo } from 'foo'

// 默认导入要写成这样
// import Foo from 'foo'
// const createFoo = Foo.default

const foo = createFoo()

console.log(foo.getFoo())

foo.setFoo({ name: 'foo' })

console.log(foo.getFoo())
