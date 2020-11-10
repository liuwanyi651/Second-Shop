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
            pic_list: []
        }
    },
    components: {},
    methods: {
        getData() {
            //获取首页商品推荐
            this.$api.getRecommend().then(res => {
                if (res.code === 200) {
                    // console.log(res.data.category);

                    console.log(res.data);

                }
            }).catch(res => {
                console.log(err);
            })
        }
    },
    mounted() {
        this.getData()
    },
    computed: {

    },
    watch: {}
}
</script>

<style lang='scss' scoped>

</style>
