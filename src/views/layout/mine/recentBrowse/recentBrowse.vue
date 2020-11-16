<template>
<div>
    <!--使用NavBar 导航栏-->
    <van-nav-bar title="最近浏览" left-text="返回" left-arrow @click-left="onClickLeft" />
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
        // 返回至 我的
        onClickLeft() {
            this.$router.push("/Mine")
        }
    },
    mounted() {},
    computed: {},
    watch: {}
}
</script>

<style lang='scss' scoped>

</style>
