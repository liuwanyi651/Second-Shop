<template>
<div class="all">
    <!--使用vant 标签栏组件-->
    <!-- 底部导航栏 -->
    <!-- 给tabbar--route属性  然后给每一项to属性就可以路由跳转了 -->
    <van-tabbar v-model="active" route>
        <van-tabbar-item icon="home-o" to="/">首页</van-tabbar-item>
        <van-tabbar-item icon="bars" to="/class">分类</van-tabbar-item>
        <van-tabbar-item icon="shopping-cart-o" to="/cart">购物车</van-tabbar-item>
        <van-tabbar-item icon="user-o" to="mine">我的</van-tabbar-item>
    </van-tabbar>
    <!--子路由出口-->
    <router-view></router-view>
</div>
</template>

<script>
export default {
    name: '',
    props: {},
    data() {
        return {
            active: ''
        }
    },
    components: {},
    methods: {},
    mounted() {},
    computed: {},
    watch: {}
}
</script>

<style lang="scss" scoped>

</style>
