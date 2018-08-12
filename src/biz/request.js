import axios from 'axios'
import storage from '@/store/localStorage'
// import router from '@/router'
const AXIOS = axios.create({
  baseURL: 'http://wesearch.yangfuwu.cn:8080/api/admin',
  responseType: 'json',
  withCredentials: false,
  timeout: 1000
})
function checkToken (callback) {
  // if (!storage.localStorage().get('loginToken') && !storage.localStorage().get('user_sign')) {
  //   router.push('/login')
  // } else {
  //   if (router.currentRoute.path !== '/login') {
  //     callback()
  //   }
  // }
}
AXIOS.interceptors.request.use(
  config => {
    checkToken(() => {
        config.headers.loginToken = `${storage.localStorage().get('loginToken')}`
        config.headers.userSign = `${storage.localStorage().get('user_sign')}`
    })
    return config
  },
  err => {
    return Promise.reject(err)
  }
)
AXIOS.interceptors.response.use(
  response => {
    if (response.status === 200) {
      return response
    } else {
      // 非200请求抱错
      throw Error(response)
    }
  },
  error => {
    if (error && error.response) {
      switch (error.response.status) {
        case 401:
          error.message = '未授权，请登录'
          break
        case 403:
          error.message = '服务器拒绝访问'
          break
        case 500:
          error.message = '服务器错误'
              break
        case 504:
          error.message = '请求超时'
      }
    }
    // 返回接口返回的错误信息
    return Promise.reject(error.response.data)
  })

export default AXIOS
