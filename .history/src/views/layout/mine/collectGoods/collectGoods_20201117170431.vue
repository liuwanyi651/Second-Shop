<template>
<div>
    <!--使用NavBar 导航栏-->
    <van-nav-bar title="我的收藏" left-text="返回" left-arrow @click-left="onClickLeft" />
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
        },
        //查询我的收藏(get)
        queryCollect(){
            this.$api.getCollect().then(res=>{
                console.log(res);
            }).catch(err=>{
                console.log(err);
            })
        }
    },
    mounted() {},
    computed: {},
    watch: {}
}
</script>

<style lang='scss' scoped>

</style>
