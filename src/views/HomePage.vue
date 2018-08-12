<template>
    <el-container>
      <el-aside :class=" isCollapse ? 'm-menuAside' : 'm-menuAside-vertical' ">
        <lay-out-aside :isCollapse="isCollapse"></lay-out-aside>
      </el-aside>
      <el-container>
        <el-header>
          <lay-out-header @changeWidth="changeWidth"></lay-out-header>
        </el-header>
        <el-main>
          <transition name="fade" mode="out-in">
            <router-view></router-view>
          </transition>
        </el-main>
      </el-container>
    </el-container>
</template>

<script>
  import LayOutAside from '@/components/LayOut/LayOut_Aside'
  import LayOutHeader from '@/components/LayOut/LayOut_Header'

  export default {
    name: 'HomePage',
    data () {
      return {
        isCollapse : false
      }
    },
    components: {
      LayOutAside,
      LayOutHeader
    },
    methods: {
      changeWidth (value) {
        this.isCollapse = value.isCollapse
      }
    }
  }
</script>

<style scoped>
  .el-container {
    height: 100%;
  }
  .el-header {
    background-color: #f0f0f0;
    color: #333;
    text-align: center;
    line-height: 60px;
    height: 60px;
  }
  .el-main {
    width: 100%;
    height: 100%;
  }
  /*侧边栏css*/
  .el-aside {
    background: #545c64;
    color: #333;
    text-align: left;
    height: 100%;
  }
  .g-menuAside {
    border: none;
  }

</style>
