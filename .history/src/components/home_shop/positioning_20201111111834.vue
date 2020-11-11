<template>
<div class="flex bgc-w m10">
    <div class="city">{{city}}</div>
    <div class="search">
        <form action="/">
            <van-search v-model="value" show-action placeholder="请输入搜索关键词" @search="onSearch" @cancel="onCancel" />
        </form>
    </div>
</div>
</template>

<script>
export default {
    name: '',
    props: {},
    data() {
        return {
            city: ''
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
.city {
    width: 20%;
    line-height: 60px;
}

.search {
    width: 100%;
    height: 40px;
}

.van-search__content {
    height: 40px;
}
</style>
