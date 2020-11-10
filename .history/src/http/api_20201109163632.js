//封装所有的请求
import http from './index'
export default {
    //对象的属性就是请求的方法名
    login({uesrname,password}){
        return http.post('/login',{
            username,
            password
        })
    },
    getRecommend(){
        return http.get('/recommend')
    }
}