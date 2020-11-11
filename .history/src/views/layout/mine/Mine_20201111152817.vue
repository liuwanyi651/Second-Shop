<template>
<div>
    <div class="member t-center">会员中心</div>
    <div class="hi flex j-center a-center">
        <div class="head">
            <div class="iconfont icon-shezhi "></div>
            <div class="cute m bor-r">
                <img src="../../../assets/head.jpg" alt="">
            </div>
            <div class="cw fs18 fw-b t-center pd15">
                欢迎您：小白
            </div>
            <div class="cw fs14  t-center ">
                退出登录
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

        .cute {
            width: 75px;
            height: 75px;
            background: seagreen;
            overflow: hidden;

            img {
                width: 100%;
            }
        }
    }
}

.iconfont.icon-shezhi {
    background: white;
}
</style>
