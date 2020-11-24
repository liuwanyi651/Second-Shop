<template>
  <div>
    <!--导航返回部分 使用NavBar导航栏组件 left-arrow 是否显示左侧箭头-->
    <div >
        <van-nav-bar left-text="返回"  title="评价中心" left-arrow @click-left="onClickLeft" fixed />
    </div>
    <div class="mt30"></div>
    <div class="flex h50 w-50">
        <div class="pic">
        hahha
            <img :src="info.image_path" alt="">
        </div>
        <div>{{info.count}}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: '',
  props:{},
  data () {
    return {
        info:''
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
</style>