<template>
<div>
    <!--分类及文字-->
    <div class="class_box">
        <div class="class_box2">
            <div v-for="(item,index) in class_pic" :key="index" class="pic"><img :src="item.image" alt="" @click="onClick(index)">
                <!--文字-->
                <div class="text">{{item.mallCategoryName}}</div>
            </div>
        </div>
    </div>
    <div class="run"><img :src="pic.PICTURE_ADDRESS" alt=""></div>
</div>
</template>

<script>
export default {
    name: '',
    props: {},
    data() {
        return {
            class_pic: [], //装分类的图片
            pic: [] //装内测期间的图片

        }
    },
    components: {},
    methods: {
        getData() {
            //获取首页分类
            this.$api.getRecommend().then(res => {
                if (res.code === 200) {
                    // console.log(res.data.category);
                    this.class_pic = res.data.category
                    console.log(res.data);
                    this.pic = res.data.advertesPicture
                }
            }).catch(res => {
                console.log(err);
            })
        },
        //路由传参  点击分类跳转到分类页面
        //这里index是形参 拿来接收 随便什么字母都可以 
        onClick(index) {
            // console.log(index); //从首页 分类图片里 点击某一项营养奶品的图片 能找到对应的下标
            //push还可以传入一个对象 对象可以传入path属性 也可以传入name属性 name是路由配置的name 不是组件内部的name
            this.$router.push({
                name: 'class', //路由跳转到分类页面
                //query传参  query又是一个对象
                // 传到详情页的参数
                query: {
                    value: index // 这里的value是自己定义的名字 value: index 是在首页分类四个图片里 找到分类页面对应的商品
                }
            })
        }
    },
    mounted() {
        this.getData()
    },
    computed: {},
    watch: {}
}
</script>

<style lang="scss" scoped>
.class_box {
    width: 96%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 12px auto;
    background: rgb(255, 255, 255);
    padding: 5px 0;
    border-radius: 20px;
}

.class_box2 {
    display: flex;
}

img {
    width: 55px;
    padding: 12px 8px;
    // margin-left: 5px;
}

.text {
    font-size: 14px;
    opacity: 0.7;
    // margin-left: 2px;
    text-align: center;
}

.run {
    display: flex;
    justify-content: center;
}

.run>img {
    width: 100%;
    padding: 0 0;
}
</style>
