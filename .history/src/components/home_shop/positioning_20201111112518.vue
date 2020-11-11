<template>
<div class="box flex bgc-w m10">
    <div class="city">{{city}}</div>
    <div class="seo">
        <van-search v-model="value" placeholder="请输入搜索关键词" />
    </div>
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

}

.city {
    width: 20%;
    line-height: 60px;
}

.seo {
    width: 100%;
}
</style>
