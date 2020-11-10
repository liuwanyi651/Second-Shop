<template>
<div class="all">
    <div class="text">
        商品推荐
    </div>
    <div class="container" ref="wrapper">
        <div class="content">
            <div v-for="(item, index) in recommend" :key="index" class="item">
                <div>
                    <img :src="item.image" alt="" class="img" />
                </div>
                <div class="name">
                    {{ item.goodsName }}
                </div>
                <!--新价格和旧价格-->
                <div class="money">
                    <div class="money_new">
                        ￥{{item.price}}
                    </div>
                    <div class="money_old">
                        ￥{{item.mallPrice}}
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
</template>

<script>
import axios from "axios"
import BScroll from 'better-scroll' //引入的是滚动插件 bette-scroll
export default {
    name: '',
    props: {},
    data() {
        return {
            recommend: [],
            thePrice: [],
            price_old: []
        }
    },
    components: {},
    methods: {
        getData() {
            //获取首页商品推荐
            this.$api.getRecommend().then(res => {
                this.recommend = res.data.recommend
                this.thePrice = res.data.price
                this.price_old = res.data.mallPrice
                console.log(this.recommend)
            }).catch(err => {
                console.log(err)
            })
        }
    },
    mounted() {
        this.getData() //调用获取数据
        this.$nextTick(() => {
            this.scroll = new BScroll(this.$refs.wrapper, { //滚动
                scrollX: true,
                startX: 0
            })

        })

    },
    computed: {

    },
    watch: {}
}
</script>

<style lang="scss" scoped>
.all {
    margin-top: 20px;
    background: white;
    color: rgba(65, 63, 63, 0.8);

    .text {
        padding: 10px 10px;
        font-size: 18px;
    }
}

.container {
    display: flex;
    overflow: hidden;

    .content {
        display: flex;
        flex: 1;

        .img {
            height: 125px;
            width: 125px;
        }

        .name {
            text-overflow: ellipsis;
            white-space: nowrap;
            overflow: hidden;
            width: 125px;
        }
    }
}
</style>
