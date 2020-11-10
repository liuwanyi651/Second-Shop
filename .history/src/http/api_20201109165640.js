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
    //获取首页数据（get）
    getRecommend(){
        return http.get('/recommend')
    },
    //获取搜索 (get)/search 参数: value: 搜索关键词
    getSearch(){
        return http.get('/search')
    },
    //分类查询(get) /classification?mallSubId=${id} 参数:id:默认分类的id
    getClass(){
        return http.get('/classification?mallSubId=${id}')
    },
    //查询获取购物车数据(get) /getCard
    getcard(){
        return http.get('/getCard')
    },
    //
}