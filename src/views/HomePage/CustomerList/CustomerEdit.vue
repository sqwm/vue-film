<template>
  <el-container>
    <el-aside width="550px!important">
      <el-card>
        <div slot="header" class="clearfix">
          <span>个案详细信息</span>
        </div>
        <div>
          <ul>
            <li class="m-userInfo">
              <el-input placeholder="请输入内容">
                <template slot="prepend">个案备号</template>
              </el-input>
              <el-input placeholder="请输入内容">
                <template slot="prepend">个案所有人</template>
              </el-input>
            </li>
            <li class="m-userInfo">
              <el-input placeholder="请输入内容">
                <template slot="prepend">状态</template>
              </el-input>
              <el-input placeholder="请输入内容">
                <template slot="prepend">优先级</template>
              </el-input>
            </li>
            <li>
              主题：
              <el-input
                type="textarea"
                :autosize="{ minRows: 2, maxRows: 4}"
                placeholder="请输入内容">
              </el-input>
            </li>
            <li>
              描述：
              <el-input
                type="textarea"
                :autosize="{ minRows: 2, maxRows: 4}"
                placeholder="请输入内容">
              </el-input>
            </li>
          </ul>
        </div>
      </el-card>
      <el-card>
        <div slot="header" class="clearfix">
          <span>联系人详细信息</span>
        </div>
        <div>
          <ul>
            <li class="m-userInfo">
              <el-input placeholder="请输入内容">
                <template slot="prepend">姓名</template>
              </el-input>
            </li>
            <li class="m-userInfo">
              <el-input placeholder="请输入内容">
                <template slot="prepend">职务</template>
              </el-input>
              <el-input placeholder="请输入内容">
                <template slot="prepend">客户名</template>
              </el-input>
            </li>
            <li class="m-userInfo">
              <el-input placeholder="请输入内容">
                <template slot="prepend">电子邮件</template>
              </el-input>
              <el-input placeholder="请输入内容">
                <template slot="prepend">电话</template>
              </el-input>
            </li>
          </ul>
        </div>
      </el-card>
    </el-aside>
    <el-main>
      <el-tabs v-model="activeName" @tab-click="handleClick">
        <el-tab-pane label="用户管理" name="first">所有gengx</el-tab-pane>
        <el-tab-pane label="配置管理" name="second">配置管理</el-tab-pane>
        <el-tab-pane label="角色管理" name="third">角色管理</el-tab-pane>
        <el-tab-pane label="定时任务补偿" name="fourth">定时任务补偿</el-tab-pane>
      </el-tabs>
    </el-main>
  </el-container>
</template>

<script>
  export default {
    name: 'CustomerEdit',
    data () {
      return {
        activeName:'first'
      }
    }
  }
</script>

<style lang="less" scoped>
  .m-userInfo {
    display: flex;
    justify-content: space-between;
    .el-input {
      /*margin: 10px 10px 0;*/
      margin: 0 10px 10px 0;
    }
  }
</style>
