<template>
  <el-row class="container">
    <!--头部-->
    <el-col :span="24" class="topbar-wrap">
      <div class="topbar-logo topbar-btn">
        <a href="/"><img  style="padding-left:8px;"></a>
      </div>
      <div class="topbar-logos" v-show="!collapsed">
        <a href="/"><img ></a>
      </div>
      <div class="topbar-title">
        <span style="font-size: 18px;color: #fff;">后台管理系统</span>
      </div>
      <div class="topbar-account topbar-btn">
        <el-dropdown trigger="click">
          <span class="el-dropdown-link userinfo-inner"><i class="iconfont icon-user"></i> {{nickname}}  <i
            class="iconfont icon-down"></i></span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item>
              <div @click="jumpTo('/user/profile')"><span style="color: #555;font-size: 14px;">个人信息</span></div>
            </el-dropdown-item>
            <el-dropdown-item>
              <div @click="jumpTo('/user/changepwd')"><span style="color: #555;font-size: 14px;">修改密码</span></div>
            </el-dropdown-item>
            <el-dropdown-item divided @click.native="logout">退出登录</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </div>
    </el-col>

    <!--中间-->
    <el-col :span="24" class="main">
      <!--左侧导航-->
      <aside :class="{showSidebar:!collapsed}">
        <!--展开折叠开关-->
        <div class="menu-toggle" @click.prevent="collapse">
          <i class="iconfont icon-menufold" v-show="!collapsed"></i>
          <i class="iconfont icon-menuunfold" v-show="collapsed"></i>
        </div>
        <el-menu
          :collapse="collapsed"
          :default-active="setDefaultActive"
          class="g-menuAside m-menuAside-vertical"
          @open="handleOpen"
          @close="handleClose"
          background-color="#545c64"
          text-color="#fff"
          unique-opened
          router
          active-text-color="#ffd04b"
          ref='menu'
        >
          <el-submenu  v-for="(item, index) in setRouter"  :index="index+''" :key="index" class="m-aside">
            <template slot="title"><i :class="item.iconCls"></i><span slot="title">{{item.name}}</span></template>
            <el-menu-item v-for="child in item.children" :index="child.path" :key="child.path" v-if="!child.hidden">
              {{child.name}}
            </el-menu-item>
          </el-submenu>
        </el-menu>
      </aside>

      <!--右侧内容区-->
      <section class="content-container">
        <div class="grid-content bg-purple-light">
          <el-col :span="24" class="content-wrapper">
            <transition name="fade" mode="out-in">
              <router-view></router-view>
            </transition>
          </el-col>
        </div>
      </section>
    </el-col>

  </el-row>
</template>

<script>
  import routerPath from '@/router/data'

  export default {
    name: 'home',
    data () {
      return {
        defaultActiveIndex: '0',
        nickname: '',
        collapsed: false
      }
    },
    computed: {
      setDefaultActive () {
        return `/${this.$route.path.split('/')[1]}`
      },
      setRouter () {
        return routerPath.filter(item => item.hidden !== true)
      }
    },
    methods: {
      handleSelect (index) {
        this.defaultActiveIndex = index
      },
      //折叠导航栏
      collapse: function () {
        this.collapsed = !this.collapsed
      },
      jumpTo (url) {
        this.defaultActiveIndex = url
        this.$router.push(url) //用go刷新
      },
      logout () {
      }
    },
    mounted () {
      let user = localStorage.getItem('access-user')
      if (user) {
        user = JSON.parse(user)
        this.nickname = user.nickname || ''
      }
    }
  }
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style  lang="less" scoped>
  .container {
    position: absolute;
    top: 0;
    bottom: 0;
    width: 100%;
    .main {
      display: -webkit-box;
      display: -webkit-flex;
      display: -ms-flexbox;
      display: flex;
      position: absolute;
      top: 50px;
      bottom: 0px;
      overflow: hidden;
    }

    aside {
      min-width: 50px;
      background: #333744;
      &::-webkit-scrollbar {
        /*display: none;*/
      }

      &.showSidebar {
        overflow-x: hidden;
        overflow-y: auto;
      }

      .el-menu {
        height: 100%; /*写给不支持calc()的浏览器*/
        height: -moz-calc(100% - 80px);
        height: -webkit-calc(100% - 80px);
        height: calc(100% - 80px);
        border-radius: 0px;
        background-color: #333744;
        border-right: 0px;
      }

      .el-submenu .el-menu-item {
        /*min-width: 60px;*/
      }
      .el-menu {
        width: 200px;
      }
      .el-menu--collapse {
        width: 60px;
      }

      .el-menu .el-menu-item, .el-submenu .el-submenu__title {
        height: 46px;
        line-height: 46px;
      }

      .el-menu-item:hover, .el-submenu .el-menu-item:hover, .el-submenu__title:hover {
        background-color: #7ed2df;
      }
    }

    .menu-toggle {
      background: #4A5064;
      text-align: center;
      color: white;
      height: 26px;
      line-height: 30px;
    }

    .content-container {
      background: #fff;
      flex: 1;
      overflow-y: auto;
      padding: 10px;
      padding-bottom: 1px;

      .content-wrapper {
        background-color: #fff;
        box-sizing: border-box;
      }
    }
  }
</style>
