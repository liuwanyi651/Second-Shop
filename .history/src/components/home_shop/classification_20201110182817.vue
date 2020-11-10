<template>
<div>
    <!--分类及文字-->
    <div class="class_box">
        <div class="class_box2">
            <div v-for="(item,index) in class_pic" :key="index" class="pic"><img :src="item.image" alt="">
                <!--文字-->
                <div class="text">{{item.mallCategoryName}}</div>
            </div>
        </div>
    </div>
    <div class="run"><img :src="pic.PICTURE_ADDRESS" alt=""></div>
</div>
</template>

<script>
import axios from "axios"
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
}
</style>
