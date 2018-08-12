<template>
  <el-form :model="ResetForm" status-icon :rules="rules" ref="ResetForm" label-width="100px" class="demo-ruleForm">
    <el-form-item label="密码" prop="pass">
      <el-input type="password" v-model="ResetForm.pass" class="u-psdInput" auto-complete="off"></el-input>
    </el-form-item>
    <el-form-item label="确认密码" prop="checkPass">
      <el-input type="password" v-model="ResetForm.checkPass" class="u-psdInput" auto-complete="off"></el-input>
    </el-form-item>
    <el-form-item>
      <el-button style="margin-top: 12px;" @click="next('ResetForm')">下一步</el-button>
    </el-form-item>
  </el-form>
</template>

<script>
  export default {
    name: 'ResetPassword',
    data () {
      let validatePass = (rule, value, callback) => {
      if (value !== this.ResetForm.pass) {
          callback(new Error('两次输入密码不一致!'))
        } else {
          callback()
        }
      }
      return {
        ResetForm: {
          pass:'',
          checkPass:''
        },
        rules: {
          pass: [
            { required: true, message:'请输入新密码', trigger: 'change' },
            {min: 6, max: 20, message:'最少6位，最多20位', trigger: 'change'}
          ],
          checkPass: [
            { required: true, validator: validatePass, trigger: 'change' }
          ]
        }
      }
    },
    methods: {
      next (ResetForm) {
        this.$refs[ResetForm].validate((valid) => {
          if (valid) {
            this.$emit('changeStepId', 2)
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
  .u-psdInput{
    width: 258px;
  }
</style>
