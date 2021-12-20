export default {
    path: "/home",
    name: "home",
    redirect:'/welcome',
    component: () => import(/* webpackChunkName: "register" */ '@/views/Home/Nav/HomeLeftNav.vue'),
    children: [
        {
            path:"/welcome",
            name:"首页",
            leaf:true,
            value:12,
            component:() => import(/* webpackChunkName: "register" */ '@/views/Home/Welcome.vue'),
        },
        {
            path: "/nav1",
            name: "导航一",
            leaf: false,//多个节点
            redirect:"/page11",
            component: () => import(/* webpackChunkName: "page1" */ '@/views/Home/Page1'),
            children: [
                {
                    path: "/page11",
                    name: "页面一",
                    value:'',
                    component: () => import(/* webpackChunkName: "page1" */ '@/views/Home/Page1/Page11.vue'),
                },{
                    path: "/page12",
                    name: "页面二",
                    value:100,
                    component: () => import(/* webpackChunkName: "page1" */ '@/views/Home/Page1/Page12.vue'),
                },{
                    path: "/page13",
                    name: "页面三",
                    value:'',
                    component: () => import(/* webpackChunkName: "page1" */ '@/views/Home/Page1/Page13.vue'),
                }
            ]
        },
        {
            path: "/nav2",
            name: "导航二",
            leaf:true,//无节点
            value:'',
            component: () => import(/* webpackChunkName: "page1" */ '@/views/Home/Page2/Page21.vue'),
        },
        {
            path: "/nav3",
            name: "导航三",
            leaf: false,//多个节点
            redirect:"/page31",
            component: () => import(/* webpackChunkName: "page1" */ '@/views/Home/Page1'),
            children: [
                {
                    path: "/page31",
                    name: "页面31",
                    value:'',
                    component: () => import(/* webpackChunkName: "page1" */ '@/views/Home/Page1/Page11.vue'),
                },{
                    path: "/page32",
                    name: "页面32",
                    value:'',
                    component: () => import(/* webpackChunkName: "page1" */ '@/views/Home/Page1/Page12.vue'),
                },{
                    path: "/page33",
                    name: "页面33",
                    value:123,
                    component: () => import(/* webpackChunkName: "page1" */ '@/views/Home/Page1/Page13.vue'),
                }
            ]
        },
    ]
}