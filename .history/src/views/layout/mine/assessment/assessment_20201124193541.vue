<template>
  <div>
    <!--导航返回部分 使用NavBar导航栏组件 left-arrow 是否显示左侧箭头-->
    <div class="z">
        <van-nav-bar left-text="返回"  title="评价中心" left-arrow @click-left="onClickLeft" fixed />
    </div>
    <div>
      <div class="pic">
        <img src="../../../../assets/evaluate.jpg" alt="">
      </div>
      <div class="flex j-arou">
        <div class="pj">
            <van-tabs v-model="active">
            <!--待评价-->
            <van-tab title="待评价">
                <div class="mt10"></div>
                <div v-for="(item,index) in list" :key="index" class="bbs">
                   <div class="flex">
                      <div class="tu">
                        <img :src="item.image_path" alt="">
                      </div>
                      <div class="fs14 pd20 w180">{{item.name}}</div>
                      <div class="w100"><van-button plain type="danger" round size="small" @click="goScore(item)">评价晒单</van-button></div>
                   </div>
                </div>
            </van-tab>
            <!--已评价-->
            <van-tab title="已评价">
              <div class="mt10"></div>
                <div v-for="(item,index) in list1" :key="index" class="bbs">
                   <div class="flex">
                      <div class="tu">
                        <img :src="item.goods[0].image_path" alt="">
                      </div>
                      <div class="fs14 pd20 w180">{{item.goods[0].name}}</div>
                      <div class="w100"><van-button plain type="danger" round size="small" @click="goScore(item)">查看评价</van-button></div>
                   </div>
                </div>
            </van-tab>
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
      active: 0,
      list:[],
      list1:[]
    }
  },
  components: {},
  methods: {
      // 返回至 我的
        onClickLeft() {
            this.$router.push("/Mine")
        },
      // 查询未评价(get)
      getTobeEvaluated(){
        this.$api.getTobeEvaluated().then(res=>{
          // console.log(res);
          this.list=res.data.list
          console.log(this.list);
        })
      },
      //去到评价晒单的页面 vuex的使用方法
      goScore(item){
        // console.log(item); 
        this.$store.commit("storeMsg",JSON.stringify(item)) //这时把item这对象转换为字符串 调用storeMsg这个方法
        this.$router.push("/score")
      },
      //查询已评价(get)
      getAlEvaluated(){
        this.$api.getAlEvaluated().then(res=>{
          // console.log(res);
          this.list1=res.data.list
          console.log(this.list1);
        })
      }
  },
  mounted() {
    this.getTobeEvaluated(),
    this.getAlEvaluated()
  },
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
  border-radius:5px;
  box-shadow: 1px 1px 2px gray ;
}
.tu{
  width: 80px;
  height: 80px;
  img{
    width: 100%;
  }
}
</style>