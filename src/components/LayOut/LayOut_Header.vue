<template>
  <el-row>
    <el-col :span="1">
      <span v-if="!isCollapse" class="el-icon-d-arrow-left f-iconFontSize f-cursorPointer" @click="changeWidth"></span>
      <span v-else class="el-icon-d-arrow-right f-iconFontSize f-cursorPointer" @click="changeWidth"></span>
    </el-col>
    <el-col :span="2" :offset="21">
        <el-dropdown trigger="hover">
        <span class="el-dropdown-link userinfo-inner">
            <img class="u-avatar" src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1528793592163&di=e3f722e9dc0873b0914902b20aa75341&imgtype=0&src=http%3A%2F%2Fimg3.duitang.com%2Fuploads%2Fitem%2F201505%2F26%2F20150526002859_c2yKG.thumb.700_0.jpeg"/>
          <span>小明</span>
        </span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item>设置密码</el-dropdown-item>
            <el-dropdown-item>绑定邮箱</el-dropdown-item>
            <el-dropdown-item divided>退出登录</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
    </el-col>
  </el-row>
</template>

<script>
  export default {
    name: 'LayOut_Header',
    data () {
      return {
        isCollapse: false
      }
    },
    methods: {
      changeWidth () {
        this.isCollapse = !this.isCollapse
          this.$emit('changeWidth', {isCollapse: this.isCollapse})
      }
    }
  }
</script>

<style lang="less" scoped>
  .userinfo-inner{
    display: flex;
    height: 60px;
    cursor: pointer;
  }
  .u-avatar {
    width: 40px;
    height: 40px;
    border-radius: 20px;
    margin: 10px 10px 0 0;
  }

</style>
