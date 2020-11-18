<template>
  <div>
  <!--详情页导航返回部分 使用NavBar导航栏组件 left-arrow 是否显示左侧箭头-->
    <div>
        <van-nav-bar left-text="返回" title="订单结算" left-arrow @click-left="onClickLeft" fixed />
    </div>
    <div class="mt40">
    <van-contact-card type="edit" :name="currentContact.name" :tel="currentContact.tel" @click="onEdit"/>
    </div>
  </div>
</template>

<script>
export default {
  name: '',
  props:{},
  data () {
    return {
         currentContact: {
            name: '张三',
            tel: '13000000000',
      },
    }
  },
  components: {},
  methods: {
       //顶部导航返回 点击返回到上一页
        onClickLeft() {
            window.history.go(-1)
        },
         onEdit() {
      Toast('编辑');
    },
  },
  mounted() {},
  computed: {},
  watch: {}
}
</script>

<style lang='scss' scoped>

</style>