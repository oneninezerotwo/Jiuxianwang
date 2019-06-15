
module.exports = {
    devServer: {
        proxy: {
            '/api': {
                target: 'https://m.jiuxian.com/', //设置你调用的接口域名和端口号https://m.jiuxian.com/m_v1/promote/qgajax.do?t=1560563577952&pagenum=1&tabnum=1
                changeOrigin: true,
                pathRewrite: {
                    '^/api': ''
                }
            },
        }
    }
}