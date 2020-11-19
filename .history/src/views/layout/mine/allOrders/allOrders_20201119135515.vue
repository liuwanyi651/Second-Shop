<template>
<div>
    <!--使用NavBar 导航栏组件-->
    <van-nav-bar title="我的订单" left-text="返回" left-arrow @click-left="onClickLeft" />
    <!--使用Tab 标签页组件-->
    <van-tabs v-model="activeName">
        <van-tab title="全部" class="t-center mt30" name='a'>开发中，敬请期待</van-tab>
        <van-tab title="待支付" class="t-center mt30" name='b'>开发中，敬请期待</van-tab>
        <van-tab title="待发货" class="t-center mt30" name='c'>开发中，敬请期待</van-tab>
        <van-tab title="待收货" class="t-center mt30" name='d'>开发中，敬请期待</van-tab>
        <van-tab title="已完成" class="t-center mt30" name='e'>暂无数据</van-tab>
    </van-tabs>
</div>
</template>

<script>
export default {
    name: '',
    props: {},
    data() {
        return {
            activeName: "e" //默认是第一个
        }
    },
    components: {},
    methods: {
        // 返回至 我的
        onClickLeft() {
            this.$router.push("/Mine")
        }
    },
    mounted() {},
    computed: {},
    watch: {}
}
</script>

<style lang='scss' scoped>

</style>
