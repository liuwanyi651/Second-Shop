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
    display: flex;
}

// .pic {
//     display: flex;
// }

img {
    width: 60px;
    margin-left: 10px;
}
</style>
