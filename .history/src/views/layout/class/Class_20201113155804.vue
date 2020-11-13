<template>
<div class="all t-center">
    <div class="fen t-center bbs">
        商品分类
    </div>
    <div class="flex">
        <!--左边-->
        <div>
            <!--使用Sidebar侧边导航组件 左侧边导航-->
            <van-sidebar v-model="activeKey">
                <!--拿到左侧分类的名称 eg:新鲜水果 中外名酒……-->
                <!--给分类eg:新鲜水果 中外名酒…… 绑定getClassify(item)事件 这里item是每一项的实参  -->
                <van-sidebar-item v-for="(item,index) in goodsCategoryName" :key="index" :title="item.mallCategoryName" @click="getClassify(item.bxMallSubDto)" />
            </van-sidebar>
        </div>
        <!--上面-->
        <div>
            <!--使用Tab标签页组件 上边分类 热带水果什么的-->
            <van-tabs v-model="active">
                <van-tab v-for="(item,index) in classQuery" :key="index" :title="item.mallSubName">
                    <div>
                        <img :src="item.image" alt="">
                    </div>
                </van-tab>
            </van-tabs>
        </div>

    </div>
</div>
</template>

<script>
//classQuery
export default {
    name: '',
    props: {},
    data() {
        return {
            activeKey: 0, //这是左侧边导航 默认是在0号位
            active: 0, //右边分类 默认是在0号位
            goodsCategoryName: '', //左侧商品分类的名称
            classQuery: [], //右侧商品分类
            goodsData: [],
            id: ''
        }
    },
    components: {},
    methods: {
        //拿到首页 分类 新鲜水果 中外名酒 营养奶品等数据
        getData() {
            this.$api.getRecommend().then(res => {
                if (res.code === 200) {
                    // console.log(res);
                    //获取商品分类的数据 赋值给goodsCategoryName这个空数组
                    this.goodsCategoryName = res.data.category
                    // console.log(this.goodsCategoryName);
                }
            }).catch(err => {
                console.log(err);
            })
        },

        //接收点击分类水果每一项 的形参item
        getClassify(item) {
            // console.log(item); // 这里得到一个对象 eg里面有新鲜水果对应的 热带水果 时令水果等 
            this.classQuery = item
            // console.log(this.classQuery);  //把上面的item 赋值给左边 this.classQuery
            this.getGoods(item[0].mallSubId)
            // console.log(item[0].mallSubId);  //这里的打印的 与 下面的打印的id 拿到的东西是一样的
        },
        //拿到分类查询的数据
        getGoods(id) {
            // console.log(id); //这是分类每一项的id值  eg现在点击新鲜水果 拿到的是新鲜水果的id值 
            this.$api.getClass({
                id
            }).then(res => {
                // console.log(res);
                if (res.code === 200) {
                    this.goodsData = res.dataList
                    console.log(this.goodsData); //已经拿到新鲜水果 对应的 车厘子 龙眼等东西
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
