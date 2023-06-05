# req-cacher
一个方便易用的npm包,用于将HTTP请求缓存起来,以避免重复请求和提高应用程序的性.

> demo
```js
import { CacheFetch } from 'req-cacher'
import axios from 'axios'
let cacheFetch = new CacheFetch(1000)

export default {
  getOptions (params) {
    return cacheFetch.fetch({
      url: portUri.options,
      method: 'get',
      params
    }, axios)
  }
}
```
