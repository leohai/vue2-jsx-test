import Vue from 'vue'
import Router from 'vue-router'
import staticComponent from '@/components/staticComponent'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'staticComponent',
      component: staticComponent
    }
  ]
})
