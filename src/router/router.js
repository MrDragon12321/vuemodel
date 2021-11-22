import signIn from './SignIn/index'
import register from './Register/index'
import home from './Home/index'

export default [
    {
        path: '/',
        redirect: 'signin'
	},
    signIn,
    register,
	home
]