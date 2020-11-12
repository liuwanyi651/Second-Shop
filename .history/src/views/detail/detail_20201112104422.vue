<template>
<div></div>
</template>

<script>
export default {
    name: '',
    props: {},
    data() {
        return {
            id: '',
            detail: ''
        }
    },
    components: {},
    methods: {},
    mounted() {
        //mounted两个作用 1：数据初始化 2：发请求

        this.getId = this.$route.query.getId
        // console.log(this.$route);  $route 代表 当前路由对象

        this.$api.getGoods({
            id: this.getId
        }).then((res => {
            this.detail = res.goods.goodsOne
            console.log(this.detail);
        }).catch(err => {
            console.log(err);
        }))

    },
    computed: {},
    watch: {}
}
</script>

<style lang="scss" scoped>

</style>
