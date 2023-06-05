/**
 * Created by zane on 2023/1/31 14:06
 * @description .
 */
import _ from 'lodash'

export class CacheFetch {
  constructor (cacheTime = 800, sendKey = 'send') {
    this.cache = []
    this.cacheTime = cacheTime
    this.sendKey = sendKey
  }

  fetch (options, fetch) {
    let index = this.cache.findIndex(([option]) => _.isEqual(options, option))
    if (index > -1) {
      return this.getResult(index) ? this.getResult(index) : this.createFetch(fetch, options, index)
    } else {
      return this.createFetch(fetch, options)
    }
  }

  timeToClear (index) {
    setTimeout(() => {
      this.cache[index][1] = null
    }, this.cacheTime)
  }

  createFetch (fetch, options, index) {
    let result = (this.sendKey ? fetch[this.sendKey] : fetch)(_.cloneDeep(options))
    if (typeof index === 'number') {
      this.cache[index][1] = result
    } else {
      index = this.cache.push([_.cloneDeep(options), result])
    }
    this.timeToClear(index)
    return result
  }

  getResult (index) {
    return this.cache[index][1]
  }
}
