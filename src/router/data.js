import login from '@/views/LoginPage/login'

const HomePage = () => import('@/views/HomePage')
const welcomePage = () => import('@/views/welcomePage/welcomePage')
// const DailyApplicationDetails = () => import('@/views/DailyApplicationDetails')
// 当访问出错或者没有权限
const error404 = () => import('@/views/Error404')
// 商品页面管理
const ProductList = () => import('@/views/ProductPages/ProductList')
const ProductEdit = () => import('@/views/ProductPages/ProductEdit')

// 设置活动商品
const activeGoodsList = () => import('@/views/ActiveGoods/ActiveGoodsList')
const activeGoodsEdit = () => import('@/views/ActiveGoods/ActiveGoodsEdit')

const filmList = () => import('@/views/FilmsListPage/filmsList')

const router = [
  {
    path: '/login',
    component: login,
    hidden: true,
    name:'登录'
  },
  {
    path: '/welcome',
    component: welcomePage,
    redirect:'welcome/filmList',
    hidden: true,
    name:'首页',
    children: [
      {path: 'filmList', component: filmList, hidden:true}
    ]
  },
  {
    path: '/',
    name: '商品档案',
    redirect:'/productList',
    component: HomePage,
    iconCls: 'el-icon-menu',
    children: [
      {path: '/productList', component: ProductList, name: '商品列表'},
      {path: '/productList/productDetail/:id', component: ProductEdit, name: '商品详情', hidden:true}
    ]
  },
  {
    path:'/',
    name: '活动设置',
    component: HomePage,
    iconCls: 'el-icon-goods',
    children: [
      {path: '/activeGoods', component: activeGoodsList, name: '活动商品列表'},
      {path: '/activeGoods/activeGoodsEdit/:id', component: activeGoodsEdit, name: '活动商品列表设置', hidden: true}
    ]
  },
  {
    path: '*',
    hidden: true,
    component: error404
  }

]
export default router
