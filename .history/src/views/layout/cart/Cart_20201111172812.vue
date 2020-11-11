<template>
<div>
    <div class=" t-center bgc-w" style="height: 40px;line-height: 40px; border-bottom:1px solid rgb(231, 225, 225);">购物车</div>
    <div class="car ">
        <div class="bgc-w" style="height: 40px;"></div>
        <div class="car_yuan m bor-r">
            <img src="../../../assets/shop.png" alt="">
        </div>
        <div class="fs20 t-center m30 c5">您的购物车还是空的</div>
    </div>
    <div>
        <van-button type="default">去购物</van-button>
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
