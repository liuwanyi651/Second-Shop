<template>
<div class="all t-center">
    <div class="fen t-center bbs">
        商品分类
    </div>
    <div>
        <!--使用Tab标签页组件 上面导航-->
        <van-tabs v-model="active" scrollspy sticky>
            <van-tab v-for="index in 8" :title="'选项 ' + index" :key="index">
                内容 {{ index }}
            </van-tab>
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
            activeKey: 0, //这是

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
