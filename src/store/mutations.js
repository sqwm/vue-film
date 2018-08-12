import storage from './localStorage'
const MUTATIONS = {
  setLoginInfo (state, data) {
    state.loginInfo = data
    storage.localStorage().set('loginToken', data.login_token, 604800)
    storage.localStorage().set('user_sign', data.user_sign, 604800)
  }
}
export default MUTATIONS
