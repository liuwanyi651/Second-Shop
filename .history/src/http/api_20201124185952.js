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
    //1.获取首页数据（get）
    getRecommend(){
        return http.get('/recommend')
    },
    //2.获取搜索 (get)/search 参数: value: 搜索关键词
    getSearch(data){
        return http.post(`/search`,
            data
        )
    },
    //3.分类查询(get) /classification?mallSubId=${id} 参数:id:默认分类的id
    getClass({id}){
        return http.get(`/classification?mallSubId=${id}`,{
            id
        })
    },
    //4.查询获取购物车数据(post) /getCard
    getShopCard(){
        return http.post('/getCard')
    },
    //5.购物车加减商品(post) /editCart 参数:count: 购物车数量 id: 商品id mallPrice: 价格
    editShopCart({count,id,mallPrice}){
        return http.post('/editCart',{
            count,
            id,
            mallPrice
        })
    },
    //6.购物车商品删除(post) /deleteShop  参数:  id: 商品id(数组)
    deleteCardShop(data){
        return http.post('/deleteShop',data)
    },
    //7. 购物车支付页面(post) /order 参数:
    // address:收货地址
    // tel:电话
    // orderId:所有商品的id(数组)
    // totalPrice:总价格
    // idDirect:用来判断是购物车结算还是直接购买(直接购买为true,购物车结算为false)
    // count:商品数量
    orderShop({address,tel,orderId,totalPrice,idDirect,count}){
        return http.post('/order',{
            address,
            tel,
            orderId,
            totalPrice,
            idDirect,
            count
        })
    },
    //8.单个商品详情(get)/goods/one?id=${id} 参数:  id:商品的id
    getGoods(id){
        return http.get(`/goods/one?id=${id}`,{
            id
        })
    },
    //9. 收藏单个商品(post) /collection 参数: goods: 商品的详情信息
    collect(goods){
        return http.post('/collection',goods
        )
    },
    //10. 取消收藏(post) /cancelCollection 参数: id:商品的cid
    cancel(id){
        return http.post('/cancelCollection',{id})
    },
    //11. 查询商品是否已收藏(post) /isCollection 参数: id:商品的id
    Collection(id){
        return http.post('/isCollection',{id})
    },
    //12. 加入购物车(post)  参数:  id:商品的id
    addShoping({id}){
        return http.post('/addShop',{
            id
        })
    },
    //13. 退出登录(post) /loginOut
    loginShopOut(){
        return http.post('/loginOut')
    },
    //14. 获取用户信息(post)  /queryUser
    queryUserMsg(){
        return http.post('/queryUser')
    },
    //15. 修改保存用户信息(post)
    // /saveUser
    // 参数:
    // gender: 性别
    // year: 年
    // month: 月
    // day: 日
    // id: 用户id
    // nickname: 昵称
    changeSaveUser(data){
        return http.post('/saveUser',data)
    },
    // 16.查询用户订单数量(get)
    orderNum(){
        return http.get('/myOrder/orderNum')
    },
    //17.商品评论(post) 
    // 参数:
    // id: 商品cid
    // rate: 分数
    // content: 内容
    // anonymous: 是否匿名 
    // _id: 商品的_id
    // order_id: 商品的order_id
    // image: []
    discuss(data){
        return http.post('/goodsOne/comment',data)
    },
    //18.获取登录注册默认验证码(get)
    getCode(){
        return http.get('/verify')
    },
    //19. 查询用户收货地址(get)
    getAddress(){
        return http.get('/getAddress')
    },
    //20.查询默认收货地址(get)
    getShopAddress(){
        return http.get('/getDefaultAddress')
    },
    //21.设置默认收货地址(post) 参数:id: 地址id
    setShoptAddress(id){
        return http.post('/setDefaultAddress',{
            id
        })
    },
    //22.增加收货地址(post)
    //     参数:
    // name:用户名
    // tel:电话
    // address:(省+市+区+详情地址)
    // isDefault:是否默认
    // province:省
    // city:市
    // county:区
    // addressDetail:详情            地址，
    // areaCode:地区代码
    // id:修改地址时候要传id
    addShoptAddress(data){
        return http.post('/address',data)
    },
    //23.删除地址(post)  参数： id:地址_id
    delAddress({id}){
        return http.post('/deleteAddress',{
            id
        })
    },
    //24 查询我的收藏(get)
    getCollect(){
        return http.get('/collection/list')
    },
    //25.注册(post) 
    // /register
    // 参数:
    // nickname: 用户名
    // password:密码
    // verify:验证码
    registerShop({nickname,password,verify}){
        return http.post('/register',{
            nickname,password,verify
        })
    },
    //26.登录(post)
    // /login
    // 参数:
    // nickname: 用户名
    // password:密码
    // verify:验证码
    loginShop({nickname,password,verify}){
        return http.post('/login',{
            nickname,password,verify
        })
    },
    //27.订单查询(get)
    getShopMyOrder(){
        return http.get('/myOrder')
    },
    //28.查询已评价(get) 
    getAlEvaluated(){
        return http.get('/alreadyEvaluated')
    },
    //29.查询未评价(get)
    getTobeEvaluated(){
        return http.get('/tobeEvaluated')
    },
    //30.查询单条评论(post)
    //     参数: 
    // id:商品id
    // _id:数据库的那条id
    seeEvaluateOne({id,_id}){
        return http.post('/evaluateOne',{
            id,_id
        })
    }
}