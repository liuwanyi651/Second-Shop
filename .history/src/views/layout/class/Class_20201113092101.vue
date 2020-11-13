<template>
<div class="all">分类
    <van-sidebar v-model="activeKey">
        <van-sidebar-item title="标签名称" />
        <van-sidebar-item title="标签名称" />
        <van-sidebar-item title="标签名称" />
    </van-sidebar>
</div>
</template>

<script>
export default {
    name: '',
    props: {},
    data() {
        return {
            activeKey: 0,
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
.all {
    width: 100%;
    height: 100%;
    background: white;
}
</style>
