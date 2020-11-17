<template>
<div>
    <!--使用NavBar 导航栏-->
    <van-nav-bar title="我的收藏" left-text="返回" left-arrow @click-left="onClickLeft" />
    <div class="bbs">
        <div v-for="(item,index) in list" :key="index" class="item">
            <div>
            <img :src="this.list.image_path" alt="">
            </div>
        </div>
    </div>
</div>
</template>

<script>
export default {
    name: '',
    props: {},
    data() {
        return {
            list:''
        }
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
                // console.log(res.data.list);
                this.list=res.data.list
                console.log(this.list);
            }).catch(err=>{
                console.log(err);
            })
        }
    },
    mounted() {
        this.queryCollect()
    },
    computed: {},
    watch: {}
}
</script>

<style lang='scss' scoped>

</style>
