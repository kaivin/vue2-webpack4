/**
 * 项目的一些定制化配置
 */
const path = require('path');
const ip = require('ip').address();

module.exports = {
    // 主服务启动端口
    appPort: 9527,
    // 本地服务 ip 地址
    appIp: ip,
    // 模板页面标题
    htmlTitle: "webpack-主页",
    // 模板页面路径
    htmlTemplate: path.resolve(__dirname, 'src/index.html'),
    // webpack的差异化配置
    webpack: {
        entry: {
            vendor: ["vue",'vue-router','jquery','bootstrap/dist/js/bootstrap.bundle.min.js'], // 拆分框架代码
            app: path.resolve(__dirname, 'src/index.js'), // 入口
        },
        // 自定义Alias设置
        resolveAlias: {},
        // 扩展rules
        rules: [],
    },
}