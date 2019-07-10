import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import demo from 'E:/projVue/src/views/demo.vue'
import demo2 from 'E:/projVue/src/views/demo2.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/demo',
      name: 'demo',
      component: demo
    },
    {
      path: '/demo2',
      name: 'demo2',
      component: demo2
    },
  ]
})
