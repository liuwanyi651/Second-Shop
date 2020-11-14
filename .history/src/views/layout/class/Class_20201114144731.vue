<template>
<div class="all t-center">
    <div class="fen t-center bbs">
        商品分类
    </div>
    <div class="flex">
        <!--左边-->
        <div>
            <!--使用Sidebar侧边导航组件 左侧边导航-->
            <van-sidebar v-model="activeKey">
                <!--拿到左侧分类的名称 eg:新鲜水果 中外名酒……-->
                <!--给分类eg:新鲜水果 中外名酒…… 绑定getClassify(item)事件 这里item是每一项的实参  -->
                <van-sidebar-item v-for="(item,index) in goodsCategoryName" :key="index" :title="item.mallCategoryName" @click="getClassify(item.bxMallSubDto)" />
            </van-sidebar>
        </div>
        <!--上面-->
        <div class="top h">
            <!--使用Tab标签页组件 上边分类 热带水果什么的-->
            <van-tabs v-model="active" @click="aboveChange" class="pd8 ">
                <!--click点击标签时触发	name是标识符-->
                <van-tab v-for="(item,index) in classQuery" :key="index" :title="item.mallSubName" :name="item.mallSubId" swipeable>
                    <!--拿到每一项的对应的详细的商品 下面图片-->
                    <div v-for="(item,index) in goodsData" :key="index">
                        <div class="picIimg  flex bs m10td    ">
                            <div class="pic">
                                <div class="pic_border brs_E ">
                                    <img :src="item.image" alt="" @click="go(item)">
                                </div>
                            </div>
                            <!--食物的名称--->
                            <div class="cr m10 ">
                                {{item.name}}
                                <div class="m10 t-start fw-b flex">
                                    ￥{{item.present_price}}
                                    <span class="txd-l fs14 ml10 m5 c179">￥{{item.orl_price}}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <!--撑一个空的高度--->
                    <div class="hei"></div>
                </van-tab>
            </van-tabs>
        </div>
    </div>
</div>
</template>

<script>
//classQuery
export default {
    name: '',
    props: {},
    data() {
        return {
            activeKey: 0, //这是左侧边导航 默认是在0号位
            active: 0, //右边分类 默认是在0号位
            goodsCategoryName: '', //左侧商品分类的名称
            classQuery: [], //右侧商品分类
            goodsData: [], //定义一个数组 来装对应的图片
            id: '',
        }
    },
    components: {},
    methods: {
        //拿到首页 分类 新鲜水果 中外名酒 营养奶品等数据
        getData() {
            this.$api.getRecommend().then(res => {
                if (res.code === 200) {
                    // console.log(res);
                    //获取商品分类的数据 赋值给goodsCategoryName这个空数组
                    this.goodsCategoryName = res.data.category
                    console.log(this.goodsCategoryName[0].bxMallSubDto)
                    //调用初始状态 这样一进分类页面 就会调用 显示默认的数据
                    this.getClassify(this.goodsCategoryName[0].bxMallSubDto)
                }
            }).catch(err => {
                console.log(err);
            })

        },

        //侧边
        //接收点击分类水果每一项 的形参item
        getClassify(item) {
            console.log(item); // 这里得到一个对象 eg里面有新鲜水果对应的 热带水果 时令水果等 
            this.classQuery = item
            // console.log(this.classQuery); //把上面的item 赋值给左边 this.classQuery
            this.getGoods(item[0].mallSubId)
            // console.log(item[0].mallSubId);  //这里的打印的 与 下面的打印的id 拿到的东西是一样的
        },
        //拿到分类查询的数据
        getGoods(id) {
            // console.log(id); //这是分类每一项的id值  eg现在点击新鲜水果 拿到的是新鲜水果的id值 
            this.$api.getClass({
                id
            }).then(res => {
                // console.log(res);
                if (res.code === 200) {
                    this.goodsData = res.dataList //把res.dataList 赋值给goodsData
                    console.log(this.goodsData); //已经拿到每一项对应的东西 eg：新鲜水果对应的 车厘子 龙眼等东西
                }
            }).catch(err => {
                console.log(err);
            })
        },
        // 这里是点击上面分类 eg：热带水果 时令水果就会显示对应数据图片 
        aboveChange(name) {
            this.getGoods(name)
        },
        //路由传参 
        //这里item是形参 拿来接收 随便什么字母都可以 
        go(item) {
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
        //调用这个函数
        this.getData()

    },
    computed: {},
    watch: {}
}
</script>

<style lang="scss" scoped>
//分类文字样式
.all {
    width: 100%;
    height: 100%;
    background: white;

    .fen {
        height: 40px;
        line-height: 40px;
    }
}

.picIimg {
    width: 100%;

    .pic {
        width: 100px;
        height: 100px;
        display: flex;
        align-items: center;

        .pic_border {
            width: 90px;
            height: 90px;
            // border: 1px solid #EEE;

            img {
                width: 100%;
            }
        }
    }
}

.top {
    width: 100%;
}

//设置食品饮料 超出的部分标题文字内容
.h {
    width: 279px;
    overflow: hidden;
}
</style>
