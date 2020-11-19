<template>
<div>
    <van-nav-bar title="购物车" left-text="返回" left-arrow @click-left="onClickLeft" />
    <!--未登录-->
    <div v-if="user === null">
        <van-empty description="您还未登录">
        <van-button round type="danger" @click="sign">
        登录
      <an-button>
     <an-empty>
    </div>
     <!--已登录有数据-->
    <div v-else>
    <div v-if="list.length>0">
    <!--结算-->
     <div  style=" display: flex; justify-content: space-between;">
     <div  style=" display: flex; "> 
     <div style=" width: 40px;  height: 80px;  display: flex;  justify-content: center; ">
           <van-checkbox v-model="checked" shape="square"  checked-color="rgb(190, 135, 33)"><an-checkbox>
        </div>
        <div style=" height: 80px;  display: flex;  justify-content: center;  line-height: 80px;">全选</div>
        </div>
        <div>
        <div>合计:</div>
        <div>请确认订单</div>
        <div style=" display: flex;">
        <div style=" width: 70px;">
            <van-button type="primary">删除<an-button>
        </div>
        <div style=" width: 70px;">
              <van-button type="warning">结算<an-button>
        </div>
        </div>
        </div>
     </div>
     <!--数据显示-->
       <van-divider />
        <div v-for="(item,index) in list" :key="index">
        <div style=" display: flex; ">
        <div style=" width: 40px;  height: 80px;  display: flex;  justify-content: center;">
           <van-checkbox v-model="checked" shape="square"  checked-color="rgb(190, 135, 33)"><an-checkbox>
        </div>
          <div><img :src="item.image_path" style="width: 80px;  height: 80px;   border: 1px solid rgb(201, 196, 196);"></div>
          <div style="width: 10px;"></div>
          <div>
             <div style="color: black;  height: 50px;  margin-top: 10px;">{{item.name}}</div>
             <div style="color:red;">￥{{item.present_price}}</div>
          </div>
        </div>
          <van-divider />
       </div>
    </div>
    <!--已登录但没有数据-->
    <div v-else>
    <van-empty description="还没有记录哟">
     <van-button round type="danger" @click="shopping" >
      去购物
    <an-button>
    <an-empty>
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
           user: "",
           list:[],
           checked: false,
        }
    },
    components: {},
    methods: {
        onClickLeft() {
            this.$router.push("/")
        },
        shopping() {
             this.$router.push("/")
        },
        sign() {
            //判断是否登录，没有登录就提示是否需要登录
          this.$dialog.confirm({
          title: '您当前没有登录',
           message: '是否跳转到登录页面',
           })
           .then(() => {
            // on confirm
            //当点击确定后跳转到登录注册界面
            this.$router.push("/login")
            })
             .catch(() => {
              // on cancel
              //点击取消后就提示没有登录
              this.$toast({
                        message: '您未登录',
                        position: 'top',
                    });
            })
        },
        //查询购物车数据请求
        obtain() {
            this.$api.getcard().then(res => {
               console.log(res.shopList)
              this.list = res.shopList
            }).catch(err => {
               console.log(err)    
            })
        }
    },
    mounted() {
       this.user = localStorage.getItem("user")
       this.obtain()
    },
    computed: {},
    watch: {}
}
</script>

<style lang="scss" scoped>

</style>