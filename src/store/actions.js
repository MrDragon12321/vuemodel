//调用这里去触发mutations，如何调用？在组件内使用this.$store.dispatch('action中对应名字', 参数)


export default {
    addUserInfo({ commit }, userinfo) {
        commit("SET_USERINFO", userinfo)
    },
    addVisitedViews({ commit }, view) {//通过解构赋值得到commit方法
        commit('ADD_VISITED_VIEWS', view)//去触发ADD_VISITED_VIEWS，并传入参数
    },
    delVisitedViews(context, view) {//删除数组存放的路由之后，需要再去刷新路由，这是一个异步的过程，需要有回掉函数，所以使用并返回promise对象，也可以让组件在调用的时候接着使用.then的方法
        return new Promise((resolve) => {//resolve方法：未来成功后回掉的方法
            context.commit('DEL_VISITED_VIEWS', view);
            resolve([...context.state.visitedviews]);
        })
    },
    clearViews({ commit }) {//退出登录清空标签数组
        commit('CLEAR_VIEWS')
    }
}