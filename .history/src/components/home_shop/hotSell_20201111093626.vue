<template>
<div>
    <div class="t-center">热销商品</div>
    <!--采用vant的Grid宫格组件 一行2个-->
    <van-grid :border="false" :column-num="2" class="">
        <van-grid-item v-for="(item,index) in hotGoods" :key="index" class="hot">
            <van-image :src="item.image" />
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
.hot {
    border: 1px solid rgb(231, 225, 225);
}
</style>
