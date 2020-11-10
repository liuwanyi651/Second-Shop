<template>
<div class="all">
    <div class="bg">
        <div class="box">
            <div class="fs24 pd20">登录 / 注册</div>
            <van-form @submit="onSubmit" class="form">
                <van-field v-model="username" type="username" name="用户名" placeholder="USERNAME" />
                <van-field v-model="password" type="password" name="密码" placeholder="PASSWORD" />
                <van-field v-model="tel" type="tel" label="手机号码" placeholder="仅注册需要" />
                <div class="flex a-center">
                    <van-field v-model="note" type="note" label="短信验证" placeholder="仅注册需要" />
                    <van-button type="primary" class="note_butn">发送验证码</van-button>
                </div>
                <div class="flex a-center">
                    <van-field v-model="code" type="code" label="验证码" placeholder="请输入验证码" />
                    <!--<van-button type="primary" class="note_butn"></van-button>-->
                </div>
                <van-button type="primary" class="pd20">登录</van-button>
                <van-button type="danger">注册</van-button>
            </van-form>
        </div>
    </div>
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
            tel: '',
            note: '',
            code: ''
        }
    },
    components: {},
    methods: {
        onSubmit(values) {
            console.log('submit', values);
        },
    },
    mounted() {},
    computed: {},
    watch: {}
}
</script>

<style lang="scss" scoped>
.bg {
    width: 100%;
    height: 667px;
    background-image: url(../../assets/login.jpg);
    // position: relative;
    background-repeat: no-repeat;
    background-size: cover;
    display: flex;
    justify-content: center;
    align-items: center;
}

.box {
    width: 93%;
    height: 80%;
    background: white;
    margin-top: 50px;
}

.note_butn {
    width: 150px;
    height: 38px;
}
</style>
