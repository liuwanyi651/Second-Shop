<template>
<div class="all">
    <div class="text">
        商品推荐
    </div>
    <div class="container" ref="wrapper">
        <div class="content">
            <div v-for="(item, index) in recommend" :key="index" class="item">
                <!--商品图片-->
                <div>
                    <img :src="item.image" alt="" class="img" />
                </div>
                <!--商品的文字描述-->
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
                <div class="ioc flex">
                    <van-button icon="shopping-cart" color="linear-gradient(to right, #ff6034, #ee0a24)" size="small" class="car">
                    </van-button>
                    <van-button type="danger" class="see">查看详情</van-button>
                </div>
                <!--购物车与查看详情的图标-->

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
            thePrice: [], //现价
            price_old: [] //老价
        }
    },
    components: {},
    methods: {
        getData() {
            //获取首页商品推荐
            this.$api.getRecommend().then(res => {
                this.recommend = res.data.recommend
                this.thePrice = res.data.price //现价
                this.price_old = res.data.mallPrice //原价
                // console.log(this.recommend)
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
        border: 1px solid rgb(231, 225, 225);
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
            text-overflow: ellipsis; //ellipsis:表示对象文本溢出时显示省略标记，省略标记插入的位置是最后一个字符。
            white-space: nowrap; //强制文本在一行内显示
            overflow: hidden; //溢出内容为隐藏
            width: 125px; //设置一个宽度
        }
    }
}

.money {
    display: flex;

    .money_new {
        font-weight: bold;
    }

    .money_old {
        font-size: 14px;
        text-decoration: line-through;
    }
}

//购物按钮
.ioc {
    height: 50px;
}

.car {
    width: 30px;
}

.see {
    width: 90px;
}
</style>
