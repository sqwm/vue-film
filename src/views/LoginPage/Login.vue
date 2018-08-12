<template>
  <div class="g-modalLogin" >
    <!--<div v-if="!isForget">-->
      <div  class="animated flipInX">
        <login-page @changeState="changeState"></login-page>
      </div>
      <!--<div v-else>-->
        <!--<regist-page @changeState="changeState"></regist-page>-->
      <!--</div>-->
    <!--</div>-->
    <!--<div v-else class="animated rollIn">-->
      <!--<forget-password @changeState="changeState"></forget-password>-->
    <!--</div>-->
  </div>
</template>

<script>
  import LoginPage from './LoginRegist/loginPage'
  import RegistPage from './LoginRegist/regist'
  import ForgetPassword from './LoginRegist/ForgetPassword'
  export default {
    name: 'Login',
    components: {
      LoginPage,
      RegistPage,
      ForgetPassword
    },
    data () {
      return {
        isForget: false,
        isRegist: false
      }
    },
    methods: {
      changeState ({isForget, isRegist}) {
        this.isRegist = isRegist
        this.isForget = isForget
      }
    }
  }
</script>

<style lang="less" scoped>
  .g-modalLogin {
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, .7);
    position: absolute;
    .g-login {
      margin: 10% auto;
      border-radius: 5px;
      width: 500px;
    }
  }
  .g-Forget{
    margin: 200px auto;
    border-radius: 5px;
    width: 800px;
  }
</style>
