<template>
<div class="all">
    <!--使用vant 标签栏组件-->
    <van-tabbar v-model="active">
        <van-tabbar-item icon="home-o">标签</van-tabbar-item>
        <van-tabbar-item icon="search">标签</van-tabbar-item>
        <van-tabbar-item icon="friends-o">标签</van-tabbar-item>
        <van-tabbar-item icon="setting-o">标签</van-tabbar-item>
    </van-tabbar>
    <!--挂载子路由-->
    <router-view></router-view>
</div>
</template>

<script>
export default {
    name: '',
    props: {},
    data() {
        return {
            active: ''
        }
    },
    components: {},
    methods: {},
    mounted() {},
    computed: {},
    watch: {}
}
</script>

<style lang="scss" scoped>

</style>
