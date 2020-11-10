<template>
<div>
    <div>
        商品推荐
    </div>
    <div class="container" ref="wrapper">
        <div class="content">
            <div v-for="(item, index) in recommend" :key="index" class="item">
                <div>
                    <img :src="item.image" alt="" class="img" />
                </div>
                <div class="name">
                    {{ item.goodsName }}
                </div>
            </div>
        </div>
    </div>
</div>
</template>

<script>
import axios from "axios"
import BScroll from 'better-scroll' //引入的是滚动插件 bette-scroll
export default {
    name: '',
    props: {},
    data() {
        return {
            recommend: []
        }
    },
    components: {},
    methods: {
        getData() {
            //获取首页商品推荐
            this.$api.getRecommend().then(res => {
                this.recommend = res.data.recommend
                console.log(this.recommend)
            }).catch(err => {
                console.log(err)
            })
        }
    },
    mounted() {
        this.getData()
        this.$nextTick(() => {
            this.scroll = new BScroll(this.$refs.wrapper, {
                scrollX: true,
                startX: 0
            })

        })

    },
    computed: {

    },
    watch: {}
}
</script>

<style lang='scss' scoped>

</style>
