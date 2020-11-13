<template>
<div class="all t-center">
    <div class="fen t-center bbs">
        商品分类
    </div>
    <!--使用Sidebar 侧边导航组件-->
    <div>
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
