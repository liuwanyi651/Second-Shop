<template>
  <div>
    <!--使用Sticky 粘性布局 固定住在屏幕顶部-->
    <van-sticky>
      <div class="flex j-arou bgc-w">
        <div class="m20">{{ city }}<van-icon name="arrow-down"/></div>
        <div style="width: 270px">
          <van-search @input="onclick" v-model="value" show-action placeholder="请输入搜索关键词">
            <template #action>
              <div>搜索</div>
            </template>
          </van-search>
        </div>
      </div>
    </van-sticky>
    <div>
      <!--<div v-for="(item, index) in list" :key="index">
        <div class="list" @click="goto(item)">
          <img :src="item.image" />
          <span v-html="item.name"></span>
        </div>
      </div>-->
      <van-cell is-link @click="showPopup">展示弹出层</van-cell>
      <van-popup v-model="show">
        <div v-for="(item, index) in list" :key="index">
          <div class="list" @click="goto(item)">
            <img :src="item.image" />
            <span v-html="item.name"></span>
          </div>
        </div>
      </van-popup>  
    </div>
  </div>
</template>

<script>
export default {
  name: "",
  props: {},
  data() {
    return {
      city: "",
      value: "",
      list: "",
      show: false,
    };
  },
  components: {},
  methods: {
    onclick() {
      this.$api
        .getSearch({value:this.value})
        .then((res) => {
          console.log(res.data.list);
          this.list = res.data.list;
          this.list.map((item) => {
            this.$set(item,"name",item.name.replace(
                eval(`/${this.value}/g`),
                `<span style="color:red;">${this.value}</span>`));
          });
        })
        .catch((err) => {
          console.log(err);
        });
    },
    goto(item) {
      // console.log(item); //从首页点击某一项热销商品 获取到对象 对象里有相应的值
      //push还可以传入一个对象 对象可以传入path属性 也可以传入name属性 name是路由配置的name 不是组件内部的name
      this.$router.push({
        name: "detail", //路由跳转到detail详情页面
        //query传参  query又是一个对象
        // 传到详情页的参数
        query: {
          id: item.id, // 这里的id是自己定义的名字 item.goodsId 是值:fb0f913950944b66a97ae262ad14609a
        },
      });
    },
    // 检查是否拿到了数据
    go(){
         this.$api
        .getSearch({value:this.value})
        .then((res) => {
            // console.log(res)
        })
    },
     showPopup() {
      this.show = true;
    },
  },
  mounted() {
    let _this = this;
    AMap.plugin("AMap.Geolocation", function () {
      var geolocation = new AMap.Geolocation({
        // 是否使用高精度定位，默认：true
        enableHighAccuracy: true,
        // 设置定位超时时间，默认：无穷大
        timeout: 1000,
        // 定位按钮的停靠位置的偏移量，默认：Pixel(10, 20)
        buttonOffset: new AMap.Pixel(10, 20),
        //  定位成功后调整地图视野范围使定位位置及精度范围视野内可见，默认：false
        zoomToAccuracy: true,
        //  定位按钮的排放位置,  RB表示右下
        buttonPosition: "RB",
      });
    
      geolocation.getCurrentPosition();
      AMap.event.addListener(geolocation, "complete", onComplete);
      AMap.event.addListener(geolocation, "error", onError);

      function onComplete(data) {
        // data是具体的定位信息
        // console.log(data);
        _this.city = data.addressComponent.city;
        // console.log(data.addressComponent.city);
      }

      function onError(data) {
        // 定位出错
      }
    });
    this.onclick()
    this.go()
  },
  computed: {},
  watch: {},
};
</script>

<style lang="scss" scoped>

.my-swipe .van-swipe-item {
  color: #fff;
  font-size: 20px;
  line-height: 150px;
  text-align: center;
  background-color: #39a9ed;
}
.list {
  display: flex;
  margin-bottom: 35px;
  img {
    width: 100px;
    height: 100px;
  }
}
span {
  padding: 30px 0;
}
</style>
