<template>
<div class="box flex">
    <div class="city">{{city}}</div>
    <van-search v-model="value" shape="round" background="rgb(238,238,238)" placeholder="请输入搜索关键词" class="seo" />
    <div class="ss">搜索</div>
</div>
</template>

<script>
export default {
    name: '',
    props: {},
    data() {
        return {
            city: '',
            value: '',
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
                console.log(data);
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
    height: 40px;
}

.van-search__content {
    background-color: white;
    height: 30px;
    line-height: 40px;
}

.van-field__control {
    text-align: center;
    line-height: 40px;
}
</style>
