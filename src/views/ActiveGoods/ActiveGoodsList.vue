<template>
  <el-container>
    <el-table
      :data="tableData4"
      style="width: 100%">
      <el-table-column
        fixed
        prop="date"
        label="商品ID"
        width="150">
      </el-table-column>
      <el-table-column
        prop="name"
        label="商品名称"
        width="120">
      </el-table-column>
      <el-table-column
        prop="province"
        label="开始日期"
        width="120">
      </el-table-column>
      <el-table-column
        prop="city"
        label="结束日期"
        width="120">
      </el-table-column>
      <el-table-column
        prop="address"
        label="活动状态"
        width="300">
      </el-table-column>
      <el-table-column
        prop="zip"
        label="活动剩余商品"
        width="120">
      </el-table-column>
      <el-table-column
        fixed="right"
        label="操作"
        width="120">
        <template slot-scope="scope">
          <el-button
            @click.native.prevent="jumpToDetail()"
            type="text"
            size="small">
            编辑
          </el-button>
          <el-button
            @click.native.prevent="deleteRow(scope.$index, tableData4)"
            type="text"
            size="small">
            删除
          </el-button>
        </template>
      </el-table-column>
    </el-table>
  </el-container>
</template>

<script>
  export default {
    name: 'ActiveGoods',
    data () {
      return {
        tableData4: [{
          date: '2016-05-03',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333
        }, {
          date: '2016-05-02',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333
        }, {
          date: '2016-05-04',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333
        }, {
          date: '2016-05-01',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333
        }, {
          date: '2016-05-08',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333
        }, {
          date: '2016-05-06',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333
        }, {
          date: '2016-05-07',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333
        }]
      }
    },
    methods: {
      jumpToDetail () {
        this.$router.push({path: '/activeGoods/activeGoodsEdit/1'})
      },
      deleteRow (index, rows) {
        rows.splice(index, 1)
      }
    }
  }
</script>

<style scoped>

</style>
