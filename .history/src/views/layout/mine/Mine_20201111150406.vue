<template>
<div>
    <div class="member t-center">会员中心</div>
    <div class="hi flex j-center a-center">
        <div class="head">
            <div class="cute">
                <img src="" alt="">
            </div>
            <div>
            </div>
            <div>
            </div>
        </div>
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

<style lang="scss" scoped>
.member {
    height: 40px;
    line-height: 40px;
}

.hi {
    width: 100%;
    background-color: rgb(227, 12, 123);
    height: 232px;

    .head {
        width: 60%;
        height: 150px;
        background-color: salmon;

        .cute {
            width: 80px;
            height: 80px;

        }
    }
}
</style>
