<template>
<div class="all t-center">
    <div class="fen t-center bbs">
        商品分类
    </div>
    <div>
        <!--使用Tab标签页组件 上面导航-->
        <van-tabs v-model="active">
            <van-tab title="标签 1"></van-tab>
            <van-tab title="标签 2"></van-tab>
            <van-tab title="标签 3"></van-tab>
            <van-tab title="标签 4"></van-tab>
        </van-tabs>
        <!--使用Sidebar侧边导航组件 左侧边导航-->
        <van-sidebar v-model="activeKey">
            <van-sidebar-item title="标签名称" />
            <van-sidebar-item title="标签名称" />
            <van-sidebar-item title="标签名称" />
        </van-sidebar>

    </div>
</div>
</template>

<script>
export default {
    name: '',
    props: {},
    data() {
        return {
            activeKey: 0,
            active: 0,
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
.all {
    width: 100%;
    height: 100%;
    background: white;

    .fen {
        height: 40px;
        line-height: 40px;
    }
}
</style>
