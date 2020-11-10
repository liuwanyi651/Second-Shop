module.exports = {
    devServer: {
        proxy: {
            '/api': {
                ws: false,
                //每一次只需要改target 把target改成接口根路径
                target: "http://localhost:3000",
                changeOrigin: true,
                widthCredentitals: true,
                pathRewrite: {
                    '^/api': ''
                }
            }
        }
    }
}