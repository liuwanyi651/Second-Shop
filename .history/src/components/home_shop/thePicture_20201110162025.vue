<template>
<div>
    <!--每个 SwipeItem 代表一张轮播卡片，可以通过 autoplay 属性设置自动轮播的间隔。-->
    <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
        <van-swipe-item v-for="(item,index) in list" :key="index" class="pic"><img :src="item.image" alt=""></van-swipe-item>
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
                // console.log(res); //拿到首页所有数据
                // console.log(res.data.slides); //拿到只是轮播图的数据
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
.pic {
    width: 100%;
    height: 200px;
}
</style>
