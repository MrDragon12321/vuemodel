export default {
    SET_USERINFO(state, userinfo) {//存放用户信息
        state.user_info = userinfo
    },
    ADD_VISITED_VIEWS(state, view) {//打开新标签页---.添加需展示的路由数据的方法
        let have = state.visitedviews.some((val, ind) => {//判断原标签里面是否含有
            return val.path === view.path
        })
        if (!have && view.path != '/welcome') {
            if (state.visitedviews.length >7) {
                state.visitedviews.shift()
            }
            state.visitedviews.push({
                path: view.path,
                name: view.name,
            })
        }
    },
    DEL_VISITED_VIEWS: (state, view) => {//关闭页签--删除路由数据的方法
        for (let [i, v] of state.visitedviews.entries()) {
            if (v.path == view.path) {
                state.visitedviews.splice(i, 1)
                break
            }
        }

    },
    CLEAR_VIEWS: (state) => {
        state.visitedviews = []
    }
}