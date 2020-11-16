<template>
<div>
    <div>
        <van-nav-bar title="个人资料" left-text="返回" left-arrow @click-left="onClickLeft" />

        <van-field v-model="list._id" />
        <van-field label="头像" />
        <van-field v-model="list.username" label="用户名" placeholder="用户名" />
        <van-field v-model="list.nickname" label="昵称" placeholder="昵称" />
        <van-field v-model="list.gender" label="性别" placeholder="性别" />
        <van-field v-model="list.address" label="邮箱" placeholder="邮箱" />

        <div @click="daad">
            {{time}}
        </div>

    </div>
    <div class='a1'>
        <van-button type="primary" size="large" @click=" goback">保存<an-button>
        <van-button type="danger" size="large">取消<an-button>

    </div>

</div>
</template>

<script>
import dayjs from 'dayjs'
export default {
    name: '',
    //接收父组件传递过来的参数
    props: {},
    components: {

    },
    // 定义变量
    data() {
        return {

            list: {},
            // year: 2018,
            // month: 11,
            // day: 15,
            // house: 245,

        }
    },
    //监听方法  click事件等
    methods: {
        onClickLeft() {
            this.$router.push('/mine')
        },
        //发请求获取数据
        goto() {
            this.$api.queryUser().then((res) => {
                console.log(res)
                this.list = res.userInfo

            })

        },
        //发请求返回修改数据
        goback() {
            this.$delete(this.list, 'avatar')
            this.$set(this.list, 'id', this.list._id)
            this.$api.saveUser(this.list).then((res) => {
                this.$toast.success(res.msg);
                this.goto()

            })

        },
        daad() {}

    },
    //调用
    mounted() {
        this.goto()

    },
    watch: {

    },
    //计算
    computed: {
        time() {
            return dayjs(new Date()).format('YYYY-MM-DD')
        }
    }
}
</script>

<style scoped lang='scss'>

</style>