<template>
<div>
    <div class="t-al-c b-b h-50 l-h-50">
        商品分类
    </div>
    <div class="d-f j-c-st width:25vw">
        <van-sidebar v-model="activeKey" @change="onClick">
            <van-sidebar-item v-for="(item,index) in goodsclassifyname" :key="index" :title="item.mallCategoryName" />
        </van-sidebar>

        <van-tabs v-model="active" style="width:75vw" @click="toclick">
            <!--右侧分类标签顶部 新赋值的数组flm的分类的名字mallSubName做的循环-->
            <van-tab v-for="(item,index) in flm" :title="item.mallSubName" :key="index">
                <!--右侧分类中间内容 新赋值的数组classify做循环出图片和内容-->
                <div v-for="(item,index) in nrt" :key="index">
                    <div v-for="(item,index) in nrt" :key="index">
                        <div class="box" @click="go">
                            <div><img :src="item.image" class="img"></div>
                            <div class="d-f j-c-sa fl-c ">
                                <div style="color:red;font-size:14px;">{{item.name}}</div>
                                <div class="d-f j-c-sa">
                                    <div style="color:red">&yen;{{item.present_price}}</div>
                                    <div><del>&yen;{{item.orl_price}}</del></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </van-tab>
        </van-tabs>

    </div>
</div>
</template>

<script>
import Vue from 'vue';
import {
    Sidebar,
    SidebarItem
} from 'vant';
import {
    Tab,
    Tabs
} from 'vant';

Vue.use(Tab);
Vue.use(Tabs);
Vue.use(Sidebar);
Vue.use(SidebarItem);

export default {
    name: '',
    props: {},
    data() {
        return {
            activeKey: 0,
            goodsclassifyname: '', //左侧分类
            active: 0,
            flm: '', //分类标签头部接受数组
            nrt: '',
            nrtname: '',

        }
    },
    components: {},
    methods: {
        getData() {
            //调借口请求数据
            this.$api.getRecommend()
                //箭头函数
                .then(res => {
                    //传入左侧的名字数据的那个数组
                    this.goodsclassifyname = res.data.category
                    // console.log(this.goodsclassifyname)
                    //左侧点击事件调用一次效果取消没有点击的时候没出现的传值效果
                    this.onClick()
                }).catch(err => {
                    console.log(err);
                })
        },

        //左侧点击事件
        onClick() {
            //传值给空数组来接受请求的左侧小分类名字传入到右侧的标签名字
            this.flm = this.goodsclassifyname[this.activeKey].bxMallSubDto
            //调用一次右侧点击事件效果是取消没有点击的时候没出现的传值效果
            this.toclick()
            //
            this.active = 0
        },
        toclick() {
            console.log(this.flm[this.active].mallSubId)
            this.$api.getflcx(this.flm[this.active].mallSubId).then(res => {
                this.nrt = res.dataList
            }).catch(err => {
                console.log(err);
            })
        },

    },
    mounted() {
        this.getData()

    },
    computed: {},
    watch: {}
}
</script>

<style>
.box {
    display: flex;
    justify-content: space-between;
    border: 0.2px solid grey;
}

.img {
    width: 100px;
    height: 100px;
}
</style>
