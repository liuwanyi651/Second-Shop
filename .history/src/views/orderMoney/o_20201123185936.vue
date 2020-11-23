<template>
  <div>
      <div v-for="(item,index) in list" :key="index">
         <div style=" display: flex; ">
         <div>
           <img :src="item.image_path"  style="width: 80px;  height: 80px;   border: 1px solid rgb(201, 196, 196);">
         </div>
          <div style="width: 10px;"></div>
        <div>
          <div style="margin-top: 10px;  height: 30px; color: red;overflow: hidden;text-overflow:ellipsis;white-space: nowrap;">{{item.name}}</div>
          <div style=" display: flex;  justify-content: space-between;  width: 230px;">
           <div style="color: red;">￥{{item.present_price}}</div>
           <div>x{{item.count}}</div>
          </div>
        </div>
         </div>
           <van-divider />
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
  methods: {},
  mounted() {},
  computed: {},
  watch: {}
}
</script>

<style lang='scss' scoped>

</style>