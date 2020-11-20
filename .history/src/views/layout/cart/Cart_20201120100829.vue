<template>
<div>
    <!--使用NavBar 导航栏-->
    <van-nav-bar title="购物车" left-text="返回" left-arrow @click-left="onClickLeft" />
     <!--第一种未登录的状态-->
    <div class="car" v-if="user === null">
        <div class="bgc-w" style="height: 40px;"></div>
        <div class="car_yuan m bor-r">
            <img src="../../../assets/shop.png" alt="">
        </div>
        <div class="fs20 t-center m30 c5">您的购物车还是空的</div>
        <div class="flex j-center">
            <!--去购物按钮-->
            <van-button plain type="info" round color="rgb(36, 35, 35)" @click="checkShopping">赶去购物</van-button>
        </div>
    </div>
    <!--第二种登录后的状态-->
    <div v-else>
        <!--登录后的已经购物的状态--->
        <div v-if="list.length>0" class="all">
            <div class="bbs"></div>
            <!--循环点击购买的商品--->
            <div v-for="(item,index) in list" :key="index">
                <div class="flex">
                    <div style=" width: 40px;" class="flex j-center">
                        <van-checkbox v-model="item.check" @change="fx(item)" shape="square"  checked-color="red"></van-checkbox>
                    </div>
                    <div class="pic bs pdtb10">
                        <img :src="item.image_path" >
                    </div>
                    <div>
                        <div class="cb mt10 h50 pdl10 w190">{{item.name}}</div>
                        <div class="flex j-betw w190">
                            <div class="cr pdl10">￥{{item.present_price}}</div>
                            <!--步进器-->
                            <div><van-stepper v-model="value" min="0" max="50" /></div>
                        </div>
                    </div>
                </div>
                <div class="bbs"></div>
            </div>
            <!--SubmitBar 提交订单栏-->
            <van-submit-bar :price="3050" button-text="提交订单" @submit="onSubmit">
                <van-checkbox v-model="checked">全选</van-checkbox>
            </van-submit-bar>
        </div>
        <!--第三种登录没购物的状态-->
        <div class="car" v-else>
        <div class="bgc-w" style="height: 40px;"></div>
        <div class="car_yuan m bor-r">
            <img src="../../../assets/shop.png" alt="">
        </div>
        <div class="fs20 t-center m30 c5">您的购物车还是空的</div>
        <div class="flex j-center">
            <van-button plain type="info" round color="rgb(36, 35, 35)" @click="goShopping">赶去购物</van-button>
        </div>
        </div>
    </div>
    

</div>
</template>

<script>
export default {
    name: '',
    props: {},
    data() {
        return {
            user:'',
            list:[],
            checked:false,
            value:''
        }
    },
    components: {},
    methods: {
        // 返回至 首页
        onClickLeft() {
            this.$router.push("/")
        },
        checkShopping() {
            // 判断 用户没登录的状态 点击收藏会提示
            if(this.user === null){
                this.$dialog.confirm({
                    title:'您当前没有登录',
                    message:'是否跳转到登录页面'
                }).then(()=>{
                    this.$router.push('/register')
                }).catch(()=>{
                    this.$toast('您取消了操作')
                })
            }
        },
        // 登录后未购买的购物空状态 点击去购物
          goShopping(){
            this.$router.push("/")
        },
         //拿到查询获取购物车数据(post) /getCard
        getCar(){
            // console.log(111);
            this.$api.getShopCard().then(res =>{
                // console.log(res);
                this.list = res.shopList
                console.log( this.list);

            }).catch(err =>{
                console.log(err);
            })
        },
        //提交订单
        onSubmit(){
        },
         //全选
        select() {
        
            this.list.map((item) =>{
                item.check = this. checked
            })
        },
        fx(item) {
            this.checked = this.list.every((item) => {
                return item.check === true
            })
        }
    },
    mounted() {
        this.getCar()
        this.user = localStorage.getItem('user')
    },
    computed: {},
    watch: {}
}
</script>

<style lang="scss" scoped>
//未登录的状态和已经登录没有购物的状态
.car {
    width: 100%;
    height: 200px;
    background-color: white;
}

.car_yuan {
    width: 180px;
    height: 180px;
    background: rgb(238, 238, 238);
    overflow: hidden;
    img {
        width: 70%;
        margin-top: 30px;
        margin-left: 25px;
    }
}
//已登录有购物的状态
.all{
    width: 100%;
    background: white;
}
.pic{
    width: 80px;
    height: 80px;
    img{
        width: 100%;
    }
}
</style>
