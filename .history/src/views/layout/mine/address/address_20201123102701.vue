<template>
<div>
    <!--使用NavBar 导航栏-->
    <van-nav-bar title="地址列表" left-text="返回" left-arrow @click-left="onClickLeft" />
    <!--使用AddressList 地址列表-->
    <van-address-list v-model="chosenAddressId" :list="list" default-tag-text="默认" @add="onAdd" @edit="onEdit" />
</div>
</template>

<script>
export default {
    name: '',
    props: {},
    data() {
        return {
            chosenAddressId: '1',
            list: [{
                    id: '1',
                    name: '张三',
                    tel: '13000000000',
                    address: '浙江省杭州市西湖区文三路 138 号东方通信大厦 7 楼 501 室',
                    isDefault: true,
                },
                {
                    id: '2',
                    name: '李四',
                    tel: '1310000000',
                    address: '浙江省杭州市拱墅区莫干山路 50 号',
                },
            ]

        };
    },
    components: {},
    methods: {
        // 返回至 我的
        onClickLeft() {
            this.$router.push("/Mine")
        },
        onAdd() {
            this.$router.push("/editaddress")
        },
        onEdit(item, index) {
            this.$router.push("/editaddress")
            Toast('编辑地址:' + index);
        }
    },
    mounted() {},
    computed: {},
    watch: {}
}
</script>

<style lang="scss" scoped>

</style>
