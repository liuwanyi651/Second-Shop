<template>
  <div>
    <van-nav-bar title="" left-text="返回" left-arrow   @click-left="onClickLeft"/>
    <van-tabs v-model="active">
      <van-tab title="订单结算">
        <div class="box1">
          <div class="box2"><img :src="list.img" /></div>
          <div>{{ list.name }}</div>
          <div style="color: red">{{ list.price }}</div>
        </div>
        <div>购买数量：{{ list.value }}</div>
      <an-tab>
      <van-tab title="待支付"><an-tab>
      <van-tab title="待收货"><an-tab>
      <van-tab title="待发货"><an-tab>
      <van-tab title="已完成"><an-tab>
    <an-tabs>
    <van-tabbar>
      <van-tabbar-item
        ><span>合计：{{ list.price * list.value }}￥</span><an-tabbar-item
      >
      <van-tabbar-item
        ><van-button type="warning" @click="go"
          >提交订单<an-button
        ><van-tabbar-item
      >
    <van-tabbar>
  </div>
</template>

<script>
export default {
  name: "",
  //接收父组件传递过来的参数
  props: {},
  components: {},
  // 定义变量
  data() {
    return {
      active: 0,
      info: {},
      list: [],
    };
  },
  //监听方法  click事件等
  methods: {
    //返回上一页
    onClickLeft() {
      this.$router.push("/mine");
    },
    //提交订单
    go() {
      let order = {
        address: "四川",
        tel: "13893571537",
        orderId: [this.list.id],
        totalPrice: this.list.price * this.list.value,
        idDirect: true,
        count: this.list.value,
        img:this.list.img,
      };

      this.$api.order(order).then((res) => {
        this.$toast.success(res.msg);
        this.$router.push("/order");
      });
    },
  },
  //调用1
  mounted() {
    let info = this.$route.query.data || this.$route.params.data;
    this.list = JSON.parse(info);

    console.log(this.list);
  },
  watch: {},
  //计算
  computed: {},
};
</script>

<style scoped lang="scss">
.box1 {
  display: flex;
  justify-content: space-around;
}
.box2 img {
  width: 50px;
  height: 80px;
}
span {
  color: red;
  font-size: 18px;
}
</style>