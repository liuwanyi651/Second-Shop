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
export default {
    name: '',
    props: {},
    data() {
        return {}
    },
    components: {},
    methods: {},
    mounted() {},
    computed: {},
    watch: {}
}
</script>

<style lang='scss' scoped>

</style>
