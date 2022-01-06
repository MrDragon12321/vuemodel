const webpack = require('webpack')

module.exports = {
	productionSourceMap: false,
	outputDir: "./dist", // 输出文件目录
	devServer: {
		port: 1130,
		proxy: {
			// 配置跨域 
			'/api': {
				target: 'http://localhost:9999',
				// target: 'http://api.newweb.com',
				changOrigin: true,
				pathRewrite: {
					'^/api': ''
				},
				cookieDomainRewrite: {
					'*': 'localhost',
					// '*': ip
				}
			}
		},
	},
	configureWebpack: {
		plugins: [
			new webpack.ProvidePlugin({
				$: "jquery",
				jQuery: "jquery",
				"windows.jQuery": "jquery"
			})

		]
	}
}
