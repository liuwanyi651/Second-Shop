<template>
<div></div>
</template>

<script>
export default {
    name: '',
    props: {},
    data() {
        return {

        }
    },
    components: {},
    methods: {},
    mounted() {
        //mounted两个作用 1：数据初始化 2：发请求
        // console.log(this.$route); //$route 代表 当前路由对象
        this.id = this.$route.query.getId
        console.log(this.id); //得到id 068fe09cf2a849b4b8c7ce3fea734072

        //getGoods 单个商品详情
        this.$api.getGoods(this.getId).then(res => {
            console.log(res);
        })

    },
    computed: {},
    watch: {}
}
</script>

<style lang="scss" scoped>

</style>
