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
            list: [
            ]

        };
    },
    components: {},
    methods: {
        // 返回至 我的
        onClickLeft() {
            this.$router.push("/Mine")
        },
        //新增地址
        onAdd() {
            this.$router.push("/editaddress")
        },
        // 编辑地址
        onEdit(item, index) {
            console.log(item);
            this.$router.push("/editaddress")
            Toast('编辑地址:' + index);
        },
        //查询用户收货地址(get)
        getUserAddress(){
            this.$api.getAddress().then(res=>{
                if(res.code===200){
                    // console.log(res);
                    this.$toast.success(res.msg)
                    this.list = res.address
                    console.log(this.list);
                }
            }).catch(err =>{
                console.log(err);
            })
        }
    },
    mounted() {
        this.getUserAddress()
    },
    computed: {},
    watch: {}
}
</script>

<style lang="scss" scoped>

</style>
