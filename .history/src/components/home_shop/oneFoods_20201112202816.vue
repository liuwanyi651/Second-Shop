<template>
<div>
    <!--1楼休闲食品-->
    <div class="one">
        <div class="food"><span>1F</span>{{floorName.floor1}}</div>
        <table class="tab">
            <tr v-for="(itme,index) in floor1" :key="index" style="width:183px;" :class="{'box':index===0}" @click="goto(item)">
                <img :src="itme.image" style="width:185px;" @click="foodOne(item)">
            </tr>
        </table>
    </div>
    <!--2楼新鲜水果-->
    <div class="one">
        <div class="food"><span>2F</span> {{floorName.floor2}}</div>
        <table class="tab">
            <tr v-for="(itme,index) in floor2" :key="index" style="width:183px;" :class="{'box':index===0}">
                <img :src="itme.image" style="width:185px;" @click="foodTwo(item)">
            </tr>
        </table>
    </div>
    <!--3楼营养奶品-->
    <div class="one">
        <div class="food"><span>3F</span> {{floorName.floor3}}</div>
        <table class="tab">
            <tr v-for="(itme,index) in floor3" :key="index" style="width:183px;" :class="{'box':index===0}">
                <img :src="itme.image" style="width:185px;" @click="foodThree(item)">
            </tr>
        </table>
    </div>
</div>
</template>

<script>
export default {
    name: '',
    props: {},
    data() {
        return {
            floor1: '',
            floor2: '',
            floor3: '',
            floorName: '',
        }
    },
    components: {},
    methods: {
        getFloor() {
            this.$api.getRecommend().then(res => {
                console.log(res);
                this.floor1 = res.data.floor1
                this.floor2 = res.data.floor2
                this.floor3 = res.data.floor3
                this.floorName = res.data.floorName
            }).catch(err => {
                console.log(err);
            })
        },
        //路由传参 
        //这里item是形参 拿来接收 随便什么字母都可以 
        goto(item) {
            // console.log(item); //从首页点击某一项热销商品 获取到对象 对象里有相应的值
            //push还可以传入一个对象 对象可以传入path属性 也可以传入name属性 name是路由配置的name 不是组件内部的name
            this.$router.push({
                name: 'detail', //路由跳转到detail详情页面
                //query传参  query又是一个对象
                // 传到详情页的参数
                query: {
                    id: item.goodsId // 这里的id是自己定义的名字 item.goodsId 是值:fb0f913950944b66a97ae262ad14609a
                }
            })
        }
    },
    mounted() {
        this.getFloor()
    },
    computed: {},
    watch: {}
}
</script>

<style lang="scss" scoped>
.one {
    width: 100%;
    background: white;
}

.tab tr {
    border: 1px solid rgb(231, 225, 225);
    float: left;
    background: white;
}

.box {
    //width: 183px;
    height: 183px;
}

.food {
    text-align: center;
    padding: 10px 0;
    font-size: 15px;
    color: #E03730;
    font-weight: 550;
    background-color: #EDEDED;

    span {
        border-radius: 10px;
        background-color: #E03730;
        color: rgb(231, 225, 225);
        font-size: 14px;
    }

}
</style>
