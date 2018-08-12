<template>
  <div class="g-Forget">
    <el-card>
      <el-steps :active="stepId" finish-status="success"  align-center>
        <el-step title="验证身份"></el-step>
        <el-step title="重置登录密码"></el-step>
        <el-step title="重置成功"></el-step>
      </el-steps>
      <el-tabs  v-model="stedIdtoString">
        <el-tab-pane name="0">
          <validate-email @changeStepId="changeStepId"></validate-email>
        </el-tab-pane>
        <el-tab-pane name="1">
          <reset-password @changeStepId="changeStepId"></reset-password>
        </el-tab-pane>
        <el-tab-pane name="2">
          <success-reset @backToLogin="backToLogin"></success-reset>
        </el-tab-pane>
      </el-tabs>
    </el-card>
  </div>
</template>

<script>
  import ValidateEmail from './components/ValidateEmail'
  import ResetPassword from './components/ResetPassword'
  import SuccessReset from './components/SuccessReset'
    export default {
        name: 'ForgetPassword',
        components: {
          ValidateEmail,
          ResetPassword,
          SuccessReset
        },
      data () {
        return {
          //当前找回密码进度
          stepId: 0
        }
      },
      computed: {
        stedIdtoString : {
          get () {
            return this.stepId.toString()
          },
          set (value) {
          }
        }
      },
      methods: {
        changeStepId (value) {
          this.stepId = value
        },
        backToLogin () {
            this.$emit('changeState', {isForget: false, isRegist: false})
        }
      }
    }
</script>

<style scoped>

</style>
