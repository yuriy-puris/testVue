import Vue from 'vue'
import Router from 'vue-router'
import SignUp from '@/components/SignUp'
Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'SignUp',
      component: SignUp
    }
  ]
})
