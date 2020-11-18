// checkLogin 检查当前用户是否登录
import {Dialog,Toast} from 'vant'
export const checkLogin = () =>{
let user = localStorage.getItem('user')
if(!uesr){
    Dialog.confirm({
        title:'您当前没有登录',
        message:'是否跳转到登录页面'
    }).then().catch()
}
}