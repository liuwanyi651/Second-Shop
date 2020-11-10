<template>
<div class="class_box">
    <div v-for="(item,index) in class_pic" :key="index" class="pic"><img :src="item.image" alt="">
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
            class_pic: []
        }
    },
    components: {},
    methods: {
        getData() {
            this.$api.getRecommend().then(res => {
                if (res.code === 200) {
                    console.log(res.data.category);
                    this.class_pic = res.data.category
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
    margin: 12px auto;
    background: rgb(255, 255, 255);
}

// .pic {
//     width: 100%;
//     background: rgb(255, 255, 255);
// }

img {
    width: 55px;
    padding: 10px 5px;
    margin-left: 6px;
}
</style>
