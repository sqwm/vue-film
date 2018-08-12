<template>
    <div class="g-successReset">
        <div>重置成功</div>
      <el-button @click="backToLogin" :loading="isLoading">完成</el-button>
    </div>
</template>

<script>
    export default {
        name: 'SuccessReset',
      data () {
        return {
          isLoading: false
        }
      },
      methods: {
        backToLogin () {
          this.isLoading = true
          this.$notify({
            title: '密码重置成功',
            message: '即将进入登录',
            type: 'success'
          })
          setTimeout(() => {
          this.$emit('backToLogin')
            this.isLoading = false
          }, 1000)
        }
      }
    }
</script>

<style scoped>
.g-successReset{
  display: block;
  text-align: center;
}
</style>
