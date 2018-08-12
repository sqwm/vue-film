let storage = {
  localStorage:function () {
    return {
      set: function (key, value, expireSeconds) {
        localStorage[key] = JSON.stringify({
          value:value,
          expired: expireSeconds === undefined ? undefined : Date.now() + 1000 * expireSeconds
        })
      },
      get:function (key) {
        if (localStorage[key] === undefined) {
          return
        }
        let o = JSON.parse(localStorage[key])
        if (o.expired === undefined || Date.now() < o.expired) {
          return o.value
        } else {
          delete localStorage[key]
        }
      }
    }
  }
}
export default storage
