import Vue from 'vue'
import axios from 'axios'
import { Loading, Message } from 'element-ui';


//判断本地还是线上
const isServer = process.env.NODE_ENV === 'production';

//将域名替换成自己的设置的基础url
if (isServer) {
	let baseURL = location.origin.replace('admin', 'api');
	axios.defaults.baseURL = baseURL;
	// store.commit('SET_LOCATION',{
	// 	origin:origin.replace("admin", "api")
	// });
} else {
	// store.commit('SET_LOCATION',{
	// 	origin:origin+'/api'
	// });
	axios.defaults.baseURL = 'api';
}

class AppLoading {
	constructor() {
		this.ajaxQueue = 0;
		this.loading;
	}
	show() {
		this.ajaxQueue++;
		this.loading = Loading.service({
			lock: true,
			text: '加载中......',
			spinner: 'el-icon-loading',
			background: 'rgba(0, 0, 0, 0.7)'
		});
	}
	close() {
		this.ajaxQueue--;
		if (this.ajaxQueue === 0) {
			this.loading.close();
		}
	}
}
var appLoading = new AppLoading();

axios.interceptors.request.use(config => {
	// appLoading.show();

	appLoading.show()
	return config;
})

axios.interceptors.response.use(response => {
	appLoading.close();
	return Promise.resolve(response)
}, err => {
	appLoading.close();
	return Promise.reject(err)
})
Vue.prototype.$axios = axios
