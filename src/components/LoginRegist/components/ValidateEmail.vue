<template>
  <el-form :model="forgetForm" :rules="rules" ref="forgetForm" label-position="right"  label-width="100px" >
    <el-form-item label="邮箱地址" prop="email">
      <el-input type="email" :disabled="!isGetCode" v-model="forgetForm.email" placeholder="请输入邮箱" class="u-emailInput"></el-input>
    </el-form-item>
    <el-form-item label="验证码" prop="code">
      <el-input class="u-codeInput" v-model="forgetForm.code"></el-input><el-button pain @click="getCode" :disabled="!canGetCode&&isGetCode">{{codeMessage}}</el-button>
    </el-form-item>
    <el-form-item>
      <el-button style="margin-top: 12px;" @click="next('forgetForm')">下一步</el-button>
    </el-form-item>
  </el-form>
</template>

<script>
    export default {
        name: 'ValidateEmail',
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
          //是否能获取验证码
          isGetCode:true,
          codeMessage: '获取消息',
          //表单
          forgetForm: {
            email:'',
            code:''
          },
          //验证规则
          rules: {
            email: [
              {required: true, validator: validateEmail, trigger: 'change'}
            ],
            code:[
              {required: true, message: '请填写验证码', trigger: 'change'}
            ]
          }
        }
      },
      computed: {
        canGetCode () {
          let emailReg = new RegExp('^[a-z0-9]+([._\\-]*[a-z0-9])*@([a-z0-9]+[-a-z0-9]*[a-z0-9]+.){1,63}[a-z0-9]+$')
          return emailReg.test(this.forgetForm.email)
        }
      },
      methods: {

        getCode () {
          if ((this.canGetCode && this.isGetCode === true) || this.codeMessage === '重新获取') {
            let timer = 60
            this.isGetCode = false
            let timerOut = setInterval(() => {
              this.codeMessage = timer + 's'
              timer--
              if (timer === 0) {
                clearInterval(timerOut)
                this.codeMessage = '重新获取'
              }
            }, 1000)
          }
        },
        next (forgetForm) {
          this.$refs[forgetForm].validate((valid) => {
            if (valid) {
              this.$emit('changeStepId', 1)
              // if (this.stepId++ > 2) this.stepId = 0
            } else {
              return false
            }
          })
        }
      }
    }
</script>

<style scoped>
  .u-emailInput{
    width: 258px;
  }
  .u-codeInput{
    width: 100px;
    margin-right: 10px;
  }
</style>
