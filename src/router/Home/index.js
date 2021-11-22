export default {
    path: "/home",
    name: "home",
    redirect:"/home/page1",
    component: () => import(/* webpackChunkName: "register" */ '@/views/Home/Home.vue'),
    children: [
        {
            path: "page1",
            name: "page1",
            component: () => import(/* webpackChunkName: "page1" */ '@/views/Home/page1.vue'),
        }
    ]
}