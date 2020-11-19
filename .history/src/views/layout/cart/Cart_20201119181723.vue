<template>
<div>
    <!--使用NavBar 导航栏-->
    <van-nav-bar title="购物车" left-text="返回" left-arrow @click-left="onClickLeft" />
     <!--第一种登录后的状态-->
     <div class="car" v-if="flag">
        <div class="bgc-w" style="height: 40px;"></div>
        <div class="car_yuan m bor-r">
            <img src="../../../assets/shop.png" alt="">
        </div>
        <div class="fs20 t-center m30 c5">您的购物车还是空的</div>
        <div class="flex j-center">
            <!--去购物按钮-->
            <van-button plain type="info" round color="rgb(36, 35, 35)" @click="goShopping">赶去购物</van-button>
        </div>
    </div>
     <!--第二种未登录的状态-->
    <div class="car"  v-if="!flag">
        <div class="bgc-w" style="height: 40px;"></div>
        <div class="car_yuan m bor-r">
            <img src="../../../assets/shop.png" alt="">
        </div>
        <div class="fs20 t-center m30 c5">您的购物车还是空的</div>
        <div class="flex j-center">
            <!--去购物按钮-->
            <van-button plain type="info" round color="rgb(36, 35, 35)" @click="goShopping">赶去购物</van-button>
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
            flag: true,
            //打标记 默认是true
        }
    },
    components: {},
    methods: {
        // 返回至 首页
        onClickLeft() {
            this.$router.push("/")
        },
        goShopping(){
            this.$router.push("/")
        },
        //拿到查询获取购物车数据(get) /getCard
        getCar(){
            this.flag = true
            this.$api.getShopCard().then(res =>{
                console.log(res);
            }).catch(err =>{
                console.log(err);
            })
        }
         
    },
    mounted() {
        this.getCar()
    },
    computed: {},
    watch: {}
}
</script>

<style lang="scss" scoped>
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
</style>
