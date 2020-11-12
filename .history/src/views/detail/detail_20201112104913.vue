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
        // console.log(this.$route);  $route 代表 当前路由对象
        this.getId = this.$route.query.getId
        console.log(this.getId); //得到id

        this.$api.getGoods({
            id: this.getId
        }).then((res => {

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
