<template>
  <el-card class="box-card">
    <div slot="header" class="clearfix g-cardHeader">
      <span>商品列表</span>
      <el-button type="success">新建</el-button>
    </div>
    <div class="text item">
      <el-table
        ref="multipleTable"
        :data="tableData3"
        tooltip-effect="dark"
        style="width: 100%"
        @selection-change="handleSelectionChange">
        <el-table-column
          type="selection"
          width="55">
        </el-table-column>
        <el-table-column
          label="商品id"
          width="120">
          <template slot-scope="scope">{{ scope.row.date }}</template>
        </el-table-column>
        <el-table-column
          prop="name"
          label="商品名称"
          width="120">
        </el-table-column>
        <el-table-column
          prop="name"
          label="条形码">
        </el-table-column>
        <el-table-column
          prop="name"
          label="库存">
        </el-table-column>
        <el-table-column
          prop="address"
          label="价格">
        </el-table-column>
        <el-table-column
          prop="address"
          label="点赞量">
        </el-table-column>
        <el-table-column label="操作" align="center">
          <template slot-scope="scope">
            <el-button type="text" @click="customerEdit">编辑</el-button>
            <el-button type="text" @click="customerEdit">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
    <el-pagination
      class="f-textAlignCenter"
      @current-change="changeCurrentPage"
      :current-page.sync="currentPage"
      :page-size="100"
      layout="total, prev, pager, next"
      :total="1000">
    </el-pagination>
  </el-card>
</template>

<script>
  import { getProductList } from '@/biz/fetchApi'

  export default {
    name: 'CustomerList',
    data () {
      return {
        //当前页数
        currentPage: 1,
        // 表格数据
        tableData3: [
          {
            date: '2016-05-03',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1518 弄'
          }],
        multipleSelection: []
      }
    },

    methods: {
      async getProduct () {
        try {
          let tableData = await getProductList()
          console.log(tableData)
        } catch (error) {
          this.$notify.error({
            title: '错误',
            message: '获取商品列表失败'
          })
          console.log(error)
        }
      },
      customerEdit () {
        this.$router.push({path: '/productList/productDetail/1'})
      },
      toggleSelection (rows) {
        if (rows) {
          rows.forEach(row => {
            this.$refs.multipleTable.toggleRowSelection(row)
          })
        } else {
          this.$refs.multipleTable.clearSelection()
        }
      },
      handleSelectionChange (val) {
        this.multipleSelection = val
      },
      changeCurrentPage (val) {
        // 改变页数触发
        console.log(`当前页: ${val}`)
      }
    },
    mounted () {
      this.getProduct()
    }
  }
</script>

<style scoped>
  .g-cardHeader {
    display: flex;
    justify-content: space-between;
    width: 100%;
  }
</style>
