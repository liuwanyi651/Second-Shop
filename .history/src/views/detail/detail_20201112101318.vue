<template>
<div></div>
</template>

<script>
export default {
    name: '',
    props: {},
    data() {
        return {}
    },
    components: {},
    methods: {},
    mounted() {
        //mounted两个作用 1：数据初始化 2：发请求
        this.$route
        console.log(this.$route);

        this.$api.getGoods({
            id: this.id
        }).then((res => {
            console.log(data);
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
