<template>
<div>
    <!--图片-->
    <div>
        <img :src="info.image" alt="">
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
            // image: ''
            info: null,
        }
    },
    components: {},
    created: {

    },
    methods: {
        getDetail(id) {
            //mounted两个作用 1：数据初始化 2：发请求
            // console.log(this.$route); //$route 代表 当前路由对象
            //把接收过来的query.id参数 赋值给this.id
            // console.log(this.id); //得到id 068fe09cf2a849b4b8c7ce3fea734072

            //getGoods 单个商品详情
            this.$api.getGoods(id).then(res => {
                if (res.code === 200) {
                    this.list = res.goods
                    console.log(res);
                    this.info = res.goods.goodsOne
                }
            }).catch(err => {
                console.log(err);
            })
        }
    },
    mounted() {
        //调用这个方法
        this.getDetail(this.$route.query.id)
    },
    computed: {},
    watch: {}
}
</script>

<style lang="scss" scoped>

</style>
