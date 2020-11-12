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
    <div class="flex j-betw">
        <div class="c179">运费：</div>
        <div class="c179">剩余：</div>
        <div class="c179">取消收藏：</div>
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
        }
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
</style>
