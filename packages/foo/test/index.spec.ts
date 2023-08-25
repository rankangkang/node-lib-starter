import { expect } from "chai"
import { describe, it } from "mocha"
import { createFoo } from '../src/index'

describe("foo", () => {
  it("should create", async () => {
    const foo = createFoo()
    foo.setFoo({ name: 'foo' })
    expect(foo.getFoo().name).eq('foo')
  })
})
