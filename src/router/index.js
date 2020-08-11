import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Test from '@/components/Test'
import Member from '@/components/Member'
import Shop from '@/components/Shop'
import Mine from '@/components/Mine'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/member',
      name: 'Member',
      component: Member
    },
    {
      path: '/shop',
      name: 'Shop',
      component: Shop
    },{
      path: '/mine',
      name: 'Mine',
      component: Mine
    },
    {
      path: '/test',
      name: 'Test',
      component: Test,
    }
  ]
})
