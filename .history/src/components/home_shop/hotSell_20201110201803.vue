<template>
<div>热销商品
    <van-grid :border="false" :column-num="2">
        <van-grid-item>
            <van-image src="https://img.yzcdn.cn/vant/apple-1.jpg" />
        </van-grid-item>
        <van-grid-item>
            <van-image src="https://img.yzcdn.cn/vant/apple-2.jpg" />
        </van-grid-item>
        <van-grid-item>
            <van-image src="https://img.yzcdn.cn/vant/apple-3.jpg" />
        </van-grid-item>
    </van-grid>
</div>
</template>

<script>
import axios from "axios"
export default {
    name: '',
    props: {},
    data() {
        return {}
    },
    components: {},
    methods: {
        getData() {
            //获取首页分类
            this.$api.getRecommend().then(res => {
                if (res.code === 200) {
                    console.log(res);
                    this.class_pic = res.data.category
                    // console.log(res.data);
                    this.pic = res.data.advertesPicture
                }
            }).catch(res => {
                console.log(err);
            })
        }
    },
    mounted() {
        this.getData()
    },
    computed: {},
    watch: {}
}
</script>

<style lang="scss" scoped>

</style>
