<template>
<div>热销商品
    <!--采用vant的Grid宫格组件 一行2个-->

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
