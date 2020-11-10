<template>
<div>
    <div>
        <div class="food"><span>1F</span>{{floorName.floor1}}</div>
        <table class="tab">
            <tr v-for="(itme,index) in floor1" :key="index" style="width:183px;" :class="{'box':index===0}">
                <img :src="itme.image" style="width:185px;">
            </tr>
        </table>
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
            floor1: ''
        }
    },
    components: {},
    methods: {
        getFloor() {
            this.$api.getRecommend().then(res => {
                // console.log(res);
                this.floor1 = res.data.floor1
                this.floorName = res.data.floorName
            }).catch(err => {
                console.log(err);
            })
        },
    },
    mounted() {
        this.getFloor()
    },
    computed: {},
    watch: {}
}
</script>

<style lang='scss' scoped>

</style>
