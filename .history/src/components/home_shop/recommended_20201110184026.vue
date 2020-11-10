<template>
<div>
    <div>
        商品推荐
    </div>
    <div>
        <div v-for="(item,index) in class_pic" :key="index" class="pic"><img :src="item.image" alt="">
            <!--文字-->
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
        return {}
    },
    components: {},
    methods: {
        getData() {
            //获取首页商品推荐
            this.$api.getRecommend().then(res => {
                if (res.code === 200) {
                    // console.log(res.data.category);

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
    computed: {

    },
    watch: {}
}
</script>

<style lang='scss' scoped>

</style>
