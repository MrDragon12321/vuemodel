export default {
    path: '/signin',
    name: 'signin',
    component: () => import(/* webpackChunkName: "sign-in" */ '@/views/SignIn/SignIn1.vue'),
}