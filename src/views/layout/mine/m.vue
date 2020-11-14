
<template>
  <div>
    <van-nav-bar title="会员中心" />
    <!--已登录状态-->
    <div class="back-color" v-if="flag">
      <div><img src="../../image/denglu.jpg" /></div>
      <div>欢迎您：{{ list.nickname }}</div>
      <div @click="out">退出登录</div>
      <van-icon name="setting" />
    </div>
    <!--未登录状态-->
    <div class="back-color" v-else>
      <div><img src="../../image/denglu.jpg" /></div>
      <div @click="go">登录/注册</div>
      <van-icon name="setting" />
    </div>
    <van-grid :column-num="5">
      <van-grid-item icon="pending-payment" text="待付款" />
      <van-grid-item icon="send-gift-o" text="待发货" />
      <van-grid-item icon="logistics" text="待收货" />
      <van-grid-item icon="records" text="评价" />
      <van-grid-item icon="points" text="已完成" />
    <van-grid>
    <van-cell title="全部订单" icon="orders-o" is-link to="/order" />
    <van-cell title="收藏商品" icon="points" is-link to="/collection" />
    <van-cell title="地址管理" icon="gold-coin-o" is-link to="/address" />
    <van-cell title="最近浏览" icon="browsing-history-o" is-link to="/browse" />
  </div>
</template>

<script>
export default {
  name: "",
  props: {},
  data() {
    return {
      flag: true,
      list: "",
      Dialog: ""
    };
  },
  components: {},
  methods: {
    getData() {
      this.$api
        .quer()
        .then(res => {
          this.list = res.userInfo;
        })
        .catch(err => {
          console.log(err);
        });
    },
    out() {
      this.$dialog
        .confirm({
          message: "确定退出登录吗？"
        })
        .then(() => {
          this.$api
            .goout()
            .then(res => {
              if (res.code === 0) {
                this.flag = false;
                localStorage.clear();
              }
            })
            .catch(err => {
              console.log(err);
            });
        });
    },
    go() {
      this.$router.push({
        path: "/login"
      });
    }
  },
  mounted() {
    this.getData();
    this.flag = localStorage.getItem("user") ? true : false;
  },
  computed: {},
  watch: {}
};
</script>

<style lang="scss" scoped>
.back-color {
  height: 240px;
  background-color: rgb(255, 78, 107);
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  div img {
    width: 70px;
    height: 70px;
    border-radius: 50%;
  }
  .van-icon {
    position: absolute;
    top: 60px;
    right: 10px;
    z-index: 1;
    color: white;
  }
}
</style>