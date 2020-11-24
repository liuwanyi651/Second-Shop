<template>
  <div>
    <van-sticky>
      <van-nav-bar title="评价详情" left-arrow @click-left="onclickLeft" />
    </van-sticky>
    <div style="display: flex">
      <div class="image">
        <img src="../../../../../assets/head.jpg" />
      </div>
      <div>
        <div style="margin: 20px 10px"></div>
        <van-rate v-model="list.rate" />
      </div>
      <div
        style="display: flex; flex-direction: column; justify-content: center"
      >
        {{ list.comment_time }}
      </div>
    </div>
    <div style="margin: 10px">评价内容：{{ list.content }}</div>
    <div class="alt">
      <img :src="data.image_path" alt="" />
      <div style="width:220px;margin-top:20px;">{{data.name}}</div>
    </div>
    <div class="button">
        <van-button type="primary" size="large" @click="back">返回</van-button>
    </div>
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
      list: "",
      name: "",
      data: [],
    };
  },
  //监听方法  click事件等
  methods: {
    onclickLeft() {
      this.$router.push("/assessment");
    },
    getData() {
      this.$api.getAlEvaluated().then((res) => {
        this.name = res.userInfo;
      });
    },
    back(){
        this.$router.push("/assessment")
    },
   
  },
  //调用
  mounted() {
    this.list = JSON.parse(this.$route.query.data);
    this.data = this.list.goods[0];
    // console.log(this.list);
    // console.log(this.data);
    this.getData();
  },
  watch: {},
  //计算
  computed: {},
};
</script>

<style scoped lang="scss">
.image {
  img {
    width: 70px;
    height: 70px;
    border-radius: 50%;
    margin: 10px;
  }
}
.alt{
    display: flex;
    img{
        width: 100px;
        height: 100px;
        margin: 10px;
    }
}
.button{
    padding: 0 20px;
    margin-top: 160px;
}
.icon{
    background: rgba(255,0,0,0.2);
    width: 40px;
    height: 40px;
    text-align: center;
    border-radius: 50%;
    margin:20px 10px 0 0;
}
.van-icon{
    font-size: 30px;
    color: rgba(255,0,0,0.5);
}
</style>