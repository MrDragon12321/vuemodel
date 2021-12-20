import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from './router'
import routerconfig from './routerConfig'


Vue.use(VueRouter)



const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})


// 是否开启七天免密登录
//#region 
/* router.beforeEach((to, from, next) => {
 
  var hasLogin = localStorage.getItem('token')
  var time = 604800000;  //1000*60*60*24*7; 604800000
  if (to.path == '/index' || to.path == '/register' || to.path == '/resetpassword' || to.path == '/sign-in') {
    if (hasLogin) {
      Axios.get('/sign/userInfo', {
        headers: { "token": hasLogin }
      }).then((res) => {
        if (res.data.code == 200) {
          var oldTimestamp = localStorage.getItem('timestamp');//以前存的时间戳
          var nowTimestamp = new Date().getTime();//当前时间戳
          // 如果当前时间戳> 前面存的时间戳+过期时间 表示已经过期
          var sumTimestamp = parseInt(oldTimestamp) + time;
          // console.log('nowTimestamp > sumTimestamp:', nowTimestamp > sumTimestamp);
          if (nowTimestamp > sumTimestamp) {
            ElementUi.Message.error('登录已超过7天，请重新登录！！！！');
            // alert('登录已超过7天，请重新登录！！！！')
            localStorage.clear()
            if (to.path == '/index' || to.path == '/register' || to.path == '/resetpassword' || to.path == '/sign-in') {
              next()
            } else {
              next('/sign-in')
            }
          } else {
            router.push('/home')
          }
        } else {
          ElementUi.Message.error(res.data.message);
          // alert(res.data.message)
          localStorage.clear()
          if (to.path == '/index' || to.path == '/register' || to.path == '/resetpassword' || to.path == '/sign-in') {
            next()
          } else {
            next('/sign-in')
          }
        }
      })

    } else{
      next()
    }
  } else {
  
    if (hasLogin) {
      Axios.get('/sign/userInfo', {
        headers: { "token": hasLogin }
      }).then((res) => {
        if (res.data.code == 200) {
          var oldTimestamp = localStorage.getItem('timestamp');//以前存的时间戳
          var nowTimestamp = new Date().getTime();//当前时间戳
          // 如果当前时间戳> 前面存的时间戳+过期时间 表示已经过期
          var sumTimestamp = parseInt(oldTimestamp) + time;
          // console.log('nowTimestamp > sumTimestamp:', nowTimestamp > sumTimestamp);
          if (nowTimestamp > sumTimestamp) {
            ElementUi.Message.error('登录已超过7天，请重新登录！！！！');
            // alert('登录已超过7天，请重新登录！！！！')
            localStorage.clear()
            if (to.path == '/index' || to.path == '/register' || to.path == '/resetpassword' || to.path == '/sign-in') {
              next()
            } else {
              next('/sign-in')
            }
          } else {
            next()
          }
        } else {
          ElementUi.Message.error(res.data.message);
          // alert(res.data.message)
          localStorage.clear()
          if (to.path == '/index' || to.path == '/register' || to.path == '/resetpassword' || to.path == '/sign-in') {
            next()
          } else {
            next('/sign-in')
          }
        }
      })

    } else {
      if (to.path == '/index' || to.path == '/register' || to.path == '/resetpassword' || to.path == '/sign-in') {
        next()
      } else {
        next('/sign-in')
      }
    }
  }

}) */
//#endregion

export default router
