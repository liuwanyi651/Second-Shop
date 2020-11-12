<template>
<div>
    <!--详情图片-->
    <div class="pic bbs">
        <img :src="this.list.image" alt="">
    </div>
    <div class="pd5 mt10">
        ￥{{this.list.name}}
    </div>
    <!--价格-->
    <div class="cr pdl10 bbs pdb10">
        ￥{{this.list.orl_price}}
    </div>
    <!--运费 剩余 取消收藏-->
    <div class="flex j-betw fs14 pd10 bbs">
        <div class="c179">运费：{{this.list.__v}}</div>
        <div class="c179">剩余：{{this.list.amount}}</div>
        <div class="c179">取消收藏：
            <van-icon name="like" color="red" size="16px" />
        </div>
    </div>
    <div class="pd10 bbs"></div>
    <!--有赞的店 进入店铺-->
    <div class="fs18 bbs">
        <!--cell单元格组件-->
        <van-cell icon="shop-o" is-link to="index" size="large" value="进入店铺">
            <!--使用插槽 把官方渲染出来-->
            <template #title>
                <span class="custom-title">有赞的店</span>
                <van-tag type="danger">官方</van-tag>
            </template>
        </van-cell>
    </div>
    <div class="pd10 bbs"></div>
    <!--最下面标签 客服 购物车等 使用标签栏组件-->
    <div>
        <van-tabbar>
            <van-tabbar-item icon="chat-o">客服</van-tabbar-item>
            <van-tabbar-item icon="shopping-cart" badge="1">购物车</van-tabbar-item>
            <van-button type="warning">加入购物车</van-button>
            <van-button type="danger">立即购买</van-button>
        </van-tabbar>
    </div>
    <!--使用标签页组件 分为商品详情 和 商品评论-->
    <div>
        <van-tabs style="">
            <!--这是商品详情的部分-->
            <van-tab title="商品详情" name="a">
                <div class="pic bbs">
                    <!--商品详情 用v-html渲染-->
                    <div v-html="this.list.detail"></div>
                    <div style="height: 70px;"></div>
                </div>

            </van-tab>

            <van-tab title="商品评论" name="b"></van-tab>
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
            id: '',
            list: '',
            activeName: 'a', //这是商品详情部分 绑定的 v-model="activeName"

        }
    },
    components: {},

    methods: {
        getDetail() {
            //mounted两个作用 1：数据初始化 2：发请求
            // console.log(this.$route); //$route 代表 当前路由对象
            this.id = this.$route.query.id //把接收过来的query.id参数 赋值给this.id
            // console.log(this.id); //得到id 068fe09cf2a849b4b8c7ce3fea734072

            //getGoods 单个商品详情
            this.$api.getGoods(this.id).then(res => {
                if (res.code === 200) {
                    console.log(res);
                    this.list = res.goods.goodsOne //赋值 拿到较近的一层
                    console.log(this.list);
                }
            }).catch(err => {
                console.log(err);
            })
        },

    },
    mounted() {
        //调用这个方法
        this.getDetail()
    },
    computed: {},
    watch: {}
}
</script>

<style lang="scss" scoped>
.pic {
    width: 375px;
    height: 375px;
    background: rosybrown;

    img {
        width: 100%;
    }
}

.custom-title {
    margin-right: 4px;
    vertical-align: middle;
}
</style>
