<template>
  <div>
     <!--使用NavBar 导航栏-->
    <van-nav-bar title="编辑地址" left-text="返回" left-arrow @click-left="onClickLeft" />
    <!--AddressEdit 地址编辑-->
    <van-address-edit
  :area-list="areaList"
  show-postal
  show-delete
  show-set-default
  show-search-result
  :search-result="searchResult"
  :area-columns-placeholder="['请选择', '请选择', '请选择']"
  @save="onSave"
  @delete="onDelete"
  @change-detail="onChangeDetail"
/>
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
     // 返回至 我的
        onClickLeft() {
            this.$router.push("/address")
        },
  },
  mounted() {},
  computed: {},
  watch: {}
}
</script>

<style lang='scss' scoped>

</style>