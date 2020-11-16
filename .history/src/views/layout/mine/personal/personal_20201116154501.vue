<template>
<div>
    <!--使用NavBar 导航栏组件-->
    <van-nav-bar title="个人资料" left-text="返回" left-arrow @click-left="onClickLeft" />
    <van-form @submit="onSubmit">
        <van-field v-model="username" name="用户名" label="用户名" placeholder="用户名" :rules="[{ required: true, message: '请填写用户名' }]" />
        <van-field v-model="petname" label="昵称" placeholder="请输入昵称" />
        <div label="性别">
            <van-radio-group v-model="radio" direction="horizontal">
                <van-radio name="1">男</van-radio>
                <van-radio name="2">女</van-radio>
                <van-radio name="3">保密</van-radio>
            </van-radio-group>
        </div>
        <van-field v-model="mailbox" label="邮箱" placeholder="请输入邮箱" />
        <van-field v-model="born" label="出生年月" placeholder="请输入出生年月" />
        <div style="margin: 16px;">
            <van-button round block type="info" native-type="submit">
                保存
            </van-button>
        </div>
        <div style="margin: 16px;" class="mt20">
            <van-button round block type="default" native-type="submit">
                取消
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
            petname: '',
            gender: '',
            radio: '',
            mailbox: '',
            born: ''
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
        },
        //获取用户登录的信息
        getUserMsg() {
            this.$api.queryUserMsg().then(res => {
                console.log(res); //打印出用户登录默认的信息 昵称 出生年月等
            }).catch(err => {
                console.log(err);
            })
        }

        //修改保存用户信息(post)
        // changeUser() {
        //     this.$api.changeSaveUser().then(res => {
        //         console.log(res);
        //     }).catch(err => {
        //         console.log(err);
        //     })
        // }
    },
    mounted() {
        this.getUserMsg()
    },
    computed: {},
    watch: {}
}
</script>

<style lang='scss' scoped>

</style>
