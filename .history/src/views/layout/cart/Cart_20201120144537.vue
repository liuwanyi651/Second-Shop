<template>
  <div>
    <!--使用NavBar 导航栏-->
    <van-nav-bar title="购物车" left-text="返回" left-arrow @click-left="onClickLeft" />
    <!--第一种未登录的状态-->
    <div class="car" v-if="user === null">
      <div class="bgc-w" style="height: 40px"></div>
      <div class="car_yuan m bor-r">
        <img src="../../../assets/shop.png" alt="" />
      </div>
      <div class="fs20 t-center m30 c5">您的购物车还是空的</div>
      <div class="flex j-center">
        <!--去购物按钮-->
        <van-button plain type="info" round color="rgb(36, 35, 35)" @click="checkShopping">赶去购物</van-button>
      </div>
    </div>
    <!--第二种登录后的状态-->
    <div v-else>
      <!--登录后的已经购物的状态--->
      <div v-if="list.length > 0" class="all">
        <div class="flex j-betw">
          <div class="flex">
            <div style="width: 40px; height: 80px" class="flex j-center">
              <van-checkbox v-model="checked" shape="round" @click="allcheck" checked-color="red"></van-checkbox>
            </div>
            <div style="height: 80px; line-height: 80px" class="flex j-center">全选</div>
          </div>
          <div>
            <div class="cg fs14">合计:</div>
            <div class="cg fs14">请确认订单</div>
            <div class="flex">
              <div style="width: 48px">
                <van-button type="danger" size="small">删除</van-button>
              </div>
              <div style="width: 55px">
                <van-button type="danger" size="small">去结算</van-button>
              </div>
            </div>
          </div>
        </div>
        <!--分割线--->
        <div class="bbs"></div>
        <!--循环点击购买的商品--->
        <div v-for="(item, index) in list" :key="index">
          <div class="flex">
            <div style="width: 40px" class="flex j-center">
              <van-checkbox v-model="item.check" @click="checkbox" shape="round" checked-color="red"></van-checkbox>
            </div>
            <div class="pic bs mtb10">
              <img :src="item.image_path" />
            </div>
            <div>
              <div class="cr fs14 mt10 h50 pdl10">{{ item.name }}</div>
              <div class="flex j-betw w190">
                <div class="cr pdl10">￥{{ item.present_price }}</div>
                <!--步进器-->
                <div><van-stepper v-model="item.count" min="0" max="50" @change="editCart(item)"/></div>
              </div>
            </div>
          </div>
          <div class="bbs"></div>
        </div>
        <div class="h50"></div>
      </div>
      <!--第三种登录没购物的状态-->
      <div class="car" v-else>
        <div class="bgc-w" style="height: 40px"></div>
        <div class="car_yuan m bor-r">
          <img src="../../../assets/shop.png" alt="" />
        </div>
        <div class="fs20 t-center m30 c5">您的购物车还是空的</div>
        <div class="flex j-center">
          <van-button plain type="info" round color="rgb(36, 35, 35)" @click="goShopping">赶去购物</van-button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "",
  props: {},
  data() {
    return {
      user: "",
      list: [],
      //是否全选
      checked: false,
      value: "",
    };
  },
  components: {},
  methods: {
    // 返回至 首页
    onClickLeft() {
      this.$router.push("/");
    },
    checkShopping() {
      // 判断 用户没登录的状态 点击收藏会提示
      if (this.user === null) {
        this.$dialog
          .confirm({
            title: "您当前没有登录",
            message: "是否跳转到登录页面",
          })
          .then(() => {
            this.$router.push("/register");
          })
          .catch(() => {
            this.$toast("您取消了操作");
          });
      }
    },
    // 登录后未购买的购物空状态 点击去购物
    goShopping() {
      this.$router.push("/");
    },
    //拿到查询获取购物车数据(post) /getCard
    getCar() {
      // console.log(111);
      this.$api
        .getShopCard()
        .then((res) => {
          // console.log(res);
          this.list = res.shopList;
          console.log(this.list);
        })
        .catch((err) => {
          console.log(err);
        });
    },
    //提交订单
    onSubmit() {},
    //全选
    allcheck() {
    this.list.map((item) =>{
        item.check = this.checked
    })     

    // 反选    
    //   let i = false;
    //   this.list.map((item) => {
    //     if (item.check) {
    //       i = true;
    //     }
    //   });
    //   if (i) {
    //     this.list.map((item) => {
    //       item.check = !item.check;
    //     });
    //   } else {
    //      this.list.map((item) => {
    //     item.check = this.checked;
    //   });
    //   }
      
    },
    checkbox() {
      this.checked = this.list.every((item) => {
                return item.check === true
            })
    },
    //购物车加减商品(post) /editCart 
    editCart(item){
        console.log(item);
        let edit = {
            count:item.count,
            id: item.id,
            mallPrice:item.mallPrice
        }
        this.$api.editShopCart(edit).then(res =>{
            if(res.code === 200){
                this.$toast.success(res.msg)
            }
        }).catch(err =>{
            console.log(err);
        })
    }
  },
  mounted() {
    this.getCar();
    this.user = localStorage.getItem("user");
    this.editCart()
  },
  computed: {},
  watch: {},
};
</script>

<style lang="scss" scoped>
//未登录的状态和已经登录没有购物的状态
.car {
  width: 100%;
  height: 200px;
  background-color: white;
}

.car_yuan {
  width: 180px;
  height: 180px;
  background: rgb(238, 238, 238);
  overflow: hidden;
  img {
    width: 70%;
    margin-top: 30px;
    margin-left: 25px;
  }
}
//已登录有购物的状态
.all {
  width: 100%;
  background: white;
}
.pic {
  width: 80px;
  height: 80px;
  img {
    width: 100%;
  }
}
</style>
