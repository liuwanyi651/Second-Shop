<template>
<div>
    <!--使用NavBar 导航栏-->
    <van-nav-bar title="地址列表" left-text="返回" left-arrow @click-left="onClickLeft" />
    <!--使用AddressList 地址列表-->
    <van-address-list v-model="chosenAddressId" :list="list" default-tag-text="默认" @add="onAdd" @edit="onEdit" @select="select"/>
</div>
</template>

<script>
export default {
    name: '',
    props: {},
    data() {
        return {
            chosenAddressId:-1,
            list: [],
        };
    },
    components: {},
    methods: {
        // 返回至 我的
        onClickLeft() {
            this.$router.push("/orderMoney")
            //  window.history.go(-1)
        },
        //新增地址
        onAdd() {
            this.$router.push("/editsite")
        },
        // 编辑地址
        onEdit(item, index) {
            // console.log(item);
            this.$router.push({
                name:'editsite',
                query:{
                    data:JSON.stringify(item)
                }
            });
            
        },
        //查询用户收货地址(get)
        getUserAddress(){
            this.$api.getAddress().then(res=>{
                console.log(res);
                res.address.map((item,index) =>{
                this.$set(item,'id',index+1)
                })
                // this.list = res.address
                if(res.address.length===1){
                    console.log(res.address[0]._id);
                    this.$api.setShoptAddress(res.address[0]._id).then(res=>{
                        console.log(this.list);
                    })
                     this.list = res.address
                }else{
                    this.list = res.address
                }
            })
        },
        //点击地址通过路由传参传递地址信息  
        select(item,index){
            console.log(item);
            this.$router.push({
                name:'orderMoney',
                query:{
                    location:JSON.stringify(item)
                }
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
