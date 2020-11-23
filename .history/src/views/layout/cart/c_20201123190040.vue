<template>
<div>
    <van-nav-bar title="购物车" left-text="返回" left-arrow @click-left="onClickLeft" />
    <!--未登录-->
    <div v-if="user === null">
        <van-empty description="您还未登录">
        <van-button round type="danger" @click="sign">
        登录
      </van-button>
     </van-empty>
    </div>
     <!--已登录有数据-->
    <div v-else>
    <div v-if="list.length>0">
    <!--结算-->
     <div  style=" display: flex; justify-content: space-between;">
     <div  style=" display: flex; "> 
     <div style=" width: 40px;  height: 80px;  display: flex;  justify-content: center; ">
           <van-checkbox v-model="checked" shape="square"  @click="select"  checked-color="rgb(190, 135, 33)"></van-checkbox>
        </div>
        <div style=" height: 80px;  display: flex;  justify-content: center;  line-height: 80px;">全选</div>
        </div>
        <div>
        <div @click="mallPrice(item)">合计:{{mallPrice.toFixed(2)}}</div>
        <div>请确认订单</div>
        <div style=" display: flex;">
        <div style=" width: 70px;">
            <van-button type="primary" @click="del">删除</van-button>
        </div>
        <div style=" width: 70px;">
              <van-button type="warning" @click="consumption">结算</van-button>
        </div>
        </div>
        </div>
     </div>
     <!--数据显示-->
       <van-divider />
        <div v-for="(item,index) in list" :key="index">
        <div style=" display: flex; ">
        <div style=" width: 40px;  height: 80px;  display: flex;  justify-content: center;">
           <van-checkbox v-model="item.check" @change="all(item)" shape="square"  checked-color="rgb(190, 135, 33)"></van-checkbox>
        </div>
          <div><img :src="item.image_path" style="width: 80px;  height: 80px;   border: 1px solid rgb(201, 196, 196);"></div>
          <div style="width: 10px;"></div>
          <div>
             <div style="color: black;  height: 50px;  margin-top: 10px;">{{item.name}}</div>
             <div style=" display: flex;  justify-content: space-between; width: 180px;">
               <div style="color:red;">￥{{item.present_price}}</div>
               <div><van-stepper v-model="item.count" min="0" @change="increase(item)"  max="10000" theme="round"  button-size="22" /></div>
             </div>
          </div>
        </div>
          <van-divider />
       </div>
       <div style="width:373px;height:45px"></div>
    </div>
    <!--已登录但没有数据-->
    <div v-else>
    <van-empty description="还没有记录哟">
     <van-button round type="danger" @click="shopping" >
      去购物
    </van-button>
    </van-empty>
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
           arr:[]
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
            //    console.log(res.shopList)
              this.list = res.shopList
            }).catch(err => {
               console.log(err)    
            })
        },
        //全选
        select() {
            this.list.map((item) =>{
                item.check = this. checked
            })
        },
        all(item) {
            this.checked = this.list.every((item) => {
                return item.check === true
            })
        },
        // 购物车加减商品
        increase(item){
            // console.log(item)
             let info = {
                  count:item.count,
                   id:item.cid,
                   mallPrice:item.mallPrice
             }
             this.$api.editcart(info).then(res => {
                //  console.log(res)
                // this.$toast.success('修改成功');
             }).catch(err => {
                 console.log(err)
             })
        },
        //购物车删除
        del() {
            //写一个空数组来接收删除
            let arr = []
          this.list.map(item => {
             if(item.check) {
                //传cid到空数组中
                 arr.push(item.cid)
             }
          })
          //发删除请求
          this.$api.deleteshop(arr).then((res)=>{
            //   console.log(res)
          })
            this.obtain()
        },
        //存值到订单结算
        consumption() {
          this.list.map((item) => {
              if(item.check === true){
                  this.arr.push(item)
              }
              let goods = this.arr
              let price = this.mallPrice.toFixed(2)
              localStorage.setItem("goods",JSON.stringify(goods))
              localStorage.setItem("price",JSON.stringify(price))
          })
            this.$router.push('/order')
        }
    },
    mounted() {
       this.user = localStorage.getItem("user")
       this.obtain()
    },
    computed: {
        //计算总价
        mallPrice() {
            let  name = 0
            this.list.map(item => {
                if(item.check === true) {
                    name += item.mallPrice*item.count
                }
            })
            return name
        }
    },
    watch: {}
}
</script>

<style lang="scss" scoped>

</style>
