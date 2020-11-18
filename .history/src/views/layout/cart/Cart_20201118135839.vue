<template>
<div>
        <!--使用NavBar 导航栏-->
    <van-nav-bar title="地址列表" left-text="返回" left-arrow @click-left="onClickLeft" />
    <div class="car ">
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
        return {}
    },
    components: {},
    methods: {
        goShopping(){
            this.$router.push("/")
        }
    },
    mounted() {},
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
