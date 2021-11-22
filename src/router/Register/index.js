export default {
    path: '/register',
    name: "register",
    component: () => import(/* webpackChunkName: "register" */ '@/views/Register/Register.vue'),
}