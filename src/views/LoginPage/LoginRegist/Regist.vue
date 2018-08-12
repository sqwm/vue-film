<template>
  <el-tabs type="border-card" :stretch="true" class="g-login">
    <el-tab-pane label="邮箱登录">
      <el-form :model="ruleForm" validate-on-rule-change :rules="rules" ref="ruleForm" label-position="left" label-width="100px">
        <el-form-item label="邮箱地址" prop="email">
          <el-input type="email" v-model="ruleForm.email" placeholder="请输入邮箱" @change="IsExist"></el-input>
        </el-form-item>
        <el-form-item label="登陆密码" prop="password">
          <el-input v-model="ruleForm.password" placeholder="登录密码" ></el-input>
        </el-form-item>
        <el-form-item label-width="0">
          <el-button type="primary" class="u-loginBtn" @click="submitForm('ruleForm')">注册</el-button>
        </el-form-item>
      </el-form>
      <ul class="m-textBottom">
        <li><el-button type="text" class="u-retrievePassword" @click="jumpForgetPsd">忘记密码？</el-button></li>
        <li> <el-button type="text" @click="jumpLogin">立即登录</el-button></li>
      </ul>
    </el-tab-pane>
    <el-tab-pane label="微信扫码登录" :lazy="true">
      <div class="m-wxLogin">
        <img src="@/assets/wxQRCode.jpg" alt="">
        <!--<iframe frameborder="0" width="100%" height="500" src="https://v.qq.com/"></iframe>-->
        <div><span class="u-wxText">请使用微信扫描二维码登录</span></div>
      </div>
    </el-tab-pane>
  </el-tabs>
</template>

<script>
  import {SIGNUP, ISEMAILEXIST} from '@/biz/fetchApi'

  export default {
    name: 'regiest',
    data () {
      let validateEmail = async (rule, value, callback) => {
        // let reg = new RegExp('^[a-z0-9]+([._\\-]*[a-z0-9])*@([a-z0-9]+[-a-z0-9]*[a-z0-9]+.){1,63}[a-z0-9]+$')
        let reg = new RegExp('^[a-zA-Z0-9_.-]+@[a-zA-Z0-9-]+(\\.[a-zA-Z0-9-]+)*\\.[a-zA-Z0-9]{2,6}$')
        try {
          if (reg.test(value)) {
            let stateStatus = await ISEMAILEXIST({email:this.ruleForm.email})
            if (stateStatus.data.res) {
              callback(new Error('改账户已经存在'))
              return false
            } else {
              callback()
            }
          } else {
            callback(new Error('邮箱格式不正确'))
          }
        } catch (error) {
        }
      }
      return {
        ruleForm: {
          email: '',
          password: ''
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
    computed : {
      // validateEmail (rule, value, callback) {
      //     let reg = new RegExp('^[a-z0-9]+([._\\-]*[a-z0-9])*@([a-z0-9]+[-a-z0-9]*[a-z0-9]+.){1,63}[a-z0-9]+$')
      //     if (reg.test(value)) {
      //      return callback()
      //     } else if (this.isRegist) {
      //       return callback(new Error('改账户已经存在'))
      //     } else {
      //       return callback(new Error('邮箱格式不正确'))
      //     }
      // }
    },
    methods: {
      async IsExist () {
        try {
            let state = await ISEMAILEXIST({email:this.ruleForm.email})
          this.isRegist = state.data.res
        } catch (error) {
        }
      },
      jumpForgetPsd () {
        this.$emit('changeState', {isForget: true, isRegist: false})
      },
      jumpLogin () {
        this.$emit('changeState', {isForget: false, isRegist: false})
      },
      submitForm (formName) {
        this.$refs[formName].validate(async (valid) => {
          if (valid) {
            try {
               await SIGNUP({data: this.ruleForm})
              this.$notify({
                title: '注册成功',
                message: '',
                type: 'success'
              })
              // this.$router.push('/')
              this.isLoading = false
            } catch (error) {
              this.$notify.error({
                title: '错误',
                message: '注册失败'
              })
              this.isLoading = false
            }
          } else {
            console.log('error submit!!')
            return false
          }
        })
      }
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

  .u-emailInput {
    width: 258px;
  }
  .m-textBottom{
    display: flex;
    justify-content: space-between;
  }
  .u-retrievePassword {
    width: 100%;
    text-align: right;
  }
</style>
