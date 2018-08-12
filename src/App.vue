<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>

  export default {
    name: 'App',
    methods: {}
  }
</script>

<style lang="less">
  @import './style/common';
  .el-aside::-webkit-scrollbar {
    display: none;
  }
  body,
  html {
    margin: 0 ;
    padding: 0;
    width: 100%;
    height: 100%;
  }
  #app {
    width: 100%;
    height: 100%;
  }
  .m-menuAside {
    transition: all 0s ;
    width: 64px!important;
  }
  .m-menuAside-vertical:not(.el-menu--collapse) {
    transition: all 0s ;
    width: 200px!important;
  }
  /*进出路由动画化*/
  .fade-enter-active,
  .fade-leave-active {
    transition: all .3s ease;
  }

  .fade-enter,
  .fade-leave-active {
    opacity: 0;
  }
  .el-card {
    margin-bottom: 10px;
  }
  /*更改element样式*/
  .el-tabs--border-card>.el-tabs__content{
    padding: 30px;
  }
  .avatar-uploader .avatar-uploader-icon {
    font-size: 28px;
    width: 178px;
    height: 178px;
    line-height: 178px;
  }
  .el-upload{
    border: 1px dashed #d9d9d9;
    border-radius: 6px;
  }
</style>
