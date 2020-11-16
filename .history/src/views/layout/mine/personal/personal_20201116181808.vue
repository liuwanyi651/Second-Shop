<template>
<div>
    <!--使用NavBar 导航栏组件-->
    <van-nav-bar title="个人资料" left-text="返回" left-arrow @click-left="onClickLeft" />
    <van-form @submit="onSubmit">
        <van-field v-model="userObject.username" name="用户名" label="用户名" placeholder="用户名" :rules="[{ required: true, message: '请填写用户名' }]" />
        <van-field v-model="userObject.nickname" label="昵称" placeholder="请输入昵称" />
        <van-field v-model="userObject.gender" label="性别" placeholder="请输入性别" />
        <van-field v-model="userObject.mailbox" label="邮箱" placeholder="请输入邮箱" />
        <van-field v-model="born" label="出生年月" placeholder="请输入出生年月" />
        <div style="margin: 16px;">
            <van-button round block type="info" native-type="submit" @click="save">
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
            mailbox: '',
            born: '',
            userObject:{}
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
                this.userObject = res.userInfo
                // console.log(this.userObject);
                // 拿到userInfo里面的对象 eg gender性别 nickname等
            }).catch(err => {
                console.log(err);
            })
        },
        save(){
            this.$delete(this.userObject,'avatar')
            this.$set(this.avatar,'id',this.userObject._id)
            this.$api.queryUserMsg(this.userObject).then((res)=>{
                this.$toast.success(res.msg)
                this.getUserMsg
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
