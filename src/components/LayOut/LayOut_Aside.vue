<template>
    <el-menu
      :collapse="isCollapse"
      :default-active="setDefaultActive"
      class="g-menuAside m-menuAside-vertical"
      @open="handleOpen"
      @close="handleClose"
      background-color="#545c64"
      text-color="#fff"
      unique-opened
      router
      active-text-color="#ffd04b"
     >
      <!--<div v-for="(item, index) in routerPath" :index="index" :key="index">-->
        <!--<template v-if="!item.hidden">-->
          <!--<el-submenu  :index="index+''" v-if="!item.leaf" class="m-aside">-->
            <!--<template slot="title"><i :class="item.iconCls"></i><span slot="title">{{item.name}}</span></template>-->
            <!--<el-menu-item v-for="child in item.children" :index="child.path" :key="child.path" v-if="!child.hidden">-->
              <!--{{child.name}}-->
            <!--</el-menu-item>-->
          <!--</el-submenu>-->
          <!--&lt;!&ndash;<el-menu-item v-if="item.leaf&&item.children.length>0" :index="item.children[0].path"><i&ndash;&gt;-->
            <!--&lt;!&ndash;:class="item.iconCls"></i>{{item.children[0].name}}&ndash;&gt;-->
          <!--&lt;!&ndash;</el-menu-item>&ndash;&gt;-->
        <!--</template>-->
      <!--</div>-->
      <el-submenu  v-for="(item, index) in setRouter"  :index="index+''" :key="index" class="m-aside">
          <template slot="title"><i :class="item.iconCls"></i><span slot="title">{{item.name}}</span></template>
          <el-menu-item v-for="child in item.children" :index="child.path" :key="child.path" v-if="!child.hidden">
            {{child.name}}
          </el-menu-item>
      </el-submenu>

      <!--<div  v-for="(item, index) in routerPath" v-if="!item.hidden" :key="index" >-->
      <!--<el-submenu   :index="index+''" v-if="!item.leaf" class="m-aside">-->
      <!--<template slot="title"><i :class="item.iconCls"></i>{{item.name}}</template>-->
      <!--<el-menu-item v-for="child in item.children" :index="child.path" :key="child.path" v-if="!child.hidden">-->
      <!--{{child.name}}-->
      <!--</el-menu-item>-->
      <!--</el-submenu>-->
      <!--<el-menu-item v-if="item.leaf&&item.children.length>0" :index="item.children[0].path"><i-->
      <!--:class="item.iconCls"></i>{{item.children[0].name}}-->
      <!--</el-menu-item>-->
      <!--</div>-->
    </el-menu>
</template>

<script>
  import routerPath from '@/router/data'

  export default {
    name: 'LayOut',
    props :{
      isCollapse : {
        required: true,
        type: Boolean,
        default: false
      }
    },
    data () {
      return {
        routerPath
      }
    },
    created () {
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
      handleOpen (key, keyPath) {
        console.log(key, keyPath)
        this.key = key
      },
      handleClose (key, keyPath) {
        console.log(key, keyPath)
      }
    }
  }
</script>

<style scoped>
  .m-aside {
    text-align: left;
  }
</style>
