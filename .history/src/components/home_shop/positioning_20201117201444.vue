<template>
  <!--<div class="box flex">
    <div class="city">{{city}}</div>
    <van-search v-model="value" shape="round" background="rgb(238,238,238)" placeholder="请输入搜索关键词" class="seo" />
    <div class="ss">搜索</div>
</div>-->
  <div>
    <van-sticky>
      <div
        style="display: flex; justify-content: space-around; background: white"
      >
        <div style="margin: 20px">{{ city }}<van-icon name="arrow-down" /></div>
        <div style="width: 270px">
          <van-search
            @input="onclick"
            v-model="value"
            show-action
            placeholder="请输入搜索关键词"
          >
            <template #action>
              <div>搜索</div>
            </template>
          </van-search>
        </div>
      </div>
    </van-sticky>
    <div>
      <div v-for="(item, index) in list" :key="index">
        <div class="list" @click="goto(item)">
          <img :src="item.image" />
          <span v-html="item.name"></span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "",
  props: {},
  data() {
    return {
      // city: '',
      // value: '',
      city: "",
      value: "",
      list: "",
    };
  },
  components: {},
  methods: {
    onclick() {
      this.$api
        .getSearch({value:this.value})
        .then((res) => {
            console.log(11111);
          this.list = res.data.list;
          this.list.map((item) => {
            this.$set(
              item,
              "name",
              item.name.replace(
                eval(`/${this.value}/g`),
                `<span style="color:red;">${this.value}</span>`
              )
            );
          });
        })
        .catch((err) => {
          console.log(err);
        });
    },
    // go(item) {
    //   this.$router.push({
    //     path: "/deta",
    //     query: {
    //       id: item.id
    //     }
    //   });
    // },
    goto(item) {
      // console.log(item); //从首页点击某一项热销商品 获取到对象 对象里有相应的值
      //push还可以传入一个对象 对象可以传入path属性 也可以传入name属性 name是路由配置的name 不是组件内部的name
      this.$router.push({
        name: "detail", //路由跳转到detail详情页面
        //query传参  query又是一个对象
        // 传到详情页的参数
        query: {
          id: item.goodsId, // 这里的id是自己定义的名字 item.goodsId 是值:fb0f913950944b66a97ae262ad14609a
        },
      });
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
  },
  computed: {},
  watch: {},
};
</script>

<style lang="scss" scoped>
// .box {
//     width: 100%;
//     //justify-content: center;
//     align-items: center;
//     padding: 10px 0;
// }

// .seo {
//     width: 76%;
//     height: 36px;
// }

// //设置搜索框
// .van-search__content {
//     background-color: white;
//     line-height: 40px;
// }
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
