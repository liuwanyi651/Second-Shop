<template>
<div>
    <!--使用NavBar 导航栏-->
    <van-nav-bar title="我的收藏" left-text="返回" left-arrow @click-left="onClickLeft" />
    <div >
        <div v-for="(item,index) in list" :key="index" class="item flex bbs">
            <div class="bbs box">
            <img :src="item.image_path" alt="">
            </div>
            <div>
            HAHAHHAHH
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

<style lang="scss" scoped>
.item{
    height: 120px;
    align-items: center;
    padding-left: 20px;
}
.box{
    width: 100px;
    height: 100px;
    border: 1px solid #EEE;
    img{
        width: 100%;
    }
}
</style>
