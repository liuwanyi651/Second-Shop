<template>
<div>热销商品
    <van-grid :border="false" :column-num="2">
        <van-grid-item v-for="(item,index) in hotGoods" :key="index">
            <van-image :src="item.image" />
        </van-grid-item>
        <!--
        <van-grid-item>
            <van-image src="https://img.yzcdn.cn/vant/apple-2.jpg" />
        </van-grid-item>
        -->

    </van-grid>
</div>
</template>

<script>
import axios from "axios"
export default {
    name: '',
    props: {},
    data() {
        return {
            hotGoods: []
        }
    },
    components: {},
    methods: {
        getData() {
            //获取首页分类
            this.$api.getRecommend().then(res => {
                if (res.code === 200) {
                    console.log(res);
                    this.hotGoods = res.data.hotGoods
                    // console.log(res.data);

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
