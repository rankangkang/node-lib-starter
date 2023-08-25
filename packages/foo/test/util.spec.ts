import { expect } from "chai"
import { describe, it } from "mocha"
import sinon from 'sinon'
import * as util from '../src/util'

describe("util", () => {
  it("util works", async () => {
    // fn
    const cb = sinon.fake()
    cb.call(null)
    expect(cb.callCount).eq(1)

    // stub
    const log = sinon.stub(util, 'log')
    log.call(null)
    expect(log.callCount).equal(1)
    log.call(null)
    log.call(null)
    expect(log.callCount).equal(3)
  })
})
