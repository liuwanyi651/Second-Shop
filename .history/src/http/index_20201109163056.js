//封装axios
import axios from 'axios'

// 创建一个实例
const http = axios.create({
    //基础路径
    baseURL:'/api',
    //超时时间 如果请求的时间大于超时时间 就会判定请求失败
    timeout:10000
})


//响应拦截 处理请求返回回来的结果
http.interceptors.response.use(res =>{
    //请求拿到的结果直接就是需要的数据
    return res.data
},err =>{
    //请求失败的错误
    //根据状态码来判断
    let status = err.response && err.response.status
    if(status === 400){
        this.$dialog({message:'请求参数错误'})
    }
    if(status === 401){
        this.$dialog({message:'没有权限'})
    }
    if(status === 403){
        this.$dialog({message:'登录过期'})
    }

    if(status === 404){
        this.$dialog({message:'请求路径错误'})
    }
    if(status === 500){
        this.$dialog({message:'服务器出错'})
    }
    if(status === 503){
        this.$dialog({message:'服务器在维护'})
    }
    return Promise.reject(err)
})
export default http
