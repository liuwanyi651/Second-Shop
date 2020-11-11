<template>
<div>
    <div class="member t-center">会员中心</div>
    <div class="hi flex j-center a-center">
        <!--头部头像部分-->
        <div class="head">
            <!--设置按钮-->
            <div><i class="iconfont icon-shezhi "></i></div>
            <div class="cute m bor-r">
                <img src="../../../assets/head.jpg" alt="">
            </div>
            <div class="cw fs18 fw-b t-center pd15">
                欢迎您：小白
            </div>
            <div class="cw fs14  t-center ">
                退出登录
            </div>
        </div>
    </div>
    <!--待付款横排样式-->
    <div>
        <van-grid :column-num="5">
            <van-grid-item icon="balance-pay" text="待付款" />
            <van-grid-item icon="free-postage" text="待发货" />
            <van-grid-item icon="thumb-circle-o" text="待收货" />
            <van-grid-item icon="photo-o" text="评价" badge="5" />
            <van-grid-item icon="photo-o" text="已完成" />
        </van-grid>
    </div>
</div>
</template>

<script>
export default {
    name: '',
    props: {},
    data() {
        return {}
    },
    components: {},
    methods: {},
    mounted() {},
    computed: {},
    watch: {}
}
</script>

<style lang="scss" scoped>
.member {
    height: 40px;
    line-height: 40px;
}

.hi {
    width: 100%;
    background-color: rgb(227, 12, 123);
    height: 232px;

    .head {
        width: 60%;
        height: 150px;
        position: relative;

        .cute {
            width: 75px;
            height: 75px;
            background: seagreen;
            overflow: hidden;

            img {
                width: 100%;
            }
        }
    }
}

//设置按钮
.iconfont.icon-shezhi {
    color: white;
    font-size: 30px;
    position: absolute;
    right: -60px;
    top: -25px;
}
</style>
