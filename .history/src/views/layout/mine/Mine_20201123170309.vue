<template>
<div>
    <div class="member t-center">会员中心</div>
    <!--第一种登录后的状态-->
    <div class="hi flex j-center a-center" v-if="flag">
        <!--头部头像部分-->
        <div class="head">
            <!--设置按钮-->
            <!---- @click="go" 是点击设置跳到个人资料的页面----->
            <div><i class="iconfont icon-shezhi" @click="go"></i>
            </div>
            <div class="cute m bor-r">
                <img src="../../../assets/head.jpg" alt="">
            </div>
            <div class="cw fs18 fw-b t-center pd15">
                欢迎您：{{name.nickname}}
            </div>
            <div class="cw fs14  t-center ">
                <van-button plain type="default" size="mini" @click="logOut">退出登录</van-button>
            </div>
        </div>
    </div>
    <!--第二种未登录的状态-->
    <div class="hi flex j-center a-center" v-if="!flag">
        <!--头部头像部分-->
        <div class="head">
            <!--设置按钮-->
            <div><i class="iconfont icon-shezhi "></i></div>
            <div class="cute m bor-r">
                <img src="../../../assets/head_mr.jpg" alt="">
            </div>
            <div class="cw fs14  t-center m20">
                <van-button plain type="default" size="mini" @click="goLogin">登录/注册</van-button>
            </div>
            <div class="cw fs14  t-center ">
                <!--<van-button plain type="default" size="mini">退出登录</van-button>--->
            </div>
        </div>
    </div>
    <!--待付款横排样式-->
    <div>
        <van-grid :column-num="5">
            <van-grid-item icon="balance-pay" text="待付款" />
            <van-grid-item icon="free-postage" text="待发货" />
            <van-grid-item icon="points" text="待收货" />
            <van-grid-item icon="thumb-circle-o" text="评价" badge="5" @click="assessment"/>
            <van-grid-item icon="like-o" text="已完成" />
        </van-grid>
    </div>
    <!--全部订单等 使用cell路由跳转组件 to后面跟我们要跳转的页面-->
    <div>
        <van-cell title="全部订单" icon="records" is-link to="allOrders" />
        <van-cell title="收藏商品" icon="star-o" is-link to="collectGoods" />
        <van-cell title="地址管理" icon="location-o" is-link to="address" />
        <van-cell title="最近浏览" icon="eye-o" is-link to="recentBrowse" />
    </div>
</div>
</template>

<script>
export default {
    name: '',
    props: {},
    data() {
        return {
            flag: true,
            //打标记 默认是true
            name: "",
            Dialog: ""
        }
    },
    components: {},
    methods: {
        //调接口 post请求 获取用户信息的数据 
        getData() {
            this.$api.queryUserMsg().then(res => {
                this.name = res.userInfo
                //  console.log(this.name);
            }).catch(err => {
                console.log(err);
            })
        },
        //点击退出登录后 直接进入未登录状态
        logOut() {
            this.$dialog
                .confirm({
                    message: "确定退出登录吗？"
                })
                .then(() => {
                    this.$api
                        .loginShopOut()
                        .then(res => {
                            if (res.code === 0) {
                                this.flag = false;
                                localStorage.clear();
                            }
                        })
                        .catch(err => {
                            console.log(err);
                        });
                });
        },
        //点击登录后直接跳转到登录注册页面
        goLogin() {
            this.$router.push({
                path: "/register"
            });
        },
        //是点击设置跳到个人资料的页面
        go() {
            this.$router.push("/personal")
        },
        //点击评价跳到评价中心页面
        assessment(){
            this.$router.push("/assessment")
        }
    },
    mounted() {
        //调用数据
        this.getData()
        this.flag = localStorage.getItem("user") ? true : false;
        //如果登录成功后 得到user 会跑到默认的ture 登录状态 否则跑到第二种未登录的状态
        // console.log(this.flag); //true
    },
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
