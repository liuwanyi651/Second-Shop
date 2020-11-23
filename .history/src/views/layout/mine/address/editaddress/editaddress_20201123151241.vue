<template>
  <div>
     <!--使用NavBar 导航栏-->
    <van-nav-bar title="编辑地址" left-text="返回" left-arrow @click-left="onClickLeft" />
    <!--AddressEdit 地址编辑 show-postal是否显示邮政编码 show-delete是否显示删除按钮  
    show-set-default是否显示默认地址栏 show-search-result是否显示搜索结果-->
    <van-address-edit
    :area-list="areaList"
    v-model="chosenAddressId"
    show-postal 
    show-delete
    show-set-default
    show-search-result
    :search-result="searchResult"
    :area-columns-placeholder="['请选择', '请选择', '请选择']"
    :address-info="list" 
    @save="onSave"
    @delete="onDelete"
    @change-detail="onChangeDetail"
    />
  </div>
</template>

<script>
import  areaList from "../../../../../area.js/area"
export default {
  name: '',
  props:{},
  data () {
    return {
      areaList:areaList, //地区列表
      searchResult: [], //详细地址搜索结果
      list:{},
      chosenAddressId:-1,
    }
  },
  components: {},
  methods: {
     // 返回至我的
        onClickLeft() {
            this.$router.push("/address")
        },
        //添加地址
        onSave(content) {
        content.id = this.list._id
        content.address=`${content.province}${content.city}${content.county}${content.addressDetail}` // 拼接地址
        // console.log(content);
        this.$api.addShoptAddress(content).then(res=>{
        if(res.code === 200){
          this.$toast.success(res.msg)
        }    
      }).catch(err=>{
        console.log(err);
      })
    },
      //删除地址
    onDelete(content) {
      console.log(content);
      let deluser = {id:content._id}
      this.$api.delAddress(deluser).then(res =>{
      })

    },
    onChangeDetail(val) {
      if (val){
        this.searchResult = [
          {
            name: '黄龙万科中心',
            address: '杭州市西湖区',
          },
        ];
      } else {
        this.searchResult = [];
      }
    },
  },
  mounted() {
    console.log( this.$route);
    let editUser = this.$route.query.data || this.$route.params.data
    console.log(editUser);
    this.list = JSON.parse(editUser)
    console.log(this.list);
  },
  computed: {},
  watch: {}
}
</script>

<style lang='scss' scoped>

</style>