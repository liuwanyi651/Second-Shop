<template>
<div class="class_box">
    <div class="class_box2">
        <div v-for="(item,index) in class_pic" :key="index" class="pic"><img :src="item.image" alt="">
            <div class="text">{{item.mallCategoryName}}</div>
        </div>
    </div>
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
            pic: []

        }
    },
    components: {},
    methods: {
        getData() {
            //获取首页分类
            this.$api.getRecommend().then(res => {
                if (res.code === 200) {
                    console.log(res.data.category);
                    this.class_pic = res.data.category
                    console.log(res.data);
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
}

.class_box2 {
    display: flex;
}

img {
    width: 55px;
    padding: 10px 10px;
    // margin-left: 5px;
}

.text {
    font-size: 14px;
    opacity: 0.7;
    // margin-left: 2px;
    text-align: center;
}
</style>
