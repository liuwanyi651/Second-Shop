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
    methods: {
        getData() {
            this.$api.getRecommend().then(res => {
                console.log(res);
            }).catch(err => {
                console.log(err);
            })
        }
    },
    mounted() {
        console.log(this.$api);
        this.getData() //调用
    },
    computed: {},
    watch: {}
}
</script>

<style lang='scss' scoped>

</style>
