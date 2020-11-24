<template>
  <div>
    <!--导航返回部分 使用NavBar导航栏组件 left-arrow 是否显示左侧箭头-->
    <div>
        <van-nav-bar left-text="返回"  title="评价中心" left-arrow @click-left="onClickLeft" fixed />
    </div>
    <div>
      <div class="pic">
        <img src="../../../../assets/evaluate.jpg" alt="">
      </div>
      <div class="flex j-arou">
        <div class="pj">
            <van-tabs v-model="active">
            <van-tab title="标签 1">内容 1</van-tab>
            <van-tab title="标签 2">内容 2</van-tab>
            </van-tabs>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: '',
  props:{},
  data () {
    return {
      active: 1,
    }
  },
  components: {},
  methods: {
       // 返回至 我的
        onClickLeft() {
            this.$router.push("/Mine")
        },
  },
  mounted() {},
  computed: {},
  watch: {}
}
</script>

<style lang="scss" scoped>
.pic{
  width: 100%;
  height: 200px;
  img{
    width: 100%;
  }
}
.pj{
  width: 90%;
  height: 50px;
  background: white;
  border-radius:5px 5px 5px 5px;
  box-shadow: 1px 1px 2px gray ;
}
</style>