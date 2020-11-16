<template>
<div>
    <van-nav-bar title="我的订单" left-text="返回" left-arrow @click-left="onClickLeft" />
</div>
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
        onClickLeft() {
            Toast('返回');
        },
    },
    mounted() {},
    computed: {},
    watch: {}
}
</script>

<style lang='scss' scoped>

</style>
