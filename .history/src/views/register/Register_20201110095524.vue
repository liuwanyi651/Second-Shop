<template>
<div class="all">
    <div class="bg">
        <div class="box">
            <div class="fs24 pd20">登录 / 注册</div>
            <van-form @submit="onSubmit">
                <van-field v-model="username" name="用户名" placeholder="USERNAME" :rules="[{ required: true, message: '请填写用户名' }]" />
                <van-field v-model="password" type="password" name="密码" placeholder="PASSWORD" :rules="[{ required: true, message: '请填写密码' }]" />

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
</style>
