<template>
<div>
    <!--每个 SwipeItem 代表一张轮播卡片，可以通过 autoplay 属性设置自动轮播的间隔。-->
    <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
        <van-swipe-item v-for="(item,index) in list" :key="index"><img :src="item.image" alt=""></van-swipe-item>
    </van-swipe>

</div>
</template>

<script>
import axios from "axios"
export default {
    //接收父组件传过来的参数
    name: '',
    props: {},
    //定义变量
    data() {
        return {
            list: []
        }
    },
    components: {},
    //监听方法 click事件等
    methods: {
        getData() {
            // 获取首页数据
            this.$api.getRecommend().then(res => {
                console.log(res.data.slides);
                if (res.code === 200) {
                    this.list = res.data.slides
                }

            }).catch(err => {
                console.log(err);
            })
        },
    },
    //调用
    mounted() {
        this.getData()
    },
    //调用
    computed: {},
    watch: {}
}
</script>

<style lang="scss" scoped>
.my-swipe .van-swipe-item {
    color: #fff;
    font-size: 20px;
    line-height: 150px;
    text-align: center;
    background-color: #39a9ed;
}
</style>
