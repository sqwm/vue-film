import axios from './request'

export const getProductList = () => {
  return new Promise(async (resolve, reject) => {
    axios({
      method: 'get',
      url: 'http://127.0.0.1/adminPhp/query.php'
    }).then(res => {
      resolve(res)
    }).catch(error => {
      reject(error)
    })
  })
}
export const SIGNIN = ({data}) => {
  return new Promise(async (resolve, reject) => {
     axios({
      method: 'post',
      url: 'login',
       data: data
    }).then(res => {
      resolve(res)
     }).catch(error => {
       reject(error)
     })
  })
}
export const SIGNUP = ({data}) => {
  return new Promise(async (resolve, reject) => {
    axios({
      method: 'post',
      url: 'register',
      data: data
    }).then(res => {
      resolve(res)
    }).catch(error => {
      reject(error)
    })
  })
}
export const ISEMAILEXIST = ({email}) => {
  return new Promise(async (resolve, reject) => {
    axios({
      method: 'post',
      url: 'emailExist',
      data: {email:email}
    }).then(res => {
      resolve(res)
    }).catch(error => {
      reject(error)
    })
  })
}
