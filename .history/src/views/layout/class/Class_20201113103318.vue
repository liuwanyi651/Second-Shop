<template>
<div class="all t-center">
    <div class="fen t-center bbs">
        商品分类
    </div>
    <div class="flex">
        <!--使用Sidebar侧边导航组件 左侧边导航-->
        <van-sidebar v-model="activeKey">
            <van-sidebar-item v-if="(item,index) in goodsCategoryName" :key="index" :title="item.mallCategoryName" />
        </van-sidebar>
        <!--使用Tab标签页组件 右边分类-->
        <van-tabs v-model="active">
            <van-tab title="标签 1"></van-tab>
            <van-tab title="标签 2"></van-tab>
            <van-tab title="标签 3"></van-tab>
            <van-tab title="标签 4"></van-tab>
        </van-tabs>

    </div>
</div>
</template>

<script>
export default {
    name: '',
    props: {},
    data() {
        return {
            activeKey: 0, //这是左侧边导航 默认是在0号位
            active: 0, //右边分类 默认是在0号位
            goodsCategoryName: '', //左侧商品分类的名称
        }
    },
    components: {},
    methods: {
        getData() {
            this.$api.getRecommend().then(res => {
                if (res.code === 200) {
                    //获取商品分类的数据 赋值给goodsCategoryName这个空数组
                    this.goodsCategoryName = res.data.category
                }
            }).catch(err => {
                console.log(err);
            })
        }
    },
    mounted() {
        //调用这个函数
        this.getData()
    },
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
