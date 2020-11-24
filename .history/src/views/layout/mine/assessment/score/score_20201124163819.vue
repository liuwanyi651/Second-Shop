<template>
  <div>
    <!--导航返回部分 使用NavBar导航栏组件 left-arrow 是否显示左侧箭头-->
    <div >
        <van-nav-bar left-text="返回"  title="评价中心" left-arrow @click-left="onClickLeft" fixed />
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
      // 返回至 我的-评价
        onClickLeft() {
            this.$router.push("/assessment")
        },
  },
  mounted() {
      let info = this.$store.state.goods
  },
  computed: {},
  watch: {}
}
</script>

<style lang='scss' scoped>

</style>