<template>
<div>
    <!--使用NavBar 导航栏组件-->
    <van-nav-bar title="我的订单" left-text="返回" left-arrow @click-left="onClickLeft" />
    <!--使用Tab 标签页组件-->
    <van-tabs v-model="activeName">
        <van-tab title="全部" class="t-center mt30" name='a'>开发中，敬请期待</van-tab>
        <van-tab title="待支付" class="t-center mt30" name='b'>开发中，敬请期待</van-tab>
        <van-tab title="待发货" class="t-center mt30" name='c'>开发中，敬请期待</van-tab>
        <van-tab title="待收货" class="t-center mt30" name='d'>开发中，敬请期待</van-tab>
        <van-tab title="已完成" class="t-center mt10" name='e'>
        <!--第一层循环 拿到不同的商品--->
            <div v-for="(item,index) in list" :key='index'>
             <!--第二层循环 拿到不同的商品 对应的价格 时间 数量等--->
                <div v-for="(item1,index) in item.order_list" :key='index' class="bbs">
                    <div>
                        {{item1.name}}
                    </div>
                </div>
                    
            </div>
        </van-tab>
    </van-tabs>
</div>
</template>

<script>
export default {
    name: '',
    props: {},
    data() {
        return {
            activeName: "e" ,//默认是第一个
            list:[],
            
        }
    },
    components: {},
    methods: {
        // 返回至 我的
        onClickLeft() {
            this.$router.push("/Mine")
        },
        getFinish(){
            //订单查询(get)
            this.$api.getShopMyOrder().then(res =>{
                if(res.code===200){
                    console.log(res);
                    this.list = res.list
                    console.log(this.list);
                }
            }).catch(err =>{
                console.log(err);
            })
        }
    },
    mounted() {
        this.getFinish()
    },
    computed: {},
    watch: {}
}
</script>

<style lang='scss' scoped>

</style>
