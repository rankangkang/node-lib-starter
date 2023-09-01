import { expect } from 'chai'
import { describe, it } from 'mocha'
import { cache, logger } from '../src'

describe('tool', () => {
  it('should cache data', () => {
    cache.set('a', 'a', 1000)
    const a = cache.get('a')
    logger.info(a)
    logger.error(a)
    logger.warn(a)
    expect(a).eq('a')
  })
})
