<template>
<div>
    <div class=" t-center bgc-w" style="height: 40px;line-height: 40px; border-bottom:1px solid rgb(231, 225, 225);">购物车</div>
    <div class="car ">
        <div class="car_yuan m bor-r">
            <img src="../../../assets/shop.png" alt="">
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
    methods: {},
    mounted() {},
    computed: {},
    watch: {}
}
</script>

<style lang="scss" scoped>
.car {
    width: 100%;
    height: 300px;
    background-color: rosybrown;
}

.car_yuan {
    width: 180px;
    height: 180px;
    margin-top: 30px;
    background: rgb(238, 238, 238);
    overflow: hidden;

    img {
        width: 72%;
        margin-top: 20px;
        margin-left: 18px;
    }
}
</style>
