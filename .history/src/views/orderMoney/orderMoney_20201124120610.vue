<template>
  <div>
  <!--详情页导航返回部分 使用NavBar导航栏组件 left-arrow 是否显示左侧箭头-->
    <div>
        <van-nav-bar left-text="返回" title="订单结算" left-arrow @click-left="onClickLeft" fixed />
    </div>
    <div class="h30"></div>
    <!--上面地址状态--->
    <div class="mt30"></div>
   <div>
   <div v-if="address===null" @click="add" class="flex j-center a-center">
      <div class="h30">暂无收货地址</div>
   </div>
    <div v-else class="flex" @click="onEdit">
        <div class="w-15 fs24 t-center" ><van-icon name="location-o" /></div>
        <div class="w-75">
          <div class="flex fs16 j-betw">
              <div>收货人: {{address.name}}</div>
              <div>联系人：{{address.tel}}</div>
          </div>
          <div class="fs14 ">收货地址:{{address.address}}</div>
        </div>
        <div class="w-10 lih40"><van-icon name="arrow" /></div>
    </div>
   </div>
    <div style="height: 1px;"><img src="../../assets/caitiao.jpg" alt="" class="w-max"></div>
    <!--购物车的商品循环出来-->
    <div v-for="(item,index) in list" :key="index" class="mt10">
        <div class="bbs flex">
            <div class="pic">
                <img :src="item.image_path" alt="">
            </div>
            <div class="cr fs14 lih30 ml20 " style="width:175px">
                <div class="mt20">
                {{item.name}}
                </div>
                <div class="mt10 fw-b">
                ￥{{item.present_price}}
                </div>     
            </div>  
            <div class=" mt50 fs14 ml10">
                x{{item.count}}
            </div>   
        </div>
    </div>
    <div>
        <van-tabbar >
            <van-tabbar-item></van-tabbar-item>
            <van-tabbar-item></van-tabbar-item>
            <van-tabbar-item >
              <span class="fs14 cr">合计:￥{{this.total}}</span>
            </van-tabbar-item>
            <van-tabbar-item >
              <van-button type="danger" >提交订单</van-button>
            </van-tabbar-item>
        </van-tabbar>
    </div>
    </div>
</template>

<script>
export default {
  name: '',
  props:{},
  data () {
    return {   
      list:'',
      total:'',
      address:''
    }
  },
  components: {},
  methods: {
       //顶部导航返回 点击返回到上一页
        onClickLeft() {
            // window.history.go(-1)
            this.$router.push("/")
        },
         onEdit(){
      this.$router.push("/addsite")
      },
      //查询默认地址
      getShopAddress(){
        if(this.$route.query.location !== undefined){
            // 如果存在就会有 传递过来的地址信息
            this.address = JSON.parse(this.$route.query.location)
            console.log(this.address);
          }else{  
             this.$api.getShopAddress().then(res=>{
          // console.log(res); //拿到 defaultAdd 默认地址
            this.address = res.defaultAdd
        })
          }
      },
      //没有地址的情况下 点击 去添加
      add(){
        this.$router.push('/addsite')
      }
  },
  mounted() {                  
          this.total = JSON.parse(localStorage.getItem("price"))
          this.list = JSON.parse(localStorage.getItem("goods"))          
          this.getShopAddress()
  },
  computed: {
     
  },
  watch: {}
}
</script>

<style lang="scss" scoped>
.pic{
    width: 100px;
    height: 100px;
    border: 1px solid #EEE;
    img{
        width: 100%;
    }
}

</style>