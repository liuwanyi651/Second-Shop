<template>
<!--<div class="box flex">
    <div class="city">{{city}}</div>
    <van-search v-model="value" shape="round" background="rgb(238,238,238)" placeholder="请输入搜索关键词" class="seo" />
    <div class="ss">搜索</div>
</div>-->
<div>
    <van-sticky>
      <div style="display:flex;justify-content:space-around;background:white;">
        <div style="margin:20px;" @click="position">{{ city }}<van-icon name="arrow-down" /></div>
        <div style="width:270px;">
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
        <div class="list" @click="go(item)">
          <img :src="item.image" />
          <span v-html="item.name"></span>
        </div>
      </div>
    </div>
    <div v-if="flag">
      <lun></lun>
      <one></one>
      <two></two>
    </div>

</div>
</template>

<script>
export default {
    name: '',
    props: {},
    data() {
        return {
            // city: '',
            // value: '',
            city: "",
      value: "",
      flag: true,
      list: ""
        }
    },
    components: {},
    methods: {

    },
    mounted() {
        let _this = this
        AMap.plugin('AMap.Geolocation', function () {
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
                buttonPosition: 'RB'
            })

            geolocation.getCurrentPosition()
            AMap.event.addListener(geolocation, 'complete', onComplete)
            AMap.event.addListener(geolocation, 'error', onError)

            function onComplete(data) {
                // data是具体的定位信息
                // console.log(data);
                _this.city = data.addressComponent.city
                // console.log(data.addressComponent.city);
            }

            function onError(data) {
                // 定位出错
            }
        })
    },
    computed: {},
    watch: {}
}
</script>

<style lang="scss" scoped>
.box {
    width: 100%;
    //justify-content: center;
    align-items: center;
    padding: 10px 0;
}

.seo {
    width: 76%;
    height: 36px;
}

//设置搜索框
.van-search__content {
    background-color: white;
    line-height: 40px;
}
</style>
