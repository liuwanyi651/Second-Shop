<template>
  <div>
    <!--导航返回部分 使用NavBar导航栏组件 left-arrow 是否显示左侧箭头-->
    <div >
        <van-nav-bar left-text="返回"  title="评价中心" left-arrow @click-left="onClickLeft" fixed />
    </div>
    <div class="mt50"></div>
    <div class="flex">
        <div class="pic bs mlr20">
            <img :src="this.info.image_path" alt="">
        </div>
        <div>
            <div class="pdlr20">商品评分</div>
            <div class="pdlr20 mt20"><van-rate v-model="value" /></div>
        </div>
    </div>
    <div class="flex j-arou">
        <div class="box">
        <!--使用Field 输入框--->
        <van-field
        v-model="message"
        rows="2"
        autosize
        type="textarea"
        placeholder="说说你的购买感受吧~"
        show-word-limit/>
        </div>
    </div>
    <div class="flex j-arou m20" ><van-button type="primary" class="w-90 h50">提交</van-button></div>
  </div>
</template>

<script>
export default {
  name: '',
  props:{},
  data () {
    return {
        info:'',
         value: 0, //评价
         message:''
    }
  },
  components: {},
  methods: {
      // 返回至 我的-评价
        onClickLeft() {
            this.$router.push("/assessment")
        },
  },
  mounted() {
    // 从 store-index 拿过来接收 在assessment 存的东西
    // let info = this.$store.state.goods //这时候拿到的是字符串形式
    this.info = JSON.parse(this.$store.state.goods) //转为对象
    console.log(this.info);
  },
  computed: {},
  watch: {}
}
</script>

<style lang="scss" scoped>
.pic{
    width: 100px;
    height: 100px;
    img{
        width: 100%;
    }
}
.box{
    margin-top: 20px;
    width: 90%;
}
.van-cell{
    background: rgb(247,247,247);
    height: 150px;
}
</style>