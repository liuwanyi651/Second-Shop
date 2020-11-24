<template>
  <div>
     <!--导航返回部分 使用NavBar导航栏组件 left-arrow 是否显示左侧箭头-->
    <div >
        <van-nav-bar left-text="返回"  title="评价详情" left-arrow @click-left="onClickLeft" fixed />
    </div>
    <div class="flex h50">
        <div class="w-20">
            <div class="pic">
                <img src="../../../../../assets/head.jpg" alt="">
            </div>
        </div>
        <div class="w-40"></div>
        <div class="w-40"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: '',
  props:{},
  data () {
    return {
    }
  },
  components: {},
  methods: {
      //返回至 我的-评价
        onClickLeft() {
            this.$router.push("/assessment")
        },
  },
  mounted() {},
  computed: {},
  watch: {}
}
</script>

<style lang="scss" scoped>
.pic{
    width: 80px;
    height: 80px;
    overflow: hidden;
    img{
        width: 100%;
        border-radius:50%;
    }
}
</style>