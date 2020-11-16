<template>
<div>
    <!--使用NavBar 导航栏组件-->
    <van-nav-bar title="个人资料" left-text="返回" left-arrow @click-left="onClickLeft" />、
    <van-form @submit="onSubmit">
        <van-field v-model="username" name="用户名" label="用户名" placeholder="用户名" :rules="[{ required: true, message: '请填写用户名' }]" />
        <van-radio-group v-model="radio" direction="horizontal">
            <van-radio name="1">单选框 1</van-radio>
            <van-radio name="2">单选框 2</van-radio>
        </van-radio-group>
        <div style="margin: 16px;">
            <van-button round block type="info" native-type="submit">
                提交
            </van-button>
        </div>
    </van-form>
</div>
</template>

<script>
export default {
    name: '',
    props: {},
    data() {
        return {
            username: '',
            password: '',
        }
    },
    components: {},
    methods: {
        // 返回至 我的
        onClickLeft() {
            this.$router.push("/Mine")
        },
        onSubmit(values) {
            console.log('submit', values);
        }
    },
    mounted() {},
    computed: {},
    watch: {}
}
</script>

<style lang='scss' scoped>

</style>
