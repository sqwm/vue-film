<template>
    <el-tabs type="border-card" :stretch="true" class="g-login">
      <el-tab-pane label="用户登录">
        <el-form :model="loginForm" :rules="rules" ref="loginForm" label-position="left" label-width="100px">
          <el-form-item label="邮箱地址" prop="email">
            <el-input type="email" v-model="loginForm.email" placeholder="请输入邮箱" class="u-emailInput"></el-input>
          </el-form-item>
          <el-form-item label="登陆密码" prop="password">
            <el-input type="password" v-model="loginForm.password" placeholder="登录密码" class="u-emailInput"></el-input>
          </el-form-item>
          <el-form-item label-width="0">
            <el-button type="success" class="u-loginBtn" @click="submitForm('loginForm')" :loading="isLoading">登录</el-button>
          </el-form-item>
        </el-form>
        <!--<ul class="m-textBottom">-->
          <!--&lt;!&ndash;<li><el-checkbox v-model="isRememberPwd" class="u-RememberPwd">记住密码</el-checkbox></li>&ndash;&gt;-->
          <!--<li class="m-textBottomBtn">-->
            <!--<el-button type="text" class="u-retrievePassword" @click="jumpForgetPsd">忘记密码？</el-button>-->
            <!--&lt;!&ndash;<span class="u-dotted">|</span>&ndash;&gt;-->
            <!--&lt;!&ndash;<el-button type="text" @click="jumpRegist">注册</el-button>&ndash;&gt;-->
          <!--</li>-->
        <!--</ul>-->
      </el-tab-pane>
      <!--<el-tab-pane label="微信扫码登录" :lazy="true">-->
        <!--<div class="m-wxLogin">-->
          <!--<img src="@/assets/wxQRCode.jpg" alt="">-->
          <!--&lt;!&ndash;<iframe frameborder="0" width="100%" height="500" src="https://v.qq.com/"></iframe>&ndash;&gt;-->
          <!--<div><span class="u-wxText">请使用微信扫描二维码登录</span></div>-->
        <!--</div>-->
      <!--</el-tab-pane>-->
    </el-tabs>
</template>

<script>
  // import {SIGNIN} from '@/biz/fetchApi'
  export default {
    name: 'Login',
    data () {
      let validateEmail = (rule, value, callback) => {
        let reg = new RegExp('^[a-z0-9]+([._\\-]*[a-z0-9])*@([a-z0-9]+[-a-z0-9]*[a-z0-9]+.){1,63}[a-z0-9]+$')
        if (reg.test(value)) {
          callback()
        } else {
          callback(new Error('邮箱格式不正确'))
        }
      }
      return {
        isRememberPwd: false,
        isLoading: false,
        loginForm: {
          email: '196229640@qq.com',
          password: '123456'
        },
        rules: {
          email: [
            {required: true, validator: validateEmail, trigger: 'change'}
          ],
          password: [
            {required: true, message: '请输入密码', trigger: 'change'},
            {min: 6, max: 20, message: '长度在 6 到 20 个字符', trigger: 'change'}
          ]
        }
      }
    },
    methods: {
      jumpForgetPsd () {
        this.$emit('changeState', {isForget: true, isRegist: false})
      },
      jumpRegist () {
        this.$emit('changeState', {isForget: false, isRegist: true})
      },
      submitForm (formName) {
        this.isLoading = true
        this.$refs[formName].validate(async (valid) => {
          if (valid) {
            try {
             // let loginInfo = await SIGNIN({data: this.loginForm})
              this.$notify({
                title: '登录成功',
                message: '',
                type: 'success'
              })
              // this.$store.commit('setLoginInfo', loginInfo.data)
              this.$router.push('/')
              this.isLoading = false
            } catch (error) {
              console.log(error)
              this.$notify.error({
                title: '错误',
                message: '用户名或密码错误'
              })
              this.isLoading = false
            }
          } else {
            this.isLoading = false
            console.log('error submit!!')
            return false
          }
        })
      }
    },
    mounted () {
      this.$notify({
        type: 'warning',
        title: '温馨提示',
        message: '暂时不支持密码找回功能',
        duration: 1000
      })
    }
  }
</script>

<style lang="less" scoped>
  .m-wxLogin {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    div {
      width: 100%;
      text-align: center;
      color: #808080;
      margin: 10px auto;
      .u-wxText {
        border: 1px solid transparent;
        border-radius: 15px;
        background: #F1F1F1;
        padding: 5px 10px;
        font-size: 12px;
      }
    }
  }
  .u-loginBtn {
    width: 100%;
  }

  .m-textBottom{
    display: flex;
    justify-content: space-between;
    .m-textBottomBtn{
      display: flex;
      .u-dotted{
        font-size: 14px;
        line-height: 3;
        color: #bfbfbf;
        height: 100%;
        margin: 0 5px;
      }
    }
    .u-RememberPwd{
      line-height: 42px;
    }
  }
  .u-retrievePassword {
    width: 100%;
    text-align: right;
  }

</style>
