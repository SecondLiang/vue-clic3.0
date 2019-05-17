
module.exports = {
    lintOnSave: false,
    publicPath: '/',  //  mobile/  部署应用包时的基本 URL
    devServer: {
        host: "localhost",//要设置当前访问的ip 否则失效
        open: true, //浏览器自动打开页面
        overlay: {        // 关闭vue-cli-eslint插件 规则
            warnings: true,
            errors: true
        },
        // 代理API服务器
        proxy: '',
    },
    pwa: {
        iconPaths: {
            favicon32: './public/favicon.ico',
            favicon16: './public/favicon.ico',
            appleTouchIcon: './public/favicon.ico',
            maskIcon: './public/favicon.ico',
            msTileImage: './public/favicon.ico'
        }
    }

}