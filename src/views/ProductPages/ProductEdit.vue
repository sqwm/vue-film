<template>
  <el-container>
    <el-main>
      <el-form :model="productForm" :rules="rules" ref="productForm" label-width="100px">
        <el-form-item label="商品名称" prop="name">
          <el-input class="u-maxInputWidth" v-model="productForm.name"></el-input>
        </el-form-item>
        <el-form-item label="条形码" prop="code">
          <el-input type="number" class="u-maxInputWidth" v-model.trim="productForm.code"></el-input>
        </el-form-item>
        <el-form-item label="库存" prop="stock">
          <el-input type="number" class="u-maxInputWidth" v-model.trim="productForm.stock"></el-input>
        </el-form-item>
        <el-form-item label="商品主图" prop="cover">
          <el-upload
            action="https://jsonplaceholder.typicode.com/posts/"
            list-type="picture-card"
            :on-remove="handleAvatarRemove"
            :on-success="handleAvatarSuccess">
            <i class="el-icon-plus"></i>
          </el-upload>
        </el-form-item>
        <el-form-item label="活动价格" prop="activityPrice">
          <el-input  class="u-maxInputWidth" placeholder="活动价格" v-model.trim="productForm.activityPrice">
            <template slot="prepend">￥</template>
          </el-input>
        </el-form-item>
        <el-form-item label="普通零售价" prop="price">
          <el-input class="u-maxInputWidth" placeholder="普通零售价" v-model.trim="productForm.price">
            <template slot="prepend">￥</template>
          </el-input>
        </el-form-item>
        <el-form-item label="点赞数量" prop="praise">
          <el-input class="u-maxInputWidth" v-model.trim="productForm.praise"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="submitForm('productForm')">立即创建</el-button>
        </el-form-item>
      </el-form>
    </el-main>
  </el-container>
</template>
<script>
  export default {
    data () {
      return {
        productForm: {
          name: '',
          code: '',
          stock: '',
          activityPrice: '',
          praise: '',
          price: '',
          cover:''
        },
        rules: {
          name: [
            { required: true, message: '请输入商品名称', trigger: 'change' },
            { min: 2, max: 10, message: '商品名称2~10个字母', trigger: 'change' }
          ],
          code: [
            { required: true, message: '请输入条形码名称', trigger: 'change' }
          ],
          stock: [
            { required: true, message: '请输入库存', trigger: 'change' }
          ],
          activityPrice: [
            { required: true, message: '请输入活动售价', trigger: 'change' }
          ],
          praise: [
            { required: true, message: '请输入点赞数量', trigger: 'change' }
          ],
          price: [
            { required: true, message: '请输入零售价', trigger: 'change' }
          ],
          cover: [
            { required: true, message: '请添加商品主图', trigger: 'change' }
          ]
        }
      }
    },
    methods: {
      handleAvatarSuccess (res, file) {
        this.productForm.cover = URL.createObjectURL(file.raw)
      },
      handleAvatarRemove (file, fileList) {
        this.productForm.cover = ''
      },
      submitForm (formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            console.log(this.productForm.code)
            alert('submit!')
          } else {
            console.log('error submit!!')
            return false
          }
        })
      }
    }
  }
</script>
<style scoped>
  .u-maxInputWidth {
    max-width: 400px;
  }
</style>
