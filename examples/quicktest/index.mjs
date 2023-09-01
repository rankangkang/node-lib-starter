import { Logger } from 'tool/logger'
import { Cache } from 'tool/cache'

const logger = new Logger()

const cache = new Cache()

cache.set('10086', 10086)

logger.info(cache.get('10086'))
