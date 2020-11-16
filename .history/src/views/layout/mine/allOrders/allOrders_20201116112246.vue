<template>
<div>

    <van-nav-bar title="我的订单" left-text="返回" left-arrow @click-left="onClickLeft" />
    <van-tabs v-model="active">
        <van-tab title="全部" class="t-center mt30">开发中，敬请期待</van-tab>
        <van-tab title="待支付">开发中，敬请期待</van-tab>
        <van-tab title="待发货">开发中，敬请期待</van-tab>
        <van-tab title="待收货">开发中，敬请期待</van-tab>
        <van-tab title="已完成">开发中，敬请期待</van-tab>
    </van-tabs>
</div>
</template>

<script>
export default {
    name: '',
    props: {},
    data() {
        return {
            active: ""
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
