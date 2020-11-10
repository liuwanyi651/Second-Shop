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
            floor1: '',
            floorName: '',
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

<style lang="scss" scoped>
.tab tr {
    border: 1px solid rgb(231, 225, 225);
    float: left;
    background: white;
}

.box {
    height: 201.8px;
}

.food {
    text-align: center;
    padding: 10px 0;
    font-size: 16px;
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
